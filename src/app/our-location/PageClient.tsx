// src/app/our-location/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const offices = [
  {
    city: "Karachi - Head Office",
    address: "Plot C-10/2, Shahrah-e-Faisal, Karachi, Pakistan",
    phone: "+92 3111000929",
    email: "sales@ultracomnetworks.pk",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.234!2d67.034!3d24.860!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70b7b8b8b7%3A0x7g7g7g7g7g7g7g7g!2sShahrah-e-Faisal!5e0!3m2!1sen!2s!4v1698765432101!5m2!1sen!2s",
  },
];

export default function OurLocation() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden font-poppins">
        <Image
          src="/locations-hero.jpg"
          alt="UltraCom Head Office Karachi"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
              Our Location
            </h1>
            <p className="text-2xl md:text-4xl font-light text-blue-200">
              Head Office in Karachi
            </p>
            <p className="text-lg md:text-xl text-blue-100 mt-6 max-w-3xl mx-auto">
              Visit our head office in Karachi — we're always ready to serve you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Karachi Office Only */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            >
              {/* Office Info */}
              <div className="p-12 space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-slate-800 mb-2">
                    {office.city}
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
                    Head Office
                  </span>
                </div>

                <div className="space-y-5 text-gray-700">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="leading-relaxed">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <a href={`tel:${office.phone}`} className="text-blue-600 font-semibold hover:text-blue-800">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <a href={`mailto:${office.email}`} className="text-blue-600 font-semibold hover:text-blue-800">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <span>{office.hours}</span>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition shadow-lg"
                >
                  Get Directions
                </a>
              </div>

              {/* Map */}
              <div className="h-96 lg:h-full min-h-96">
                <iframe
                  src={office.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Visit Us?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Drop by our Karachi head office anytime — our team is always happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+92 3111000929

"
              className="inline-flex items-center justify-center gap-3 bg-white text-slate-800 px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-2xl"
            >
              Call Now: +92 3111000929


            </a>
            <a
              href="/contactus"
              className="inline-flex items-center justify-center gap-3 border-2 border-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-white/10 transition"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
    </>
  );
}