"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/hero1.webp",
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

export default function Hero() {
  const [current, setCurrent] = useState(0);

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
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-slate-900/20" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              {slides[current].title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-lg">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <motion.a
                href="/services"
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-blue-600 text-white font-semibold text-base rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
              >
                {slides[current].cta1}
                <ChevronRight className="ml-1.5 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/contactus"
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white font-semibold text-base rounded-lg hover:bg-white/10 transition-colors duration-200"
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
