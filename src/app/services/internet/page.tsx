import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Dedicated Internet & Enterprise Connectivity",
  description: "High-speed dedicated internet with fiber, MPLS, and SD-WAN connectivity built for enterprise reliability.",
  alternates: { canonical: "/services/internet" },
  openGraph: {
    title: "Dedicated Internet & Enterprise Connectivity",
    description: "High-speed dedicated internet with fiber, MPLS, and SD-WAN connectivity built for enterprise reliability.",
  },
};

export default function Page() {
  return <PageClient />;
}
