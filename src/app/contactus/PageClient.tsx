'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MessageSquare, Send, Zap, Shield, Clock } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Your message has been sent! Thank you for choosing us.");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setMessage(result.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <>
      {/* HERO + FORM SECTION */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
            Used by the world’s most connected companies
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: CONTACT FORM */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
              <div className="mb-6">
                <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                  HOW CAN WE HELP?
                </p>
                <h2 className="text-3xl font-bold text-blue-900 mt-2">Talk about your needs</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input required name="name" type="text" placeholder="Your Name" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                <input name="company" type="text" placeholder="Company Name" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                <input required name="email" type="email" placeholder="Email Address" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                <input name="phone" type="tel" placeholder="Phone Number" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                <textarea required name="message" rows={5} placeholder="Tell us about your project..." className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"></textarea>

                {/* Success / Error Messages */}
                {status === "success" && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center font-semibold animate-pulse">
                    {message}
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {status === "loading" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
              <Image
                src="/businessmeeting.jpg"
                alt="Team discussing project"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT INFO CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Contact Sales</h3>
              <p className="text-gray-600 text-sm">sales@ultracomnetworks.pk<br />+92 3111000929</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Customer Support</h3>
              <p className="text-gray-600 text-sm">24/7 Dedicated Assistance</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Technical Support</h3>
              <p className="text-gray-600 text-sm">+92 3111000929<br />+92 3111000939 </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-4">
            WHY ULTRACOM NETWORKS?
          </p>
          <h2 className="text-4xl font-bold text-blue-900 mb-16">Values that drive us</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-50">
              <Zap className="w-14 h-14 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Innovative Connectivity</h3>
              <p className="text-gray-600">High-speed solutions that keep you ahead</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-50">
              <Shield className="w-14 h-14 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Client-Centric Service</h3>
              <p className="text-gray-600">Personalized support tailored to your needs</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-50">
              <Clock className="w-14 h-14 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">99.99% Uptime</h3>
              <p className="text-gray-600">Enterprise-grade reliability you can trust</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}