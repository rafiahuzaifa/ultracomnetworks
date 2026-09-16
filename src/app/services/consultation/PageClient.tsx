"use client";

import { 
  Cpu, Shield, BarChart3, Target, Users, Zap, Cloud, 
  Database, Server, Lock, Award, Sparkles, ArrowRight,
  CheckCircle, Clock, Globe, Brain, FileText, TrendingUp,
  Headphones, PieChart, LineChart, Monitor, ShieldCheck,
  ClipboardCheck, Rocket, Eye, BrainCircuit
} from "lucide-react";
import ServiceCTA from "@/app/Components/Servicecta";
import { motion } from "framer-motion";
import Link from "next/link";
import { Building, GraduationCap, Heart } from "lucide-react";

export default function Consultation() {
  const expertiseAreas = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Security Audit",
      desc: "Complete vulnerability assessment & compliance review",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Infrastructure Planning",
      desc: "Scalable architecture for future growth",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Strategy",
      desc: "Migration, optimization & multi-cloud management",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <PieChart className="w-10 h-10" />,
      title: "Cost Optimization",
      desc: "Licensing, infrastructure & operational efficiency",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Disaster Recovery",
      desc: "Business continuity & high availability planning",
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Digital Transformation",
      desc: "Technology roadmap & automation strategy",
      color: "from-indigo-500 to-purple-500"
    },
  ];

  const auditProcess = [
    {
      step: "01",
      title: "Discovery Session",
      description: "Comprehensive assessment of your current IT landscape",
      activities: ["Requirements gathering", "Current state analysis", "Stakeholder interviews"]
    },
    {
      step: "02",
      title: "Technical Assessment",
      description: "In-depth analysis of infrastructure, security & performance",
      activities: ["Network scanning", "Security testing", "Performance benchmarking"]
    },
    {
      step: "03",
      title: "Gap Analysis",
      description: "Identify vulnerabilities & optimization opportunities",
      activities: ["Compliance check", "Risk assessment", "Cost analysis"]
    },
    {
      step: "04",
      title: "Strategy Development",
      description: "Create actionable roadmap with prioritized recommendations",
      activities: ["Solution design", "Implementation plan", "ROI calculation"]
    }
  ];

  const clientTypes = [
    {
      type: "SMBs",
      description: "Small & medium businesses planning IT upgrades",
      icon: <Users className="w-8 h-8" />,
      focus: "Cost-effective solutions"
    },
    {
      type: "Enterprises",
      description: "Large organizations needing comprehensive audits",
      icon: <Building className="w-8 h-8" />,
      focus: "Enterprise architecture"
    },
    {
      type: "Startups",
      description: "Fast-growing companies building scalable foundations",
      icon: <Rocket className="w-8 h-8" />,
      focus: "Scalability & growth"
    },
    {
      type: "Education",
      description: "Schools & universities with complex IT needs",
      icon: <GraduationCap className="w-8 h-8" />,
      focus: "Campus-wide solutions"
    },
    {
      type: "Healthcare",
      description: "Hospitals & clinics requiring HIPAA compliance",
      icon: <Heart className="w-8 h-8" />,
      focus: "Security & compliance"
    },
    {
      type: "Finance",
      description: "Banks & financial institutions with strict regulations",
      icon: <TrendingUp className="w-8 h-8" />,
      focus: "Regulatory compliance"
    }
  ];

  const metrics = [
    { value: "50+", label: "Audits Completed", icon: <FileText className="w-5 h-5" /> },
    { value: "40%", label: "Avg. Cost Reduction", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "99.9%", label: "Uptime Improvement", icon: <Shield className="w-5 h-5" /> },
    { value: "24/7", label: "Expert Support", icon: <Headphones className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full">
      {/* Premium Hero Section */}
      <section className="relative w-full min-h-[80vh] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0">
          <img 
            src="/consult.png" 
            alt="IT Consultation & Audit" 
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30 mb-6"
              >
                <BrainCircuit className="w-4 h-4" />
                EXPERT IT CONSULTATION
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  IT Consultation & Audit
                </span>
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                  Professional Assessment & Transformation Strategy
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed mb-10">
                Build a reliable, scalable, and secure technology foundation with expert IT consultation. 
                Get actionable insights, strategic planning, and future-proof roadmaps tailored to your 
                organization's growth objectives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Book Free Initial Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
                </Link>

                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
                  <FileText className="w-5 h-5" />
                  View Sample Report
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
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
                    <div className="text-blue-600">{metric.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900">{metric.value}</div>
                </div>
                <div className="text-slate-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold border border-blue-200 mb-4">
              <Zap className="w-4 h-4" />
              OUR EXPERTISE
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Comprehensive IT</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Consultation Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end IT assessment and strategic planning across all technology domains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
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
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${area.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 h-full">
                  <div className={`p-4 bg-gradient-to-br ${area.color}/10 rounded-2xl w-fit mb-6`}>
                    <div className={`bg-gradient-to-br ${area.color} bg-clip-text text-transparent`}>
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{area.desc}</p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Certified experts</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold border border-blue-200 mb-4">
              <ClipboardCheck className="w-4 h-4" />
              OUR PROCESS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Structured Audit</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Methodology
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 hidden lg:block"></div>
            
            <div className="space-y-12">
              {auditProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Step Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-3xl font-bold text-blue-600">{step.step}</div>
                        <div className="h-8 w-0.5 bg-slate-200"></div>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
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

      {/* Client Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold border border-blue-200 mb-4">
              <Users className="w-4 h-4" />
              WHO WE SERVE
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Industry-Specific</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Consultation
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl w-fit mb-6">
                    <div className="text-blue-600">{client.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{client.type}</h3>
                  <p className="text-slate-600 mb-4">{client.description}</p>
                  <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                    <Target className="w-4 h-4" />
                    {client.focus}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold border border-blue-200 mb-4">
              <Award className="w-4 h-4" />
              FINAL DELIVERABLES
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Comprehensive Audit</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Report
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                "Complete network topology & documentation",
                "Performance graphs, heatmaps & bandwidth analysis",
                "Security vulnerabilities & risk scoring matrix",
                "Hardware lifecycle & replacement schedule",
                "Application & workload optimization plan",
                "Cost-saving suggestions & investment priorities",
                "1-5 year technology roadmap"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-200 transition-colors"
                >
                  <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="text-center mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl w-fit mx-auto mb-4">
                  <FileText className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Sample Report Preview</h3>
                <p className="text-slate-600">See what you'll receive after our consultation</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  { label: "Document Pages", value: "50-100" },
                  { label: "Executive Summary", value: "Included" },
                  { label: "Technical Details", value: "Complete" },
                  { label: "Visual Charts", value: "20+" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">{item.label}</span>
                    <span className="font-semibold text-blue-600">{item.value}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg transition-all duration-300">
                Download Sample Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-600">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              <Eye className="w-4 h-4" />
              READY TO OPTIMIZE?
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white">
              <span className="block">Get Your Free IT</span>
              <span className="block">Infrastructure Assessment</span>
            </h2>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Schedule a complimentary consultation and discover how strategic IT planning 
              can transform your technology infrastructure, reduce costs, and drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                href="/contactus"
                className="group relative px-10 py-5 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <span>Book Free Initial Assessment</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute -inset-1 bg-white/30 rounded-2xl blur-md group-hover:blur-xl transition-all"></div>
              </Link>

              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-blue-300" />
                  <span className="font-semibold">Expert Consultation</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-300" />
                  <span className="font-semibold">No Obligation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCTA
        heading="Transform Your IT Infrastructure"
        subtext="Our certified consultants provide comprehensive assessment, strategic planning, and actionable roadmaps to optimize your technology investments."
        ctaText="Schedule Consultation"
        ctaLink="/contactus"
      />
    </div>
  );
}

// Missing icon imports - add these to the import statement
