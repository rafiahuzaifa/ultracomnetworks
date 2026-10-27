"use client";

import { useEffect, useState } from "react";
import { WifiOff, RefreshCw, Phone, FileText } from "lucide-react";

const PAGE_LABELS: Record<string, string> = {
  "/": "Home",
  "/services": "Services",
  "/aboutus": "About Us",
  "/contactus": "Contact Us",
  "/blog": "Business Spotlight",
};

function labelFor(path: string) {
  if (PAGE_LABELS[path]) return PAGE_LABELS[path];
  const last = path.split("/").filter(Boolean).pop() ?? path;
  return last.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function OfflineClient() {
  const [savedPages, setSavedPages] = useState<string[]>([]);

  useEffect(() => {
    // Return automatically once the connection is back.
    const onOnline = () => window.location.reload();
    window.addEventListener("online", onOnline);

    // List pages the service worker has saved, so visitors can still browse those.
    if ("caches" in window) {
      (async () => {
        const names = (await caches.keys()).filter((name) => name.startsWith("ucn-pages-"));
        const paths = new Set<string>();
        for (const name of names) {
          const requests = await (await caches.open(name)).keys();
          requests.forEach((request) => {
            const { pathname } = new URL(request.url);
            if (pathname !== "/offline") paths.add(pathname);
          });
        }
        setSavedPages([...paths].sort());
      })().catch(() => undefined);
    }
    return () => window.removeEventListener("online", onOnline);
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-5 py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-6">
          <WifiOff className="w-8 h-8 text-blue-600" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">You&apos;re offline</h1>
        <p className="mt-3 text-slate-500 leading-relaxed">
          We couldn&apos;t reach Ultracom Networks just now. Check your internet connection - this page will reload
          automatically when you&apos;re back online.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-blue-600/25 hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Try again
          </button>
          <a
            href="tel:+923111000929"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call +92 311 1000929
          </a>
        </div>

        {savedPages.length > 0 && (
          <div className="mt-10 text-left rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-900">Pages saved on this device</h2>
            <p className="text-xs text-slate-500 mt-1">These may not show the latest information.</p>
            <ul className="mt-3 grid sm:grid-cols-2 gap-1.5">
              {savedPages.map((path) => (
                <li key={path}>
                  {/* Plain <a> on purpose: a full page load lets the service worker serve the saved copy. */}
                  <a
                    href={path}
                    className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-slate-400" aria-hidden="true" />
                    {labelFor(path)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
