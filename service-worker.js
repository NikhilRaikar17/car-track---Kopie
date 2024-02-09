// Service Worker
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('r1-carcare').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                // Add other assets and pages you want to cache
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});

