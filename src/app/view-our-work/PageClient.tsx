"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ViewOurWork() {
  const projects = [
    {
      title: "Corporate Website Design",
      subtitle: "Next.js • Tailwind • Sanity CMS",
      image: "/portfolio1.jpg",
      link: "#"
    },
    {
      title: "AI Chatbot Automation",
      subtitle: "WhatsApp + Website Support Bot",
      image: "/portfolio2.jpg",
      link: "#"
    },
    {
      title: "E-Commerce Storefront",
      subtitle: "Full Stack + Payment Integration",
      image: "/portfolio3.jpg",
      link: "#"
    },
    {
      title: "Digital Agency Web UI",
      subtitle: "Modern UI/UX Focused Branding",
      image: "/portfolio4.jpg",
      link: "#"
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#0a2640]"
        >
          Our Work & Recent Projects
        </motion.h1>

        <p className="text-gray-600 mt-4 max-w-3xl text-lg">
          We design, develop and launch professional web platforms, AI systems, and digital automation
          solutions for startups, enterprises, and agencies.
        </p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0a2640]">{project.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{project.subtitle}</p>

                <Link
                  href={project.link}
                  className="inline-block mt-5 px-5 py-2 border border-[#0072CE] text-[#0072CE] rounded-lg hover:bg-[#E6F1FF] transition"
                >
                  View Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-[#0a2640]">
            Need a Website or AI Chatbot for Your Business?
          </h2>
          <p className="text-gray-600 mt-2">
            We build custom, scalable & fully branded solutions. Let’s talk.
          </p>

          <Link
            href="/contactus"
            className="mt-6 inline-block px-8 py-3 bg-[#0072CE] text-white rounded-xl hover:bg-[#005FAE] transition shadow-md"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}
