import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Every Business Needs a Professional Website",
  description: "The business case for investing in a professional website — credibility, reach, and measurable growth.",
  alternates: { canonical: "/blog/professional-website" },
  openGraph: {
    title: "Why Every Business Needs a Professional Website",
    description: "The business case for investing in a professional website — credibility, reach, and measurable growth.",
  },
};

import Link from "next/link";
import Image from "next/image";



export default function ProfessionalWebsite() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blogs" className="text-blue-600 hover:text-blue-800 mb-10 inline-block font-medium">
        ← All Articles
      </Link>

      <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80"
          alt="Professional Website"
          width={1200}
          height={500}
          className="w-full h-72 object-cover"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        Why Every Business Needs a Professional Website in 2025
      </h1>
      <p className="text-gray-500 mb-12 text-lg">November 18, 2025 • 6 min read</p>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <p className="text-xl text-gray-700 font-medium mb-8">
          In 2025, your website is your most important business asset — more than your office, card, or even your product.
        </p>

        <h2 className="text-2xl font-semibold">1. First Impression Happens in 3 Seconds</h2>
        <p>75% of consumers judge a company’s credibility based on its website design. A slow, outdated, or mobile-unfriendly site kills trust instantly.</p>

        <h2 className="text-2xl font-semibold">2. Your 24/7 Salesperson That Never Sleeps</h2>
        <p>It answers questions, showcases products, collects leads, and closes sales — even at 3 AM on Sunday.</p>

        <h2 className="text-2xl font-semibold">3. Google Sends You Free Customers Daily</h2>
        <p>A fast, SEO-optimized website ranks higher → free organic traffic → more leads without spending a rupee on ads.</p>

        <h2 className="text-2xl font-semibold">Real Result</h2>
        <p>One client saw a 180% increase in inquiries within 30 days of launching their new professional website.</p>

        <p className="text-xl font-semibold mt-10">Bottom line: In 2025, a professional website is not optional — it’s survival.</p>
      </div>
    </article>
  );
}