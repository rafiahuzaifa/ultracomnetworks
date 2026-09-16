import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Redesign Checklist: 50+ Must-Do Items",
  description: "A comprehensive checklist covering everything to plan and execute before redesigning your business website.",
  alternates: { canonical: "/blog/redesign" },
  openGraph: {
    title: "Website Redesign Checklist: 50+ Must-Do Items",
    description: "A comprehensive checklist covering everything to plan and execute before redesigning your business website.",
  },
};

import Link from "next/link";
import Image from "next/image";



export default function Redesign() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-10 inline-block font-medium">← All Articles</Link>

      <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
        <Image src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80" alt="Redesign" width={1200} height={500} className="w-full h-72 object-cover" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        Website Redesign Checklist 2025 – 50+ Must-Do Items
      </h1>
      <p className="text-gray-500 mb-12 text-lg">November 1, 2025 • 4 min read</p>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <p className="text-xl text-gray-700 font-medium mb-8">
          Before you redesign, make sure you check these critical items.
        </p>

        <ul className="list-disc pl-8 space-y-3 text-lg">
          <li>Page speed under 2 seconds</li>
          <li>Mobile-first responsive design</li>
          <li>Clear CTA on every page</li>
          <li>SSL certificate + HTTPS</li>
          <li>SEO-friendly URLs & schema</li>
          <li>WhatsApp button + contact form</li>
          <li>Testimonials & trust badges</li>
          <li>Fast hosting (Vercel/Cloudflare)</li>
        </ul>

        <p className="mt-10 text-xl">Want this checklist as a free PDF? Comment “CHECKLIST” below!</p>
      </div>
    </article>
  );
}