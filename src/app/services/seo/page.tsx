import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "SEO Services",
  description: "Complete search engine optimization solutions designed to improve your rankings, traffic, and conversions.",
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: "SEO Services",
    description: "Complete search engine optimization solutions designed to improve your rankings, traffic, and conversions.",
  },
};

export default function Page() {
  return <PageClient />;
}
