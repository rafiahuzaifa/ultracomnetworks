// src/app/legal/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how Ultracom Networks collects, uses, and protects your personal data.",
  alternates: { canonical: "/privicy-policy" },
  openGraph: {
    title: "Privacy Policy",
    description: "Read how Ultracom Networks collects, uses, and protects your personal data.",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-5xl font-bold text-slate-800 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: November 18, 2025</p>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">1. Information We Collect</h2>
          <p>We collect personal information you provide when using our services, such as name, email, phone, and company details for support and inquiries.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>To respond to your inquiries and provide support</li>
            <li>To send updates and promotional materials (with consent)</li>
            <li>For internal analytics to improve our services</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">3. Data Security</h2>
          <p>We use SSL encryption, firewalls, and regular audits to protect your data. We comply with GDPR and local laws.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Contact Us</h2>
          <p>Email: <a href="mailto:privacy@ultracom.net" className="text-blue-600">abuse@ultracomnetworks.pk</a></p>
        </section>
      </div>
    </div>
  );
}