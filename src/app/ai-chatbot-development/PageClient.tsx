"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AIChatbotDevelopment() {
  return (
    <section className="min-h-screen bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#0a2640] leading-tight"
        >
          AI Chatbot Development & Automation Solutions
        </motion.h1>

        <p className="text-gray-600 text-lg mt-4 max-w-3xl leading-relaxed">
          We build custom AI-powered chatbots for customer support, sales engagement, lead generation,
          appointment booking, and business automation. Integrated with WhatsApp, Website, Facebook,
          Instagram, and your internal CRM systems — your business operates 24/7, even while you sleep.
        </p>

        {/* BANNER IMAGE */}
        <div className="relative w-full h-[420px] mt-12 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/ai-chatbot-banner.jpg"
            alt="AI Chatbot Solution"
            fill
            className="object-cover"
          />
        </div>

        {/* FEATURES SECTION */}
        <div className="mt-14 grid md:grid-cols-2 gap-12 text-lg text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-[#0a2640] mb-4">Key Capabilities</h2>
            <ul className="space-y-3 list-disc ml-5">
              <li>Natural Language Understanding (Human-like Chats)</li>
              <li>Multi-Language Support (English, Urdu, Arabic, Punjabi)</li>
              <li>Smart Query Handling & Personalized Responses</li>
              <li>WhatsApp, Website & Social Media Integration</li>
              <li>AI Voice Agents / Call Answering Bots</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0a2640] mb-4">Business Use Cases</h2>
            <ul className="space-y-3 list-disc ml-5">
              <li>Customer Support Automation</li>
              <li>Lead Capture & Qualification</li>
              <li>Online Booking & Appointment Scheduling</li>
              <li>E-Commerce Order Inquiry Bot</li>
              <li>Internal Employee Support (HR / IT Helpdesk)</li>
            </ul>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-16 flex gap-6">
          <Link
            href="/contactus"
            className="px-7 py-3 bg-[#0072CE] text-white rounded-lg text-lg hover:bg-[#005FAE] transition shadow-md"
          >
            Book a Demo
          </Link>

          <Link
            href="/view-our-work"
            className="px-7 py-3 border border-[#0072CE] text-[#0072CE] rounded-lg text-lg hover:bg-[#E6F1FF] transition"
          >
            View Chatbot Examples
          </Link>
        </div>

      </div>
    </section>
  );
}
