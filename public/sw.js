/*
 * Ultracom Networks service worker.
 *
 * Registered by src/app/Components/pwa/PWAProvider.tsx as /sw.js?v=<build version>.
 * The version query changes on every deploy, which is what makes browsers pick up
 * a new worker; it is also used to name the per-build caches below.
 *
 * Caching rules (keep these conservative):
 *  - Only same-origin GET requests are handled. Everything else goes straight to the network.
 *  - /api/* (chat + form submissions) and /studio (Sanity admin) are never cached.
 *  - Pages are network-first. A saved copy is only used when the network fails,
 *    and the app shows an "offline - saved content" notice while that happens.
 *  - If authenticated / personalised pages are ever added, add their paths to
 *    NEVER_CACHE_PATHS so they are not stored.
 */

const VERSION = new URL(self.location.href).searchParams.get("v") || "dev";
const PREFIX = "ucn-";
const PRECACHE = `${PREFIX}precache-${VERSION}`;
const PAGES = `${PREFIX}pages-${VERSION}`;
const STATIC = `${PREFIX}static`; // content-hashed build files, safe across versions
const IMAGES = `${PREFIX}images`;
const CURRENT_CACHES = [PRECACHE, PAGES, STATIC, IMAGES];

const OFFLINE_URL = "/offline";
const PRECACHE_URLS = [
  OFFLINE_URL,
  "/manifest.webmanifest",
  "/logo.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];
const NEVER_CACHE_PATHS = ["/api/", "/studio"];

const LIMITS = { [PAGES]: 30, [STATIC]: 200, [IMAGES]: 80 };
const IMAGE_EXT = /\.(?:png|jpe?g|webp|avif|gif|svg|ico)$/i;
const FONT_EXT = /\.(?:woff2?|ttf|otf)$/i;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PRECACHE);
      await cache.addAll(PRECACHE_URLS.map((url) => new Request(url, { cache: "reload" })));

      // Also store the CSS/JS the offline page needs, so it renders styled with no network.
      const offline = await cache.match(OFFLINE_URL);
      if (offline) {
        const html = await offline.text();
        const assets = [...new Set(html.match(/\/_next\/static\/[^"'\s)\\]+/g) || [])];
        const staticCache = await caches.open(STATIC);
        await Promise.all(assets.map((url) => staticCache.add(url).catch(() => undefined)));
      }
      // Home page is a nice-to-have for offline launches; don't fail install over it.
      const pages = await caches.open(PAGES);
      await pages.add(new Request("/", { cache: "reload" })).catch(() => undefined);
    })()
  );
  // Deliberately no skipWaiting() here: the page asks the user before activating an update.
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith(PREFIX) && !CURRENT_CACHES.includes(key))
          .map((key) => caches.delete(key))
      );
      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable();
      }
      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || request.headers.has("range")) return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (NEVER_CACHE_PATHS.some((path) => url.pathname.startsWith(path))) return;

  // Next.js App Router data requests (client-side navigation / prefetch): always live.
  if (request.headers.get("RSC") || url.searchParams.has("_rsc")) return;

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(event));
    return;
  }

  if (url.pathname.startsWith("/_next/static/") || FONT_EXT.test(url.pathname)) {
    event.respondWith(cacheFirst(request, STATIC));
    return;
  }

  if (url.pathname.startsWith("/_next/image") || IMAGE_EXT.test(url.pathname) || url.pathname === "/manifest.webmanifest") {
    event.respondWith(staleWhileRevalidate(event, IMAGES));
  }
  // Anything else: default browser networking.
});

async function handleNavigation(event) {
  const { request } = event;
  try {
    const response = (await event.preloadResponse) || (await fetch(request));
    if (isCacheablePage(response)) {
      const copy = response.clone();
      event.waitUntil(putAndTrim(PAGES, request, copy));
    }
    return response;
  } catch {
    const cached =
      (await caches.match(request, { cacheName: PAGES })) ||
      (await caches.match(request, { cacheName: PAGES, ignoreSearch: true }));
    if (cached) return cached;
    const offline = await caches.match(OFFLINE_URL, { cacheName: PRECACHE });
    return offline || new Response("You are offline.", { status: 503, headers: { "Content-Type": "text/plain" } });
  }
}

function isCacheablePage(response) {
  return (
    response &&
    response.ok &&
    response.type === "basic" &&
    (response.headers.get("content-type") || "").includes("text/html")
  );
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request, { cacheName });
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) await putAndTrim(cacheName, request, response.clone());
  return response;
}

async function staleWhileRevalidate(event, cacheName) {
  const { request } = event;
  const cached = await caches.match(request, { cacheName });
  const network = fetch(request)
    .then(async (response) => {
      if (response.ok) await putAndTrim(cacheName, request, response.clone());
      return response;
    })
    .catch(() => undefined);

  if (cached) {
    event.waitUntil(network);
    return cached;
  }
  const response = await network;
  return response || Response.error();
}

async function putAndTrim(cacheName, request, response) {
  const cache = await caches.open(cacheName);
  await cache.put(request, response);
  const limit = LIMITS[cacheName];
  if (!limit) return;
  const keys = await cache.keys();
  // Cache keys come back in insertion order, so the oldest entries go first.
  await Promise.all(keys.slice(0, Math.max(0, keys.length - limit)).map((key) => cache.delete(key)));
}
