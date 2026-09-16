import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Our Location",
  description: "Visit Ultracom Networks' head office in Karachi, Pakistan — find our address, directions, and contact details.",
  alternates: { canonical: "/our-location" },
  openGraph: {
    title: "Our Location",
    description: "Visit Ultracom Networks' head office in Karachi, Pakistan — find our address, directions, and contact details.",
  },
};

export default function Page() {
  return <PageClient />;
}
