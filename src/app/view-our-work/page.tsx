import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Our Work & Recent Projects",
  description: "Browse Ultracom Networks' portfolio of web design, AI chatbot, and e-commerce project case studies.",
  alternates: { canonical: "/view-our-work" },
  openGraph: {
    title: "Our Work & Recent Projects",
    description: "Browse Ultracom Networks' portfolio of web design, AI chatbot, and e-commerce project case studies.",
  },
};

export default function Page() {
  return <PageClient />;
}
