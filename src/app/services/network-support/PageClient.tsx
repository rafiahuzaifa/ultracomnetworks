"use client";

import {
  Monitor,
  Clock,
  AlertCircle,
  Users,
  BarChart2,
} from "lucide-react";

export default function NetworkSupport() {
  const features = [
    {
      icon: <Monitor className="w-10 h-10 text-blue-500" />,
      title: "24/7 Network Operations Center (NOC)",
      desc: "Round-the-clock monitoring by certified engineers to ensure uptime and performance.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "On-site Engineers Within 2 Hours",
      desc: "Rapid deployment of expert technicians for urgent network issues and maintenance.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-500" />,
      title: "Real-time Performance Monitoring",
      desc: "Continuous surveillance of your infrastructure to detect and prevent issues proactively.",
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-blue-500" />,
      title: "Automated Alerts & Issue Resolution",
      desc: "Instant alerts and automated troubleshooting to minimize downtime and impact.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-blue-500" />,
      title: "Monthly Health Reports & Optimization",
      desc: "Detailed analytics and recommendations to optimize network performance continually.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <img
          src="/mock-devices.jpg"
          alt="Network Support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            IT Network Support
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            Proactive monitoring, rapid response, and expert engineers ensure your network runs smoothly — day or night.
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
            Comprehensive network support to keep your business critical systems online and optimized.
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
