/**
 * Sends an automatic WhatsApp confirmation message via Meta's WhatsApp
 * Cloud API when someone submits the contact/booking form.
 *
 * Requires a Meta WhatsApp Business app with an approved message template
 * (business-initiated messages must use a pre-approved template - free-form
 * text only works if the customer messaged first). Set these in .env.local:
 *   WHATSAPP_PHONE_NUMBER_ID   - from Meta's WhatsApp API setup page
 *   WHATSAPP_ACCESS_TOKEN      - a permanent access token for the app
 *   WHATSAPP_TEMPLATE_NAME     - the approved template's name (default: "form_confirmation")
 *   WHATSAPP_TEMPLATE_LANG     - the template's language code (default: "en")
 *
 * Silently no-ops (returns false, no throw) if not configured, so the rest
 * of the form submission is never blocked by WhatsApp being unset up yet.
 */

const GRAPH_API_VERSION = "v21.0";

/** Normalizes a Pakistani phone number to E.164-without-plus (e.g. "923001234567")
 *  the format Meta's Cloud API expects in the "to" field. Returns null if the
 *  input doesn't look like a usable number. */
export function normalizePakistaniPhone(raw: string): string | null {
  const digits = raw.replace(/[^\d]/g, "");
  if (!digits) return null;

  if (digits.startsWith("92") && digits.length === 12) return digits; // already 92XXXXXXXXXX
  if (digits.startsWith("0") && digits.length === 11) return `92${digits.slice(1)}`; // 03XXXXXXXXX
  if (digits.length === 10) return `92${digits}`; // 3XXXXXXXXX
  if (digits.startsWith("92")) return digits; // best-effort, unusual length

  return null;
}

export async function sendWhatsAppConfirmation(params: {
  phone: string;
  name: string;
  topic?: string;
}): Promise<boolean> {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME || "form_confirmation";
  const templateLang = process.env.WHATSAPP_TEMPLATE_LANG || "en";

  if (!phoneNumberId || !accessToken) return false;

  const to = normalizePakistaniPhone(params.phone);
  if (!to) {
    console.warn("WhatsApp: couldn't normalize phone number, skipping:", params.phone);
    return false;
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to,
          type: "template",
          template: {
            name: templateName,
            language: { code: templateLang },
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", text: params.name },
                  { type: "text", text: params.topic || "your inquiry" },
                ],
              },
            ],
          },
        }),
      }
    );

    if (!res.ok) {
      const errBody = await res.text();
      console.error("WhatsApp API error:", res.status, errBody);
      return false;
    }

    return true;
  } catch (err) {
    console.error("WhatsApp send failed:", err);
    return false;
  }
}
