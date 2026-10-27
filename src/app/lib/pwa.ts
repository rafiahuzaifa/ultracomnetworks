"use client";

// Install-state store for the PWA. A tiny external store (useSyncExternalStore) so the
// navbar button, the install banner and the instructions modal all share one state
// without needing a context provider around the whole app.

import { useSyncExternalStore } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

declare global {
  interface Window {
    // Captured by the inline script in layout.tsx, before React hydrates.
    __ucnInstallPrompt?: BeforeInstallPromptEvent | null;
    __ucnInstalled?: boolean;
  }
  interface Navigator {
    standalone?: boolean;
  }
}

/** Browsers with no install API where we can still explain the manual steps. */
export type ManualInstallMethod = "ios" | "mac-safari" | "android-firefox" | "in-app";

export interface InstallState {
  /** False during SSR / before client detection has run. */
  ready: boolean;
  /** Running as an installed app (standalone window / home-screen launch). */
  isStandalone: boolean;
  /** Native browser install prompt is available right now. */
  canPrompt: boolean;
  manualMethod: ManualInstallMethod | null;
  /** The browser reported a successful install during this visit. */
  installed: boolean;
  guideOpen: boolean;
}

const SERVER_STATE: InstallState = {
  ready: false,
  isStandalone: false,
  canPrompt: false,
  manualMethod: null,
  installed: false,
  guideOpen: false,
};

const DISMISS_KEY = "ucn-install-dismissed-at";
const DISMISS_DAYS = 14;

let state = SERVER_STATE;
let deferredPrompt: BeforeInstallPromptEvent | null = null;
let initialized = false;
const listeners = new Set<() => void>();

function setState(patch: Partial<InstallState>) {
  state = { ...state, ...patch };
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useInstallState() {
  return useSyncExternalStore(subscribe, () => state, () => SERVER_STATE);
}

/** Whether an "Install App" control would actually do something on this device. */
export function canOfferInstall(s: InstallState) {
  return s.ready && !s.isStandalone && !s.installed && (s.canPrompt || s.manualMethod !== null);
}

function detectStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: minimal-ui)").matches ||
    window.matchMedia("(display-mode: window-controls-overlay)").matches ||
    window.navigator.standalone === true
  );
}

function detectManualMethod(): ManualInstallMethod | null {
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  // Social-app webviews can't install anything; the user has to open a real browser first.
  if (/FBAN|FBAV|Instagram|LinkedInApp|Snapchat|TikTok|Line\/|; wv\)/.test(ua)) return "in-app";
  // iOS 16.4+ allows Add to Home Screen from Safari and from Chrome/Edge/Firefox's share menu.
  if (isIOS) return "ios";
  if (/Android/.test(ua) && /Firefox\//.test(ua)) return "android-firefox";

  const isMacSafari =
    /Macintosh/.test(ua) && /Safari\//.test(ua) && !/Chrome|Chromium|Edg\/|Firefox|OPR\//.test(ua);
  const safariVersion = Number(ua.match(/Version\/(\d+)/)?.[1] ?? 0);
  if (isMacSafari && safariVersion >= 17) return "mac-safari"; // "Add to Dock" arrived in Safari 17

  // Chromium browsers use the native prompt; others (e.g. desktop Firefox) can't install - show nothing.
  return null;
}

/** Call once on the client. Safe to call more than once. */
export function initInstallState() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  deferredPrompt = window.__ucnInstallPrompt ?? null;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault(); // we show our own UI instead of Chrome's mini-infobar
    deferredPrompt = event as BeforeInstallPromptEvent;
    setState({ canPrompt: true });
  });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    window.__ucnInstallPrompt = null;
    setState({ installed: true, canPrompt: false, guideOpen: false });
  });

  const standaloneQuery = window.matchMedia("(display-mode: standalone)");
  standaloneQuery.addEventListener("change", () => setState({ isStandalone: detectStandalone() }));

  setState({
    ready: true,
    isStandalone: detectStandalone(),
    canPrompt: deferredPrompt !== null,
    manualMethod: detectManualMethod(),
    installed: window.__ucnInstalled === true,
  });
}

/**
 * Start installation from a user click: the native prompt where the browser offers one,
 * otherwise the step-by-step guide for this platform.
 */
export async function requestInstall(): Promise<"accepted" | "dismissed" | "guide" | "unavailable"> {
  if (deferredPrompt) {
    const promptEvent = deferredPrompt;
    // A prompt event can only be used once; the browser fires a fresh one if it's still installable.
    deferredPrompt = null;
    window.__ucnInstallPrompt = null;
    setState({ canPrompt: false });
    await promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    if (outcome === "dismissed") dismissInstallBanner();
    return outcome;
  }
  if (state.manualMethod) {
    setState({ guideOpen: true });
    return "guide";
  }
  return "unavailable";
}

export function closeInstallGuide() {
  setState({ guideOpen: false });
}

export function dismissInstallBanner() {
  try {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  } catch {
    // Storage blocked (private mode etc.) - the banner just may show again next visit.
  }
}

export function isInstallBannerDismissed() {
  try {
    const at = Number(localStorage.getItem(DISMISS_KEY));
    return Boolean(at) && Date.now() - at < DISMISS_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}
