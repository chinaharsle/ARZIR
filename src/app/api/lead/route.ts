import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/admin";
import { leadFormSchema } from "@/lib/validators/lead";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the form data
    const validatedData = leadFormSchema.parse(body);
    
    // Get client information
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown";
    const userAgent = headersList.get("user-agent") || "unknown";
    const referrer = headersList.get("referer") || request.nextUrl.origin;
    
    // Get country from IP (placeholder - you can use a service like ipapi.co)
    let country = "Unknown";
    try {
      if (ip !== "unknown") {
        const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
        const geoData = await geoResponse.json();
        if (geoData.status === "success") {
          country = geoData.country;
        }
      }
    } catch (error) {
      console.error("Failed to get country from IP:", error);
    }
    
    // Create Supabase admin client
    const supabase = createClient();
    
    // Insert lead into database
    const { data: lead, error } = await supabase
      .from("leads")
      .insert({
        name: validatedData.name,
        company: validatedData.company,
        email: validatedData.email,
        phone: validatedData.whatsapp,
        message: validatedData.message,
        source: validatedData.source || "website",
        utm_source: validatedData.utmSource,
        utm_medium: validatedData.utmMedium,
        utm_campaign: validatedData.utmCampaign,
        referrer: referrer,
        locale: validatedData.locale || "en",
        product_slug: validatedData.productSlug,
        category: validatedData.category,
        country: country,
        priority: "normal",
        score: 3, // Default score
        status: "new",
        ip: ip,
        meta: {
          userAgent,
          source: "website_form"
        },
        tags: [],
        gdpr_consent: validatedData.gdprConsent || true,
        deleted: false
      })
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to submit inquiry" },
        { status: 500 }
      );
    }

    // Send email notification using Resend
    try {
      const { sendLeadNotificationEmail } = await import("@/lib/email/resend");
      const emailResult = await sendLeadNotificationEmail({
        name: validatedData.name,
        company: validatedData.company,
        email: validatedData.email,
        phone: validatedData.whatsapp,
        message: validatedData.message,
        source: validatedData.source || "website",
        country: country,
        productSlug: validatedData.productSlug,
        category: validatedData.category,
        referrer: referrer,
      });
      
      if (!emailResult.success) {
        console.error("Email sending failed:", emailResult.error);
        // Continue execution - don't fail the API if email fails
      }
    } catch (emailError) {
      console.error("Email service error:", emailError);
      // Continue execution - don't fail the API if email fails
    }
    
    // Revalidate relevant cache tags
    revalidateTag("leads");
    
    return NextResponse.json({
      ok: true,
      message: "Inquiry submitted successfully",
      data: { id: lead.id }
    });
    
  } catch (error) {
    console.error("API error:", error);
    
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { ok: false, error: "Invalid form data" },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}