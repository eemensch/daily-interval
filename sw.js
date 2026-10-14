// Caches the whole app on first visit so it runs offline.
// After changing any file, raise the version number so phones pick up the new copy.
const CACHE = "daily-ten-v1";
const ASSETS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "fonts/big-shoulders-display-latin-700-normal.woff2",
  "fonts/big-shoulders-display-latin-800-normal.woff2",
  "fonts/big-shoulders-display-latin-900-normal.woff2",
  "fonts/instrument-sans-latin-400-normal.woff2",
  "fonts/instrument-sans-latin-500-normal.woff2",
  "fonts/instrument-sans-latin-600-normal.woff2",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req, {ignoreSearch: true}).then(hit => {
      if (hit) return hit;
      return fetch(req).catch(() => (req.mode === "navigate" ? caches.match("./") : Response.error()));
    })
  );
});
