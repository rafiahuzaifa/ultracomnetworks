"use client";

import {
  MapPin,
  Layers,
  Wifi,
  RefreshCcw,
  BookOpen,
} from "lucide-react";

export default function LanWan() {
  const features = [
    {
      icon: <MapPin className="w-10 h-10 text-blue-500" />,
      title: "Site Survey & Capacity Planning",
      desc: "Thorough analysis of existing infrastructure to design scalable LAN/WAN networks.",
    },
    {
      icon: <Layers className="w-10 h-10 text-blue-500" />,
      title: "Layer 2/3 Switching & Routing",
      desc: "Efficient and secure deployment of switching and routing infrastructure.",
    },
    {
      icon: <Wifi className="w-10 h-10 text-blue-500" />,
      title: "VLAN, QoS & Segmentation",
      desc: "Optimized traffic management for better performance and security across sites.",
    },
    {
      icon: <RefreshCcw className="w-10 h-10 text-blue-500" />,
      title: "Zero-Downtime Migration",
      desc: "Seamless migration from legacy networks to modern LAN/WAN solutions.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-500" />,
      title: "Documentation & Training",
      desc: "Complete network documentation and staff training for smooth operations.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <img
          src="/lanwan.jpeg"
          alt="LAN & WAN Networking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            LAN & WAN Networking
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            End-to-end network design, deployment, and optimization for campuses and multi-site operations.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Key Capabilities
          </h2>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Robust, secure, and highly scalable networking solutions for enterprise environments.
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
