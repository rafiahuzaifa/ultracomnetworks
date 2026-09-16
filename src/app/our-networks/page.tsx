import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Our Network",
  description: "Explore Ultracom Networks' fiber backbone spanning 20+ cities across Pakistan, built for redundancy, security, and nationwide reach.",
  alternates: { canonical: "/our-networks" },
  openGraph: {
    title: "Our Network",
    description: "Explore Ultracom Networks' fiber backbone spanning 20+ cities across Pakistan, built for redundancy, security, and nationwide reach.",
  },
};

export default function Page() {
  return <PageClient />;
}
