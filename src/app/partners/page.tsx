import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Our Partners",
  description: "Ultracom Networks partners with global technology leaders including Cisco, MikroTik, Juniper, Dell, Fortinet, and VMware to deliver enterprise-grade solutions.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Our Partners",
    description: "Ultracom Networks partners with global technology leaders including Cisco, MikroTik, Juniper, Dell, Fortinet, and VMware to deliver enterprise-grade solutions.",
  },
};

export default function Page() {
  return <PageClient />;
}
