/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ShieldCheck,
  Server,
  KeyRound,
  Cpu,
  Bolt,
} from "lucide-react";

export default function DataCenter() {
  const features = [
    {
      icon: <Server className="w-10 h-10 text-blue-500" />,
      title: "Tier 3+ Infrastructure",
      desc: "N+1 redundancy with high reliability and guaranteed uptime.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
      title: "Secure Racks & Cages",
      desc: "Private cages and dedicated full racks with strict security controls.",
    },
    {
      icon: <Bolt className="w-10 h-10 text-blue-500" />,
      title: "Dual Power Feeds",
      desc: "A/B power sources with continuous failover protection.",
    },
    {
      icon: <KeyRound className="w-10 h-10 text-blue-500" />,
      title: "Biometric Access",
      desc: "24/7 monitored facility with biometric & RFID authentication.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-blue-500" />,
      title: "Remote Hands",
      desc: "Trained engineers available 24/7 for onsite support.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <img
          src="/datacenter.jpeg"
          alt="Data Center"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Data Center Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            Reliable, secure, and scalable infrastructure for mission-critical applications.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Our Capabilities
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            High-performance colocation with world-class power, cooling, and security.
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
