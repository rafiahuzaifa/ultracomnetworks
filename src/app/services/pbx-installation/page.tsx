import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "PBX Installation Services",
  description: "Professional IP PBX system installation, configuration, and staff training for reliable business communications.",
  alternates: { canonical: "/services/pbx-installation" },
  openGraph: {
    title: "PBX Installation Services",
    description: "Professional IP PBX system installation, configuration, and staff training for reliable business communications.",
  },
};

export default function Page() {
  return <PageClient />;
}
