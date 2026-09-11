// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
// import TopBar from "./Components/TopBar";

import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Whatsupbutton from "@/app/Components/Whatsupbutton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "UltraCom Networks",
  description: "One Partner. Endless IT Solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-white text-slate-800`}>
        {/* <TopBar /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Whatsupbutton />
      </body>
    </html>
  );
}