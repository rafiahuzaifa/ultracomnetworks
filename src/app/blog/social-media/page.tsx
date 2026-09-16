import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Strategies That Actually Convert",
  description: "Practical social media marketing tactics that drive real engagement and conversions, not just vanity metrics.",
  alternates: { canonical: "/blog/social-media" },
  openGraph: {
    title: "Social Media Strategies That Actually Convert",
    description: "Practical social media marketing tactics that drive real engagement and conversions, not just vanity metrics.",
  },
};

import Link from "next/link";
import Image from "next/image";



export default function SocialMedia() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-10 inline-block font-medium">← All Articles</Link>

      <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
        <Image src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1200&q=80" alt="Social Media" width={1200} height={500} className="w-full h-72 object-cover" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        Social Media Strategies That Actually Convert in 2025
      </h1>
      <p className="text-gray-500 mb-12 text-lg">November 15, 2025 • 8 min read</p>

      <div className="prose prose-lg max-w-none leading-relaxed">
        <p className="text-xl text-gray-700 font-medium mb-8">
          Stop posting and praying. Here are the exact tactics that turn followers into paying customers.
        </p>

        <h2 className="text-2xl font-semibold">1. Reels & Short Videos = 10x Reach</h2>
        <p>Posting 3–5 reels per week on Instagram & Facebook gives you 10x more organic reach than regular posts.</p>

        <h2 className="text-2xl font-semibold">2. WhatsApp Business Catalog + Status</h2>
        <p>Turn your WhatsApp into a 24/7 digital showroom. Over 530 million Indians use it daily.</p>

        <h2 className="text-2xl font-semibold">3. Automated DM Replies</h2>
        <p>Use ManyChat or Wati.io to instantly reply to “Price?”, “Size?”, “Hi” → conversion jumps 4x.</p>

        <h2 className="text-2xl font-semibold">Real Result</h2>
        <p>One client added $18,000+ extra revenue in 45 days using only these social media tactics.</p>
      </div>
    </article>
  );
}