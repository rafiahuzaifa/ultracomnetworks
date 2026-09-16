// src/app/services/social-media/page.tsx
"use client";

import { Facebook, Instagram, Twitter, Linkedin, Video } from "lucide-react";

export default function SocialMedia() {
  const features = [
    {
      icon: <Facebook className="w-10 h-10 text-blue-600" />,
      title: "Platform Strategy",
      desc: "Developing strategies for Facebook, Instagram, Twitter, LinkedIn, and TikTok.",
    },
    {
      icon: <Instagram className="w-10 h-10 text-pink-500" />,
      title: "Content Creation",
      desc: "Visual and written content optimized for each social platform.",
    },
    {
      icon: <Video className="w-10 h-10 text-red-500" />,
      title: "Video Marketing",
      desc: "Short videos, reels, and stories to boost engagement.",
    },
    {
      icon: <Twitter className="w-10 h-10 text-blue-400" />,
      title: "Ads & Campaigns",
      desc: "Paid campaigns for lead generation and brand awareness.",
    },
    {
      icon: <Linkedin className="w-10 h-10 text-blue-700" />,
      title: "Analytics & Reporting",
      desc: "Track engagement, growth, and conversions across platforms.",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <img src="/socialmedia.jpg" alt="Social Media Marketing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Social Media Marketing
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            Grow your business online with targeted campaigns and engaging content.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Key Features
          </h2>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive social media marketing solutions to boost your brand presence.
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
