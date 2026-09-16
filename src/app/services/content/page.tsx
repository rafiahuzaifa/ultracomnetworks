import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Content Creation Services",
  description: "High-quality, SEO-friendly content for websites, social media, and marketing campaigns that engages and converts.",
  alternates: { canonical: "/services/content" },
  openGraph: {
    title: "Content Creation Services",
    description: "High-quality, SEO-friendly content for websites, social media, and marketing campaigns that engages and converts.",
  },
};

export default function Page() {
  return <PageClient />;
}
