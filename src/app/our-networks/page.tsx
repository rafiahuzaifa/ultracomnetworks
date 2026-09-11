// src/app/our-network/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Server, Wifi, Shield, ArrowRight } from "lucide-react";

export default function OurNetwork() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden font-poppins">
        <Image
          src="/network-bg.jpg"
          alt="UltraCom Network"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
              Our Network
            </h1>
            <p className="text-2xl md:text-4xl text-blue-200 font-light">
              Redundant. Secure. Nationwide.
            </p>
            <p className="text-lg md:text-xl text-blue-100 mt-6 max-w-3xl mx-auto">
              Fiber backbone spanning 20+ cities with enterprise-grade redundancy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12">
            Nationwide Coverage
          </h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13853172.0!2d67.0!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948b5f5d5d5d%3A0x6f6f6f6f6f6f6f6f!2sPakistan!5e0!3m2!1sen!2s!4v1698765432101!5m2!1sen!2s"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <p className="text-center text-lg text-gray-600 mt-6 font-medium">
            Fiber routes in Karachi, Faisalabad, Multan, Sialkot, and 16+ cities
          </p>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Enterprise-Grade Infrastructure
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Globe,
                title: "Redundant Fiber Backbone",
                desc: "Multiple upstream providers: PTCL, Transworld, StormFiber + DE-CIX Peering",
                stats: "20+ Cities Connected",
              },
              {
                icon: Server,
                title: "Tier-3 Data Centers",
                desc: "State-of-the-art facility in Karachi with 99.99% uptime SLA",
                stats: "N+1 Power & Cooling",
              },
              {
                icon: Wifi,
                title: "SD-WAN & MPLS Ready",
                desc: "Intelligent routing, application-aware traffic optimization",
                stats: "Zero Packet Loss",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center p-10 bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="inline-flex p-5 bg-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-14 h-14 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4" />
                <p className="text-sm font-bold text-blue-600 tracking-wider">{item.stats}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Need Enterprise Connectivity?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Get a custom quote in under 5 minutes — no obligation, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center gap-4 bg-white text-slate-800 px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-2xl hover:scale-105"
            >
              Get Free Quote
              <ArrowRight className="w-6 h-6" />
            </Link>
            <a
              href="tel:+923111000605"
              className="inline-flex items-center justify-center gap-3 border-2 border-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-white/10 transition"
            >
              Call: +92 311 1000605
            </a>
          </div>
        </div>
      </section>
    </>
  );
}