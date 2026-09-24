const CACHE="mosaico-studio-v4";
const APP=["./","./index.html","./manifest.json","./icon.svg","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const req=e.request;if(req.method!=="GET")return;if(new URL(req.url).origin===location.origin){e.respondWith(caches.match(req).then(c=>c||fetch(req).then(r=>{const copy=r.clone();caches.open(CACHE).then(cache=>cache.put(req,copy));return r}).catch(()=>caches.match("./index.html"))))}});
