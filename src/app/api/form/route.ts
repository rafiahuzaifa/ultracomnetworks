import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { sendWhatsAppConfirmation } from "@/app/lib/whatsapp";
import { sendEmail } from "@/app/lib/email";

// HTML escape to prevent XSS in email content
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Email format validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

console.log("Email sender:", process.env.RESEND_API_KEY ? "Resend" : "SMTP (fallback)");

// --- AI lead automation (skips silently if GEMINI_API_KEY is not set) ---
const gemini = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;

async function generateLeadSummary(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}): Promise<string | null> {
  if (!gemini) return null;
  try {
    const response = await gemini.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Name: ${data.name}\nCompany: ${data.company || "N/A"}\nService interested: ${data.service || "Not specified"}\nMessage: ${data.message}`,
      config: {
        systemInstruction:
          "You triage inbound leads for Ultracom Networks, a Karachi-based enterprise IT/ISP company. Given a form submission, write a short internal note for the sales team: 1) likely service interest, 2) urgency (low/medium/high) with a one-phrase reason, 3) one suggested next step. Keep it under 4 short lines, plain text, no headers.",
        maxOutputTokens: 150,
        thinkingConfig: { thinkingBudget: 0 },
      },
    });
    return response.text || null;
  } catch (err) {
    console.error("AI lead summary error:", err);
    return null;
  }
}

async function generateAutoReply(data: {
  name: string;
  service?: string;
  message: string;
}): Promise<string | null> {
  if (!gemini) return null;
  try {
    const response = await gemini.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Customer name: ${data.name}\nService interested: ${data.service || "general inquiry"}\nTheir message: ${data.message}`,
      config: {
        systemInstruction:
          "You write brief, warm auto-reply emails on behalf of Ultracom Networks (a Karachi-based enterprise IT/ISP company) confirming receipt of a website inquiry. Reference what the person asked about in one sentence. Mention our team will follow up within 24 hours. Sign off as 'The Ultracom Networks Team'. 3-5 sentences total, plain text, no subject line, no placeholders.",
        maxOutputTokens: 200,
        thinkingConfig: { thinkingBudget: 0 },
      },
    });
    return response.text || null;
  } catch (err) {
    console.error("AI auto-reply error:", err);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    // ---------------------------
    // 1. MULTIPART FORM (Resume / Career Form)
    // ---------------------------
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();

      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const phone = formData.get("phone")?.toString() || "";
      const position = formData.get("position")?.toString() || "";
      const message = formData.get("message")?.toString() || "";
      const resume = formData.get("resume") as File | null;

      if (!name || !email || !message || !resume) {
        return NextResponse.json(
          { error: "All fields including resume are required." },
          { status: 400 }
        );
      }

      if (!isValidEmail(email)) {
        return NextResponse.json(
          { error: "Please provide a valid email address." },
          { status: 400 }
        );
      }

      if (resume.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Resume file size must be under 10MB." },
          { status: 400 }
        );
      }

      const resumeBuffer = Buffer.from(await resume.arrayBuffer());

      const resumeResult = await sendEmail({
        fromName: "Career Form",
        to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER || "sales@ultracomnetworks.pk",
        replyTo: email,
        subject: `Job Application: ${escapeHtml(name)} (${escapeHtml(position)})`,
        html: `
          <h2>Career Application</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Position:</strong> ${escapeHtml(position)}</p>
          <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
        attachments: [
          {
            filename: resume.name || "resume.pdf",
            content: resumeBuffer,
            contentType: resume.type,
          },
        ],
      });

      console.log("Career email sent to:", process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER);
      console.log("Message ID:", resumeResult.id);

      return NextResponse.json({ message: "Application sent successfully!" });
    }

    // ---------------------------
    // 2. JSON FORM (Contact / Book Now)
    // ---------------------------
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Dynamic subject for Book Now vs Contact
    const subject = service
      ? `Appointment Request: ${escapeHtml(service)} - ${escapeHtml(name)}`
      : `Website Inquiry from ${escapeHtml(name)}`;

    // AI automation: lead triage summary (for sales) + instant personalized auto-reply (for customer)
    const [leadSummary, autoReply] = await Promise.all([
      generateLeadSummary({ name, email, phone, company, service, message }),
      generateAutoReply({ name, service, message }),
    ]);

    const mailResult = await sendEmail({
      fromName: "Website Form",
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER || "sales@ultracomnetworks.pk",
      replyTo: email,
      subject,
      html: `
        <h2>${service ? "New Appointment Request" : "New Website Inquiry"}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
        <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        ${leadSummary ? `<hr><p><strong>🤖 AI Lead Summary:</strong><br>${escapeHtml(leadSummary).replace(/\n/g, "<br>")}</p>` : ""}
      `,
    });

    console.log("Email sent successfully to:", process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER);
    console.log("Message ID:", mailResult.id);

    // Send instant auto-reply to the customer, if AI generated one
    if (autoReply) {
      try {
        await sendEmail({
          fromName: "Ultracom Networks",
          to: email,
          subject: "We've received your message - Ultracom Networks",
          html: `<p>${escapeHtml(autoReply).replace(/\n/g, "<br>")}</p>`,
        });
        console.log("AI auto-reply sent to:", email);
      } catch (autoReplyErr) {
        console.error("Auto-reply send error:", autoReplyErr);
        // Don't fail the request if only the auto-reply fails - the lead is already captured above
      }
    }

    // Send WhatsApp confirmation, if a phone number was provided and WhatsApp is configured
    if (phone) {
      const sent = await sendWhatsAppConfirmation({ phone, name, topic: service || "your inquiry" });
      if (sent) console.log("WhatsApp confirmation sent to:", phone);
    }

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("Mail Error:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    });

    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        details: error.message
      },
      { status: 500 }
    );
  }
}
