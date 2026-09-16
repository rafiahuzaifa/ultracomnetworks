import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore Ultracom Networks' full range of enterprise IT services — dedicated internet, networking, data centers, and digital solutions, backed by 24/7 local support.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services",
    description: "Explore Ultracom Networks' full range of enterprise IT services — dedicated internet, networking, data centers, and digital solutions, backed by 24/7 local support.",
  },
};

export default function Page() {
  return <PageClient />;
}
