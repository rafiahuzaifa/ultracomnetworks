"use client";

import {
  Server,
  Phone,
  Settings,
  Users,
  FileText,
} from "lucide-react";

export default function PBXInstallation() {
  const features = [
    {
      icon: <Server className="w-10 h-10 text-blue-500" />,
      title: "Asterisk, 3CX, FreePBX Deployment",
      desc: "Full PBX system setup and configuration tailored to your business needs.",
    },
    {
      icon: <Phone className="w-10 h-10 text-blue-500" />,
      title: "SIP Trunking & VoIP Setup",
      desc: "Seamless integration of VoIP lines and SIP trunks for high-quality voice communication.",
    },
    {
      icon: <Settings className="w-10 h-10 text-blue-500" />,
      title: "Extension Programming & IVR",
      desc: "Custom IVR flows, extensions, and routing rules to optimize call handling.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "On-site Installation & Testing",
      desc: "Professional on-site installation with thorough testing and verification.",
    },
    {
      icon: <FileText className="w-10 h-10 text-blue-500" />,
      title: "Staff Training & Documentation",
      desc: "Complete training for your staff along with detailed system documentation.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <img
          src="/call.webp"
          alt="PBX Installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            PBX Installation
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            Professional installation and configuration of IP PBX systems with full training.
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
            Ensure smooth PBX deployment, configuration, and staff readiness with our professional services.
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
