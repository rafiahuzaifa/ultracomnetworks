"use client";

import { 
  Wifi, Cloud, Shield, Zap, Users, BarChart3, Target, 
  Smartphone, Cpu, Globe, Lock, Award, Sparkles, ArrowRight,
  CheckCircle, Clock, Database, Server, Bell, Layout,
  TrendingUp, Monitor, MessageSquare, Headphones
} from "lucide-react";
import ServiceCTA from "@/app/Components/Servicecta";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CloudWifi() {
  const coreFeatures = [
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Controller",
      desc: "Centralized monitoring & zero-touch provisioning",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "WPA3 Security",
      desc: "Enterprise security with role-based access control",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "AI Optimization",
      desc: "AI-driven performance tuning & interference reduction",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Guest WiFi",
      desc: "Secure access with SMS, OTP & social login",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Multi-Site Management",
      desc: "Manage 1 or 100+ locations from one dashboard",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Seamless Roaming",
      desc: "Automatic AP-to-AP roaming for uninterrupted connectivity",
      color: "from-cyan-600 to-blue-600"
    },
  ];

  const useCases = [
    {
      industry: "Corporate Offices",
      description: "Enterprise-grade WiFi for high-density workspaces",
      icon: <Monitor className="w-8 h-8" />,
      users: "500+ concurrent users"
    },
    {
      industry: "Education",
      description: "Campus-wide WiFi for schools & universities",
      icon: <Users className="w-8 h-8" />,
      users: "2000+ student capacity"
    },
    {
      industry: "Healthcare",
      description: "Secure WiFi for hospitals & clinics",
      icon: <Shield className="w-8 h-8" />,
      users: "HIPAA compliant"
    },
    {
      industry: "Hospitality",
      description: "Guest WiFi for hotels & resorts",
      icon: <Smartphone className="w-8 h-8" />,
      users: "Branded captive portal"
    },
    {
      industry: "Retail",
      description: "Customer WiFi with analytics",
      icon: <TrendingUp className="w-8 h-8" />,
      users: "Footfall tracking"
    },
    {
      industry: "Public Venues",
      description: "High-density event WiFi",
      icon: <Globe className="w-8 h-8" />,
      users: "10,000+ capacity"
    }
  ];

  const capabilities = [
    {
      title: "Real-time Analytics",
      features: ["Bandwidth monitoring", "User behavior insights", "Heatmap visualization"],
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Advanced Security",
      features: ["WPA3 encryption", "Role-based access", "Threat detection"],
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: "Smart Management",
      features: ["Multi-site control", "Automatic updates", "Proactive alerts"],
      icon: <Server className="w-8 h-8" />
    }
  ];

  const metrics = [
    { value: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-5 h-5" /> },
    { value: "10K+", label: "Concurrent Users", icon: <Users className="w-5 h-5" /> },
    { value: "100+", label: "Locations Managed", icon: <Globe className="w-5 h-5" /> },
    { value: "70%", label: "Performance Boost", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full">
      {/* Premium Hero Section */}
      <section className="relative w-full min-h-[80vh] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0">
          <img 
            src="/cloudwifi.jpeg" 
            alt="Cloud WiFi Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center min-h-[80vh]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30 mb-6"
              >
                <Sparkles className="w-4 h-4" />
                NEXT-GEN WIFI SOLUTION
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                  Cloud WiFi Solution
                </span>
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4">
                  Managed Wireless with Cloud Control
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed mb-10">
                Deliver fast, secure, and highly reliable wireless connectivity across your entire 
                business—managed completely from the cloud with AI-driven optimization and 
                enterprise-grade security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Get Free WiFi Audit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
                </Link>

                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
                  <Wifi className="w-5 h-5" />
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl">
                    <div className="text-cyan-600">{metric.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900">{metric.value}</div>
                </div>
                <div className="text-slate-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Zap className="w-4 h-4" />
              CORE FEATURES
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Complete Cloud WiFi</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Platform
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need for enterprise wireless networking in one powerful cloud platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
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
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 h-full">
                  <div className={`p-4 bg-gradient-to-br ${feature.color}/10 rounded-2xl w-fit mb-6`}>
                    <div className={`bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Enterprise ready</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Target className="w-4 h-4" />
              PERFECT FOR
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Industry-Specific</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-200 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl w-fit mb-6">
                    <div className="text-cyan-600">{useCase.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.industry}</h3>
                  <p className="text-slate-600 mb-4">{useCase.description}</p>
                  <div className="flex items-center gap-2 text-sm text-cyan-600 font-medium">
                    <Users className="w-4 h-4" />
                    {useCase.users}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Award className="w-4 h-4" />
              ADVANCED CAPABILITIES
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Enterprise-Grade</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                WiFi Features
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-lg p-8 h-full">
                  <div className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl w-fit mb-6">
                    <div className="text-cyan-600">{capability.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{capability.title}</h3>
                  
                  <ul className="space-y-3 mb-8">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-500" />
                      <span>Optimized for performance</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                "Instant setup with plug-and-play access points",
                "99.9% uptime with AI-driven performance tuning",
                "Supports thousands of concurrent users seamlessly",
                "Built-in captive portal with brandable splash pages",
                "Automatic firmware updates & proactive threat detection",
                "Heatmap visualization for coverage planning"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-200 transition-colors"
                >
                  <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                "Presence analytics for footfall & user behavior",
                "Smart QoS for voice, video & critical apps",
                "Cloud backup & multi-layer redundancy",
                "WiFi marketing with targeted ads & campaigns",
                "AP health monitoring with proactive alerts",
                "Multi-site management from single dashboard"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-200 transition-colors"
                >
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-600">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              <Wifi className="w-4 h-4" />
              READY TO UPGRADE?
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white">
              <span className="block">Transform Your Wireless</span>
              <span className="block">Infrastructure Today</span>
            </h2>

            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Schedule a free WiFi assessment and discover how our cloud-managed solution 
              can enhance performance, security, and user experience across your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                href="/contactus"
                className="group relative px-10 py-5 bg-white text-cyan-700 font-bold rounded-2xl hover:bg-cyan-50 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <span>Get Free WiFi Assessment</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute -inset-1 bg-white/30 rounded-2xl blur-md group-hover:blur-xl transition-all"></div>
              </Link>

              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-cyan-300" />
                  <span className="font-semibold">24/7 Support</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-300" />
                  <span className="font-semibold">Quick Deployment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCTA
        heading="Experience Next-Gen WiFi"
        subtext="Our cloud-managed WiFi platform delivers enterprise-grade performance, security, and management for businesses of all sizes."
        ctaText="Request Demo"
        ctaLink="/contactus"
      />
    </div>
  );
}