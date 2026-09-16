import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description: "Targeted social media campaigns and content strategy that grow your brand's presence and engagement online.",
  alternates: { canonical: "/services/social-media-marketing" },
  openGraph: {
    title: "Social Media Marketing",
    description: "Targeted social media campaigns and content strategy that grow your brand's presence and engagement online.",
  },
};

export default function Page() {
  return <PageClient />;
}
