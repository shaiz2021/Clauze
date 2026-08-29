import { Resend } from 'resend';
import { emailTemplates } from './supabase/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  to: string,
  templateKey: keyof typeof emailTemplates,
  data: Record<string, string> = {}
) {
  const template = emailTemplates[templateKey];
  let html = template.html;

  // Replace placeholders
  const placeholders = {
    ...data,
    SiteURL: process.env.NEXT_PUBLIC_SITE_URL || 'https://clauze.xyz',
  };

  Object.entries(placeholders).forEach(([key, value]) => {
    const regex = new RegExp(`{{ .${key} }}`, 'g');
    html = html.replace(regex, value);
  });

  try {
    const result = await resend.emails.send({
      from: 'Clauze <notifications@clauze.xyz>',
      to,
      subject: template.subject,
      html,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error(`Error sending ${templateKey} email:`, error);
    return { success: false, error };
  }
}
