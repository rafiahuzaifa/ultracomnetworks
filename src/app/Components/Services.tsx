// src/app/services/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = allServices.length;

  // Kitne cards dikhaane hain?
  const slidesToShow = 3;        // Desktop pe 3
  const slidesToShowMobile = 2;  // Mobile pe 2

  // Auto slide every 4.5 seconds
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);
    return () => clearInterval(timeoutRef.current!);
  }, [totalSlides]);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

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
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `calc(-${currentIndex * (100 / slidesToShow)}% - ${currentIndex * 24}px)`
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ gap: "1.5rem" }}
            >
              {/* Duplicate for seamless loop */}
              {[...allServices, ...allServices].map((service, index) => (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 
                    w-full 
                    sm:w-1/2 
                    lg:w-1/3 
                    px-4
                  `}
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
            </motion.div>
          </div>

          {/* Arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-800 border border-slate-700 p-3 rounded-full hover:bg-slate-700 transition z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-slate-800 border border-slate-700 p-3 rounded-full hover:bg-slate-700 transition z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10 flex-wrap">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-blue-500"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}