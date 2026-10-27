"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import {
  canOfferInstall,
  dismissInstallBanner,
  isInstallBannerDismissed,
  requestInstall,
  useInstallState,
} from "@/app/lib/pwa";

const VIEWS_KEY = "ucn-page-views";
const SHOW_AFTER_VIEWS = 2;
const SHOW_AFTER_MS = 25_000;

// Gentle install invitation: only after the visitor has looked around (2nd page or 25s),
// never again for 14 days once dismissed, and never when installing isn't possible.
export default function InstallBanner() {
  const installState = useInstallState();
  const pathname = usePathname();
  const [engaged, setEngaged] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let views = 1;
    try {
      views = Number(sessionStorage.getItem(VIEWS_KEY) ?? 0) + 1;
      sessionStorage.setItem(VIEWS_KEY, String(views));
    } catch {
      // sessionStorage unavailable - fall back to the timer only
    }
    // On a repeat page view, still wait a moment so the banner doesn't land on top of the page load.
    const delay = views >= SHOW_AFTER_VIEWS ? 1500 : SHOW_AFTER_MS;
    const timer = window.setTimeout(() => setEngaged(true), delay);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  // In-app webviews get the button/guide only; an unprompted banner there is just noise.
  const visible =
    engaged &&
    !hidden &&
    canOfferInstall(installState) &&
    installState.manualMethod !== "in-app" &&
    !installState.guideOpen &&
    !isInstallBannerDismissed();

  const dismiss = () => {
    dismissInstallBanner();
    setHidden(true);
  };

  const install = async () => {
    const result = await requestInstall();
    if (result !== "unavailable") setHidden(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          role="region"
          aria-label="Install the Ultracom Networks app"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed z-60 inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] sm:inset-x-auto sm:left-6 sm:bottom-6 sm:w-[380px] bg-white rounded-2xl shadow-2xl shadow-slate-900/15 border border-slate-200 p-4"
        >
          <button
            type="button"
            onClick={dismiss}
            aria-label="Close install suggestion"
            className="absolute top-2.5 right-2.5 p-1.5 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-3.5 pr-6">
            <Image src="/icons/icon-192.png" alt="" width={52} height={52} className="flex-none rounded-xl shadow-sm border border-slate-100" />
            <div>
              <p className="font-bold text-slate-900 leading-tight">Ultracom Networks App</p>
              <p className="text-sm text-slate-500 mt-1 leading-snug">
                Faster access to services, support and quotes - right from your home screen or desktop.
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-2.5">
            <button
              type="button"
              onClick={dismiss}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Not now
            </button>
            <button
              type="button"
              onClick={install}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 shadow-md shadow-blue-600/25 hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Install App
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
