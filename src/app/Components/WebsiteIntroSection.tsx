"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Globe, 
  Shield, 
  Zap, 
  Code2, 
  Smartphone, 
  CheckCircle,
  TrendingUp
} from "lucide-react";

export default function WebsiteIntroSection() {
  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "Enterprise Security" },
    { icon: <Zap className="w-5 h-5" />, text: "Blazing Fast" },
    { icon: <Globe className="w-5 h-5" />, text: "SEO Optimized" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Mobile First" },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 px-6 lg:px-10">

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold w-fit">
              <Code2 className="w-4 h-4" />
              Premium Web Development
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-5 text-slate-900">
                We Design & Develop <span className="text-blue-600">Modern Digital Experiences</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                Transform your digital presence with enterprise-grade websites built on cutting-edge
                technologies. We combine stunning design with robust functionality to create websites
                that not only look exceptional but perform exceptionally.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * index }}
                  className="flex items-center gap-2 sm:gap-3 p-3 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 min-w-0"
                >
                  <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-slate-700 text-sm min-w-0">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-8 pt-2">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">99%</div>
                <div className="text-xs sm:text-sm text-slate-500">Client Satisfaction</div>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">2.5x</div>
                <div className="text-xs sm:text-sm text-slate-500">Faster Load Times</div>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-xs sm:text-sm text-slate-500">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/website-development"
                className="px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contactus"
                className="px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Get Free Audit</span>
              </Link>
            </div>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative pb-8 sm:pb-0"
          >
            {/* Main Image Container */}
            <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="/webdevlopment2.jpg"
                alt="Website Development"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Tech stack badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                Next.js • Tailwind • Sanity
              </div>

              {/* Floating card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-500">Current Project</div>
                    <div className="font-bold text-slate-800">E-commerce Platform</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature callouts — stacked cards below image on mobile, floating on desktop */}
            <div className="mt-4 sm:mt-0 grid grid-cols-2 gap-3 sm:contents">
              <div className="sm:absolute sm:-left-6 sm:-top-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 bg-green-50 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="font-bold text-slate-800 text-sm">SEO Ready</div>
                </div>
                <div className="text-xs text-slate-600 hidden sm:block">Built-in SEO optimization for better rankings</div>
              </div>

              <div className="sm:absolute sm:-right-6 sm:-bottom-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 bg-purple-50 rounded-lg">
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="font-bold text-slate-800 text-sm">Fast & Secure</div>
                </div>
                <div className="text-xs text-slate-600 hidden sm:block">Industry-leading performance & security</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-6 lg:px-10"
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "98%", label: "Client Retention" },
            { value: "<1s", label: "Avg Load Time" },
            { value: "4.9/5", label: "Client Rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 hover:bg-white transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}