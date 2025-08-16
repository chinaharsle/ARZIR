/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ProductRow, PostRow, ApplicationRow, CalculatorRow } from "./db";

// DTO types for frontend consumption
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  excerpt: string;
  coverUrl: string;
  galleryUrls: string[];
  specifications: Record<string, any>;
  features: string[];
  applications: string[];
  priceRange?: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  priority: number;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  bodyMdx: string;
  bodyHtml: string;
  coverUrl: string;
  category: string;
  tags: string[];
  publishedAt?: string;
  authorId: string;
  readingTime: number;
  wordCount: number;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: string;
  slug: string;
  name: string;
  heroUrl: string;
  overview: string;
  pains: Array<{ title: string; description: string }>;
  outcomes: Array<{ title: string; description: string }>;
  workflow: Array<{ step: string; title: string; description: string }>;
  recommendedProducts: string[];
  sizing: Record<string, any>;
  kpis: Array<{ name: string; value: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  caseStudies: Array<{ title: string; location: string; results: string; imageUrl: string }>;
  priority: number;
  createdAt: string;
  updatedAt: string;
}

export interface Calculator {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  inputSchema: Record<string, any>;
  calculationLogic: string;
  estimatedTime: string;
  tags: string[];
  priority: number;
  createdAt: string;
  updatedAt: string;
}

// Category types
export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  products: Product[];
}

export interface PostCategory {
  slug: string;
  name: string;
  description: string;
  postCount: number;
}

// Lead form types
export interface LeadFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
  productSlug?: string;
  category?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
  locale?: string;
  gdprConsent: boolean;
}

// API response types
export interface ApiResponse<T = any> {
  ok: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// SEO metadata types
export interface SeoMetadata {
  title: string;
  description: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  keywords?: string[];
}

// Navigation types
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

// Breadcrumb types
export interface BreadcrumbItem {
  title: string;
  href: string;
  current?: boolean;
}