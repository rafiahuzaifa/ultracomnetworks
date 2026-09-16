import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ranking Factors: What Actually Matters",
  description: "Cut through the noise — the SEO ranking factors that genuinely move the needle for your search visibility.",
  alternates: { canonical: "/blog/seo" },
  openGraph: {
    title: "Google Ranking Factors: What Actually Matters",
    description: "Cut through the noise — the SEO ranking factors that genuinely move the needle for your search visibility.",
  },
};

import Link from "next/link";
import Image from "next/image";



export default function SEO() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-10 inline-block font-medium">← All Articles</Link>

      <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
        <Image src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1920&q=80" alt="SEO" width={1200} height={500} className="w-full h-72 object-cover" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        Google Ranking Factors 2025 – What Actually Matters
      </h1>
      <p className="text-gray-500 mb-12 text-lg">November 10, 2025 • 10 min read</p>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <p className="text-xl text-gray-700 font-medium mb-8">
          Google no longer rewards tricks. It rewards helpful, fast, and trustworthy websites.
        </p>

        <h2 className="text-2xl font-semibold">Top 5 Ranking Signals in 2025</h2>
        <ol className="list-decimal pl-8 space-y-3">
          <li><strong>Page Speed</strong> (LCP under 2.5s)</li>
          <li><strong>Mobile Experience</strong></li>
          <li><strong>E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trust)</li>
          <li><strong>Helpful Content</strong> (no AI spam)</li>
          <li><strong>Quality Backlinks</strong></li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8">Quick Wins</h2>
        <p>Add author bio, internal links, schema markup, and refresh old content every 6 months.</p>
      </div>
    </article>
  );
}