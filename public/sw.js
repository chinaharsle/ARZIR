// Enhanced Service Worker for optimal performance
const CACHE_NAME = 'arzir-v2';
const STATIC_CACHE = 'arzir-static-v2';
const DYNAMIC_CACHE = 'arzir-dynamic-v2';

// Critical resources to cache immediately
const CRITICAL_URLS = [
  '/',
  '/images/logo/ARZIR-LOGO-white.png',
  '/images/hero/home-hero.png',
  '/favicon.ico',
  '/site.webmanifest'
];

// Static assets to cache
const STATIC_URLS = [
  '/products',
  '/applications',
  '/contact',
  '/about',
  '/images/about/about-home.png'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(CRITICAL_URLS)),
      caches.open(DYNAMIC_CACHE).then(cache => cache.addAll(STATIC_URLS))
    ])
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - implement stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Handle different types of requests
  if (request.destination === 'image') {
    // Images: Cache-first strategy
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        
        return fetch(request).then(response => {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
          return response;
        });
      })
    );
  } else if (request.url.includes('/_next/static/')) {
    // Static assets: Cache-first with long TTL
    event.respondWith(
      caches.match(request).then(cached => {
        return cached || fetch(request).then(response => {
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
          return response;
        });
      })
    );
  } else {
    // Pages: Network-first with cache fallback
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  }
});

// Background sync for better offline experience
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Implement background sync logic here
      console.log('Background sync triggered')
    );
  }
});