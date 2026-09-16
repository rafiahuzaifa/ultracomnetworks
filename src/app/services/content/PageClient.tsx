// src/app/services/content/page.tsx
"use client";

import { PenTool, FileText, Image, Video, Mic } from "lucide-react";

export default function ContentCreation() {
  const features = [
    {
      icon: <PenTool className="w-10 h-10 text-orange-500" />,
      title: "Blog & Article Writing",
      desc: "SEO-optimized, engaging content for your website and blog.",
    },
    {
      icon: <FileText className="w-10 h-10 text-orange-500" />,
      title: "Website Copywriting",
      desc: "Persuasive copy to boost conversions and communicate your brand.",
    },
    {
      icon: <Image className="w-10 h-10 text-orange-500" />,
      title: "Graphics & Infographics",
      desc: "Visual content to explain complex ideas effectively.",
    },
    {
      icon: <Video className="w-10 h-10 text-orange-500" />,
      title: "Video Content",
      desc: "Professional video creation for web and social media platforms.",
    },
    {
      icon: <Mic className="w-10 h-10 text-orange-500" />,
      title: "Podcast & Audio",
      desc: "Audio content to engage your audience across multiple channels.",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <img src="/content.jpeg" alt="Content Creation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Content Creation
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            High-quality content for web, social media, and marketing campaigns.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Key Features
          </h2>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Engaging and SEO-friendly content crafted for your audience.
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
