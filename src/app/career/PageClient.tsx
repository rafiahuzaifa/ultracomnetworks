// src/app/careers/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Upload, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const jobOpenings = [
  { title: "Senior Network Engineer", location: "Karachi", type: "Full-Time" },
  { title: "Enterprise Sales Manager", location: "Karachi", type: "Full-Time" },
  { title: "Customer Success Executive", location: "Karachi", type: "Full-Time" },
  { title: "Technical Support Specialist", location: "Karachi", type: "Full-Time" },
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [fileName, setFileName] = useState("No file chosen");
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const resumeFile = (document.getElementById("resume") as HTMLInputElement).files?.[0];
    if (!resumeFile) {
      setStatus({ type: "error", message: "Please attach your resume." });
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("position", formData.position || "General Application");
    data.append("message", formData.message);
    data.append("resume", resumeFile);

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Application submitted successfully! We'll contact you soon." });
        setFormData({ name: "", email: "", phone: "", position: "", message: "" });
        setFileName("No file chosen");
        (document.getElementById("resume") as HTMLInputElement).value = "";
      } else {
        setStatus({ type: "error", message: result.error || "Failed to submit. Please try again." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden font-poppins">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-5xl">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">Join UltraCom</h1>
            <p className="text-2xl md:text-4xl text-blue-200 font-light">Build Pakistans Digital Future</p>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">Current Openings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobOpenings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer border border-gray-100"
                onClick={() => {
                  setFormData({ ...formData, position: job.title });
                  document.getElementById("career-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Briefcase className="w-14 h-14 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">{job.title}</h3>
                <p className="text-blue-600 font-medium">{job.location}</p>
                <p className="text-sm text-gray-600">{job.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="career-form" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12">Apply Now</h2>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl shadow-xl p-10 space-y-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                required
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition text-lg"
              />
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition text-lg"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition text-lg"
              />
              <input
                type="text"
                placeholder="Position Applying For (Optional)"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition text-lg"
              />
            </div>

            <textarea
              required
              rows={6}
              placeholder="Why do you want to join UltraCom? Tell us about your experience... *"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition text-lg resize-none"
            />

            <div>
              <label className="block text-lg font-medium text-slate-800 mb-3">Attach Resume (PDF/DOCX) *</label>
              <div className="flex items-center gap-4">
                <input
                  id="resume"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "No file chosen")}
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className="flex items-center gap-3 px-8 py-5 bg-white border-2 border-dashed border-blue-600 rounded-2xl cursor-pointer hover:bg-blue-50 transition text-lg font-medium text-blue-700"
                >
                  <Upload className="w-6 h-6" />
                  Choose File
                </label>
                <span className="text-gray-600 truncate max-w-xs">{fileName}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-slate-800 to-blue-900 text-white py-6 rounded-2xl text-xl font-bold hover:shadow-2xl transition flex items-center justify-center gap-3 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Application"}
              {!loading && <ArrowRight className="w-6 h-6" />}
            </button>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-2xl text-center text-lg font-medium flex items-center justify-center gap-3 ${
                  status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}
              >
                {status.type === "success" ? <CheckCircle className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
                {status.message}
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}