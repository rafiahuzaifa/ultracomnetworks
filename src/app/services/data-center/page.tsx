import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Data Center & Colocation Services",
  description: "Reliable, secure colocation infrastructure with high-performance power, cooling, and security for your critical applications.",
  alternates: { canonical: "/services/data-center" },
  openGraph: {
    title: "Data Center & Colocation Services",
    description: "Reliable, secure colocation infrastructure with high-performance power, cooling, and security for your critical applications.",
  },
};

export default function Page() {
  return <PageClient />;
}
