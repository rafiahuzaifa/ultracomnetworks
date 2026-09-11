"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const allServices = [
  { title: "Dedicated Internet", subtitle: "High-speed fiber internet", href: "/services/internet", category: "connectivity", image: "/internet.jpeg" },
  { title: "LAN & WAN Networking", subtitle: "Enterprise network deployment", href: "/services/lan-wan", category: "infrastructure", image: "/lanwan.jpeg" },
  { title: "Cloud WiFi Solution", subtitle: "Smart managed WiFi systems", href: "/services/cloud-wifi", category: "connectivity", image: "/cloudwifi.jpeg" },
  { title: "Network Support", subtitle: "24/7 monitoring & engineers", href: "/services/network-support", category: "infrastructure", image: "/internet.jpeg" },
  { title: "Data Center Services", subtitle: "Secure colocation & hosting", href: "/services/data-center", category: "infrastructure", image: "/datacenter.jpeg" },
  { title: "Call Center Solutions", subtitle: "PBX, IVR, omnichannel", href: "/services/call-center", category: "voice", image: "/callcenter.jpeg" },
  { title: "PBX Installation", subtitle: "Hybrid & on-prem systems", href: "/services/pbx-installation", category: "voice", image: "/mock-device.jpg" },
  { title: "IT Consultation", subtitle: "Professional IT roadmap", href: "/services/consultation", category: "consulting", image: "/consult.png" },
  { title: "Website Development", subtitle: "High-end modern websites", href: "/services/webdevlopment2", category: "web", image: "/webdevlopment.jpeg" },
  { title: "SEO Services", subtitle: "Rank higher on Google", href: "/services/seo", category: "web", image: "/seo.webp" },
  { title: "Branding & Identity", subtitle: "Logo + brand kits", href: "/services/branding", category: "web", image: "/branding.jpg" },
  { title: "Content Creation", subtitle: "Professional media content", href: "/services/content", category: "web", image: "/content.jpeg" },
  { title: "Social Media Marketing", subtitle: "Grow your online brand", href: "/services/social-media-marketing", category: "web", image: "/socialmedia.jpg" },
  { title: "AI Chatbot Development", subtitle: "Smart conversational bots", href: "/services/ai-chatbot", category: "ai", image: "/ai-chatbot-banner.jpg" },
  { title: "AI Applications", subtitle: "Custom ML & AI solutions", href: "/services/ai-applications", category: "ai", image: "/ai-chatbot-banner.jpg" },
  { title: "AI Agents", subtitle: "Autonomous business agents", href: "/services/ai-agents", category: "ai", image: "/ai-chatbot-banner.jpg" },
];

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollByCard = (direction: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : container.clientWidth * 0.85;
    container.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  // Auto-scroll, looping back to the start
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    const interval = setInterval(() => {
      const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
      if (atEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard(1);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative py-20 sm:py-28 bg-slate-900 text-white overflow-hidden">
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
            WHAT WE OFFER
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-blue-400">Premium Services</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">Enterprise-grade IT, connectivity & digital solutions, all in one place</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-2 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {allServices.map((service, index) => (
              <div
                key={index}
                data-card
                className="flex-none w-[82%] sm:w-[46%] lg:w-[31%] snap-start"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden h-[460px] transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300 bg-slate-900/70 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col h-[calc(460px-208px)]">
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">{service.subtitle}</p>

                    <Link
                      href={service.href}
                      className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 rounded-lg font-semibold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/30 transition-all duration-200 w-fit"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Previous"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-800 border border-slate-700 p-3 rounded-full hover:bg-slate-700 transition z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Next"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-slate-800 border border-slate-700 p-3 rounded-full hover:bg-slate-700 transition z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
