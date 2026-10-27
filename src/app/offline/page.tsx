import type { Metadata } from "next";
import OfflineClient from "./OfflineClient";

// Shown by the service worker (public/sw.js) when a page can't be loaded and no saved copy exists.
export const metadata: Metadata = {
  title: "You're offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return <OfflineClient />;
}
