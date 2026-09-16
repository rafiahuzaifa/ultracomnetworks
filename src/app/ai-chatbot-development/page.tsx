import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AI Chatbot Development & Automation",
  description: "Custom AI chatbot development for customer support, sales, lead generation, and booking — integrated with WhatsApp, web, social media, and your CRM.",
  alternates: { canonical: "/ai-chatbot-development" },
  openGraph: {
    title: "AI Chatbot Development & Automation",
    description: "Custom AI chatbot development for customer support, sales, lead generation, and booking — integrated with WhatsApp, web, social media, and your CRM.",
  },
};

export default function Page() {
  return <PageClient />;
}
