// src/app/services/seo/page.tsx
"use client";

import { TrendingUp, Search, BarChart, Link as LinkIcon, Globe } from "lucide-react";

export default function SEO() {
  const features = [
    {
      icon: <TrendingUp className="w-10 h-10 text-green-500" />,
      title: "Keyword Research",
      desc: "Identify the best keywords for your business to rank higher in search results.",
    },
    {
      icon: <Search className="w-10 h-10 text-green-500" />,
      title: "On-Page SEO",
      desc: "Optimize meta tags, headings, and content for search engines.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-green-500" />,
      title: "Analytics & Reporting",
      desc: "Track performance, traffic, and conversion metrics in real time.",
    },
    {
      icon: <LinkIcon className="w-10 h-10 text-green-500" />,
      title: "Backlink Strategy",
      desc: "High-quality backlinks to improve domain authority and rankings.",
    },
    {
      icon: <Globe className="w-10 h-10 text-green-500" />,
      title: "Local SEO",
      desc: "Target local customers with optimized Google My Business and maps listing.",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <img src="/seo.webp" alt="SEO Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            SEO Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            Improve your websites search ranking, increase traffic, and boost conversions.
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Key Features
          </h2>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide complete SEO solutions for businesses of all sizes.
          </p>

          <div className="grid gap-10 md:grid-cols-3 mt-14">
            {features.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gray-50 shadow hover:shadow-lg hover:bg-gray-100 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
