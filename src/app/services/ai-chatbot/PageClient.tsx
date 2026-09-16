"use client";

import {
  MessageSquare, Bot, Globe, Zap, ArrowRight, CheckCircle,
  Clock, Shield, Brain, Sparkles, Headphones, BarChart3,
  Smartphone, Users, Target, Award, Send, BrainCircuit,
  MessageCircle, Phone, ShoppingCart, HelpCircle
} from "lucide-react";
import ServiceCTA from "@/app/Components/Servicecta";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AIChatbot() {
  const chatbotTypes = [
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Customer Support Bot",
      desc: "24/7 automated customer service with human-like conversations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-Commerce Assistant",
      desc: "Product recommendations, order tracking & shopping guidance",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: "AI Voice Agent",
      desc: "Voice-based call handling, IVR automation & call routing",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Send className="w-10 h-10" />,
      title: "Lead Generation Bot",
      desc: "Capture, qualify & nurture leads automatically",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <HelpCircle className="w-10 h-10" />,
      title: "Internal Helpdesk Bot",
      desc: "IT support, HR queries & employee onboarding automation",
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Multi-Platform Bot",
      desc: "WhatsApp, Facebook, Instagram, Website & CRM integration",
      color: "from-indigo-500 to-purple-500"
    },
  ];

  const buildProcess = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "We understand your business goals, customer pain points & automation needs",
      activities: ["Business workflow mapping", "Use case identification", "Platform selection"]
    },
    {
      step: "02",
      title: "Conversation Design",
      description: "Design intelligent conversation flows with fallback handling",
      activities: ["Dialog flow architecture", "Intent & entity mapping", "Personality design"]
    },
    {
      step: "03",
      title: "AI Training & Development",
      description: "Build and train the chatbot with your business data",
      activities: ["NLP model training", "Knowledge base setup", "API integrations"]
    },
    {
      step: "04",
      title: "Deploy & Optimize",
      description: "Launch across all channels and continuously improve performance",
      activities: ["Multi-channel deployment", "Performance monitoring", "Ongoing optimization"]
    }
  ];

  const integrations = [
    "WhatsApp Business", "Facebook Messenger", "Instagram DM", "Website Live Chat",
    "Slack", "Microsoft Teams", "CRM Systems", "Payment Gateways",
    "Google Sheets", "Shopify", "WooCommerce", "Custom APIs"
  ];

  const metrics = [
    { value: "24/7", label: "Availability", icon: <Clock className="w-5 h-5" /> },
    { value: "90%", label: "Query Resolution", icon: <Target className="w-5 h-5" /> },
    { value: "3x", label: "Lead Conversion", icon: <BarChart3 className="w-5 h-5" /> },
    { value: "60%", label: "Cost Reduction", icon: <Sparkles className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex items-center min-h-[80vh]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30 mb-6"
              >
                <Bot className="w-4 h-4" />
                AI CHATBOT DEVELOPMENT
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  AI-Powered Chatbots
                </span>
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4">
                  That Sell, Support & Scale Your Business
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10">
                Custom AI chatbots for customer support, sales automation, lead generation &
                appointment booking. Integrated with WhatsApp, Website, Facebook & your CRM
                - your business operates 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Book a Free Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
                </Link>
                <a
                  href="tel:+923111000929"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call: +92 311 1000929
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Chatbot Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Bot className="w-4 h-4" />
              CHATBOT SOLUTIONS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">AI Chatbots For</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Every Business Need
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From customer support to lead generation - we build chatbots that drive real results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatbotTypes.map((bot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${bot.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 h-full">
                  <div className={`p-4 bg-gradient-to-br ${bot.color}/10 rounded-2xl w-fit mb-6`}>
                    <div className={`bg-gradient-to-br ${bot.color} bg-clip-text text-transparent`}>
                      {bot.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{bot.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{bot.desc}</p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Ready in 2-4 weeks</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Zap className="w-4 h-4" />
              OUR PROCESS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">How We Build</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Your AI Chatbot
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500 hidden lg:block"></div>
            <div className="space-y-12">
              {buildProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-3xl font-bold text-cyan-600">{step.step}</div>
                        <div className="h-8 w-0.5 bg-slate-200"></div>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold border border-cyan-200 mb-4">
              <Globe className="w-4 h-4" />
              INTEGRATIONS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Connect With</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Every Platform
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-600">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white">
              <span className="block">Ready to Automate</span>
              <span className="block">Your Business?</span>
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Get a custom AI chatbot built for your business. From concept to deployment in just 2-4 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                href="/contactus"
                className="group relative px-10 py-5 bg-white text-cyan-700 font-bold rounded-2xl hover:bg-cyan-50 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-cyan-300" />
                  <span className="font-semibold">Free Demo</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-300" />
                  <span className="font-semibold">2-4 Week Delivery</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCTA
        heading="Transform Customer Experience with AI"
        subtext="Our AI chatbots handle thousands of conversations simultaneously, reducing response time to seconds and boosting customer satisfaction."
        ctaText="Start Building Your Chatbot"
        ctaLink="/contactus"
      />
    </div>
  );
}
