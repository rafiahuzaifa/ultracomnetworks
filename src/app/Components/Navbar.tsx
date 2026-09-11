"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, Calendar, ChevronDown, Search, ChevronRight,
  Globe, Shield, Zap, Users, Mail, MapPin, Clock, Bot
} from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<null | "services" | "about">(null);
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<null | "services" | "about">(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services Dropdown Data
  const servicesColumns = [
    {
      title: "Connectivity",
      icon: <Globe className="w-4 h-4 text-blue-600" />,
      items: [
        { name: "INTERNET", href: "/services/internet", desc: "High-speed broadband solutions" },
        { name: "LAN / WAN", href: "/services/lan-wan", desc: "Local & wide area networks" },
        { name: "Cloud WiFi", href: "/services/cloud-wifi", desc: "Enterprise wireless networks" },
      ],
    },
    {
      title: "Professional",
      icon: <Shield className="w-4 h-4 text-blue-600" />,
      items: [
        { name: "Network Support", href: "/services/network-support", desc: "24/7 monitoring & support" },
        { name: "Data Center", href: "/services/data-center", desc: "Infrastructure & hosting" },
        { name: "Consultation", href: "/services/consultation", desc: "Expert IT strategy" },
        { name: "Call Center", href: "/services/call-center", desc: "Customer support solutions" },
      ],
    },
    {
      title: "Digital",
      icon: <Zap className="w-4 h-4 text-blue-600" />,
      items: [
        { name: "Website Development", href: "/services/webdevlopment2", desc: "Custom web applications" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing", desc: "Brand growth & engagement" },
        { name: "Logo & Branding", href: "/services/branding", desc: "Visual identity design" },
        { name: "Seo Services", href: "/services/seo", desc: "Search engine optimization" },
        { name: "Content Creation", href: "/services/content", desc: "Engaging media content" },
      ],
    },
    {
      title: "AI & Automation",
      icon: <Bot className="w-4 h-4 text-blue-600" />,
      items: [
        { name: "AI Chatbot Development", href: "/services/ai-chatbot", desc: "Smart conversational bots" },
        { name: "AI Applications", href: "/services/ai-applications", desc: "Custom ML & AI solutions" },
        { name: "AI Agents", href: "/services/ai-agents", desc: "Autonomous business agents" },
      ],
    },
  ];

  // About Us Dropdown Data
  const aboutColumns = [
    {
      title: "Company",
      icon: <Users className="w-4 h-4 text-blue-600" />,
      items: [
        { name: "Our Story", href: "/aboutus#story", desc: "Journey & milestones" },
        { name: "Mission & Vision", href: "/aboutus#mission", desc: "Our purpose & future" },
        { name: "Core Values", href: "/aboutus#values", desc: "Principles we stand by" },
      ],
    },
    {
      title: "Team",
      icon: <Users className="w-4 h-4 text-blue-600" />,
      items: [
        { name: "Leadership", href: "/aboutus#leadership", desc: "Meet our leaders" },
        { name: "Careers", href: "/career", desc: "Join our team" },
      ],
    },
    {
      title: "More",
      icon: <Zap className="w-4 h-4 text-blue-600" />,
      items: [
        { name: "Partners", href: "/partners", desc: "Strategic alliances" },
        { name: "Blog", href: "/blog", desc: "Insights & updates" },
      ],
    },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden sm:block bg-slate-900 text-slate-300 py-2">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs">Mon-Fri: 9AM-6PM</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs">Karachi, Pakistan</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <a href="mailto:info@ultracomnetworks.com" className="text-xs hover:text-white transition">
                info@ultracomnetworks.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setShowForm(true)}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              Free Consultation
            </button>

            <a
              href="tel:+923111000929"
              className="flex items-center gap-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-full transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              +92 311 1000929
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white shadow-sm"}`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative group">
            <Image
              src="/logo.png"
              alt="Ultracom Networks"
              width={180}
              height={58}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-9 text-slate-700 font-medium text-[15px]">
            <Link
              href="/"
              className="relative group py-2 transition-colors duration-200 hover:text-blue-600"
            >
              Home
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 py-2 transition-colors duration-200 hover:text-blue-600">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1000px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50"
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-4 gap-8">
                        {servicesColumns.map((col) => (
                          <div key={col.title}>
                            <div className="flex items-center gap-2 mb-4">
                              {col.icon}
                              <h4 className="font-semibold text-slate-900 text-sm tracking-wide uppercase">{col.title}</h4>
                            </div>
                            <ul className="space-y-1">
                              {col.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="group/item block py-2 px-2.5 -mx-2.5 rounded-lg border-l-2 border-transparent hover:border-blue-500 hover:bg-slate-50 transition-all duration-150"
                                  >
                                    <div className="font-medium text-slate-800 group-hover/item:text-blue-600 transition-colors text-sm">
                                      {item.name}
                                    </div>
                                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                        <p className="text-sm text-slate-500">Enterprise-grade IT, Digital & AI solutions under one roof.</p>
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-1.5 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200 text-sm"
                        >
                          All Services
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className="relative group py-2 transition-colors duration-200 hover:text-blue-600"
            >
              Business Spotlight
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 py-2 transition-colors duration-200 hover:text-blue-600">
                About Us
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[880px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50"
                  >
                    <div className="p-8 flex gap-10">
                      <div className="w-5/12">
                        <div className="relative overflow-hidden rounded-xl">
                          <Image
                            src="/aboutus.jpg"
                            alt="About"
                            width={400}
                            height={260}
                            className="rounded-xl w-full h-56 object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mt-5">
                          About Ultracom Networks
                        </h3>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                          Trusted partner in connectivity & digital transformation with 10+ years of excellence.
                        </p>
                        <Link
                          href="/aboutus"
                          className="mt-5 inline-flex items-center gap-1.5 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200 text-sm"
                        >
                          Company Overview
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="w-7/12 grid grid-cols-3 gap-8">
                        {aboutColumns.map((col) => (
                          <div key={col.title}>
                            <div className="flex items-center gap-2 mb-4">
                              {col.icon}
                              <h4 className="font-semibold text-slate-900 text-sm tracking-wide uppercase">{col.title}</h4>
                            </div>
                            <ul className="space-y-1">
                              {col.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="group/item block py-2 px-2.5 -mx-2.5 rounded-lg border-l-2 border-transparent hover:border-blue-500 hover:bg-slate-50 transition-all duration-150"
                                  >
                                    <div className="font-medium text-slate-800 group-hover/item:text-blue-600 transition-colors text-sm">
                                      {item.name}
                                    </div>
                                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contactus"
              className="relative group py-2 transition-colors duration-200 hover:text-blue-600"
            >
              Contact Us
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Search Button */}
            <button className="p-2.5 rounded-full hover:bg-slate-100 transition-colors duration-200">
              <Search className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-7 h-7 text-slate-800" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-7 h-7 text-slate-800" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col min-h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="Ultracom Networks"
                      width={130}
                      height={42}
                      className="object-contain"
                    />
                  </div>

                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-slate-600" />
                  </button>
                </div>

                {/* Navigation Content */}
                <div className="flex-1 px-4 py-4">
                  <div className="space-y-1">
                    <Link
                      href="/"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-3 py-3.5 rounded-xl hover:bg-slate-50 transition-colors duration-150"
                    >
                      <span className="font-semibold text-slate-800">Home</span>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </Link>

                    {/* Services Accordion */}
                    <div>
                      <button
                        onClick={() => setOpenAccordion(openAccordion === "services" ? null : "services")}
                        className="w-full flex items-center justify-between px-3 py-3.5 rounded-xl hover:bg-slate-50 transition-colors duration-150"
                      >
                        <span className="font-semibold text-slate-800">Services</span>
                        <motion.div animate={{ rotate: openAccordion === "services" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-5 h-5 text-slate-500" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openAccordion === "services" && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 pb-4 pt-1 space-y-5">
                              {servicesColumns.map((col) => (
                                <div key={col.title}>
                                  <div className="flex items-center gap-2 mb-2">
                                    {col.icon}
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{col.title}</h4>
                                  </div>
                                  <ul className="space-y-0.5">
                                    {col.items.map((item) => (
                                      <li key={item.name}>
                                        <Link
                                          href={item.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-2.5 px-2 rounded-lg hover:bg-slate-50 transition-colors duration-150"
                                        >
                                          <div className="font-medium text-slate-800 text-sm">{item.name}</div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}

                              <Link
                                href="/services"
                                onClick={() => setMobileOpen(false)}
                                className="block mt-2 py-3 bg-blue-600 text-white font-semibold text-center rounded-xl shadow-md shadow-blue-600/25 hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
                              >
                                View All Services
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link
                      href="/blog"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-3 py-3.5 rounded-xl hover:bg-slate-50 transition-colors duration-150"
                    >
                      <span className="font-semibold text-slate-800">Business Spotlight</span>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </Link>

                    {/* About Us Accordion */}
                    <div>
                      <button
                        onClick={() => setOpenAccordion(openAccordion === "about" ? null : "about")}
                        className="w-full flex items-center justify-between px-3 py-3.5 rounded-xl hover:bg-slate-50 transition-colors duration-150"
                      >
                        <span className="font-semibold text-slate-800">About Us</span>
                        <motion.div animate={{ rotate: openAccordion === "about" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-5 h-5 text-slate-500" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openAccordion === "about" && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 pb-4 pt-1 space-y-5">
                              {aboutColumns.map((col) => (
                                <div key={col.title}>
                                  <div className="flex items-center gap-2 mb-2">
                                    {col.icon}
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{col.title}</h4>
                                  </div>
                                  <ul className="space-y-0.5">
                                    {col.items.map((item) => (
                                      <li key={item.name}>
                                        <Link
                                          href={item.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-2.5 px-2 rounded-lg hover:bg-slate-50 transition-colors duration-150"
                                        >
                                          <div className="font-medium text-slate-800 text-sm">{item.name}</div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link
                      href="/contactus"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-3 py-3.5 rounded-xl hover:bg-slate-50 transition-colors duration-150"
                    >
                      <span className="font-semibold text-slate-800">Contact Us</span>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </Link>
                  </div>

                  {/* Mobile CTA Section */}
                  <div className="mt-8 mx-1 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-4">Need Immediate Support?</h3>
                    <a
                      href="tel:+923111000929"
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-blue-600/25 hover:bg-blue-700 hover:shadow-lg transition-all duration-200 mb-3"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Phone className="w-4.5 h-4.5" />
                      Call Now: +92 311 1000929
                    </a>
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        setShowForm(true);
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold py-3 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-200"
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule Free Consultation
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-5 border-t border-slate-100 text-center">
                  <div className="text-xs text-slate-400">© 2025 Ultracom Networks · Premium IT & Digital Solutions</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CONSULTATION FORM MODAL */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-60 p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl mb-4">
                  <Calendar className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1.5">Book Free Consultation</h3>
                <p className="text-sm text-slate-500">Our experts will contact you within 24 hours</p>
              </div>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus("loading");
                  setFormMessage("");

                  const formData = new FormData(e.currentTarget);
                  const data = {
                    name: formData.get("consultation_name") as string,
                    email: formData.get("consultation_email") as string,
                    phone: formData.get("consultation_phone") as string,
                    message: formData.get("consultation_message") as string,
                    service: "Free Consultation"
                  };

                  try {
                    const res = await fetch("/api/form", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });

                    const result = await res.json();

                    if (res.ok) {
                      setFormStatus("success");
                      setFormMessage("Consultation request sent! We'll contact you within 24 hours.");
                      (e.target as HTMLFormElement).reset();
                      setTimeout(() => {
                        setShowForm(false);
                        setFormStatus("idle");
                      }, 3000);
                    } else {
                      setFormStatus("error");
                      setFormMessage(result.error || "Failed to send request. Please try again.");
                    }
                  } catch (err) {
                    setFormStatus("error");
                    setFormMessage("Network error. Please try again.");
                  }
                }}
                className="space-y-3.5"
              >
                <input
                  name="consultation_name"
                  placeholder="Your Full Name"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/15 transition-all duration-200"
                />
                <input
                  type="email"
                  name="consultation_email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/15 transition-all duration-200"
                />
                <input
                  type="tel"
                  name="consultation_phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/15 transition-all duration-200"
                />
                <textarea
                  name="consultation_message"
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/15 transition-all duration-200 resize-none"
                ></textarea>

                <AnimatePresence>
                  {(formStatus === "success" || formStatus === "error") && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-3.5 rounded-xl border text-center text-sm font-medium ${formStatus === "success" ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"}`}
                    >
                      {formMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-blue-600/25 hover:bg-blue-700 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "loading" ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span>Submit Request</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </button>
              </form>

              <p className="text-center text-xs text-slate-400 mt-5">
                By submitting, you agree to our Privacy Policy
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
