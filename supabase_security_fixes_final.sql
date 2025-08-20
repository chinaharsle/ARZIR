-- =============================================================================
-- ARZIR Database Security Fixes (Final)
-- =============================================================================
-- This script addresses security issues identified by Supabase database linter
-- First checks table structure, then applies appropriate policies
-- =============================================================================

-- SECTION 1: Check table structures first
-- =============================================================================

-- Check what columns exist in tables before creating policies
-- Uncomment these to check table structures manually:

/*
-- Check page_views table structure
\d public.page_views;

-- Check file_uploads table structure  
\d public.file_uploads;

-- Check lead_activities table structure
\d public.lead_activities;
*/

-- =============================================================================
-- SECTION 2: Fix function search path security (safe to run)
-- =============================================================================

-- Fix: create_admin_user function
CREATE OR REPLACE FUNCTION public.create_admin_user(
    email text,
    password text,
    user_metadata jsonb DEFAULT '{}'::jsonb
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    user_id uuid;
BEGIN
    -- Generate new user ID
    user_id := gen_random_uuid();
    
    -- Insert into auth.users with minimal required fields
    INSERT INTO auth.users (
        id,
        email,
        encrypted_password,
        email_confirmed_at,
        created_at,
        updated_at,
        raw_user_meta_data,
        aud,
        role
    ) VALUES (
        user_id,
        email,
        crypt(password, gen_salt('bf')),
        now(),
        now(),
        now(),
        user_metadata,
        'authenticated',
        'authenticated'
    );

    RETURN user_id;
EXCEPTION WHEN OTHERS THEN
    RAISE EXCEPTION 'Failed to create admin user: %', SQLERRM;
END;
$$;

-- Fix: update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

-- =============================================================================
-- SECTION 3: Enable RLS on tables (if they exist)
-- =============================================================================

-- Enable RLS on page_views table (if it exists)
DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'page_views') THEN
        ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
        RAISE NOTICE 'Enabled RLS on page_views table';
    ELSE
        RAISE NOTICE 'page_views table does not exist, skipping RLS';
    END IF;
END $$;

-- Enable RLS on file_uploads table (if it exists)
DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'file_uploads') THEN
        -- Table exists, check if RLS is already enabled
        IF NOT (SELECT rowsecurity FROM pg_tables WHERE schemaname = 'public' AND tablename = 'file_uploads') THEN
            ALTER TABLE public.file_uploads ENABLE ROW LEVEL SECURITY;
            RAISE NOTICE 'Enabled RLS on file_uploads table';
        ELSE
            RAISE NOTICE 'RLS already enabled on file_uploads table';
        END IF;
    ELSE
        RAISE NOTICE 'file_uploads table does not exist, skipping RLS';
    END IF;
END $$;

-- Enable RLS on lead_activities table (if it exists)
DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'lead_activities') THEN
        -- Table exists, check if RLS is already enabled
        IF NOT (SELECT rowsecurity FROM pg_tables WHERE schemaname = 'public' AND tablename = 'lead_activities') THEN
            ALTER TABLE public.lead_activities ENABLE ROW LEVEL SECURITY;
            RAISE NOTICE 'Enabled RLS on lead_activities table';
        ELSE
            RAISE NOTICE 'RLS already enabled on lead_activities table';
        END IF;
    ELSE
        RAISE NOTICE 'lead_activities table does not exist, skipping RLS';
    END IF;
END $$;

-- =============================================================================
-- SECTION 4: Generic policies for common table patterns
-- =============================================================================

-- Generic policy for tables with 'id' column (service role access)
DO $$
DECLARE
    table_name text;
    table_names text[] := ARRAY['page_views', 'file_uploads', 'lead_activities'];
BEGIN
    FOREACH table_name IN ARRAY table_names
    LOOP
        IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = table_names[array_position(table_names, table_name)]) THEN
            -- Create service role policy (always safe)
            EXECUTE format('
                DROP POLICY IF EXISTS "Service role full access" ON public.%I;
                CREATE POLICY "Service role full access" ON public.%I
                    TO service_role USING (true) WITH CHECK (true);
            ', table_name, table_name);
            
            RAISE NOTICE 'Created service role policy for %', table_name;
        END IF;
    END LOOP;
END $$;

-- =============================================================================
-- SECTION 5: Public read policies (for tables that should be publicly readable)
-- =============================================================================

-- If page_views should be publicly readable (analytics data)
DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'page_views') THEN
        -- Create public read policy for analytics
        DROP POLICY IF EXISTS "Public read access" ON public.page_views;
        CREATE POLICY "Public read access" ON public.page_views
            FOR SELECT TO anon, authenticated
            USING (true);
        
        RAISE NOTICE 'Created public read policy for page_views';
    END IF;
END $$;

-- =============================================================================
-- SECTION 6: Check results
-- =============================================================================

-- Display final status
DO $$
DECLARE
    table_record RECORD;
    policy_count INTEGER;
BEGIN
    RAISE NOTICE '========================================';
    RAISE NOTICE 'Database Security Status Summary';
    RAISE NOTICE '========================================';
    
    FOR table_record IN 
        SELECT tablename, rowsecurity 
        FROM pg_tables 
        WHERE schemaname = 'public' 
        ORDER BY tablename
    LOOP
        -- Count policies for this table
        SELECT COUNT(*) INTO policy_count
        FROM pg_policies 
        WHERE schemaname = 'public' AND tablename = table_record.tablename;
        
        RAISE NOTICE 'Table: % | RLS: % | Policies: %', 
            table_record.tablename, 
            CASE WHEN table_record.rowsecurity THEN 'Enabled' ELSE 'Disabled' END,
            policy_count;
    END LOOP;
    
    RAISE NOTICE '========================================';
    RAISE NOTICE 'Fixed Issues:';
    RAISE NOTICE '✓ Fixed function search paths';
    RAISE NOTICE '✓ Enabled RLS where possible';
    RAISE NOTICE '✓ Created service role policies';
    RAISE NOTICE '';
    RAISE NOTICE 'Note: spatial_ref_sys skipped (system table)';
    RAISE NOTICE '';
    RAISE NOTICE 'Manual Steps Required:';
    RAISE NOTICE '1. Review table structures and adjust policies as needed';
    RAISE NOTICE '2. In Supabase Dashboard → Auth → Settings:';
    RAISE NOTICE '   - Set OTP expiry to < 1 hour';
    RAISE NOTICE '   - Enable leaked password protection';
    RAISE NOTICE '';
    RAISE NOTICE 'Security Status: IMPROVED ✓';
END $$;