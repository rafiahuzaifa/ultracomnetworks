/**
 * This route embeds Sanity Studio (the admin panel) at /studio.
 * Log in here with your own Sanity account to manage content -
 * this app never needs a stored admin password of its own.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
