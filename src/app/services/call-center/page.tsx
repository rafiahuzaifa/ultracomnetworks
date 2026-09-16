import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Call Center Solutions",
  description: "Reliable, scalable call center and customer engagement platforms that transform your customer experience.",
  alternates: { canonical: "/services/call-center" },
  openGraph: {
    title: "Call Center Solutions",
    description: "Reliable, scalable call center and customer engagement platforms that transform your customer experience.",
  },
};

export default function Page() {
  return <PageClient />;
}
