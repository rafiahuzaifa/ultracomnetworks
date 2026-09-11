"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  ArrowRight, 
  Award, 
  BarChart3,
  Server
} from "lucide-react";

export default function WhoWeAreSection() {
  const coreValues = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliability",
      description: "99.9% uptime guarantee",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Cutting-edge solutions",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership",
      description: "Client-first approach",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Excellence",
      description: "Award-winning service",
    }
  ];

  const stats = [
    { value: "10+", label: "Years Experience", icon: <Award className="w-4 h-4" /> },
    { value: "50+", label: "Enterprise Clients", icon: <Users className="w-4 h-4" /> },
    { value: "24/7", label: "Support", icon: <Server className="w-4 h-4" /> },
    { value: "99.9%", label: "Uptime", icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 px-6 lg:px-10">
          
          {/* LEFT TEXT AREA - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-10"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold w-fit"
            >
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              ABOUT ULTRACOM NETWORKS
            </motion.div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                Building The <span className="text-blue-600">Digital Backbone</span> Of Pakistan
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                As a leading enterprise network solutions provider, we specialize in designing,
                deploying, and managing mission-critical infrastructure that powers business
                growth across Pakistan.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Our team of certified engineers combines technical expertise with strategic
                insight to deliver reliable, scalable, and secure network solutions that
                drive digital transformation.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-slate-800">{value.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 flex items-center justify-center gap-1">
                    {stat.icon}
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Link
                href="/aboutus"
                className="px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/career"
                className="px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5 text-blue-600" />
                <span>Join Our Team</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE AREA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative pb-8 sm:pb-0"
          >
            {/* Main Image Container */}
            <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/whoweare.jpg"
                alt="Ultracom Networks Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Floating Content */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-slate-500">Certified Professionals</div>
                      <div className="font-bold text-slate-800">Enterprise Network Specialists</div>
                      <div className="text-xs sm:text-sm text-slate-600">CCNA, CCNP, PMP Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Badge — static on mobile, floating on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 sm:mt-0 sm:absolute sm:-right-6 sm:-bottom-6 bg-white p-5 rounded-2xl shadow-lg border border-slate-100 w-full sm:w-56"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Server className="w-5 h-5 text-blue-600" />
                </div>
                <div className="font-bold text-slate-800">Latest Technology</div>
              </div>
              <div className="text-sm text-slate-600">Fiber, 5G, SD-WAN — cutting-edge network infrastructure</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 sm:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-6 lg:px-10"
        >
          {[
            { label: "Enterprise Security", value: "Military-grade encryption" },
            { label: "Network Coverage", value: "Nationwide reach" },
            { label: "Support Response", value: "<15 minutes average" },
            { label: "Client Satisfaction", value: "98% retention rate" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="text-sm text-slate-500 mb-2">{item.label}</div>
              <div className="text-lg sm:text-xl font-bold text-slate-900">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}