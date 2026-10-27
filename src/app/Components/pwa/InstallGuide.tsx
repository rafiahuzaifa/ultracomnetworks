"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Share, SquarePlus, Check, EllipsisVertical, Ellipsis, Monitor, ExternalLink } from "lucide-react";
import { closeInstallGuide, useInstallState, type ManualInstallMethod } from "@/app/lib/pwa";

interface Step {
  icon: ReactNode;
  text: ReactNode;
}

const iconClass = "w-5 h-5 text-blue-600";

const GUIDES: Record<ManualInstallMethod, { title: string; intro: string; steps: Step[]; note?: string }> = {
  ios: {
    title: "Add Ultracom to your Home Screen",
    intro: "Install the app in three quick steps - no App Store needed.",
    steps: [
      {
        icon: <Share className={iconClass} />,
        text: (
          <>
            Tap the <strong>Share</strong> button in the browser toolbar. On newer iOS versions, tap{" "}
            <strong>•••</strong> first, then <strong>Share</strong>.
          </>
        ),
      },
      {
        icon: <SquarePlus className={iconClass} />,
        text: (
          <>
            Scroll down and tap <strong>Add to Home Screen</strong> (you may need to tap <strong>View More</strong>).
          </>
        ),
      },
      {
        icon: <Check className={iconClass} />,
        text: (
          <>
            Keep <strong>Open as Web App</strong> switched on if shown, then tap <strong>Add</strong>.
          </>
        ),
      },
    ],
    note: "Works in Safari, and in Chrome, Edge or Firefox on iOS 16.4 and later.",
  },
  "mac-safari": {
    title: "Add Ultracom to your Dock",
    intro: "Safari can install this site as an app that opens in its own window.",
    steps: [
      {
        icon: <Monitor className={iconClass} />,
        text: (
          <>
            In the menu bar choose <strong>File</strong> → <strong>Add to Dock…</strong> (or use the{" "}
            <strong>Share</strong> button → <strong>Add to Dock</strong>).
          </>
        ),
      },
      {
        icon: <Check className={iconClass} />,
        text: (
          <>
            Click <strong>Add</strong>. Ultracom will appear in your Dock and Launchpad.
          </>
        ),
      },
    ],
  },
  "android-firefox": {
    title: "Install Ultracom",
    intro: "Add the app to your home screen from Firefox's menu.",
    steps: [
      {
        icon: <EllipsisVertical className={iconClass} />,
        text: (
          <>
            Tap the <strong>⋮</strong> menu button.
          </>
        ),
      },
      {
        icon: <SquarePlus className={iconClass} />,
        text: (
          <>
            Tap <strong>Add to Home screen</strong> (it may be labelled <strong>Install</strong>), then confirm.
          </>
        ),
      },
    ],
  },
  "in-app": {
    title: "Open in your browser to install",
    intro: "Apps like Facebook, Instagram and LinkedIn open links in a built-in viewer that can't install apps.",
    steps: [
      {
        icon: <Ellipsis className={iconClass} />,
        text: (
          <>
            Tap the <strong>•••</strong> or <strong>⋮</strong> menu in this viewer.
          </>
        ),
      },
      {
        icon: <ExternalLink className={iconClass} />,
        text: (
          <>
            Choose <strong>Open in browser</strong> (Safari or Chrome), then tap <strong>Install App</strong> there.
          </>
        ),
      },
    ],
  },
};

export default function InstallGuide() {
  const { guideOpen, manualMethod } = useInstallState();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!guideOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeInstallGuide();
      if (e.key !== "Tab" || !dialogRef.current) return;
      // Keep keyboard focus inside the dialog.
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [guideOpen]);

  const guide = manualMethod ? GUIDES[manualMethod] : null;

  return (
    <AnimatePresence>
      {guideOpen && guide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-70 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-sm sm:p-4"
          onClick={closeInstallGuide}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="install-guide-title"
            aria-describedby="install-guide-intro"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={closeInstallGuide}
              aria-label="Close installation instructions"
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>

            <div className="flex items-center gap-4 mb-5 pr-8">
              <Image src="/icons/icon-192.png" alt="" width={56} height={56} className="rounded-2xl shadow-md border border-slate-100" />
              <div>
                <h2 id="install-guide-title" className="text-lg font-bold text-slate-900 leading-snug">
                  {guide.title}
                </h2>
                <p id="install-guide-intro" className="text-sm text-slate-500 mt-0.5">
                  {guide.intro}
                </p>
              </div>
            </div>

            <ol className="space-y-3">
              {guide.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                  <span className="flex-none inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-slate-200" aria-hidden="true">
                    {step.icon}
                  </span>
                  <span className="text-sm text-slate-700 leading-relaxed pt-1.5">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.text}
                  </span>
                </li>
              ))}
            </ol>

            {guide.note && <p className="text-xs text-slate-400 mt-4">{guide.note}</p>}

            <button
              type="button"
              onClick={closeInstallGuide}
              className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md shadow-blue-600/25 hover:bg-blue-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
