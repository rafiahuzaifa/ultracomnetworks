"use client";

import { Download } from "lucide-react";
import { canOfferInstall, requestInstall, useInstallState } from "@/app/lib/pwa";

interface InstallButtonProps {
  variant?: "nav" | "mobile";
  onClick?: () => void;
}

// Renders nothing unless installing is actually possible on this browser/device.
export default function InstallButton({ variant = "nav", onClick }: InstallButtonProps) {
  const installState = useInstallState();
  if (!canOfferInstall(installState)) return null;

  const handleClick = () => {
    onClick?.();
    void requestInstall();
  };

  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3 rounded-xl hover:bg-slate-800 transition-colors duration-200 mt-3"
      >
        <Download className="w-4 h-4" aria-hidden="true" />
        Install the Ultracom App
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <Download className="w-4 h-4" aria-hidden="true" />
      Install App
    </button>
  );
}
