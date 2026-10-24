// Service worker mínimo para que Android ofrezca "Instalar app".
// No guarda nada en caché: el portal siempre se carga desde la red.
self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function(e) { e.waitUntil(self.clients.claim()); });
