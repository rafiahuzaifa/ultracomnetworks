"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WebsiteDevelopment() {
  return (
    <section className="min-h-screen bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#0a2640] mb-6"
        >
          Website Design & Development Solutions
        </motion.h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          At Ultracom Networks, we build modern digital experiences that empower your brand.
          We specialize in high-performance websites using **Next.js**, **Tailwind CSS**, 
          **Sanity CMS**, and **AI-powered chatbots** to transform static websites into 
          interactive, intelligent business tools.
        </p>

        <div className="relative w-full h-[420px] mt-10 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/webdevlopment.webp"
            alt="Modern Web Development"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
          <ul className="space-y-3 list-disc ml-6">
            <li>Responsive Modern UI/UX Design</li>
            <li>Next.js High-Speed Website Development</li>
            <li>Sanity / Headless CMS Integration</li>
            <li>E-Commerce Storefronts & Dashboard Systems</li>
            <li>AI Chatbot Integration & Automation</li>
          </ul>

          <ul className="space-y-3 list-disc ml-6">
            <li>Corporate Portfolio Websites</li>
            <li>Educational / LMS Websites</li>
            <li>Business Automation Panels</li>
            <li>SEO Optimized Architecture</li>
            <li>Performance & Security Focused</li>
          </ul>
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-14 flex gap-6">
          <Link href="/contactus" className="px-7 py-3 bg-[#0072CE] text-white rounded-lg text-lg hover:bg-[#005FAE] transition">
            Contact Us
          </Link>
          <Link href="/view-our-work" className="px-7 py-3 border border-[#0072CE] text-[#0072CE] rounded-lg text-lg hover:bg-[#E7F1FF] transition">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
