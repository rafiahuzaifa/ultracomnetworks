"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ShieldCheck } from "lucide-react";

export type HeroSlideData = {
  image: string;
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  cta1Link?: string;
  cta2Link?: string;
};

const defaultSlides: HeroSlideData[] = [
  {
    image: "/hero1-new.jpg",
    title: "Secure. Reliable. Connected.",
    subtitle: "Powering your Enterprise Network with Ultracom Networks",
    cta1: "Explore Services",
    cta2: "Contact Us",
  },
  {
    image: "/hero2.jpg",
    title: "Seamless IT Solutions",
    subtitle: "Managed IT, LAN & WAN, Surveillance & Cloud Services",
    cta1: "View Solutions",
    cta2: "Get Free Consultation",
  },
  {
    image: "/hero3.jpeg",
    title: "Enterprise Connectivity",
    subtitle: "Ultra-fast corporate internet with 24/7 support",
    cta1: "Learn More",
    cta2: "Contact Sales",
  },
  {
    image: "/hero4.jpg",
    title: "Cloud & Network Services",
    subtitle: "Reliable cloud infrastructure and network management",
    cta1: "Explore Services",
    cta2: "Get Free Audit",
  },
  {
    image: "/hero6.jpeg",
    title: "Global Reach",
    subtitle: "Connecting businesses across Pakistan with secure networks",
    cta1: "Our Services",
    cta2: "Contact Us",
  },
];

export default function Hero({ slides: cmsSlides }: { slides?: HeroSlideData[] }) {
  const slides = cmsSlides && cmsSlides.length > 0 ? cmsSlides : defaultSlides;
  const [current, setCurrent] = useState(0);

  // Reset to the first slide if the slide set itself changes (e.g. CMS content loads)
  useEffect(() => {
    setCurrent(0);
  }, [slides.length]);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/55 to-slate-900/25" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Signature accent glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-[85vh] sm:min-h-screen flex items-center py-20 sm:py-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-white max-w-xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" />
              PAKISTAN&apos;S #1 ENTERPRISE NETWORK
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              {slides[current].title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-lg">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <motion.a
                href={slides[current].cta1Link || "/services"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-blue-600 text-white font-semibold text-base rounded-lg shadow-lg shadow-blue-600/40 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/50 transition-all duration-200 group"
              >
                {slides[current].cta1}
                <ChevronRight className="ml-1.5 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={slides[current].cta2Link || "/contactus"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white font-semibold text-base rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-200"
              >
                {slides[current].cta2}
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
