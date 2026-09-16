import type { MetadataRoute } from "next";

const SITE_URL = "https://www.ultracomnetworks.pk";

const staticRoutes = [
  "",
  "/aboutus",
  "/services",
  "/services/internet",
  "/services/lan-wan",
  "/services/cloud-wifi",
  "/services/network-support",
  "/services/data-center",
  "/services/consultation",
  "/services/call-center",
  "/services/pbx-installation",
  "/services/webdevlopment2",
  "/services/seo",
  "/services/branding",
  "/services/content",
  "/services/social-media-marketing",
  "/services/ai-chatbot",
  "/services/ai-applications",
  "/services/ai-agents",
  "/website-development",
  "/our-networks",
  "/our-location",
  "/career",
  "/contactus",
  "/partners",
  "/view-our-work",
  "/blog",
  "/blog/branding",
  "/blog/email-marketing",
  "/blog/google-ads",
  "/blog/nextjs",
  "/blog/professional-website",
  "/blog/redesign",
  "/blog/seo",
  "/blog/social-media",
  "/privicy-policy",
  "/accectable-policy",
  "/notice-of-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : route.startsWith("/blog") ? "monthly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
