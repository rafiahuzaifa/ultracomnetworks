import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AI-Powered Chatbots",
  description: "Custom AI chatbots for customer support, sales automation, and lead generation, tailored to your business.",
  alternates: { canonical: "/services/ai-chatbot" },
  openGraph: {
    title: "AI-Powered Chatbots",
    description: "Custom AI chatbots for customer support, sales automation, and lead generation, tailored to your business.",
  },
};

export default function Page() {
  return <PageClient />;
}
