
// Service Worker para SoAr Tienda Natural - Siempre busca en la red para evitar precios viejos
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Ignoramos peticiones que no sean GET (como extensiones del navegador, etc.)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Devuelve la respuesta fresca directo de GitHub Pages
        return networkResponse;
      })
      .catch(() => {
        // Por si el usuario se queda sin internet de golpe y necesita abrir la app
        return caches.match(event.request);
      })
  );
});
