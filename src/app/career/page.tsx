import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Ultracom Networks and help build Pakistan's digital future. Explore current job openings in engineering, sales, and support.",
  alternates: { canonical: "/career" },
  openGraph: {
    title: "Careers",
    description: "Join Ultracom Networks and help build Pakistan's digital future. Explore current job openings in engineering, sales, and support.",
  },
};

export default function Page() {
  return <PageClient />;
}
