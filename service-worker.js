self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('clickia-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/musicafundo.mp3',
        '/manifest.json',
        '/icone192.png',
        '/icone512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});