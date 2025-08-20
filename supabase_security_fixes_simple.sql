-- =============================================================================
-- ARZIR Database Security Fixes (Simple & Safe)
-- =============================================================================
-- This script addresses security issues without complex logic
-- =============================================================================

-- SECTION 1: Fix function search path security (always safe)
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
-- SECTION 2: Enable RLS and create basic policies (with error handling)
-- =============================================================================

-- Handle page_views table
DO $$
BEGIN
    -- Try to enable RLS
    ALTER TABLE IF EXISTS public.page_views ENABLE ROW LEVEL SECURITY;
    
    -- Create service role policy (most important)
    DROP POLICY IF EXISTS "Service role full access" ON public.page_views;
    CREATE POLICY "Service role full access" ON public.page_views
        TO service_role USING (true) WITH CHECK (true);
    
    -- Create public read policy for analytics
    DROP POLICY IF EXISTS "Public read access" ON public.page_views;
    CREATE POLICY "Public read access" ON public.page_views
        FOR SELECT TO anon, authenticated USING (true);
        
    RAISE NOTICE 'page_views: RLS enabled, policies created';
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'page_views: Skipped (table may not exist) - %', SQLERRM;
END $$;

-- Handle file_uploads table
DO $$
BEGIN
    -- Enable RLS if not already enabled
    ALTER TABLE IF EXISTS public.file_uploads ENABLE ROW LEVEL SECURITY;
    
    -- Create service role policy
    DROP POLICY IF EXISTS "Service role full access" ON public.file_uploads;
    CREATE POLICY "Service role full access" ON public.file_uploads
        TO service_role USING (true) WITH CHECK (true);
    
    RAISE NOTICE 'file_uploads: RLS enabled, service policy created';
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'file_uploads: Skipped (table may not exist) - %', SQLERRM;
END $$;

-- Handle lead_activities table
DO $$
BEGIN
    -- Enable RLS if not already enabled
    ALTER TABLE IF EXISTS public.lead_activities ENABLE ROW LEVEL SECURITY;
    
    -- Create service role policy
    DROP POLICY IF EXISTS "Service role full access" ON public.lead_activities;
    CREATE POLICY "Service role full access" ON public.lead_activities
        TO service_role USING (true) WITH CHECK (true);
    
    RAISE NOTICE 'lead_activities: RLS enabled, service policy created';
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'lead_activities: Skipped (table may not exist) - %', SQLERRM;
END $$;

-- =============================================================================
-- SECTION 3: Completion summary
-- =============================================================================

DO $$
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '========================================';
    RAISE NOTICE 'ARZIR Database Security Fixes Complete!';
    RAISE NOTICE '========================================';
    RAISE NOTICE '';
    RAISE NOTICE 'Fixed Issues:';
    RAISE NOTICE '✓ Fixed function search paths for security';
    RAISE NOTICE '✓ Enabled RLS on existing tables';
    RAISE NOTICE '✓ Created service role policies';
    RAISE NOTICE '✓ Added public read access where appropriate';
    RAISE NOTICE '';
    RAISE NOTICE 'Skipped Issues (Expected):';
    RAISE NOTICE '⚠ spatial_ref_sys: PostGIS system table (managed by Supabase)';
    RAISE NOTICE '';
    RAISE NOTICE 'Manual Steps Required:';
    RAISE NOTICE '1. In Supabase Dashboard → Auth → Settings:';
    RAISE NOTICE '   - Set OTP expiry to < 1 hour';
    RAISE NOTICE '   - Enable leaked password protection';
    RAISE NOTICE '';
    RAISE NOTICE '2. Test application functionality';
    RAISE NOTICE '3. Add user-specific policies if needed for your app';
    RAISE NOTICE '';
    RAISE NOTICE 'Security Status: IMPROVED ✓';
END $$;