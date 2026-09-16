"use client";

import { 
  Type, Image, Palette, Layout, Book, Sparkles, Target, Globe, 
  CheckCircle, Zap, Award, Users, Star, ArrowRight, Clock 
} from "lucide-react";
import ServiceCTA from "@/app/Components/Servicecta";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Branding() {
  const features = [
    {
      icon: <Type className="w-10 h-10" />,
      title: "Logo Design",
      desc: "Professional logos that reflect your brand identity and values.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Color & Typography",
      desc: "Custom color schemes and font selections for consistent branding.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: "Visual Identity",
      desc: "Create graphics, imagery, and visual guidelines for your brand.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Brand Guidelines",
      desc: "Documentation for logos, colors, and typography for consistent use.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Book className="w-10 h-10" />,
      title: "Marketing Collateral",
      desc: "Business cards, flyers, brochures, and social templates.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Brand Strategy",
      desc: "Complete brand positioning and market differentiation strategy.",
      color: "from-cyan-500 to-blue-500"
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$499",
      duration: "2-3 weeks",
      features: [
        "2 Logo Concepts",
        "Basic Color Palette",
        "Typography Selection",
        "Social Media Kit",
        "1 Round of Revisions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      duration: "4-5 weeks",
      features: [
        "4 Logo Concepts",
        "Complete Brand Guide",
        "Stationery Design",
        "Social Media Templates",
        "Marketing Collateral",
        "3 Rounds of Revisions"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      duration: "6-8 weeks",
      features: [
        "Unlimited Concepts",
        "Full Brand Identity",
        "Website Design",
        "Animation Package",
        "Team Training",
        "Unlimited Revisions",
        "1 Year Support"
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      name: "TechVision Solutions",
      industry: "IT Services",
      result: "Brand refresh increased leads by 40%",
      image: "/case-studies/techvision.jpg"
    },
    {
      name: "Beauty Glow",
      industry: "Cosmetics",
      result: "New identity doubled social engagement",
      image: "/case-studies/beautyglow.jpg"
    },
    {
      name: "Urban Eats",
      industry: "Food & Beverage",
      result: "Rebranding boosted sales by 65%",
      image: "/case-studies/urbaneats.jpg"
    }
  ];

  return (
    <div className="w-full">
      {/* Premium Hero Section */}
      <section className="relative w-full min-h-[80vh] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0">
          <img 
            src="/branding.jpg" 
            alt="Branding & Identity" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30 mb-6"
              >
                <Sparkles className="w-4 h-4" />
                PREMIUM BRANDING
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                  Branding & Identity
                </span>
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-4">
                  That Captivates & Converts
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed mb-10">
                Transform your business into an unforgettable brand with professional logos, 
                cohesive visual systems, and strategic identity design that drives recognition and growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Start Your Brand Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute -inset-1 bg-purple-500/20 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
                </Link>

                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  View Case Studies
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
            {[
              { value: "150+", label: "Brands Transformed", icon: <Award className="w-6 h-6" /> },
              { value: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
              { value: "40%", label: "Avg. Growth Increase", icon: <Target className="w-6 h-6" /> },
              { value: "24/7", label: "Creative Support", icon: <Users className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-purple-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                    <div className="text-purple-600">{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900">{stat.value}</div>
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold border border-purple-200 mb-4">
              <Sparkles className="w-4 h-4" />
              OUR EXPERTISE
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Complete Branding</span>
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to execution, we craft brands that tell compelling stories and drive business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                      <span>Included in all packages</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold border border-purple-200 mb-4">
              <Target className="w-4 h-4" />
              PRICING PLANS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Choose Your</span>
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Branding Package
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flexible packages designed to match your business needs and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`relative ${pkg.popular ? 'scale-105' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className={`bg-white rounded-3xl border-2 ${pkg.popular ? 'border-purple-500 shadow-2xl' : 'border-slate-200 shadow-lg'} p-8 h-full`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-slate-900">{pkg.price}</div>
                    <div className="text-slate-500">Complete package</div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{pkg.duration}</span>
                    </div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/contactus"
                    className={`w-full py-4 rounded-xl font-bold text-center block transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 hover:shadow-xl hover:shadow-purple-500/30' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold border border-purple-200 mb-4">
              <Globe className="w-4 h-4" />
              SUCCESS STORIES
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-slate-900">Branding</span>
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                That Drives Results
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                      {caseStudy.name}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-slate-500 mb-2">{caseStudy.industry}</div>
                    <div className="flex items-center gap-2 text-green-600 font-bold">
                      <Target className="w-4 h-4" />
                      {caseStudy.result}
                    </div>
                    <button className="mt-6 text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2 group">
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              <Sparkles className="w-4 h-4" />
              READY TO STAND OUT?
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white">
              <span className="block">Let's Create Your</span>
              <span className="block">Unforgettable Brand</span>
            </h2>

            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Schedule a free branding consultation and discover how strategic design can transform 
              your business identity and market presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                href="/contactus"
                className="group relative px-10 py-5 bg-white text-purple-700 font-bold rounded-2xl hover:bg-purple-50 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute -inset-1 bg-white/30 rounded-2xl blur-md group-hover:blur-xl transition-all"></div>
              </Link>

              <Link
                href="/view-our-work"
                className="px-10 py-5 bg-purple-700/30 text-white font-bold rounded-2xl border-2 border-white/30 hover:border-white/50 hover:bg-purple-700/40 transition-all duration-300"
              >
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCTA
        heading="Elevate Your Brand Identity"
        subtext="Our expert designers will craft a unique visual identity that communicates your values, attracts customers, and drives business growth."
        ctaText="Start Your Brand Transformation"
        ctaLink="/contactus"
      />
    </div>
  );
}