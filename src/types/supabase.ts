/* eslint-disable @typescript-eslint/no-explicit-any */
// Generated types from Supabase (placeholder)
export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
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
          attachments?: any;
          priority: string;
          score: number;
          status: string;
          owner_id?: string;
          due_at?: string;
          last_contacted_at?: string;
          ip?: string;
          meta?: any;
          tags: string[];
          gdpr_consent: boolean;
          deleted: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          source: string;
          utm_source?: string;
          utm_medium?: string;
          utm_campaign?: string;
          referrer?: string;
          locale?: string;
          product_slug?: string;
          category?: string;
          name: string;
          company?: string;
          email: string;
          phone?: string;
          country?: string;
          message: string;
          attachments?: any;
          priority?: string;
          score?: number;
          status?: string;
          owner_id?: string;
          due_at?: string;
          last_contacted_at?: string;
          ip?: string;
          meta?: any;
          tags?: string[];
          gdpr_consent?: boolean;
          deleted?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          source?: string;
          utm_source?: string;
          utm_medium?: string;
          utm_campaign?: string;
          referrer?: string;
          locale?: string;
          product_slug?: string;
          category?: string;
          name?: string;
          company?: string;
          email?: string;
          phone?: string;
          country?: string;
          message?: string;
          attachments?: any;
          priority?: string;
          score?: number;
          status?: string;
          owner_id?: string;
          due_at?: string;
          last_contacted_at?: string;
          ip?: string;
          meta?: any;
          tags?: string[];
          gdpr_consent?: boolean;
          deleted?: boolean;
        };
      };
      // Add other tables as needed
      products: {
        Row: any;
        Insert: any;
        Update: any;
      };
      posts: {
        Row: any;
        Insert: any;
        Update: any;
      };
      applications: {
        Row: any;
        Insert: any;
        Update: any;
      };
      calculators: {
        Row: any;
        Insert: any;
        Update: any;
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}