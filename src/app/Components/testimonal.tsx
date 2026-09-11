"use client";

import Image from "next/image";
import { Star, Quote, Sparkles, TrendingUp, Award, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function UltracomTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Enhanced client testimonials data
  const clients = [
    {
      id: 1,
      name: "Bilal Ahmed",
      role: "IT Manager",
      company: "TechVision Solutions",
      text: "Ultracom Networks has been a game changer for our office. Their enterprise connectivity solution provided 99.9% uptime and reduced our IT overhead by 40%. The support team is exceptional.",
      avatar: "/clients/b1.webp",
      service: "Enterprise Internet",
      rating: 5,
      duration: "2+ Years",
      results: ["40% cost reduction", "99.9% uptime", "24/7 support"],
      category: "connectivity"
    },
    {
      id: 2,
      name: "Sara Khan",
      role: "Marketing Director",
      company: "Beauty Glow",
      text: "Our website developed by Ultracom increased conversion rates by 210%. The animations, performance optimization, and SEO implementation were beyond expectations. Truly a premium experience.",
      avatar: "/clients/r1.webp",
      service: "Website Development",
      rating: 5,
      duration: "1 Year",
      results: ["210% conversion increase", "95+ PageSpeed score", "Mobile-first design"],
      category: "digital"
    },
    {
      id: 3,
      name: "Zain Ali",
      role: "Senior Developer",
      company: "Freelance",
      text: "As a remote developer, I need rock-solid internet. Ultracom's fiber connection gives me <10ms latency and zero downtime. It's transformed how I work with international clients.",
      avatar: "/clients/r2.webp",
      service: "Home Internet Pro",
      rating: 5,
      duration: "18 Months",
      results: ["<10ms latency", "Zero downtime", "24/7 reliability"],
      category: "connectivity"
    },
    {
      id: 4,
      name: "Dr. Amna Qureshi",
      role: "Clinic Director",
      company: "Qureshi Dental Care",
      text: "Ultracom helped digitize our entire clinic operations. From cloud records to telemedicine, their solutions are secure, HIPAA-compliant, and incredibly reliable.",
      avatar: "/clients/b2.webp",
      service: "Healthcare IT Solutions",
      rating: 5,
      duration: "2 Years",
      results: ["100% digital shift", "HIPAA compliant", "Secure cloud"],
      category: "enterprise"
    },
    {
      id: 5,
      name: "Usman Tariq",
      role: "CEO",
      company: "Tariq Traders",
      text: "Our e-commerce platform built by Ultracom handles 10,000+ daily visitors seamlessly. The attention to performance, security, and user experience is unmatched.",
      avatar: "/clients/b1.webp",
      service: "E-commerce Development",
      rating: 5,
      duration: "1.5 Years",
      results: ["10K+ daily visitors", "99.95% uptime", "PCI DSS compliant"],
      category: "digital"
    },
    {
      id: 6,
      name: "Maria Rodriguez",
      role: "Operations Head",
      company: "Global Logistics Inc.",
      text: "Ultracom's network infrastructure allowed us to connect 5 offices seamlessly. Their WAN solution improved inter-office communication by 300%.",
      avatar: "/clients/r1.webp",
      service: "WAN Solutions",
      rating: 5,
      duration: "3 Years",
      results: ["5 offices connected", "300% efficiency", "Scalable network"],
      category: "enterprise"
    }
  ];

  const filteredClients = activeCategory === "all" 
    ? clients 
    : clients.filter(client => client.category === activeCategory);

  const categories = [
    { id: "all", label: "All Services", count: clients.length },
    { id: "connectivity", label: "Connectivity", count: clients.filter(c => c.category === "connectivity").length },
    { id: "digital", label: "Digital", count: clients.filter(c => c.category === "digital").length },
    { id: "enterprise", label: "Enterprise", count: clients.filter(c => c.category === "enterprise").length },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    const autoScroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 400, behavior: "smooth" });
      }
    };

    const interval = setInterval(autoScroll, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "connectivity": return "text-blue-400";
      case "digital": return "text-purple-400";
      case "enterprise": return "text-emerald-400";
      default: return "text-blue-400";
    }
  };

  return (
    <section className="relative bg-slate-900 text-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <Sparkles className="w-4 h-4" />
            TRUSTED BY 500+ ENTERPRISES
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Client Success Stories
          </h1>
          <p className="text-xl sm:text-2xl text-blue-400 font-semibold">
            Trusted Across Pakistan
          </p>

          <p className="text-base sm:text-lg text-slate-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            Discover how businesses transform with Ultracom&apos;s premium solutions.
            <span className="block text-slate-300 font-medium mt-1">
              Average rating: 4.9/5 across all services
            </span>
          </p>
        </motion.div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold text-sm transition-colors duration-200 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.label}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === category.id
                  ? "bg-white/20"
                  : "bg-white/10"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mb-14 sm:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { value: "50+", label: "Happy Clients", icon: TrendingUp },
              { value: "4.9/5", label: "Average Rating", icon: Star },
              { value: "99.8%", label: "Satisfaction Rate", icon: Award },
              { value: "24/7", label: "Support Available", icon: Zap },
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-blue-500/15 rounded-lg">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden sm:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 justify-between pointer-events-none z-20">
            <button
              onClick={scrollLeft}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="pointer-events-auto p-3 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 transition-colors duration-200 -ml-2"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={scrollRight}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="pointer-events-auto p-3 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 transition-colors duration-200 -mr-2"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Testimonials Container */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-auto scrollbar-hide gap-5 sm:gap-6 pb-6 snap-x snap-mandatory scroll-smooth px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AnimatePresence mode="wait">
              {filteredClients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex-none w-[300px] sm:w-96 lg:w-[400px] bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-7 snap-center hover:border-slate-600 transition-colors duration-300"
                >
                  <Quote className="w-9 h-9 text-blue-500/60 mb-5" />

                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 min-h-[100px]">
                    &ldquo;{client.text}&rdquo;
                  </p>

                  {/* Results Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {client.results.map((result, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-slate-300">
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={client.avatar || "/avatar-placeholder.jpg"}
                        alt={client.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-white text-sm">{client.name}</h4>
                      <p className="text-slate-400 text-xs">{client.role} · {client.company}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-slate-500">{client.duration}</span>
                        <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                        <span className={`text-xs font-semibold ${getCategoryColor(client.category)}`}>
                          {client.service}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between mt-5 pt-5 border-t border-white/10">
                    <div className="flex gap-0.5">
                      {[...Array(client.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                      ))}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Verified Customer
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-400 mb-7 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Ultracom Networks for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 group">
                Get Free Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-7 py-3.5 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
                View All Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}