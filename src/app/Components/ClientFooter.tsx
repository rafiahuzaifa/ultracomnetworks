"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ClientFooter() {
  const [email, setEmail] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top Button — stacked above the WhatsApp button, bottom-left to avoid overlap */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 p-3 bg-slate-800 border border-slate-700 rounded-full shadow-lg hover:bg-slate-700 transition-colors duration-200 z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}

      {/* Interactive Newsletter Form */}
      <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="min-w-0 flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-500 text-sm"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 group text-sm shrink-0"
        >
          Subscribe
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </>
  );
}
