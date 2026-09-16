import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Custom AI Applications",
  description: "Intelligent AI applications built to automate complex workflows and extract, process, and act on business data.",
  alternates: { canonical: "/services/ai-applications" },
  openGraph: {
    title: "Custom AI Applications",
    description: "Intelligent AI applications built to automate complex workflows and extract, process, and act on business data.",
  },
};

export default function Page() {
  return <PageClient />;
}
