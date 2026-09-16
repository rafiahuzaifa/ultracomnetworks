"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Zap, Globe, Users, Target, Eye, Heart, Rocket,
  Linkedin, MapPin, ArrowRight, Award, Clock, TrendingUp,
  CheckCircle, BarChart, Cpu, Wifi, Cloud, Server,
  Sparkles, ChevronRight, Phone, Mail, Star, Calendar,
  Briefcase, Handshake, FileText, Building, Trophy,
  Lightbulb, HeartHandshake, Brain, TargetIcon
} from "lucide-react";

function useScrollToHash() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname]);
}

const stats = [
  { value: "50+", label: "Enterprise Clients", icon: <Users className="w-5 h-5" />, suffix: "and growing" },
  { value: "99.99%", label: "Network Uptime", icon: <CheckCircle className="w-5 h-5" />, suffix: "guaranteed" },
  { value: "24/7", label: "Support", icon: <Clock className="w-5 h-5" />, suffix: "dedicated team" },
  { value: "10+", label: "Cities Covered", icon: <MapPin className="w-5 h-5" />, suffix: "nationwide" },
];

const coreValues = [
  { 
    icon: Shield, 
    title: "Integrity", 
    desc: "We maintain transparency and honesty in all our dealings, building lasting trust with our clients.",
    color: "from-cyan-500 to-blue-500"
  },
  { 
    icon: Zap, 
    title: "Innovation", 
    desc: "Constantly pushing boundaries with cutting-edge technology and forward-thinking solutions.",
    color: "from-blue-500 to-purple-500"
  },
  { 
    icon: Heart, 
    title: "Customer First", 
    desc: "Your success drives our mission. We're committed to exceeding expectations at every touchpoint.",
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: Globe, 
    title: "Reliability", 
    desc: "Consistent, dependable service with enterprise-grade infrastructure and monitoring.",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: Users, 
    title: "Collaboration", 
    desc: "Working together with clients as strategic partners to achieve shared digital goals.",
    color: "from-orange-500 to-red-500"
  },
  { 
    icon: Rocket, 
    title: "Excellence", 
    desc: "Setting industry standards through meticulous attention to detail and continuous improvement.",
    color: "from-cyan-600 to-blue-600"
  },
];

const technologies = [
  { icon: <Cpu className="w-6 h-6" />, name: "Fiber Optic" },
  { icon: <Wifi className="w-6 h-6" />, name: "Wireless 5G" },
  { icon: <Cloud className="w-6 h-6" />, name: "Cloud Infrastructure" },
  { icon: <Server className="w-6 h-6" />, name: "Enterprise Servers" },
  { icon: <Shield className="w-6 h-6" />, name: "Security" },
  { icon: <BarChart className="w-6 h-6" />, name: "Monitoring" },
];

const timeline = [
  { year: "2020", title: "Foundation", desc: "UltraCom Networks founded with a vision to transform Pakistan's digital landscape" },
  { year: "2021", title: "First Major Client", desc: "Secured first enterprise client - a leading banking institution" },
  { year: "2022", title: "Expansion", desc: "Expanded operations to 5 major cities across Pakistan" },
  { year: "2023", title: "ISO Certification", desc: "Achieved ISO 27001 certification for information security" },
  { year: "2024", title: "Award Recognition", desc: "Awarded 'Best Network Provider' at Pakistan Digital Awards" },
  { year: "2025", title: "Future Vision", desc: "Launching advanced 5G and IoT solutions for enterprises" },
];

const leadershipTeam = [
  { 
    name: "Ahmed Raza", 
    role: "Chief Executive Officer", 
    bio: "15+ years in telecommunications, visionary leader driving digital transformation",
    expertise: ["Strategy", "Leadership", "Innovation"]
  },
  { 
    name: "Sara Khan", 
    role: "Chief Technology Officer", 
    bio: "Former network architect at global tech firm, expert in enterprise infrastructure",
    expertise: ["Network Architecture", "Security", "Cloud"]
  },
  { 
    name: "Zain Malik", 
    role: "Chief Operations Officer", 
    bio: "Operations specialist with proven track record in scaling network operations",
    expertise: ["Operations", "Logistics", "Management"]
  },
  { 
    name: "Maria Qureshi", 
    role: "Head of Customer Success", 
    bio: "Dedicated to ensuring client satisfaction and building lasting partnerships",
    expertise: ["Customer Relations", "Support", "Strategy"]
  },
];

const partners = [
  { name: "Cisco", type: "Technology Partner", logo: "/partners/cisco.svg", desc: "Network infrastructure solutions" },
  { name: "Microsoft", type: "Cloud Partner", logo: "/partners/microsoft.svg", desc: "Azure cloud services" },
  { name: "Huawei", type: "Hardware Partner", logo: "/partners/huawei.svg", desc: "Telecommunications equipment" },
  { name: "Jazz", type: "Connectivity Partner", logo: "/partners/jazz.svg", desc: "Fiber optic network" },
  { name: "PTCL", type: "Infrastructure Partner", logo: "/partners/ptcl.svg", desc: "National network access" },
  { name: "TP-Link", type: "Hardware Partner", logo: "/partners/tplink.svg", desc: "Networking equipment" },
];

const careerOpportunities = [
  { title: "Network Engineer", department: "Engineering", location: "Karachi", type: "Full-time" },
  { title: "Sales Executive", department: "Sales", location: "Multiple Cities", type: "Full-time" },
  { title: "Customer Support", department: "Support", location: "Karachi", type: "Full-time" },
  { title: "Cloud Architect", department: "Technology", location: "Remote", type: "Contract" },
];

export default function AboutUs() {
  useScrollToHash();
  const [activeValue, setActiveValue] = useState(0);
  const [activeLeader, setActiveLeader] = useState(0);

  return (
    <>
      {/* ==== PREMIUM HERO SECTION ==== */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        </div>

        {/* Animated Gradient Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

        <Image
          src="/hero2.jpg"
          alt="UltraCom Networks"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="max-w-6xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30 mb-8"
            >
              <Sparkles className="w-4 h-4" />
              SINCE 2020
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                UltraCom
              </span>
              <span className="block text-5xl md:text-7xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4">
                Networks
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-light text-cyan-200 mb-6">
              Secure • Reliable • Future-Proof
            </p>
            
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Leading Pakistan's digital transformation with enterprise-grade connectivity and innovative network solutions.
            </p>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </div>
                  <div className="text-sm text-cyan-100">{stat.label}</div>
                  <div className="text-xs text-cyan-200/60">{stat.suffix}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-cyan-300">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronRight className="w-6 h-6 text-cyan-400 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ==== OUR STORY SECTION ==== */}
      <section id="story" className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Calendar className="w-4 h-4" />
              OUR JOURNEY
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Our Story</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Journey & Milestones
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Pakistan's leading network solutions provider
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500"></div>
            
            <div className="space-y-20">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
                    >
                      <div className="text-5xl font-bold text-cyan-600 mb-4">{item.year}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==== MISSION & VISION SECTION ==== */}
      <section id="mission" className="py-32 bg-gradient-to-br from-slate-50 via-white to-cyan-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <TargetIcon className="w-4 h-4" />
              OUR PURPOSE
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Mission & Vision</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our Purpose & Future
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 border border-slate-200 hover:border-cyan-200 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cyan-600">VISION</div>
                    <h3 className="text-3xl font-bold text-slate-900">Enabling Digital Pakistan</h3>
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To become the cornerstone of Pakistan's digital economy by providing world-class, accessible, 
                  and secure connectivity solutions that empower businesses to thrive in the global marketplace.
                </p>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <TrendingUp className="w-4 h-4" />
                    <span>Leading the digital transformation journey</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 border border-slate-200 hover:border-blue-200 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-600">MISSION</div>
                    <h3 className="text-3xl font-bold text-slate-900">Excellence in Connectivity</h3>
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Deliver innovative, reliable, and secure network solutions that drive business growth through 
                  exceptional customer service, cutting-edge technology, and unwavering commitment to quality.
                </p>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4" />
                    <span>Enterprise-grade solutions with 99.99% uptime guarantee</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==== CORE VALUES SECTION ==== */}
      <section id="values" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30 mb-4">
              <HeartHandshake className="w-4 h-4" />
              OUR PRINCIPLES
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              <span className="block text-white">Core Values</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Principles We Stand By
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The foundation of our culture and the compass that guides every decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  onMouseEnter={() => setActiveValue(index)}
                  className="group relative cursor-pointer"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${value.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 bg-gradient-to-br ${value.color}/20 rounded-xl`}>
                        <value.icon className={`w-8 h-8 bg-gradient-to-br ${value.color} bg-clip-text text-transparent`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                        <div className={`h-1 w-12 bg-gradient-to-r ${value.color} rounded-full`}></div>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ==== LEADERSHIP TEAM SECTION ==== */}
      <section id="leadership" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Users className="w-4 h-4" />
              MEET OUR LEADERS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Leadership</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Meet Our Leaders
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced professionals driving innovation and excellence in network solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setActiveLeader(index)}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-cyan-200 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {leader.name.charAt(0)}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{leader.name}</h3>
                    <p className="text-cyan-600 font-semibold">{leader.role}</p>
                  </div>
                  <p className="text-slate-600 mb-6">{leader.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((exp, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded-full">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== CAREERS SECTION ==== */}
      <section id="careers" className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Briefcase className="w-4 h-4" />
              JOIN OUR TEAM
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Careers</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Be part of Pakistan's fastest-growing network solutions company
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {careerOpportunities.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-medium rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="text-slate-600 mb-6">
                  Join our dynamic team and help shape the future of connectivity in Pakistan.
                </p>
                <Link
                  href="/career"
                  className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/career"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              View All Open Positions
              <Briefcase className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==== PARTNERS SECTION ==== */}
      <section id="partners" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Handshake className="w-4 h-4" />
              STRATEGIC ALLIANCES
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Partners</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Strategic Alliances
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver cutting-edge solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-cyan-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-2xl font-bold text-slate-700">{partner.name.charAt(0)}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{partner.name}</h3>
                  <p className="text-cyan-600 font-medium mb-3">{partner.type}</p>
                  <p className="text-slate-600">{partner.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== BLOG SECTION ==== */}
      <section id="blog" className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <FileText className="w-4 h-4" />
              INSIGHTS & UPDATES
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Blog</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Insights & Updates
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Latest trends, insights, and updates from the world of networking and technology
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 border border-slate-200 shadow-xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Stay Updated with Industry Insights
              </h3>
              <p className="text-slate-600 mb-8">
                Explore our blog for expert articles, case studies, and technology updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  Visit Our Blog
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cyan-700 font-bold rounded-xl border-2 border-cyan-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-300"
                >
                  Subscribe to Newsletter
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== PREMIUM CTA SECTION ==== */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-600"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              <Star className="w-4 h-4" />
              PARTNER WITH US
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white">
              <span className="block">Ready to Transform</span>
              <span className="block">Your Digital Future?</span>
            </h2>

            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Join Pakistan's leading enterprises who trust UltraCom Networks for their mission-critical connectivity needs.
              Let's build something remarkable together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                href="/contactus"
                className="group relative px-10 py-5 bg-white text-cyan-700 font-bold rounded-2xl hover:bg-cyan-50 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute -inset-1 bg-white/30 rounded-2xl blur-md group-hover:blur-xl transition-all"></div>
              </Link>

              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-300" />
                  <span className="font-semibold">+92 311 1000929</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-300" />
                  <span className="font-semibold">info@ultracom.com</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-16">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm">4.9/5 Client Rating</span>
                </div>
                <div className="h-4 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm">ISO 27001 Certified</span>
                </div>
                <div className="h-4 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">PTA Licensed Provider</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}