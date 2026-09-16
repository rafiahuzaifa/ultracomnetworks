import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Branding & Identity",
  description: "Professional logo design and brand identity services that help your business build a memorable, story-driven presence.",
  alternates: { canonical: "/services/branding" },
  openGraph: {
    title: "Branding & Identity",
    description: "Professional logo design and brand identity services that help your business build a memorable, story-driven presence.",
  },
};

export default function Page() {
  return <PageClient />;
}
