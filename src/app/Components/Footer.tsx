import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Shield,
  Award,
  Zap,
  Send,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from "lucide-react";
import Image from "next/image";
import ClientFooter from "./ClientFooter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-white pt-16 sm:pt-20 pb-10 font-geist-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 sm:gap-12 mb-14 sm:mb-16">

          {/* Company Info Column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Link href="/" className="inline-block">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/logo.png"
                    alt="Ultracom Networks"
                    width={180}
                    height={60}
                    className="object-contain filter brightness-0 invert"
                  />
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">Ultracom Networks</h2>
                    <p className="text-sm text-slate-400">Enterprise IT Solutions</p>
                  </div>
                </div>
              </Link>

              <p className="text-slate-400 leading-relaxed mb-7 max-w-xl">
                Leading provider of enterprise-grade connectivity, network infrastructure,
                and digital transformation solutions. Empowering businesses across Pakistan
                with reliable, scalable, and secure IT services.
              </p>

              {/* Contact Info */}
              <div className="space-y-3.5 mb-8">
                <a
                  href="tel:+923111000929"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">+92 311 1000929</span>
                </a>
                <a
                  href="mailto:info@ultracomnetworks.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">info@ultracomnetworks.com</span>
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">Karachi, Pakistan HQ</span>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-base font-bold mb-2 flex items-center gap-2">
                <Send className="w-4 h-4 text-blue-400" />
                Stay Updated
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Subscribe to our newsletter for the latest in IT solutions and industry insights.
              </p>

              {/* Use Client Component for form */}
              <ClientFooter />
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Services Column */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-5 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                Services
              </h3>
              <nav className="space-y-3">
                {[
                  { name: "Internet Solutions", href: "/services/internet" },
                  { name: "Network Infrastructure", href: "/services/lan-wan" },
                  { name: "Cloud Services", href: "/services/cloud-wifi" },
                  { name: "Digital Marketing", href: "/services/social-media-marketing" },
                  { name: "Web Development", href: "/services/webdevlopment2" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-5 flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                Company
              </h3>
              <nav className="space-y-3">
                {[
                  { name: "About Us", href: "/aboutus" },
                  { name: "Our Network", href: "/our-networks" },
                  { name: "Locations", href: "/our-location" },
                  { name: "Careers", href: "/career" },
                  { name: "Partners", href: "/partners" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Legal & Social Column */}
          <div>
            {/* Legal Section */}
            <div className="mb-9">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-5 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                Legal
              </h3>
              <nav className="space-y-3">
                {[
                  { name: "Privacy Policy", href: "/privicy-policy" },
                  { name: "Acceptable Use Policy", href: "/accectable-policy" },
                  { name: "Cookie Notice", href: "/notice-of-cookies" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-5">
                Connect With Us
              </h3>
              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/company/ultracomnetworks" },
                  { icon: Twitter, href: "https://twitter.com/ultracomnetworks" },
                  { icon: Facebook, href: "https://facebook.com/ultracomnetworks" },
                  { icon: Instagram, href: "https://instagram.com/ultracomnetworks" },
                ].map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-200"
                  >
                    <social.icon className="w-4.5 h-4.5 text-slate-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-10 sm:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-blue-400" />
              <div>
                <div className="font-semibold text-sm">ISO 27001 Certified</div>
                <div className="text-xs text-slate-400">Information Security</div>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-700"></div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-blue-400" />
              <div>
                <div className="font-semibold text-sm">24/7 Support</div>
                <div className="text-xs text-slate-400">Enterprise SLA</div>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-700"></div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-blue-400" />
              <div>
                <div className="font-semibold text-sm">10+ Years</div>
                <div className="text-xs text-slate-400">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-800 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ultracom Networks Corporation. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Registered under Pakistan Telecommunication Authority (PTA)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="px-5 py-2.5 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-slate-200 text-sm">
                  Pakistan&apos;s #1 Enterprise Network
                </span>
              </div>
            </div>

            <Link
              href="/contactus"
              className="px-6 py-2.5 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 group text-sm"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button is now in ClientFooter */}
    </footer>
  );
}