import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is not set");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  source: string;
  country: string;
  productSlug?: string;
  category?: string;
  referrer: string;
}

export async function sendLeadNotificationEmail(data: EmailData) {
  const emailContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Lead from ARZIR</title>
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; margin: 0; padding: 20px;">
      <div style="max-width: 650px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%); padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">
            🔔 New Lead from ARZIR Website
          </h1>
          <p style="color: #E5E7EB; margin: 8px 0 0 0; font-size: 14px;">
            ${data.country !== 'Unknown' ? `From: ${data.country}` : 'Website Contact Form'}
          </p>
        </div>

        <!-- Content -->
        <div style="padding: 20px;">
          
          <!-- Contact Information -->
          <div style="margin-bottom: 20px; background: #F8FAFC; padding: 16px; border-radius: 8px; border-left: 4px solid #1E40AF;">
            <h3 style="color: #1E293B; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">
              👤 Contact Information
            </h3>
            <div style="display: grid; gap: 6px; font-size: 14px;">
              <div><strong>Name:</strong> ${data.name}</div>
              <div><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #1E40AF; word-break: break-all;">${data.email}</a></div>
              ${data.company ? `<div><strong>Company:</strong> ${data.company}</div>` : ''}
              ${data.phone ? `<div><strong>WhatsApp:</strong> ${data.phone}</div>` : ''}
              <div><strong>Country:</strong> ${data.country}</div>
            </div>
          </div>
          
          <!-- Message -->
          <div style="margin-bottom: 20px; background: white; padding: 16px; border-radius: 8px; border: 1px solid #E2E8F0;">
            <h3 style="color: #1E293B; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">
              💬 Message
            </h3>
            <div style="background: #F8FAFC; padding: 12px; border-radius: 6px; border-left: 4px solid #1E40AF;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; word-break: break-word;">${data.message}</p>
            </div>
          </div>
          
          <!-- Technical Details -->
          <div style="margin-bottom: 20px; background: #F1F5F9; padding: 16px; border-radius: 8px;">
            <h3 style="color: #1E293B; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">
              🔍 Technical Details
            </h3>
            <div style="display: grid; gap: 6px; font-size: 13px;">
              ${data.productSlug ? `<div><strong>Product Interest:</strong> <span style="color: #1E40AF; font-weight: 600;">${data.productSlug}</span></div>` : ''}
              <div><strong>Source Page:</strong> <a href="${data.referrer}" style="color: #1E40AF; word-break: break-all;">${data.referrer}</a></div>
              <div><strong>Timestamp:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })} (Beijing Time)</div>
            </div>
          </div>
          
          <!-- Action Required -->
          <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 16px; border-radius: 8px; text-align: center; border: 1px solid #F59E0B;">
            <h3 style="color: #92400E; margin: 0 0 6px 0; font-size: 16px; font-weight: 700;">
              ⚡ Action Required
            </h3>
            <p style="color: #92400E; margin: 0; font-size: 13px;">
              Please respond within 24 hours
            </p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #F8FAFC; padding: 12px 20px; text-align: center; border-radius: 0 0 12px 12px; border-top: 1px solid #E2E8F0;">
          <span style="background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%); color: #ffffff; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 700;">
            ARZIR - Leading Industrial Equipment Manufacturer
          </span>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const result = await resend.emails.send({
      from: 'ARZIR Website <noreply@harsle.com>',
      to: ['info@arzir.com'], // Primary sales email
      subject: 'New Inquiry from ARZIR Website',
      html: emailContent,
      replyTo: data.email,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: error };
  }
}