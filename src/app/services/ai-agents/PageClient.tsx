"use client";

import {
  Bot, Brain, Zap, ArrowRight, CheckCircle, Clock, Shield,
  Sparkles, Headphones, Globe, Target, Award, TrendingUp,
  Cpu, Workflow, RefreshCw, Users, BarChart3, Settings,
  Mail, FileText, Phone, Database, Cog, BrainCircuit
} from "lucide-react";
import ServiceCTA from "@/app/Components/Servicecta";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AIAgents() {
  const agentTypes = [
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email & Communication Agent",
      desc: "Automates email drafting, responses, follow-ups & inbox management",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Research & Analysis Agent",
      desc: "Gathers data, analyzes trends & generates comprehensive reports",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Sales & CRM Agent",
      desc: "Lead qualification, outreach automation & pipeline management",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: "Operations Agent",
      desc: "Workflow automation, task scheduling & process optimization",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Processing Agent",
      desc: "ETL pipelines, data cleaning & automated reporting",
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Compliance & Monitoring Agent",
      desc: "Regulatory compliance checks, audit trails & risk monitoring",
      color: "from-indigo-500 to-purple-500"
    },
  ];

  const howAgentsWork = [
    {
      step: "01",
      title: "Perceive & Understand",
      description: "Agent receives input from multiple sources - emails, APIs, databases, user queries",
      activities: ["Multi-source data ingestion", "Context understanding", "Intent recognition"]
    },
    {
      step: "02",
      title: "Reason & Plan",
      description: "Agent breaks complex tasks into actionable steps using AI reasoning",
      activities: ["Task decomposition", "Strategy planning", "Tool selection"]
    },
    {
      step: "03",
      title: "Execute & Act",
      description: "Agent autonomously performs actions - API calls, data processing, content generation",
      activities: ["Autonomous execution", "Error handling", "Multi-tool orchestration"]
    },
    {
      step: "04",
      title: "Learn & Improve",
      description: "Agent learns from outcomes, feedback & historical data to improve over time",
      activities: ["Performance analysis", "Feedback integration", "Continuous optimization"]
    }
  ];

  const vsComparison = [
    { feature: "Task Handling", chatbot: "Single Q&A", agent: "Multi-step complex tasks" },
    { feature: "Autonomy", chatbot: "Waits for input", agent: "Proactive & autonomous" },
    { feature: "Tool Usage", chatbot: "Pre-defined responses", agent: "Uses APIs, databases & tools" },
    { feature: "Memory", chatbot: "Limited context", agent: "Long-term memory & learning" },
    { feature: "Decision Making", chatbot: "Rule-based", agent: "AI reasoning & planning" },
    { feature: "Scope", chatbot: "Conversations only", agent: "End-to-end workflow automation" },
  ];

  const metrics = [
    { value: "80%", label: "Task Automation", icon: <Workflow className="w-5 h-5" /> },
    { value: "10x", label: "Faster Processing", icon: <Zap className="w-5 h-5" /> },
    { value: "24/7", label: "Autonomous Operation", icon: <RefreshCw className="w-5 h-5" /> },
    { value: "99%", label: "Accuracy Rate", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-cyan-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl"></div>
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-500/30 mb-6"
              >
                <BrainCircuit className="w-4 h-4" />
                AUTONOMOUS AI AGENTS
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                  AI Agents That Work
                </span>
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                  Autonomously For Your Business
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10">
                Beyond chatbots - AI Agents that think, plan, execute & learn. Automate entire
                business workflows with intelligent agents that use tools, make decisions &
                operate independently across your organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-xl hover:from-emerald-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Build Your AI Agent</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute -inset-1 bg-emerald-500/20 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
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
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-xl">
                    <div className="text-emerald-600">{metric.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900">{metric.value}</div>
                </div>
                <div className="text-slate-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold border border-emerald-200 mb-4">
              <Bot className="w-4 h-4" />
              AI AGENT SOLUTIONS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Autonomous Agents</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                For Every Department
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deploy intelligent agents across your organization to handle complex, multi-step tasks autonomously.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentTypes.map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${agent.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 h-full">
                  <div className={`p-4 bg-gradient-to-br ${agent.color}/10 rounded-2xl w-fit mb-6`}>
                    <div className={`bg-gradient-to-br ${agent.color} bg-clip-text text-transparent`}>
                      {agent.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{agent.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{agent.desc}</p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Fully autonomous</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Agents Work */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold border border-emerald-200 mb-4">
              <Brain className="w-4 h-4" />
              HOW IT WORKS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">The AI Agent</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Intelligence Loop
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500 hidden lg:block"></div>
            <div className="space-y-12">
              {howAgentsWork.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-3xl font-bold text-emerald-600">{step.step}</div>
                        <div className="h-8 w-0.5 bg-slate-200"></div>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
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

      {/* Chatbot vs Agent Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold border border-emerald-200 mb-4">
              <Sparkles className="w-4 h-4" />
              WHY AI AGENTS?
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">AI Agents vs</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Traditional Chatbots
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
              <div className="grid grid-cols-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white p-5">
                <div className="font-bold">Feature</div>
                <div className="font-bold text-center">Chatbot</div>
                <div className="font-bold text-center text-emerald-400">AI Agent</div>
              </div>
              {vsComparison.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid grid-cols-3 p-5 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} border-b border-slate-100`}
                >
                  <div className="font-semibold text-slate-800">{row.feature}</div>
                  <div className="text-center text-slate-500">{row.chatbot}</div>
                  <div className="text-center font-semibold text-emerald-600">{row.agent}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-cyan-600 to-emerald-600">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white">
              <span className="block">Deploy AI Agents</span>
              <span className="block">That Never Sleep</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Let autonomous AI agents handle your complex business workflows while you
              focus on strategy and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                href="/contactus"
                className="group relative px-10 py-5 bg-white text-emerald-700 font-bold rounded-2xl hover:bg-emerald-50 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <span>Get Started with AI Agents</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-emerald-300" />
                  <span className="font-semibold">Expert Guidance</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-300" />
                  <span className="font-semibold">Custom Built</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCTA
        heading="The Future of Business Automation"
        subtext="AI Agents go beyond chatbots - they reason, plan, execute & learn. Deploy autonomous intelligence across your entire organization."
        ctaText="Build Your AI Agent"
        ctaLink="/contactus"
      />
    </div>
  );
}
