import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Ultracom Networks has spent 10+ years building Pakistan's enterprise digital backbone — learn about our story, mission, and the team behind the country's connectivity and IT transformation.",
  alternates: { canonical: "/aboutus" },
  openGraph: {
    title: "About Us",
    description: "Ultracom Networks has spent 10+ years building Pakistan's enterprise digital backbone — learn about our story, mission, and the team behind the country's connectivity and IT transformation.",
  },
};

export default function Page() {
  return <PageClient />;
}
