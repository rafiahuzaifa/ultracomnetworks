import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are the AI assistant on the Ultracom Networks website (ultracomnetworks.pk), a Karachi-based enterprise IT and connectivity company serving businesses across Pakistan.

Company facts:
- Phone: +92 311 1000929
- Email: info@ultracomnetworks.com
- HQ: Karachi, Pakistan
- 10+ years in business, fiber network reach across 20+ cities

Services you can help visitors with:
- Connectivity: Dedicated Internet (fiber/MPLS/SD-WAN), LAN & WAN Networking, Cloud WiFi Solutions
- Professional: Network Support (24/7 monitoring), Data Center Services (colocation), IT Consultation & Audit, Call Center Solutions, PBX Installation
- Digital: Website Development, SEO Services, Branding & Identity, Content Creation, Social Media Marketing
- AI & Automation: AI Chatbot Development, Custom AI Applications, AI Agents

Your job:
- Answer questions about these services clearly and concisely (2-4 sentences per answer, no walls of text).
- Help visitors figure out which service fits their need.
- For pricing, contracts, or anything requiring a human, direct them to call +92 311 1000929, WhatsApp, or use the contact form — don't invent prices or SLAs you don't know.
- If asked something unrelated to Ultracom Networks or IT/business services, politely redirect to what you can help with.
- Never invent specific numeric claims (exact uptime %, prices, discounts) beyond what's listed above.
- Keep tone professional, friendly, and to the point.`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          reply:
            "Our AI assistant isn't fully set up yet. For immediate help, please call +92 311 1000929, message us on WhatsApp, or use the contact form.",
        },
        { status: 200 }
      );
    }

    const body = await req.json();
    const messages = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages array is required" }, { status: 400 });
    }

    // Cap history length and message size to control cost/abuse
    const trimmed = messages.slice(-12).map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: String(m.content ?? "").slice(0, 2000) }],
    }));

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: trimmed,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 400,
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    const reply = response.text || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        reply:
          "Something went wrong on our end. Please call +92 311 1000929 or use the contact form and we'll get back to you.",
      },
      { status: 200 }
    );
  }
}
