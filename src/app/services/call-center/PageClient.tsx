"use client";

import { 
  Phone, Headphones, Users, BarChart3, Zap, Shield, 
  Cloud, Cpu, MessageSquare, TrendingUp, CheckCircle,
  Clock, Globe, Database, Server, Sparkles, ArrowRight,
  Target, Award, Headset, Wifi, Lock, BarChart,
  PhoneCall, Mail, MessageCircle
} from "lucide-react";
import ServiceCTA from "@/app/Components/Servicecta";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallCenter() {
  const coreFeatures = [
    {
      icon: <PhoneCall className="w-10 h-10" />,
      title: "AI-Powered IVR",
      desc: "Speech recognition & intelligent call automation",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Headset className="w-10 h-10" />,
      title: "ACD Routing",
      desc: "Skill-based automatic call distribution",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Omnichannel",
      desc: "Voice, WhatsApp, SMS, Email & Live Chat",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Real-time Analytics",
      desc: "Advanced dashboards with KPIs & SLA tracking",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Platform",
      desc: "Flexible deployment from 5 to 5000+ agents",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Enterprise Security",
      desc: "TLS/SRTP encryption & compliance ready",
      color: "from-cyan-600 to-blue-600"
    },
  ];

  const industries = [
    { name: "Banking & Finance", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Healthcare", icon: <Headphones className="w-6 h-6" /> },
    { name: "E-commerce", icon: <Globe className="w-6 h-6" /> },
    { name: "Telecom", icon: <Phone className="w-6 h-6" /> },
    { name: "Government", icon: <Shield className="w-6 h-6" /> },
    { name: "Logistics", icon: <Database className="w-6 h-6" /> },
  ];

  const deploymentOptions = [
    {
      name: "Cloud",
      description: "Fully managed cloud solution",
      features: ["Quick setup", "Automatic updates", "Pay-as-you-go"],
      icon: <Cloud className="w-8 h-8" />
    },
    {
      name: "Hybrid",
      description: "Mix of cloud and on-premise",
      features: ["Flexible architecture", "Data control", "Scalable"],
      icon: <Server className="w-8 h-8" />
    },
    {
      name: "On-Premise",
      description: "Complete in-house deployment",
      features: ["Full control", "Custom integration", "Maximum security"],
      icon: <Cpu className="w-8 h-8" />
    }
  ];

  const metrics = [
    { value: "99.99%", label: "Uptime Guarantee", icon: <Shield className="w-5 h-5" /> },
    { value: "5K+", label: "Concurrent Agents", icon: <Users className="w-5 h-5" /> },
    { value: "40%", label: "Cost Reduction", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> },
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
            src="/callcenter.jpeg" 
            alt="Call Center Solutions" 
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
                ENTERPRISE-GRADE SOLUTION
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                  Call Center Solutions
                </span>
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4">
                  Enterprise-Grade IVR, ACD & Contact Center
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed mb-10">
                Transform customer experience with powerful, reliable, and scalable call center 
                platform designed for modern businesses. Crystal-clear communication, reduced wait 
                times, and seamless multi-channel engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
                </Link>

                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
                  <Headphones className="w-5 h-5" />
                  View Features
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
              <span className="block text-slate-900">Complete Call Center</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Platform
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need for modern customer engagement in one powerful platform.
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

      {/* Industries Served */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Globe className="w-4 h-4" />
              INDUSTRIES SERVED
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Perfect For</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg w-fit mx-auto mb-4">
                  <div className="text-cyan-600">{industry.icon}</div>
                </div>
                <h3 className="font-semibold text-slate-800">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Server className="w-4 h-4" />
              FLEXIBLE DEPLOYMENT
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Choose Your</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Deployment Option
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deploymentOptions.map((option, index) => (
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
                    <div className="text-cyan-600">{option.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{option.name}</h3>
                  <p className="text-slate-600 mb-6">{option.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contactus"
                    className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl text-center block hover:bg-slate-200 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
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
                Features
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                "CRM Integration (Salesforce, Zoho, HubSpot)",
                "Predictive & Auto Dialer for Sales",
                "Supervisor Monitoring with Whisper/Barge-in",
                "Customer Journey Mapping",
                "Auto Ticket Creation in Helpdesk",
                "Live Wallboards for Team Performance"
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
                "HD Voice Quality with QoS Control",
                "Multi-location Routing for Teams",
                "Workflow Automation",
                "Real-time Analytics Dashboard",
                "SLA Tracking & Reporting",
                "End-to-end Security Encryption"
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
              <Headset className="w-4 h-4" />
              READY TO TRANSFORM?
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white">
              <span className="block">Elevate Your Customer</span>
              <span className="block">Experience Today</span>
            </h2>

            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Schedule a free demo and discover how our enterprise call center solution 
              can transform your customer engagement, reduce costs, and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                href="/contactus"
                className="group relative px-10 py-5 bg-white text-cyan-700 font-bold rounded-2xl hover:bg-cyan-50 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <span>Schedule Free Demo</span>
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
          </motion.div>
        </div>
      </section>

      <ServiceCTA
        heading="Transform Your Customer Support"
        subtext="Our enterprise call center platform delivers exceptional customer experiences with advanced features, reliable performance, and unmatched scalability."
        ctaText="Request Custom Quote"
        ctaLink="/contactus"
      />
    </div>
  );
}