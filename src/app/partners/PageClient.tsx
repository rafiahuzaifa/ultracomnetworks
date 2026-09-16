"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Cisco", logo: "/partners/cisco.png" },
  { name: "MikroTik", logo: "/partners/mikrotik.png" },
  { name: "Juniper", logo: "/partners/juniper.png" },
  { name: "Ubiquiti", logo: "/partners/ubiquiti.png" },
  { name: "Huawei", logo: "/partners/huawei.png" },
  { name: "HP Enterprise", logo: "/partners/hpe.png" },
  { name: "Dell", logo: "/partners/dell.png" },
  { name: "Fortinet", logo: "/partners/fortinet.png" },
  { name: "VMware", logo: "/partners/vmware.png" },
];

export default function PartnersPage() {
  return (
    <section className="relative py-28 bg-[#f1f5f9]">
      {/* Premium Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/40 via-transparent to-blue-200/40 blur-3xl" />

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-6 relative mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-[#0f172a]"
        >
          Our Trusted
          <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Global Partners
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 mt-6 leading-relaxed"
        >
          Working with the world’s leading technology companies to deliver
          cutting-edge connectivity, IT infrastructure, and enterprise solutions.
        </motion.p>
      </div>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 relative">
        {partners.map((p, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.06 }}
            transition={{ duration: 0.3 }}
            className="group bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl rounded-2xl p-6 flex items-center justify-center h-40 transition-all"
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={140}
              height={60}
              className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Trusted Section */}
      <div className="max-w-5xl mx-auto text-center mt-28 px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-[#0f172a]"
        >
          A Partnership Built on
          <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Trust & Reliability
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mt-5 max-w-3xl mx-auto"
        >
          Our partner ecosystem empowers us to deliver enterprise-grade services with
          the highest standards of performance, uptime, and scalability.
        </motion.p>
      </div>
    </section>
  );
}
