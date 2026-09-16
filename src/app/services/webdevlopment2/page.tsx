import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Website Development Services",
  description: "Professional, modern, fast, and secure websites engineered to deliver measurable business results.",
  alternates: { canonical: "/services/webdevlopment2" },
  openGraph: {
    title: "Website Development Services",
    description: "Professional, modern, fast, and secure websites engineered to deliver measurable business results.",
  },
};

export default function Page() {
  return <PageClient />;
}
