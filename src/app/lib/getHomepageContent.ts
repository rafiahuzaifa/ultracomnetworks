import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { heroSlidesQuery, homepageAboutQuery, testimonialsQuery } from "../../../sanity/lib/queries";
import { projectId } from "../../../sanity/env";
import type { HeroSlideData } from "@/app/Components/Hero";
import type { WhoWeAreData } from "@/app/Components/WhoWeAreSection";
import type { TestimonialData } from "@/app/Components/testimonal";

type SanityImageRef = { asset?: { _ref: string } } | undefined;

// If Sanity isn't configured yet (no project ID), skip the network call entirely
// and let every component fall back to its built-in default content.
export async function getHomepageContent(): Promise<{
  heroSlides: HeroSlideData[];
  whoWeAre: WhoWeAreData | undefined;
  testimonials: TestimonialData[];
}> {
  if (!projectId || !client) {
    return { heroSlides: [], whoWeAre: undefined, testimonials: [] };
  }

  try {
    const [rawSlides, rawAbout, rawTestimonials] = await Promise.all([
      client.fetch(heroSlidesQuery),
      client.fetch(homepageAboutQuery),
      client.fetch(testimonialsQuery),
    ]);

    const heroSlides: HeroSlideData[] = (rawSlides || []).map(
      (s: {
        image?: SanityImageRef;
        title: string;
        subtitle: string;
        ctaPrimaryText?: string;
        ctaPrimaryLink?: string;
        ctaSecondaryText?: string;
        ctaSecondaryLink?: string;
      }) => ({
        image: urlForImage(s.image as never)?.url() || "/hero1-new.jpg",
        title: s.title,
        subtitle: s.subtitle,
        cta1: s.ctaPrimaryText || "Explore Services",
        cta2: s.ctaSecondaryText || "Contact Us",
        cta1Link: s.ctaPrimaryLink,
        cta2Link: s.ctaSecondaryLink,
      })
    );

    const whoWeAre: WhoWeAreData | undefined = rawAbout
      ? { ...rawAbout, image: urlForImage(rawAbout.image)?.url() }
      : undefined;

    const testimonials: TestimonialData[] = (rawTestimonials || []).map(
      (t: { _id: string; avatar?: SanityImageRef; [key: string]: unknown }) => ({
        ...t,
        id: t._id,
        avatar: urlForImage(t.avatar as never)?.url(),
      })
    );

    return { heroSlides, whoWeAre, testimonials };
  } catch (err) {
    console.error("Sanity fetch failed, falling back to default homepage content:", err);
    return { heroSlides: [], whoWeAre: undefined, testimonials: [] };
  }
}
