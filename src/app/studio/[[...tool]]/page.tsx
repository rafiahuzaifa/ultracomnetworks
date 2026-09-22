/**
 * This route embeds Sanity Studio (the admin panel) at /studio.
 * Log in here with your own Sanity account to manage content -
 * this app never needs a stored admin password of its own.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { projectId } from "../../../../sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  // Sanity Studio itself requires a real project ID to even initialize (it
  // throws internally otherwise) - show a friendly setup screen instead of
  // letting that surface as a raw 500 error before the project is configured.
  if (!projectId) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#0f172a",
          color: "white",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
            Admin panel not set up yet
          </h1>
          <p style={{ color: "#94a3b8", lineHeight: 1.6 }}>
            This Studio needs a free Sanity project to run. Create one at{" "}
            <span style={{ color: "#60a5fa" }}>sanity.io</span>, then set{" "}
            <code style={{ background: "#1e293b", padding: "2px 6px", borderRadius: 4 }}>
              NEXT_PUBLIC_SANITY_PROJECT_ID
            </code>{" "}
            in this project&apos;s environment variables and redeploy.
          </p>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
