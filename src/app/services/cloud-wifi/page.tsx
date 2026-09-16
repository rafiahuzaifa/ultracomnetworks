import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Cloud WiFi Solutions",
  description: "Fast, secure, and reliable enterprise wireless networking, fully managed through a centralized cloud platform.",
  alternates: { canonical: "/services/cloud-wifi" },
  openGraph: {
    title: "Cloud WiFi Solutions",
    description: "Fast, secure, and reliable enterprise wireless networking, fully managed through a centralized cloud platform.",
  },
};

export default function Page() {
  return <PageClient />;
}
