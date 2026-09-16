"use client";

import {
  Cpu, Brain, BarChart3, Target, Zap, ArrowRight, CheckCircle,
  Clock, Shield, Sparkles, Headphones, Globe, Eye, Award,
  FileText, TrendingUp, Layers, Database, Code, Cog,
  ImageIcon, Mic, Search, PieChart
} from "lucide-react";
import ServiceCTA from "@/app/Components/Servicecta";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AIApplications() {
  const appTypes = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Predictive Analytics",
      desc: "AI-powered forecasting for sales, inventory & market trends",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ImageIcon className="w-10 h-10" />,
      title: "Computer Vision Apps",
      desc: "Image recognition, object detection & visual inspection systems",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Document Processing",
      desc: "Automated data extraction from invoices, forms & documents",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "AI Search & Discovery",
      desc: "Intelligent search engines with semantic understanding",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Mic className="w-10 h-10" />,
      title: "Speech & NLP Solutions",
      desc: "Voice recognition, transcription & language processing",
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: <PieChart className="w-10 h-10" />,
      title: "Business Intelligence AI",
      desc: "Smart dashboards with automated insights & anomaly detection",
      color: "from-indigo-500 to-purple-500"
    },
  ];

  const techStack = [
    {
      category: "AI/ML Frameworks",
      items: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face"]
    },
    {
      category: "Cloud Platforms",
      items: ["AWS SageMaker", "Google Cloud AI", "Azure ML", "Vercel AI SDK"]
    },
    {
      category: "Languages & Tools",
      items: ["Python", "TypeScript", "Next.js", "FastAPI", "Docker"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Pinecone", "Redis", "Supabase"]
    },
  ];

  const industries = [
    { name: "Healthcare", use: "Patient triage, medical imaging analysis, appointment optimization" },
    { name: "E-Commerce", use: "Product recommendations, dynamic pricing, demand forecasting" },
    { name: "Finance", use: "Fraud detection, risk scoring, automated compliance" },
    { name: "Manufacturing", use: "Quality control, predictive maintenance, supply chain optimization" },
    { name: "Education", use: "Personalized learning paths, auto-grading, student analytics" },
    { name: "Real Estate", use: "Property valuation, lead scoring, market prediction" },
  ];

  const metrics = [
    { value: "10+", label: "AI Apps Delivered", icon: <Cpu className="w-5 h-5" /> },
    { value: "95%", label: "Model Accuracy", icon: <Target className="w-5 h-5" /> },
    { value: "3x", label: "Efficiency Boost", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "50%", label: "Cost Savings", icon: <Sparkles className="w-5 h-5" /> },
  ];

  const devProcess = [
    {
      step: "01",
      title: "Discovery & Data Assessment",
      description: "Analyze business needs, available data sources & AI feasibility",
      activities: ["Data quality audit", "Feasibility study", "ROI estimation"]
    },
    {
      step: "02",
      title: "AI Model Development",
      description: "Build, train & validate machine learning models for your use case",
      activities: ["Data preprocessing", "Model training", "Accuracy validation"]
    },
    {
      step: "03",
      title: "Application Development",
      description: "Build production-ready app with UI, APIs & integrations",
      activities: ["Frontend development", "API architecture", "System integration"]
    },
    {
      step: "04",
      title: "Deploy & Monitor",
      description: "Launch to production with monitoring, scaling & continuous improvement",
      activities: ["Cloud deployment", "Performance monitoring", "Model retraining"]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-3xl"></div>
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30 mb-6"
              >
                <Cpu className="w-4 h-4" />
                AI APPLICATION DEVELOPMENT
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                  Custom AI Applications
                </span>
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mt-4">
                  Built For Your Business Challenges
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10">
                We develop intelligent AI applications that automate complex workflows, extract
                insights from data, and give your business a competitive edge with machine learning,
                computer vision & natural language processing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-blue-500 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Discuss Your AI Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute -inset-1 bg-purple-500/20 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
                </Link>
                <a
                  href="tel:+923111000929"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                >
                  <Headphones className="w-5 h-5" />
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
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-purple-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
                    <div className="text-purple-600">{metric.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900">{metric.value}</div>
                </div>
                <div className="text-slate-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold border border-purple-200 mb-4">
              <Sparkles className="w-4 h-4" />
              AI SOLUTIONS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Intelligent Apps For</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${app.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 h-full">
                  <div className={`p-4 bg-gradient-to-br ${app.color}/10 rounded-2xl w-fit mb-6`}>
                    <div className={`bg-gradient-to-br ${app.color} bg-clip-text text-transparent`}>
                      {app.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{app.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{app.desc}</p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Custom-built solution</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dev Process */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold border border-purple-200 mb-4">
              <Cog className="w-4 h-4" />
              DEVELOPMENT PROCESS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">From Concept</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                To Production
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 hidden lg:block"></div>
            <div className="space-y-12">
              {devProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-3xl font-bold text-purple-600">{step.step}</div>
                        <div className="h-8 w-0.5 bg-slate-200"></div>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
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

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold border border-purple-200 mb-4">
              <Code className="w-4 h-4" />
              TECHNOLOGY STACK
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Enterprise-Grade</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Technologies
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold border border-purple-200 mb-4">
              <Globe className="w-4 h-4" />
              INDUSTRIES WE SERVE
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">AI Solutions For</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Every Sector
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-slate-600">{industry.use}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white">
              <span className="block">Turn Your Data Into</span>
              <span className="block">Business Intelligence</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Let us build a custom AI application that solves your unique business challenges
              and delivers measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                href="/contactus"
                className="group relative px-10 py-5 bg-white text-purple-700 font-bold rounded-2xl hover:bg-purple-50 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <span>Start Your AI Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-300" />
                  <span className="font-semibold">Enterprise Security</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-300" />
                  <span className="font-semibold">4-8 Week Delivery</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCTA
        heading="Build Your AI-Powered Future"
        subtext="From predictive analytics to computer vision - we build AI applications that transform your business operations and drive growth."
        ctaText="Get Free AI Consultation"
        ctaLink="/contactus"
      />
    </div>
  );
}
