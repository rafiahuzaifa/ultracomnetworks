import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "IT Consultation & Network Audit",
  description: "Expert IT assessment and strategic planning to build a secure, scalable technology foundation for your business.",
  alternates: { canonical: "/services/consultation" },
  openGraph: {
    title: "IT Consultation & Network Audit",
    description: "Expert IT assessment and strategic planning to build a secure, scalable technology foundation for your business.",
  },
};

export default function Page() {
  return <PageClient />;
}
