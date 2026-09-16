"use client";

import {
  Globe,
  SignalHigh,
  ShieldCheck,
  Zap,
  Headphones,
} from "lucide-react";

export default function InternetService() {
  const features = [
    {
      icon: <SignalHigh className="w-10 h-10 text-blue-500" />,
      title: "Dedicated Fiber Connectivity",
      desc: "High-performance fiber internet with symmetric upload & download speeds.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "99.9% SLA Uptime",
      desc: "Enterprise-grade uptime backed by strong service-level agreements.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
      title: "Built-in DDoS Protection",
      desc: "Advanced network security to protect against targeted cyber threats.",
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: "Up to 10 Gbps Speeds",
      desc: "Scalable bandwidth options built for modern business requirements.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-blue-500" />,
      title: "Priority Support",
      desc: "24/7 NOC availability with rapid response for critical issues.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <img
          src="/internet.jpeg"
          alt="Internet Service"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Internet Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            High-speed enterprise internet with dedicated fiber, MPLS, and SD-WAN connectivity.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            What We Offer
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Reliable, scalable, and secure business-grade connectivity built for performance.
          </p>

          <div className="grid gap-10 md:grid-cols-3 mt-14">
            {features.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gray-50 shadow hover:shadow-lg hover:bg-gray-100 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
