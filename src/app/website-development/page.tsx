import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Website Design & Development Solutions",
  description: "Modern, high-performance websites built with Next.js, Tailwind, and Sanity CMS — with optional AI chatbot integration.",
  alternates: { canonical: "/website-development" },
  openGraph: {
    title: "Website Design & Development Solutions",
    description: "Modern, high-performance websites built with Next.js, Tailwind, and Sanity CMS — with optional AI chatbot integration.",
  },
};

export default function Page() {
  return <PageClient />;
}
