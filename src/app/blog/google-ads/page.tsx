// src/app/blogs/google-ads/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Google Ads Mistakes That Are Burning Your Budget",
  description: "Avoid these common Google Ads mistakes that quietly drain your ad spend without delivering results.",
  alternates: { canonical: "/blog/google-ads" },
  openGraph: {
    title: "5 Google Ads Mistakes That Are Burning Your Budget",
    description: "Avoid these common Google Ads mistakes that quietly drain your ad spend without delivering results.",
  },
};

import Link from "next/link";
import Image from "next/image";



export default function GoogleAds() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">

      {/* Back Button */}
      <Link 
        href="/blog" 
        className="text-blue-600 hover:text-blue-800 mb-10 inline-block font-medium"
      >
        ← All Articles
      </Link>

      {/* Hero Image */}
      <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
          alt="Google Ads Banner"
          width={1200}
          height={500}
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        5 Google Ads Mistakes That Are Burning Your Budget
      </h1>

      <p className="text-gray-500 mb-12 text-lg">November 10, 2025 • 5 min read</p>

      {/* Content */}
      <div className="prose prose-lg max-w-none leading-relaxed">

        <p className="text-xl text-gray-700 font-medium mb-8">
          Most businesses lose 40–60% of their Google Ads budget because of simple, avoidable mistakes.
          Fix these and your ROI will jump instantly.
        </p>

        <h2 className="text-2xl font-semibold">Mistake #1: Using Only Broad Match Keywords</h2>
        <p>
          Broad match wastes budget. Use Exact + Phrase match to get cleaner traffic and higher conversions.
        </p>

        <h2 className="text-2xl font-semibold">Mistake #2: No Negative Keywords</h2>
        <p>
          Add negative keywords like <b>“free”</b>, <b>“cheap”</b>, <b>“jobs”</b>, <b>“training”</b> — 
          they block irrelevant clicks immediately.
        </p>

        <h2 className="text-2xl font-semibold">Mistake #3: Ad & Landing Page Mismatch</h2>
        <p>
          Your ad message must match your landing page headline + CTA. Consistency = higher Quality Score.
        </p>

        <h2 className="text-2xl font-semibold">Mistake #4: Ignoring Mobile Users</h2>
        <p>
          70%+ Google Ads clicks come from mobile. Your landing page must load under 2 seconds.
        </p>

        <h2 className="text-2xl font-semibold">Mistake #5: No Remarketing</h2>
        <p>
          96% of users don’t convert on first visit. Remarketing increases conversions 3–5x.
        </p>

      </div>
    </article>
  );
}
