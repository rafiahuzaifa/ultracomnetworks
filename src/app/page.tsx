import HomeClient from "./HomeClient";
import { getHomepageContent } from "./lib/getHomepageContent";

export default async function Page() {
  const { heroSlides, whoWeAre, testimonials } = await getHomepageContent();

  return <HomeClient heroSlides={heroSlides} whoWeAre={whoWeAre} testimonials={testimonials} />;
}
