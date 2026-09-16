import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Ultracom Networks for enterprise internet, networking, or IT solutions. Call, WhatsApp, or send us a message.",
  alternates: { canonical: "/contactus" },
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with Ultracom Networks for enterprise internet, networking, or IT solutions. Call, WhatsApp, or send us a message.",
  },
};

export default function Page() {
  return <PageClient />;
}
