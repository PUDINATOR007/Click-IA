self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('clickia-cache').then(function(cache) {
      return cache.addAll([
  '/Click-IA/',
  '/Click-IA/index.html',
  '/Click-IA/musicafundo.mp3',
  '/Click-IA/manifest.json',
  '/Click-IA/icone192.png',
  '/Click-IA/icone512.png'
]);
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