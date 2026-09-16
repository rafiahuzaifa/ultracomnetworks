// src/app/services/web-development/page.tsx
"use client";

import { Code, Monitor, Layout, Layers, Feather } from "lucide-react";

export default function WebDevelopment() {
  const features = [
    {
      icon: <Code className="w-10 h-10 text-blue-500" />,
      title: "Custom Website Development",
      desc: "Responsive and scalable websites built with modern frameworks and technologies.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-blue-500" />,
      title: "Responsive Design",
      desc: "Mobile-friendly layouts that look perfect on all devices.",
    },
    {
      icon: <Layers className="w-10 h-10 text-blue-500" />,
      title: "CMS Integration",
      desc: "Easy-to-use content management systems like WordPress, Sanity, or Strapi.",
    },
    {
      icon: <Layout className="w-10 h-10 text-blue-500" />,
      title: "E-commerce Solutions",
      desc: "Online stores with payment gateways, product catalogs, and order management.",
    },
    {
      icon: <Feather className="w-10 h-10 text-blue-500" />,
      title: "SEO-Friendly Code",
      desc: "Optimized websites for speed, performance, and search engine rankings.",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <img src="/webdevlopment.jpeg" alt="Website Development" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Website Development
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            Professional websites designed and developed to help your business grow online.
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
            We build modern, fast, and secure websites that deliver measurable results.
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
