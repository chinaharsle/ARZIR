-- ARZIR Database Schema
-- Generated for Supabase - Complete database structure for ARZIR website

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- Create custom types (only if they don't exist)
DO $$ BEGIN
    CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'proposal_sent', 'follow_up', 'closed', 'lost');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE lead_priority AS ENUM ('low', 'medium', 'high', 'urgent');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE post_status AS ENUM ('draft', 'published', 'archived');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('admin', 'editor', 'viewer');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.user_profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    full_name TEXT,
    role user_role DEFAULT 'viewer',
    avatar_url TEXT,
    department TEXT,
    is_active BOOLEAN DEFAULT TRUE
);

-- Leads/Inquiries table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    source TEXT NOT NULL DEFAULT 'website',
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    referrer TEXT,
    locale TEXT DEFAULT 'en',
    product_slug TEXT,
    category TEXT,
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    whatsapp TEXT,
    country TEXT,
    message TEXT NOT NULL,
    attachments JSONB DEFAULT '[]',
    priority lead_priority DEFAULT 'medium',
    score INTEGER DEFAULT 50 CHECK (score >= 0 AND score <= 100),
    status lead_status DEFAULT 'new',
    owner_id UUID REFERENCES public.user_profiles(id),
    due_at TIMESTAMP WITH TIME ZONE,
    last_contacted_at TIMESTAMP WITH TIME ZONE,
    ip INET,
    meta JSONB DEFAULT '{}',
    tags TEXT[] DEFAULT '{}',
    gdpr_consent BOOLEAN DEFAULT FALSE,
    deleted BOOLEAN DEFAULT FALSE
);

-- Products table
CREATE TABLE IF NOT EXISTS public.products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    subcategory TEXT,
    description TEXT,
    short_description TEXT,
    specifications JSONB DEFAULT '{}',
    features TEXT[],
    applications TEXT[],
    images TEXT[],
    brochure_url TEXT,
    video_url TEXT,
    price_range TEXT,
    lead_time TEXT,
    weight_range TEXT,
    power_requirements TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    seo_title TEXT,
    seo_description TEXT,
    sort_order INTEGER DEFAULT 0
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS public.posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT,
    content TEXT,
    author_id UUID REFERENCES public.user_profiles(id),
    author_name TEXT,
    category TEXT,
    tags TEXT[],
    featured_image TEXT,
    status post_status DEFAULT 'draft',
    view_count INTEGER DEFAULT 0,
    reading_time INTEGER,
    seo_title TEXT,
    seo_description TEXT,
    is_featured BOOLEAN DEFAULT FALSE
);

-- Applications/Use cases table
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    industry TEXT,
    process_description TEXT,
    benefits TEXT[],
    recommended_products UUID[],
    case_studies JSONB DEFAULT '[]',
    images TEXT[],
    icon TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0
);

-- Calculators table
CREATE TABLE IF NOT EXISTS public.calculators (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    calculator_type TEXT NOT NULL,
    config JSONB NOT NULL DEFAULT '{}',
    formulas JSONB DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    usage_count INTEGER DEFAULT 0
);

-- Calculator usage tracking
CREATE TABLE IF NOT EXISTS public.calculator_usage (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    calculator_id UUID REFERENCES public.calculators(id) ON DELETE CASCADE,
    session_id TEXT,
    inputs JSONB,
    results JSONB,
    ip INET,
    user_agent TEXT
);

-- Lead activities/notes
CREATE TABLE IF NOT EXISTS public.lead_activities (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.user_profiles(id),
    activity_type TEXT NOT NULL, -- 'note', 'email', 'call', 'meeting', 'status_change'
    title TEXT,
    description TEXT,
    metadata JSONB DEFAULT '{}'
);

-- File uploads/attachments
CREATE TABLE IF NOT EXISTS public.file_uploads (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    filename TEXT NOT NULL,
    original_filename TEXT NOT NULL,
    file_size INTEGER,
    mime_type TEXT,
    file_path TEXT NOT NULL,
    uploaded_by UUID REFERENCES public.user_profiles(id),
    related_table TEXT, -- 'leads', 'posts', 'products'
    related_id UUID,
    is_public BOOLEAN DEFAULT FALSE
);

-- Media library for images and documents
CREATE TABLE IF NOT EXISTS public.media (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    filename TEXT NOT NULL,
    original_filename TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    mime_type TEXT NOT NULL,
    file_path TEXT NOT NULL, -- path in Supabase Storage
    storage_bucket TEXT DEFAULT 'media' NOT NULL,
    alt_text TEXT,
    caption TEXT,
    uploaded_by UUID REFERENCES public.user_profiles(id),
    width INTEGER,
    height INTEGER,
    is_public BOOLEAN DEFAULT TRUE,
    usage_count INTEGER DEFAULT 0,
    tags TEXT[] DEFAULT '{}'
);

-- Website analytics
CREATE TABLE IF NOT EXISTS public.page_views (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    path TEXT NOT NULL,
    title TEXT,
    referrer TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    country TEXT,
    device_type TEXT,
    session_id TEXT,
    ip INET
);

-- Create indexes for performance (only if they don't exist)
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_priority ON public.leads(priority);
CREATE INDEX IF NOT EXISTS idx_leads_owner_id ON public.leads(owner_id);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_company ON public.leads(company);

CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category);
CREATE INDEX IF NOT EXISTS idx_products_slug ON public.products(slug);
CREATE INDEX IF NOT EXISTS idx_products_is_active ON public.products(is_active);

CREATE INDEX IF NOT EXISTS idx_posts_status ON public.posts(status);
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON public.posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_author_id ON public.posts(author_id);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON public.posts(slug);

CREATE INDEX IF NOT EXISTS idx_calculator_usage_created_at ON public.calculator_usage(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_calculator_usage_calculator_id ON public.calculator_usage(calculator_id);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON public.page_views(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_path ON public.page_views(path);

CREATE INDEX IF NOT EXISTS idx_media_created_at ON public.media(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_media_uploaded_by ON public.media(uploaded_by);
CREATE INDEX IF NOT EXISTS idx_media_mime_type ON public.media(mime_type);
CREATE INDEX IF NOT EXISTS idx_media_is_public ON public.media(is_public);

-- Row Level Security (RLS) policies
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.calculators ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.calculator_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.file_uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- Policies for user_profiles (drop and recreate to avoid conflicts)
DROP POLICY IF EXISTS "Users can view own profile" ON public.user_profiles;
CREATE POLICY "Users can view own profile" ON public.user_profiles
    FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.user_profiles;
CREATE POLICY "Users can update own profile" ON public.user_profiles
    FOR UPDATE USING (auth.uid() = id);

-- Policies for leads (admin/editor access)
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.leads;
CREATE POLICY "Authenticated users can view leads" ON public.leads
    FOR SELECT USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Authenticated users can insert leads" ON public.leads;
CREATE POLICY "Authenticated users can insert leads" ON public.leads
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Authenticated users can update leads" ON public.leads;
CREATE POLICY "Authenticated users can update leads" ON public.leads
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Policies for products (public read, authenticated write)
DROP POLICY IF EXISTS "Anyone can view active products" ON public.products;
CREATE POLICY "Anyone can view active products" ON public.products
    FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Authenticated users can manage products" ON public.products;
CREATE POLICY "Authenticated users can manage products" ON public.products
    FOR ALL USING (auth.role() = 'authenticated');

-- Policies for posts (public read for published, authenticated write)
DROP POLICY IF EXISTS "Anyone can view published posts" ON public.posts;
CREATE POLICY "Anyone can view published posts" ON public.posts
    FOR SELECT USING (status = 'published');

DROP POLICY IF EXISTS "Authenticated users can manage posts" ON public.posts;
CREATE POLICY "Authenticated users can manage posts" ON public.posts
    FOR ALL USING (auth.role() = 'authenticated');

-- Policies for applications (public read)
DROP POLICY IF EXISTS "Anyone can view active applications" ON public.applications;
CREATE POLICY "Anyone can view active applications" ON public.applications
    FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Authenticated users can manage applications" ON public.applications;
CREATE POLICY "Authenticated users can manage applications" ON public.applications
    FOR ALL USING (auth.role() = 'authenticated');

-- Policies for calculators (public read/use)
DROP POLICY IF EXISTS "Anyone can view active calculators" ON public.calculators;
CREATE POLICY "Anyone can view active calculators" ON public.calculators
    FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Anyone can log calculator usage" ON public.calculator_usage;
CREATE POLICY "Anyone can log calculator usage" ON public.calculator_usage
    FOR INSERT WITH CHECK (true);

-- Policies for media (public read, authenticated write)
DROP POLICY IF EXISTS "Anyone can view public media" ON public.media;
CREATE POLICY "Anyone can view public media" ON public.media
    FOR SELECT USING (is_public = true);

DROP POLICY IF EXISTS "Authenticated users can manage media" ON public.media;
CREATE POLICY "Authenticated users can manage media" ON public.media
    FOR ALL USING (auth.role() = 'authenticated');

-- Functions for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at (drop and recreate to avoid conflicts)
DROP TRIGGER IF EXISTS update_user_profiles_updated_at ON public.user_profiles;
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON public.user_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_leads_updated_at ON public.leads;
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON public.leads FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_products_updated_at ON public.products;
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_posts_updated_at ON public.posts;
CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON public.posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_applications_updated_at ON public.applications;
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON public.applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_calculators_updated_at ON public.calculators;
CREATE TRIGGER update_calculators_updated_at BEFORE UPDATE ON public.calculators FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_media_updated_at ON public.media;
CREATE TRIGGER update_media_updated_at BEFORE UPDATE ON public.media FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Sample data inserts (using ON CONFLICT to avoid duplicates)
INSERT INTO public.products (slug, name, category, subcategory, description, short_description, specifications, features, applications, is_featured, is_active) VALUES
('y82-160-recycling-baler', 'Y82-160 Recycling Baler', 'Recycling Balers', 'Vertical Balers', 'High-performance vertical baler for various recyclable materials', 'Efficient 160-ton vertical baler for optimal material compression', '{"press_force": "160T", "bale_size": "1100x700mm", "power": "15kW", "cycle_time": "45s"}', ARRAY['Automatic operation', 'High compression ratio', 'Durable construction', 'Safety features'], ARRAY['Paper recycling', 'Cardboard processing', 'Plastic waste'], true, true),

('q43-2000-alligator-shear', 'Q43-2000 Alligator Shear', 'Scrap Metal Shear', 'Alligator Shears', 'Heavy-duty alligator shear for cutting various metal profiles', 'Robust 200-ton alligator shear for efficient metal cutting', '{"cutting_force": "200T", "blade_length": "600mm", "power": "18.5kW", "capacity": "50mm thickness"}', ARRAY['Sharp cutting blades', 'Hydraulic operation', 'Easy maintenance', 'High productivity'], ARRAY['Steel bar cutting', 'Rebar processing', 'Scrap metal preparation'], true, true),

('y83-6300-car-body-baler', 'Y83-6300 Car Body Baler', 'Recycling Balers', 'Car Body Balers', 'Specialized baler for processing end-of-life vehicle bodies', 'Heavy-duty 630-ton baler designed for car body compression', '{"press_force": "630T", "chamber_size": "4500x2000mm", "power": "45kW", "cycle_time": "90s"}', ARRAY['Large compression chamber', 'High-force hydraulics', 'Automated controls', 'Safety systems'], ARRAY['Automotive recycling', 'Scrap car processing', 'Metal recovery'], true, true),

('psl-4080-four-shaft-shredder', 'PSL-4080 Four-Shaft Shredder', 'Shredders', 'Four-Shaft Shredders', 'Industrial four-shaft shredder for size reduction of various materials', 'Versatile four-shaft shredder with 4080 configuration', '{"motor_power": "75kW", "rotor_diameter": "400mm", "cutting_chamber": "800x600mm", "output_size": "30-80mm"}', ARRAY['Four-shaft design', 'Variable speed control', 'Overload protection', 'Low noise operation'], ARRAY['Plastic shredding', 'Metal processing', 'Waste reduction'], true, true),

('y32-1000t-extrusion-press', 'Y32-1000T Extrusion Press', 'Aluminium Extrusion Press', 'Hydraulic Presses', 'High-capacity hydraulic press for aluminum extrusion applications', '1000-ton hydraulic press for aluminum profile extrusion', '{"press_force": "1000T", "stroke": "1000mm", "power": "75kW", "daylight": "1200mm"}', ARRAY['High precision control', 'Energy efficient', 'Robust construction', 'PLC control system'], ARRAY['Aluminum extrusion', 'Profile forming', 'Metal forming'], true, true)
ON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    updated_at = NOW();

INSERT INTO public.applications (slug, name, description, industry, process_description, benefits, is_active) VALUES
('scrap-recycling', 'Scrap Recycling', 'Comprehensive solutions for scrap metal processing and recovery', 'Metal Recycling', 'Complete workflow from collection to processed material ready for steel mills', ARRAY['85% efficiency increase', 'Reduced transportation costs', 'Higher material value', 'Environmental compliance'], true),

('automotive-dismantling', 'Automotive Dismantling', 'Specialized equipment for end-of-life vehicle processing', 'Automotive Recycling', 'Systematic dismantling and processing of vehicles for maximum material recovery', ARRAY['45% faster processing', '80% material recovery', 'Regulatory compliance', 'Automated operations'], true),

('aluminum-processing', 'Aluminum Processing', 'Advanced solutions for aluminum extrusion and processing', 'Aluminum Industry', 'Complete aluminum processing from raw material to finished profiles', ARRAY['95% material recovery', 'High precision forming', 'Energy efficiency', 'Quality consistency'], true)
ON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    updated_at = NOW();

INSERT INTO public.calculators (slug, name, description, calculator_type, config, is_active) VALUES
('bale-density', 'Bale Density Calculator', 'Calculate optimal bale density for transportation and value optimization', 'density', '{"inputs": ["material_type", "weight", "dimensions"], "outputs": ["density", "transport_efficiency", "value_premium"]}', true),

('roi-calculator', 'ROI Calculator', 'Calculate return on investment for recycling equipment', 'financial', '{"inputs": ["equipment_cost", "throughput", "material_value", "operating_costs"], "outputs": ["payback_period", "annual_savings", "roi_percentage"]}', true),

('throughput-calculator', 'Throughput Calculator', 'Estimate processing capacity and efficiency', 'production', '{"inputs": ["machine_type", "material_type", "operating_hours", "efficiency"], "outputs": ["daily_throughput", "monthly_capacity", "annual_processing"]}', true)
ON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    updated_at = NOW();

-- Sample lead data (using INSERT with conditional logic)
INSERT INTO public.leads (source, name, company, email, phone, message, product_slug, category, priority, status) 
SELECT 'website', 'David Thompson', 'Metro Recycling Co.', 'david@metrorecycling.com', '+1-555-0123', 'Interested in Y82-160 baler for our paper recycling operation. Please provide pricing and delivery information.', 'y82-160-recycling-baler', 'Recycling Balers', 'high'::lead_priority, 'new'::lead_status
WHERE NOT EXISTS (SELECT 1 FROM public.leads WHERE email = 'david@metrorecycling.com')
UNION ALL
SELECT 'website', 'Lisa Rodriguez', 'Pacific Steel Solutions', 'lisa@pacificsteel.com', '+1-555-0124', 'Looking for alligator shear to process steel bars. Need specifications and technical details.', 'q43-2000-alligator-shear', 'Scrap Metal Shear', 'medium'::lead_priority, 'contacted'::lead_status
WHERE NOT EXISTS (SELECT 1 FROM public.leads WHERE email = 'lisa@pacificsteel.com')
UNION ALL
SELECT 'website', 'James Wilson', 'Industrial Scrap Ltd', 'james@industrialscrap.com', '+1-555-0125', 'Expanding our auto recycling facility. Need quote for car body baler.', 'y83-6300-car-body-baler', 'Recycling Balers', 'high'::lead_priority, 'proposal_sent'::lead_status
WHERE NOT EXISTS (SELECT 1 FROM public.leads WHERE email = 'james@industrialscrap.com')
UNION ALL
SELECT 'quote_form', 'Maria Garcia', 'Green Metal Processing', 'maria@greenmetal.com', '+1-555-0126', 'Need four-shaft shredder for mixed material processing. What are the power requirements?', 'psl-4080-four-shaft-shredder', 'Shredders', 'medium'::lead_priority, 'follow_up'::lead_status
WHERE NOT EXISTS (SELECT 1 FROM public.leads WHERE email = 'maria@greenmetal.com')
UNION ALL
SELECT 'calculator', 'Robert Chen', 'Advanced Aluminum Corp', 'robert@advancedaluminum.com', '+1-555-0127', 'Evaluated using your ROI calculator. Interested in 1000T extrusion press. Please contact us.', 'y32-1000t-extrusion-press', 'Aluminium Extrusion Press', 'high'::lead_priority, 'new'::lead_status
WHERE NOT EXISTS (SELECT 1 FROM public.leads WHERE email = 'robert@advancedaluminum.com');

-- Sample blog posts (using INSERT with conditional logic)
INSERT INTO public.posts (slug, title, excerpt, content, author_name, category, tags, status, published_at, view_count, reading_time) 
SELECT 'steel-mill-scrap-processing-best-practices', 'Steel Mill Scrap Processing Best Practices', 'Essential practices for optimizing scrap metal processing in steel mill operations', 'Comprehensive guide covering best practices for steel mill scrap processing...', 'Engineering Team', 'Industry Best Practices', ARRAY['steel mills', 'scrap processing', 'best practices'], 'published'::post_status, '2025-08-12T10:00:00Z'::TIMESTAMP WITH TIME ZONE, 2456, 8
WHERE NOT EXISTS (SELECT 1 FROM public.posts WHERE slug = 'steel-mill-scrap-processing-best-practices')
UNION ALL
SELECT 'understanding-bale-density-transport-value', 'Understanding Bale Density: Impact on Transport and Value', 'Learn how bale density affects transportation costs and material value', 'Detailed analysis of bale density optimization and its impact on profitability...', 'Anna Thompson', 'Technical Analysis', ARRAY['bale density', 'transportation', 'cost optimization'], 'published'::post_status, '2025-08-10T10:00:00Z'::TIMESTAMP WITH TIME ZONE, 1823, 6
WHERE NOT EXISTS (SELECT 1 FROM public.posts WHERE slug = 'understanding-bale-density-transport-value')
UNION ALL
SELECT 'automotive-dismantling-equipment-solutions', 'Automotive Dismantling: Equipment Solutions for ELV Processing', 'Specialized equipment for efficient end-of-life vehicle processing', 'Complete guide to automotive dismantling equipment and processes...', 'David Kim', 'Applications', ARRAY['automotive', 'dismantling', 'ELV processing'], 'published'::post_status, '2025-08-08T10:00:00Z'::TIMESTAMP WITH TIME ZONE, 1534, 7
WHERE NOT EXISTS (SELECT 1 FROM public.posts WHERE slug = 'automotive-dismantling-equipment-solutions');

-- Grant permissions for service role
GRANT USAGE ON SCHEMA public TO service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- Grant permissions for authenticated users
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO authenticated;

-- Grant permissions for anonymous users (for public data)
GRANT USAGE ON SCHEMA public TO anon;
GRANT SELECT ON public.products TO anon;
GRANT SELECT ON public.posts TO anon;
GRANT SELECT ON public.applications TO anon;
GRANT SELECT ON public.calculators TO anon;
GRANT SELECT ON public.media TO anon; -- Allow public media viewing
GRANT INSERT ON public.leads TO anon;
GRANT INSERT ON public.calculator_usage TO anon;

-- Create admin user function
CREATE OR REPLACE FUNCTION create_admin_user()
RETURNS void AS $$
BEGIN
    -- This function should be called after creating an admin user in Supabase Auth
    -- It will set up the admin profile
    INSERT INTO public.user_profiles (id, full_name, role, is_active)
    SELECT 
        auth.uid(),
        'ARZIR Administrator', 
        'admin',
        true
    WHERE NOT EXISTS (
        SELECT 1 FROM public.user_profiles WHERE id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Comments for documentation
COMMENT ON TABLE public.leads IS 'Customer inquiries and lead management';
COMMENT ON TABLE public.products IS 'Product catalog and specifications';
COMMENT ON TABLE public.posts IS 'Blog posts and content management';
COMMENT ON TABLE public.applications IS 'Industry applications and use cases';
COMMENT ON TABLE public.calculators IS 'Interactive calculators configuration';
COMMENT ON TABLE public.user_profiles IS 'Extended user profiles for admin users';
COMMENT ON TABLE public.media IS 'Media library for images, documents and file management';

-- End of schema