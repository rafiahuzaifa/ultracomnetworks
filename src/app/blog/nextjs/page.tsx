import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js: The Secret to Lightning-Fast Websites",
  description: "Why Next.js delivers dramatically faster, more reliable websites than traditional web development approaches.",
  alternates: { canonical: "/blog/nextjs" },
  openGraph: {
    title: "Next.js: The Secret to Lightning-Fast Websites",
    description: "Why Next.js delivers dramatically faster, more reliable websites than traditional web development approaches.",
  },
};

import Link from "next/link";
import Image from "next/image";



export default function NextJS() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-10 inline-block font-medium">← All Articles</Link>

      <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
        <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" alt="Next.js" width={1200} height={500} className="w-full h-72 object-cover" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        Next.js 14: The Secret to Lightning-Fast Websites
      </h1>
      <p className="text-gray-500 mb-12 text-lg">November 12, 2025 • 7 min read</p>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <p className="text-xl text-gray-700 font-medium mb-8">
          90% of new enterprise websites are now built with Next.js — here’s why.
        </p>

        <h2 className="text-2xl font-semibold">Why Next.js Dominates in 2025</h2>
        <ul className="list-disc pl-8 space-y-3">
          <li>Automatic code splitting & image optimization</li>
          <li>App Router + Server Components</li>
          <li>Edge Functions & Incremental Static Regeneration (ISR)</li>
          <li>Built-in SEO & performance tools</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Performance That Wins</h2>
        <p>All Ultracom Next.js projects score 98–100 on Lighthouse. Speed = trust = conversions.</p>
      </div>
    </article>
  );
}