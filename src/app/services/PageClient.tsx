"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Download, Phone, Mail } from "lucide-react";

interface Service {
  title: string;
  subtitle: string;
  href: string;
  category: string;
  pdf?: string;
  image: string;
}

const categories = [
  { value: "all", label: "All Services" },
  { value: "connectivity", label: "Connectivity" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "voice", label: "Voice & PBX" },
  { value: "consulting", label: "Consulting" },
  { value: "web", label: "Web & Digital" },
  { value: "ai", label: "AI & Automation" },
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allServices: Service[] = [
    // Existing IT/Network services
    { title: "Dedicated Internet", subtitle: "High-speed fiber internet with SLA", href: "/services/internet", category: "connectivity", image: "/internet.jpeg" },
    { title: "LAN & WAN Networking", subtitle: "Enterprise network design & deployment", href: "/services/lan-wan", category: "infrastructure", image: "/lanwan.jpeg" },
    { title: "Cloud WiFi Solution", subtitle: "Managed cloud WiFi with analytics", href: "/services/cloud-wifi", category: "connectivity", image: "/cloudwifi.jpeg" },
    { title: "Network Support", subtitle: "24/7 NOC & certified engineers", href: "/services/network-support", category: "infrastructure",image: "/internet.jpeg" },
    { title: "Data Center Services", subtitle: "Colocation & secure hosting", href: "/services/data-center", category: "infrastructure", image: "/datacenter.jpeg" },
    { title: "Call Center Solutions", subtitle: "Cloud PBX, IVR & omnichannel", href: "/services/call-center", category: "voice", image: "/callcenter.jpeg" },
    { title: "PBX Installation", subtitle: "On-premise & hybrid PBX setup", href: "/services/pbx-installation", category: "voice", image: "/mock-device.jpg" },
    { title: "IT Consultation", subtitle: "Free assessment & roadmap", href: "/services/consultation", category: "consulting",  image: "/consult.png" },

    // New Web & Digital Services
    { title: "Website Development", subtitle: "Professional websites for your business", href: "/services/webdevlopment2", category: "web", image: "/webdevlopment.jpeg" },
    { title: "SEO Services", subtitle: "Improve your website's ranking on Google", href: "/services/seo", category: "web", image: "/seo.webp" },
    { title: "Branding & Identity", subtitle: "Logo, colors, and brand strategy", href: "/services/branding", category: "web", image: "/branding.jpg" },
    { title: "Content Creation", subtitle: "High-quality content for web & social media", href: "/services/content", category: "web", image: "/content.jpeg" },
    { title: "Social Media Marketing", subtitle: "Grow your business online", href: "/services/social-media-marketing", category: "web", image: "/socialmedia.jpg" },

    // AI & Automation Services
    { title: "AI Chatbot Development", subtitle: "Smart conversational bots for support & sales", href: "/services/ai-chatbot", category: "ai", image: "/ai-chatbot-banner.jpg" },
    { title: "AI Applications", subtitle: "Custom ML & AI-powered business solutions", href: "/services/ai-applications", category: "ai", image: "/ai-chatbot-banner.jpg" },
    { title: "AI Agents", subtitle: "Autonomous agents for workflow automation", href: "/services/ai-agents", category: "ai", image: "/ai-chatbot-banner.jpg" },
  ];

  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      {/* HERO */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center font-poppins">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Complete enterprise IT & digital solutions — from dedicated internet to SEO and web services, all backed by local 24/7 support.
          </p>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 pl-4 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-300 transition placeholder-gray-500"
          />
          <div className="flex gap-3 flex-wrap justify-center md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === cat.value
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 text-gray-500 text-xl">
              No services found. Try adjusting your filters.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service) => (
                <Link href={service.href} key={service.href}>
                  <div className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <div className="relative h-56 overflow-hidden rounded-t-3xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-medium flex items-center gap-2">
                          View Details <ArrowRight className="w-4 h-4" />
                        </span>
                        {service.pdf && (
                          <a
                            href={service.pdf}
                            target="_blank"
                            className="text-gray-500 hover:text-blue-600 transition"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Download className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-800 via-blue-900 to-slate-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Not Sure What You Need?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let our senior engineers assess your current setup and recommend the perfect solution — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition transform"
            >
              Free Consultation
            </Link>
            <a
              href="tel:+923111000929"
              className="inline-flex items-center justify-center gap-3 border-2 border-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-white/10 transition"
            >
              <Phone className="w-6 h-6" /> +92 3111000929
            </a>
            <a
              href="mailto:sales@ultracom.net"
              className="inline-flex items-center justify-center gap-3 border-2 border-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-white/10 transition"
            >
              <Mail className="w-6 h-6" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
