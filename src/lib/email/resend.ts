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
    <h2>New Inquiry from ARZIR Website</h2>
    
    <h3>Contact Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      ${data.company ? `<li><strong>Company:</strong> ${data.company}</li>` : ''}
      ${data.phone ? `<li><strong>WhatsApp/Phone:</strong> ${data.phone}</li>` : ''}
      <li><strong>Country:</strong> ${data.country}</li>
    </ul>
    
    <h3>Inquiry Details:</h3>
    <ul>
      <li><strong>Message:</strong></li>
      <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #006EB6; margin: 10px 0;">${data.message}</p>
      <li><strong>Source:</strong> ${data.source}</li>
      ${data.productSlug ? `<li><strong>Product Interest:</strong> ${data.productSlug}</li>` : ''}
      ${data.category ? `<li><strong>Category:</strong> ${data.category}</li>` : ''}
    </ul>
    
    <h3>Technical Information:</h3>
    <ul>
      <li><strong>Source Page:</strong> ${data.referrer}</li>
      <li><strong>Timestamp:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })} (Beijing Time)</li>
    </ul>
    
    <hr style="margin: 20px 0;">
    <p style="color: #666; font-size: 12px;">
      This email was automatically generated from the ARZIR website contact form.
    </p>
  `;

  try {
    const result = await resend.emails.send({
      from: 'ARZIR Website <noreply@arzir.com>',
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