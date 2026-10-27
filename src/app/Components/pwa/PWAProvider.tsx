"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, WifiOff, Wifi } from "lucide-react";
import { initInstallState } from "@/app/lib/pwa";
import InstallBanner from "./InstallBanner";
import InstallGuide from "./InstallGuide";

const SW_URL = `/sw.js?v=${process.env.NEXT_PUBLIC_APP_VERSION ?? "dev"}`;

// Set when the visitor clicks "Refresh". controllerchange also fires on a first visit
// (the new worker claims the page), and that must not reload the page under them.
let updateRequested = false;

// Registers the service worker and hosts the app-level PWA UI:
// install banner, install instructions, update prompt and offline notice.
export default function PWAProvider() {
  const pathname = usePathname();
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [network, setNetwork] = useState<"online" | "offline" | "restored">("online");

  useEffect(() => {
    initInstallState();
  }, []);

  useEffect(() => {
    // Only in production builds: a caching worker during `next dev` hides code changes.
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;

    let reloading = false;
    const onControllerChange = () => {
      if (!updateRequested || reloading) return;
      reloading = true;
      window.location.reload();
    };

    const trackWaiting = (registration: ServiceWorkerRegistration) => {
      // Only an *update* needs a prompt; the very first install has no current controller.
      if (registration.waiting && navigator.serviceWorker.controller) {
        setWaitingWorker(registration.waiting);
      }
      registration.addEventListener("updatefound", () => {
        const installing = registration.installing;
        installing?.addEventListener("statechange", () => {
          if (installing.state === "installed" && navigator.serviceWorker.controller) {
            setWaitingWorker(installing);
          }
        });
      });
    };

    const register = () => {
      navigator.serviceWorker
        .register(SW_URL, { scope: "/" })
        .then((registration) => {
          if (!registration) return; // some embedded browsers resolve without registering
          trackWaiting(registration);
          navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);
        })
        .catch((error) => console.error("Service worker registration failed:", error));
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });

    return () => {
      window.removeEventListener("load", register);
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
    };
  }, []);

  useEffect(() => {
    let restoredTimer: number | undefined;
    const onOffline = () => {
      window.clearTimeout(restoredTimer);
      setNetwork("offline");
    };
    const onOnline = () => {
      setNetwork("restored");
      restoredTimer = window.setTimeout(() => setNetwork("online"), 3000);
    };
    if (!navigator.onLine) onOffline();
    window.addEventListener("offline", onOffline);
    window.addEventListener("online", onOnline);
    return () => {
      window.clearTimeout(restoredTimer);
      window.removeEventListener("offline", onOffline);
      window.removeEventListener("online", onOnline);
    };
  }, []);

  // The Sanity Studio admin has its own full-screen UI.
  if (pathname?.startsWith("/studio")) return null;

  return (
    <>
      <InstallBanner />
      <InstallGuide />

      <div className="fixed z-65 top-[calc(0.75rem+env(safe-area-inset-top))] inset-x-0 flex flex-col items-center gap-2 px-3 pointer-events-none">
        <AnimatePresence>
          {network !== "online" && (
            <motion.div
              key="network"
              role="status"
              aria-live="polite"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              className={`pointer-events-auto flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg ${
                network === "offline" ? "bg-slate-900 text-white" : "bg-emerald-600 text-white"
              }`}
            >
              {network === "offline" ? (
                <>
                  <WifiOff className="w-4 h-4" aria-hidden="true" />
                  You&apos;re offline - saved pages may be out of date.
                </>
              ) : (
                <>
                  <Wifi className="w-4 h-4" aria-hidden="true" />
                  Back online
                </>
              )}
            </motion.div>
          )}

          {waitingWorker && (
            <motion.div
              key="update"
              role="status"
              aria-live="polite"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              className="pointer-events-auto flex items-center gap-3 rounded-full bg-white border border-slate-200 pl-4 pr-1.5 py-1.5 text-sm text-slate-700 shadow-lg"
            >
              A new version of the site is available.
              <button
                type="button"
                onClick={() => {
                  updateRequested = true;
                  waitingWorker.postMessage({ type: "SKIP_WAITING" });
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1.5 font-semibold text-white hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                Refresh
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
