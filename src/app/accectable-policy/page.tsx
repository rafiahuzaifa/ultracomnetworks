// src/app/legal/acceptable-use-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Read Ultracom Networks' Acceptable Use Policy outlining the rules and responsibilities for customers using our internet, network, and IT services.",
  alternates: { canonical: "/accectable-policy" },
  openGraph: {
    title: "Acceptable Use Policy",
    description: "Read Ultracom Networks' Acceptable Use Policy outlining the rules and responsibilities for customers using our internet, network, and IT services.",
  },
};

export default function AcceptableUsePolicy() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-5xl font-bold text-slate-800 mb-8">Acceptable Use Policy</h1>
        <p className="text-gray-600 mb-8">Effective: November 18, 2025</p>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Prohibited Activities</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Illegal content or activity</li>
            <li>Spamming or phishing</li>
            <li>DDoS attacks or unauthorized access</li>
            <li>Excessive bandwidth abuse</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Enforcement</h2>
          <p>Violations may result in suspension or termination without refund.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Contact</h2>
          <p>Report abuse: <a href="mailto:abuse@ultracomnetworks.pk" className="text-blue-600">abuse@ultracomnetworks.pk</a></p>
        </section>
      </div>
    </div>
  );
}