import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AI Agents Development",
  description: "Autonomous AI agents that think, plan, execute, and learn to automate complex, multi-step business workflows.",
  alternates: { canonical: "/services/ai-agents" },
  openGraph: {
    title: "AI Agents Development",
    description: "Autonomous AI agents that think, plan, execute, and learn to automate complex, multi-step business workflows.",
  },
};

export default function Page() {
  return <PageClient />;
}
