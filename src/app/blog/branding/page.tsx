import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Brand Identity Guide for Growing Businesses",
  description: "A practical guide to building a strong, story-driven brand identity for small and growing businesses.",
  alternates: { canonical: "/blog/branding" },
  openGraph: {
    title: "Complete Brand Identity Guide for Growing Businesses",
    description: "A practical guide to building a strong, story-driven brand identity for small and growing businesses.",
  },
};

import Link from "next/link";
import Image from "next/image";



export default function Branding() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blogs" className="text-blue-600 hover:text-blue-800 mb-10 inline-block font-medium">← All Articles</Link>

      <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
        <Image src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80" alt="Branding" width={1200} height={500} className="w-full h-72 object-cover" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        Complete Brand Identity Guide for Growing Businesses
      </h1>
      <p className="text-gray-500 mb-12 text-lg">November 8, 2025 • 9 min read</p>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <p className="text-xl text-gray-700 font-medium mb-8">
          A strong brand increases revenue by up to 23% (Lucidpress). Here are the 8 elements every brand needs.
        </p>

        <h2 className="text-2xl font-semibold">The 8 Pillars of Brand Identity</h2>
        <ul className="list-disc pl-8 space-y-3">
          <li>Logo (simple & scalable)</li>
          <li>Color Palette</li>
          <li>Typography</li>
          <li>Tone of Voice</li>
          <li>Brand Story</li>
          <li>Visual Style</li>
          <li>Tagline</li>
          <li>Consistency Across All Channels</li>
        </ul>
      </div>
    </article>
  );
}