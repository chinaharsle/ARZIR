import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  whatsapp: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  source: z.string().optional(),
  productSlug: z.string().optional(),
  category: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  referrer: z.string().optional(),
  locale: z.string().optional(),
  gdprConsent: z.boolean().default(true),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;