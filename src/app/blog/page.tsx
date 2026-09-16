import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on IT infrastructure, web development, SEO, branding, and digital marketing from the Ultracom Networks team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog",
    description: "Insights on IT infrastructure, web development, SEO, branding, and digital marketing from the Ultracom Networks team.",
  },
};

export default function Page() {
  return <PageClient />;
}
