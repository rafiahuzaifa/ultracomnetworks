export const heroSlidesQuery = `*[_type == "heroSlide"] | order(order asc){
  _id,
  image,
  title,
  subtitle,
  ctaPrimaryText,
  ctaPrimaryLink,
  ctaSecondaryText,
  ctaSecondaryLink
}`;

export const homepageAboutQuery = `*[_type == "homepageAbout"][0]{
  badgeText,
  headingLine1,
  headingAccent,
  headingLine2,
  paragraph1,
  paragraph2,
  coreValues,
  stats,
  image,
  imageCaptionTitle,
  imageCaptionSubtitle,
  techBadgeTitle,
  techBadgeText
}`;

export const testimonialsQuery = `*[_type == "testimonial" && featured == true] | order(order asc){
  _id,
  name,
  role,
  company,
  avatar,
  text,
  category,
  service,
  duration,
  rating,
  results
}`;
