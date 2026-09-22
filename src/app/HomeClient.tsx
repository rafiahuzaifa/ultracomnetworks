"use client";

import Hero, { type HeroSlideData } from "@/app/Components/Hero";
import WhoWeAreSection, { type WhoWeAreData } from "@/app/Components/WhoWeAreSection";
import Services from "@/app/Components/Services";
import WebsiteIntroSection from "./Components/WebsiteIntroSection";
import TestimonialsPage, { type TestimonialData } from "./Components/testimonal";

export default function HomeClient({
  heroSlides,
  whoWeAre,
  testimonials,
}: {
  heroSlides: HeroSlideData[];
  whoWeAre: WhoWeAreData | undefined;
  testimonials: TestimonialData[];
}) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <main>
        <Hero slides={heroSlides} />
        <WhoWeAreSection data={whoWeAre} />
        <Services />
        <WebsiteIntroSection />
        <TestimonialsPage clients={testimonials} />
      </main>
    </div>
  );
}
