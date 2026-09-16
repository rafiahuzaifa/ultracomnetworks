import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "24/7 IT Network Support",
  description: "Proactive monitoring and rapid-response engineering that keeps your business network running smoothly around the clock.",
  alternates: { canonical: "/services/network-support" },
  openGraph: {
    title: "24/7 IT Network Support",
    description: "Proactive monitoring and rapid-response engineering that keeps your business network running smoothly around the clock.",
  },
};

export default function Page() {
  return <PageClient />;
}
