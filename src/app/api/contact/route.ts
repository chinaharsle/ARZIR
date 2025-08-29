import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient, createAdminClient } from "@/lib/supabase/server";

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

    // Get additional request info
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const referer = request.headers.get('referer') || 'Direct access';
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor?.split(',')[0] || realIp || 'Unknown';

    // Get country from IP address
    let country = 'Unknown';
    let city = 'Unknown';
    let timezone = 'Unknown';
    try {
      if (clientIp !== 'Unknown' && !clientIp.startsWith('127.') && !clientIp.startsWith('192.168.')) {
        const geoResponse = await fetch(`http://ip-api.com/json/${clientIp}?fields=status,message,country,city,timezone,query`);
        const geoData = await geoResponse.json();
        if (geoData.status === 'success') {
          country = geoData.country;
          city = geoData.city;
          timezone = geoData.timezone;
        }
      }
    } catch (error) {
      console.error('Failed to get location from IP:', error);
    }

    // Log the form data
    const submissionData = {
      name: body.name,
      email: body.email,
      company: body.company || "Not provided",
      whatsapp: body.whatsapp || "Not provided", 
      message: body.message,
      source: body.source || "website",
      pageUrl: referer,
      clientIp: clientIp,
      country: country,
      city: city,
      timezone: timezone,
      userAgent: userAgent,
      timestamp: new Date().toISOString()
    };

    console.log("Contact form submission:", submissionData);

    // Save inquiry to Supabase database - use admin client to bypass RLS
    console.log('Attempting to save lead to database...');
    console.log('Database URL exists:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Service role key exists:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
    
    // Try admin client first for elevated permissions
    let supabase = await createAdminClient();
    
    try {
      const { data: leadData, error: leadError } = await supabase
        .from('leads')
        .insert({
          source: body.source || 'website',
          utm_source: referer,
          referrer: referer,
          name: body.name,
          company: body.company || null,
          email: body.email,
          phone: body.whatsapp || null,
          whatsapp: body.whatsapp || null,
          message: body.message,
          product_slug: body.productSlug || null,
          category: body.category || null,
          country: country,
          priority: 'medium', // Default priority
          status: 'new', // Default status
          ip: clientIp,
          meta: {
            userAgent: userAgent,
            referer: referer,
            source: body.source || 'website',
            city: city,
            timezone: timezone,
            geoLocation: {
              country: country,
              city: city,
              timezone: timezone
            }
          }
        })
        .select()
        .single();

      if (leadError) {
        console.error('Error saving lead to database with admin client:', leadError);
        
        // Try with regular client as fallback
        console.log('Retrying with regular client...');
        supabase = await createClient();
        
        const { data: leadData2, error: leadError2 } = await supabase
          .from('leads')
          .insert({
            source: body.source || 'website',
            utm_source: referer,
            name: body.name,
            company: body.company || null,
            email: body.email,
            phone: body.whatsapp || null,
            whatsapp: body.whatsapp || null,
            message: body.message,
            product_slug: body.productSlug || null,
            category: body.category || null,
            priority: 'medium',
            status: 'new',
            ip: clientIp,
            meta: {
              userAgent: userAgent,
              referer: referer,
              source: body.source || 'website'
            }
          })
          .select()
          .single();
        
        if (leadError2) {
          console.error('Error saving lead to database with regular client:', leadError2);
          // Don't fail the entire request if database save fails
        } else {
          console.log('Lead saved to database with regular client:', leadData2);
        }
      } else {
        console.log('Lead saved to database with admin client:', leadData);
      }
    } catch (dbError) {
      console.error('Database error:', dbError);
      // Don't fail the entire request if database fails
    }

    // Send email notification using Resend (only if configured)
    if (resend) {
      try {
        console.log("Attempting to send emails via Resend...");
        console.log("Resend API Key exists:", !!process.env.RESEND_API_KEY);
        console.log("Notification email target:", process.env.NOTIFICATION_EMAIL || 'info@arzir.com');
        
        // Send notification email to admin
        const adminEmailResult = await resend.emails.send({
          from: 'ARZIR Website <noreply@harsle.com>',
          to: [process.env.NOTIFICATION_EMAIL || 'info@arzir.com'],
          subject: 'New Inquiry From ARZIR',
          html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Inquiry From ARZIR</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
              <div style="max-width: 680px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%); padding: 32px 20px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                    ${body.type === 'quote_request' ? 'Quote Request' : 'New Inquiry'}
                  </h1>
                  <p style="color: #E5E7EB; margin: 12px 0 0 0; font-size: 16px; opacity: 0.9;">
                    Industrial Recycling & Metal Processing Equipment
                  </p>
                  ${country !== 'Unknown' ? `
                  <div style="margin-top: 16px; display: inline-block; background: rgba(255,255,255,0.15); padding: 8px 16px; border-radius: 25px; color: white; font-size: 14px; font-weight: 500;">
                    🌍 From: ${city !== 'Unknown' ? city + ', ' : ''}${country}
                  </div>
                  ` : ''}
                </div>

                <!-- Priority Alert -->
                <div style="background: linear-gradient(90deg, #FEF3C7 0%, #FDE68A 100%); border-left: 4px solid #F59E0B; padding: 16px 20px; margin: 0;">
                  <div style="display: flex; align-items: center; justify-content: center;">
                    <span style="color: #D97706; font-weight: 700; font-size: 15px; text-align: center;">
                      ⚡ HIGH PRIORITY - Immediate Response Required
                    </span>
                  </div>
                </div>

                <!-- Main Content -->
                <div style="padding: 20px;">
                  
                  <!-- Customer Information -->
                  <div style="background: linear-gradient(145deg, #F8FAFC 0%, #F1F5F9 100%); border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h2 style="color: #1E293B; margin: 0 0 16px 0; font-size: 20px; font-weight: 700; border-bottom: 3px solid #1E40AF; padding-bottom: 8px; display: flex; align-items: center;">
                      <span style="margin-right: 8px;">👤</span> Customer Information
                    </h2>
                    
                    <div style="display: grid; gap: 12px;">
                      <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 8px; border: 1px solid #E2E8F0;">
                        <span style="font-weight: 700; color: #374151; width: 110px; flex-shrink: 0; font-size: 14px;">👤 Name:</span>
                        <span style="color: #111827; font-weight: 600; font-size: 15px; word-break: break-word;">${body.name}</span>
                      </div>
                      
                      <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 8px; border: 1px solid #E2E8F0;">
                        <span style="font-weight: 700; color: #374151; width: 110px; flex-shrink: 0; font-size: 14px;">📧 Email:</span>
                        <a href="mailto:${body.email}" style="color: #1E40AF; text-decoration: none; font-weight: 600; font-size: 15px; word-break: break-all;">${body.email}</a>
                      </div>
                      
                      <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 8px; border: 1px solid #E2E8F0;">
                        <span style="font-weight: 700; color: #374151; width: 110px; flex-shrink: 0; font-size: 14px;">🏢 Company:</span>
                        <span style="color: #111827; font-size: 15px; word-break: break-word;">${body.company || 'Not provided'}</span>
                      </div>
                      
                      <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 8px; border: 1px solid #E2E8F0;">
                        <span style="font-weight: 700; color: #374151; width: 110px; flex-shrink: 0; font-size: 14px;">📱 WhatsApp:</span>
                        <span style="color: #111827; font-size: 15px; word-break: break-word;">${body.whatsapp || 'Not provided'}</span>
                      </div>
                      
                      <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 8px; border: 1px solid #E2E8F0;">
                        <span style="font-weight: 700; color: #374151; width: 110px; flex-shrink: 0; font-size: 14px;">🌍 Country:</span>
                        <span style="color: #111827; font-size: 15px; word-break: break-word;">${country !== 'Unknown' ? (city !== 'Unknown' ? city + ', ' : '') + country : 'Not detected'}</span>
                      </div>
                      
                      ${body.productSlug ? `
                      <div style="display: flex; align-items: center; padding: 12px; background: linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%); border-radius: 8px; border: 1px solid #3B82F6;">
                        <span style="font-weight: 700; color: #1E40AF; width: 110px; flex-shrink: 0; font-size: 14px;">🛠️ Product:</span>
                        <span style="color: #1E40AF; font-weight: 700; font-size: 15px; background: white; padding: 4px 8px; border-radius: 12px; word-break: break-word;">${body.productSlug}</span>
                      </div>
                      ` : ''}
                    </div>
                  </div>

                  <!-- Message Content -->
                  <div style="background: white; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h2 style="color: #1E293B; margin: 0 0 16px 0; font-size: 20px; font-weight: 700; border-bottom: 3px solid #1E40AF; padding-bottom: 8px; display: flex; align-items: center;">
                      <span style="margin-right: 8px;">💬</span> Customer Message
                    </h2>
                    <div style="background: linear-gradient(145deg, #F8FAFC 0%, #F1F5F9 100%); padding: 16px; border-radius: 8px; border-left: 4px solid #1E40AF;">
                      <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap; font-size: 15px; font-weight: 500; word-break: break-word;">${body.message}</p>
                    </div>
                  </div>

                  <!-- Next Steps -->
                  <div style="background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%); border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 20px;">
                    <h3 style="color: #ffffff; margin: 0 0 16px 0; font-size: 20px; font-weight: 700;">
                      🎯 Next Steps
                    </h3>
                    <div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                      <div style="display: grid; gap: 8px; text-align: left; color: white;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <span style="background: rgba(255,255,255,0.2); width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px;">1</span>
                          <span style="font-size: 13px;">Respond within 2 hours</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <span style="background: rgba(255,255,255,0.2); width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px;">2</span>
                          <span style="font-size: 13px;">Prepare product information</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <span style="background: rgba(255,255,255,0.2); width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px;">3</span>
                          <span style="font-size: 13px;">Schedule consultation call</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Footer -->
                <div style="background: linear-gradient(145deg, #F8FAFC 0%, #F1F5F9 100%); border-top: 1px solid #E2E8F0; padding: 16px 20px; text-align: center;">
                  <span style="background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%); color: #ffffff; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 700;">
                    ARZIR - Leading Industrial Equipment Manufacturer
                  </span>
                </div>
              </div>
            </body>
            </html>
          `,
        });
        
        console.log("Admin email result:", adminEmailResult);

        // Send auto-reply to customer
        const customerEmailResult = await resend.emails.send({
          from: 'ARZIR <noreply@harsle.com>',
          to: [body.email],
          subject: `Thank you for your ${body.type === 'quote_request' ? 'quote request' : 'inquiry'}, ${body.name}! We'll respond within 24 hours`,
          html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Thank You - ARZIR Industrial Equipment</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%); padding: 32px 32px; text-align: center; position: relative;">
                  <div style="position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 20px; color: white; font-size: 11px; font-weight: 600;">
                    ✓ CONFIRMED
                  </div>
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                    Thank You, ${body.name}!
                  </h1>
                  <p style="color: #E5E7EB; margin: 12px 0 0 0; font-size: 16px; opacity: 0.9;">
                    Your ${body.type === 'quote_request' ? 'quote request' : 'inquiry'} has been received
                  </p>
                </div>

                <!-- Confirmation Badge -->
                <div style="background: linear-gradient(90deg, #DCFCE7 0%, #BBF7D0 100%); border-left: 4px solid #22C55E; padding: 20px 32px; margin: 0;">
                  <div style="display: flex; align-items: center; justify-content: center;">
                    <span style="color: #15803D; font-weight: 700; font-size: 15px; text-align: center;">
                      ✅ ${body.type === 'quote_request' ? 'QUOTE REQUEST' : 'INQUIRY'} RECEIVED - We'll respond within 24 hours
                    </span>
                  </div>
                </div>

                <!-- Main Content -->
                <div style="padding: 32px;">
                  
                  <!-- Thank You Message -->
                  <div style="background: white; border: 2px solid #E2E8F0; border-radius: 16px; padding: 28px; margin-bottom: 28px; text-align: center;">
                    <h2 style="color: #1E293B; margin: 0 0 20px 0; font-size: 24px; font-weight: 700;">
                      We appreciate your interest in ARZIR!
                    </h2>
                    <p style="color: #374151; line-height: 1.7; margin: 0 0 20px 0; font-size: 16px;">
                      Thank you for reaching out about our industrial recycling and metal processing equipment. Your ${body.type === 'quote_request' ? 'quote request' : 'inquiry'} is important to us, and we're committed to providing you with the best solutions for your needs.
                    </p>
                    ${body.productSlug ? `
                    <div style="background: linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%); border: 1px solid #3B82F6; border-radius: 12px; padding: 16px; margin: 20px 0;">
                      <p style="margin: 0; color: #1E40AF; font-weight: 600; font-size: 15px;">
                        🛠️ Product of Interest: <strong>${body.productSlug}</strong>
                      </p>
                    </div>
                    ` : ''}
                  </div>

                  <!-- What Happens Next -->
                  <div style="background: linear-gradient(145deg, #F8FAFC 0%, #F1F5F9 100%); border: 1px solid #E2E8F0; border-radius: 16px; padding: 28px; margin-bottom: 28px;">
                    <h3 style="color: #1E293B; margin: 0 0 20px 0; font-size: 20px; font-weight: 700; text-align: center;">
                      🎯 What happens next?
                    </h3>
                    <div style="display: grid; gap: 16px;">
                      <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: white; border-radius: 12px; border: 1px solid #E2E8F0;">
                        <span style="background: #1E40AF; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">1</span>
                        <div>
                          <h4 style="margin: 0 0 4px 0; color: #1E293B; font-size: 16px; font-weight: 600;">Technical Review</h4>
                          <p style="margin: 0; color: #64748B; font-size: 14px; line-height: 1.5;">Our technical experts will analyze your requirements and identify the optimal solutions.</p>
                        </div>
                      </div>
                      <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: white; border-radius: 12px; border: 1px solid #E2E8F0;">
                        <span style="background: #1E40AF; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">2</span>
                        <div>
                          <h4 style="margin: 0 0 4px 0; color: #1E293B; font-size: 16px; font-weight: 600;">Customized Proposal</h4>
                          <p style="margin: 0; color: #64748B; font-size: 14px; line-height: 1.5;">We'll prepare detailed product information, specifications, and pricing tailored to your needs.</p>
                        </div>
                      </div>
                      <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: white; border-radius: 12px; border: 1px solid #E2E8F0;">
                        <span style="background: #1E40AF; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">3</span>
                        <div>
                          <h4 style="margin: 0 0 4px 0; color: #1E293B; font-size: 16px; font-weight: 600;">Personal Consultation</h4>
                          <p style="margin: 0; color: #64748B; font-size: 14px; line-height: 1.5;">Schedule a consultation call to discuss implementation details and answer any questions.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Response Timeline -->
                  <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border: 1px solid #F59E0B; border-radius: 16px; padding: 24px; margin-bottom: 28px; text-align: center;">
                    <h3 style="color: #92400E; margin: 0 0 12px 0; font-size: 18px; font-weight: 700;">
                      ⏰ Expected Response Time
                    </h3>
                    <p style="color: #92400E; margin: 0; font-size: 16px; font-weight: 600;">
                      We aim to respond within <strong>24 hours</strong> during business days
                    </p>
                    <p style="color: #A16207; margin: 8px 0 0 0; font-size: 14px;">
                      For urgent matters, please call us directly at +86-18112987553
                    </p>
                  </div>

                  <!-- Contact Information -->
                  <div style="background: white; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; margin-bottom: 20px; text-align: center;">
                    <h3 style="color: #1E293B; margin: 0 0 16px 0; font-size: 18px; font-weight: 700;">
                      📞 Need immediate assistance?
                    </h3>
                    <p style="color: #374151; margin: 0 0 16px 0; font-size: 14px; line-height: 1.6;">
                      Our team is here to help you with any questions about our industrial equipment solutions.
                    </p>
                    <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap;">
                      <span style="background: #F3F4F6; color: #374151; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                        📧 info@arzir.com
                      </span>
                      <span style="background: #F3F4F6; color: #374151; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                        🌐 www.arzir.com
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Footer -->
                <div style="background: linear-gradient(145deg, #F8FAFC 0%, #F1F5F9 100%); border-top: 2px solid #E2E8F0; padding: 24px 32px; text-align: center;">
                  <p style="color: #6B7280; font-size: 13px; margin: 0 0 12px 0; line-height: 1.6;">
                    This is an automated confirmation email from ARZIR Industrial Equipment.<br>
                    Please do not reply to this email directly.
                  </p>
                  <div style="margin-top: 16px;">
                    <span style="background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%); color: #ffffff; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 700;">
                      ARZIR - Your Partner in Industrial Solutions
                    </span>
                  </div>
                </div>
              </div>
            </body>
            </html>
          `,
        });

        console.log("Customer email result:", customerEmailResult);
        console.log("Emails sent successfully via Resend");
      } catch (emailError) {
        console.error("Email sending error:", emailError);
        // Don't fail the entire request if email fails
      }
    } else {
      console.log("Resend not configured - emails not sent");
    }

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