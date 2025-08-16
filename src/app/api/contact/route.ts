import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the form data (in production, you would send this to your email service)
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      company: body.company || "Not provided",
      whatsapp: body.whatsapp || "Not provided", 
      message: body.message,
      source: body.source || "website",
      timestamp: new Date().toISOString()
    });

    // For demo purposes, we'll just return success
    // In production, you would:
    // 1. Save to database
    // 2. Send email notification using service like Resend, SendGrid, etc.
    // 3. Send auto-reply to customer

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully! We'll get back to you within 24 hours."
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}