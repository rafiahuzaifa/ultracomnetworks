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
  Server,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Shield, Zap, Users, Globe, Award, Server, BarChart3 };
const statIcons = [Award, Users, Server, BarChart3];

export type WhoWeAreData = {
  badgeText?: string;
  headingLine1?: string;
  headingAccent?: string;
  headingLine2?: string;
  paragraph1?: string;
  paragraph2?: string;
  coreValues?: { icon?: string; title?: string; description?: string }[];
  stats?: { value?: string; label?: string }[];
  image?: string;
  imageCaptionTitle?: string;
  imageCaptionSubtitle?: string;
  techBadgeTitle?: string;
  techBadgeText?: string;
};

const defaults: Required<Omit<WhoWeAreData, "coreValues" | "stats">> & {
  coreValues: { icon: string; title: string; description: string }[];
  stats: { value: string; label: string }[];
} = {
  badgeText: "ABOUT ULTRACOM NETWORKS",
  headingLine1: "Building The",
  headingAccent: "Digital Backbone",
  headingLine2: "Of Pakistan",
  paragraph1:
    "As a leading enterprise network solutions provider, we specialize in designing, deploying, and managing mission-critical infrastructure that powers business growth across Pakistan.",
  paragraph2:
    "Our team of certified engineers combines technical expertise with strategic insight to deliver reliable, scalable, and secure network solutions that drive digital transformation.",
  coreValues: [
    { icon: "Shield", title: "Reliability", description: "99.9% uptime guarantee" },
    { icon: "Zap", title: "Innovation", description: "Cutting-edge solutions" },
    { icon: "Users", title: "Partnership", description: "Client-first approach" },
    { icon: "Globe", title: "Excellence", description: "Award-winning service" },
  ],
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "24/7", label: "Support" },
    { value: "99.9%", label: "Uptime" },
  ],
  image: "/whoweare.jpg",
  imageCaptionTitle: "Enterprise Network Specialists",
  imageCaptionSubtitle: "CCNA, CCNP, PMP Certified",
  techBadgeTitle: "Latest Technology",
  techBadgeText: "Fiber, 5G, SD-WAN — cutting-edge network infrastructure",
};

export default function WhoWeAreSection({ data }: { data?: WhoWeAreData }) {
  const badgeText = data?.badgeText || defaults.badgeText;
  const headingLine1 = data?.headingLine1 || defaults.headingLine1;
  const headingAccent = data?.headingAccent || defaults.headingAccent;
  const headingLine2 = data?.headingLine2 || defaults.headingLine2;
  const paragraph1 = data?.paragraph1 || defaults.paragraph1;
  const paragraph2 = data?.paragraph2 || defaults.paragraph2;
  const coreValues = data?.coreValues && data.coreValues.length > 0 ? data.coreValues : defaults.coreValues;
  const stats = data?.stats && data.stats.length > 0 ? data.stats : defaults.stats;
  const image = data?.image || defaults.image;
  const imageCaptionTitle = data?.imageCaptionTitle || defaults.imageCaptionTitle;
  const imageCaptionSubtitle = data?.imageCaptionSubtitle || defaults.imageCaptionSubtitle;
  const techBadgeTitle = data?.techBadgeTitle || defaults.techBadgeTitle;
  const techBadgeText = data?.techBadgeText || defaults.techBadgeText;

  return (
    <section className="relative w-full py-20 sm:py-28 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
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
              {badgeText}
            </motion.div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                {headingLine1} <span className="text-blue-600">{headingAccent}</span> {headingLine2}
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-4">{paragraph1}</p>

              <p className="text-lg text-slate-600 leading-relaxed">{paragraph2}</p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((value, index) => {
                const IconComp = (value.icon && iconMap[value.icon]) || Shield;
                return (
                  <motion.div
                    key={value.title || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2 min-w-0">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-slate-800 min-w-0">{value.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200"
            >
              {stats.map((stat, index) => {
                const StatIcon = statIcons[index % statIcons.length];
                return (
                  <div key={stat.label || index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500 flex items-center justify-center gap-1">
                      <StatIcon className="w-4 h-4" />
                      {stat.label}
                    </div>
                  </div>
                );
              })}
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
                className="px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/career"
                className="px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
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
            <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src={image}
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
                      <div className="font-bold text-slate-800">{imageCaptionTitle}</div>
                      <div className="text-xs sm:text-sm text-slate-600">{imageCaptionSubtitle}</div>
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
              className="mt-4 sm:mt-0 sm:absolute sm:-right-6 sm:-bottom-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 w-full sm:w-56 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Server className="w-5 h-5 text-blue-600" />
                </div>
                <div className="font-bold text-slate-800">{techBadgeTitle}</div>
              </div>
              <div className="text-sm text-slate-600">{techBadgeText}</div>
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
              className="text-center p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
