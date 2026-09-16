import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Make PKR 30K/Month with Email Marketing",
  description: "A real case study on generating consistent monthly revenue through targeted email marketing campaigns.",
  alternates: { canonical: "/blog/email-marketing" },
  openGraph: {
    title: "How We Make PKR 30K/Month with Email Marketing",
    description: "A real case study on generating consistent monthly revenue through targeted email marketing campaigns.",
  },
};

import Link from "next/link";
import Image from "next/image";



export default function EmailMarketing() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-10 inline-block font-medium">← All Articles</Link>

      <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
        <Image src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=80" alt="Email Marketing" width={1200} height={500} className="w-full h-72 object-cover" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        How We Make 30K/Month with Email Marketing (Real Case Study)
      </h1>
      <p className="text-gray-500 mb-12 text-lg">November 3, 2025 • 7 min read</p>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <p className="text-xl text-gray-700 font-medium mb-8">
          One client with just 18,000 subscribers generates over $30,000 every month — zero ad spend.
        </p>

        <h2 className="text-2xl font-semibold">The Simple 4-Email Sequence</h2>
        <ul className="list-disc pl-8 space-y-3">
          <li>Monday → Value (tips)</li>
          <li>Thursday → Story</li>
          <li>Sunday → Soft offer</li>
          <li>Last day of month → Big launch</li>
        </ul>

        <p>Open rate: 45–55% | Click rate: 8–12% | Tool: ConvertKit</p>
      </div>
    </article>
  );
}