const CACHE_NAME = 'arzir-v1';
const urlsToCache = [
  '/',
  '/images/hero/home-hero.png',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/webpack.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});