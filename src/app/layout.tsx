// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
// import TopBar from "./Components/TopBar";

import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Whatsupbutton from "@/app/Components/Whatsupbutton";
import AIChatWidget from "@/app/Components/AIChatWidget";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });

const SITE_URL = "https://www.ultracomnetworks.pk";
const SITE_NAME = "Ultracom Networks";
const DEFAULT_DESCRIPTION =
  "Ultracom Networks is a Karachi-based enterprise IT provider delivering dedicated internet, LAN/WAN networking, cloud WiFi, data center services, IT support, and digital solutions across Pakistan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ultracom Networks | Enterprise Internet, Networking & IT Solutions in Pakistan",
    template: "%s | Ultracom Networks",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Ultracom Networks",
    "dedicated internet Pakistan",
    "enterprise internet Karachi",
    "LAN WAN networking",
    "cloud WiFi solution",
    "data center services Pakistan",
    "IT network support Karachi",
    "ISP Pakistan",
    "business internet provider Karachi",
  ],
  authors: [{ name: "Ultracom Networks" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }, { url: "/favicon.ico" }],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Ultracom Networks | Enterprise Internet, Networking & IT Solutions in Pakistan",
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/logo.png", width: 1023, height: 326, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultracom Networks | Enterprise Internet, Networking & IT Solutions in Pakistan",
    description: DEFAULT_DESCRIPTION,
    images: ["/logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ultracom Networks",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-311-1000929",
    contactType: "sales",
    email: "info@ultracomnetworks.com",
    areaServed: "PK",
  },
  sameAs: [
    "https://linkedin.com/company/ultracomnetworks",
    "https://twitter.com/ultracomnetworks",
    "https://facebook.com/ultracomnetworks",
    "https://instagram.com/ultracomnetworks",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-white text-slate-800`}>
        {/* <TopBar /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Whatsupbutton />
        <AIChatWidget />
      </body>
      <GoogleAnalytics gaId="G-XWJRHTE3T1" />
    </html>
  );
}
