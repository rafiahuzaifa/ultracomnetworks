/**
 * Unified email sender. Prefers Resend (reliable from serverless/Vercel -
 * cPanel/shared-hosting SMTP servers frequently block or time out
 * connections from cloud provider IP ranges, which is exactly what was
 * breaking form submissions in production). Falls back to the existing
 * SMTP transporter if RESEND_API_KEY isn't set yet, so nothing regresses
 * before that's configured.
 *
 * To activate Resend:
 *   1. Create a free account at resend.com
 *   2. Verify your sending domain (adds a few DNS records)
 *   3. Set RESEND_API_KEY and RESEND_FROM_EMAIL in .env.local / Vercel
 */
import { Resend } from "resend";
import nodemailer from "nodemailer";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const smtpTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "mail.ultracomnetworks.pk",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "sales@ultracomnetworks.pk",
    pass: process.env.EMAIL_PASS || "",
  },
  tls: { rejectUnauthorized: false },
  connectionTimeout: 60000,
  greetingTimeout: 30000,
  socketTimeout: 60000,
});

export type EmailAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

export type SendEmailParams = {
  fromName: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  attachments?: EmailAttachment[];
};

export async function sendEmail(params: SendEmailParams): Promise<{ id?: string }> {
  if (resend) {
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const { data, error } = await resend.emails.send({
      from: `${params.fromName} <${fromEmail}>`,
      to: params.to,
      replyTo: params.replyTo,
      subject: params.subject,
      html: params.html,
      attachments: params.attachments?.map((a) => ({
        filename: a.filename,
        content: a.content,
      })),
    });

    if (error) throw new Error(`Resend error: ${error.message}`);
    return { id: data?.id };
  }

  // Fallback: existing SMTP path
  const result = await smtpTransporter.sendMail({
    from: `"${params.fromName}" <${process.env.EMAIL_USER}>`,
    to: params.to,
    replyTo: params.replyTo,
    subject: params.subject,
    html: params.html,
    attachments: params.attachments,
  });
  return { id: result.messageId };
}
