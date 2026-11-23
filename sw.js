/* Offline shell only: a service worker CANNOT schedule offline reminders on its own. */
const CACHE='move-mode-pages-v2';
const ASSETS=['./','./index.html','./dashboard.css','./dashboard.js','./modes.js','./web-adapter.js','./manifest.webmanifest','./install-guide.js','./icons/icon128.png','./icons/icon192.png','./icons/icon512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(fetch(e.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return response}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
