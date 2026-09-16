// src/app/legal/notice-of-cookies/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Learn how Ultracom Networks uses cookies on its website and how you can manage your preferences.",
  alternates: { canonical: "/notice-of-cookies" },
  openGraph: {
    title: "Cookie Notice",
    description: "Learn how Ultracom Networks uses cookies on its website and how you can manage your preferences.",
  },
};

export default function NoticeOfCookies() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-5xl font-bold text-slate-800 mb-8">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: November 18, 2025</p>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">What Are Cookies?</h2>
          <p>Cookies are small files stored on your device to improve your experience.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Types We Use</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Essential:</strong> For site functionality</li>
            <li><strong>Analytics:</strong> Google Analytics (anonymous)</li>
            <li><strong>Functional:</strong> Remember preferences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Manage Cookies</h2>
          <p>Disable in browser settings. Contact: <a href="mailto:abuse@ultracomnetworks.pk" className="text-blue-600">abuse@ultracomnetworks.pk</a></p>
        </section>
      </div>
    </div>
  );
}