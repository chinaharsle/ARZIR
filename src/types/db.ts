/* eslint-disable @typescript-eslint/no-explicit-any */
// Database row types (generated from Supabase or hand-written)
export interface ProductRow {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  excerpt: string;
  cover_url: string;
  gallery_urls: string[];
  specifications: Record<string, any>;
  features: string[];
  applications: string[];
  price_range?: string;
  status: "published" | "draft" | "archived";
  seo_title?: string;
  seo_description?: string;
  og_image?: string;
  priority: number;
  created_at: string;
  updated_at: string;
}

export interface PostRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body_mdx: string;
  body_html: string;
  cover_url: string;
  category: string;
  tags: string[];
  status: "published" | "draft" | "archived";
  published_at?: string;
  author_id: string;
  reading_time: number;
  word_count: number;
  seo_title?: string;
  seo_description?: string;
  og_image?: string;
  locale: string;
  created_at: string;
  updated_at: string;
}

export interface ApplicationRow {
  id: string;
  slug: string;
  name: string;
  hero_url: string;
  overview: string;
  pains: Array<{ title: string; description: string }>;
  outcomes: Array<{ title: string; description: string }>;
  workflow: Array<{ step: string; title: string; description: string }>;
  recommended_products: string[]; // product slugs
  sizing: Record<string, any>;
  kpis: Array<{ name: string; value: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  case_studies: Array<{ title: string; location: string; results: string; image_url: string }>;
  status: "published" | "draft";
  priority: number;
  created_at: string;
  updated_at: string;
}

export interface CalculatorRow {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  input_schema: Record<string, any>; // JSON schema for inputs
  calculation_logic: string; // Formula or logic description
  estimated_time: string; // e.g., "2 min"
  tags: string[];
  status: "published" | "draft";
  priority: number;
  created_at: string;
  updated_at: string;
}

export interface LeadRow {
  id: string;
  created_at: string;
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  locale: string;
  product_slug?: string;
  category?: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  message: string;
  attachments?: Array<{ url: string; filename: string; size: number }>;
  priority: "low" | "normal" | "high" | "urgent";
  score: number; // 0-5
  status: "new" | "assigned" | "in-progress" | "waiting" | "customer-late" | "qualified" | "won" | "lost" | "invalid";
  owner_id?: string;
  due_at?: string;
  last_contacted_at?: string;
  ip?: string;
  meta?: Record<string, any>;
  tags: string[];
  gdpr_consent: boolean;
  deleted: boolean;
}