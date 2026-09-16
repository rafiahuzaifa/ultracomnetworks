import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "LAN & WAN Networking",
  description: "End-to-end network design, deployment, and optimization for campuses and multi-site business operations.",
  alternates: { canonical: "/services/lan-wan" },
  openGraph: {
    title: "LAN & WAN Networking",
    description: "End-to-end network design, deployment, and optimization for campuses and multi-site business operations.",
  },
};

export default function Page() {
  return <PageClient />;
}
