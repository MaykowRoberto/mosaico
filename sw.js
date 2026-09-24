const CACHE_NAME = "mosaico-studio-v3";
const APP_SHELL = ["./","./index.html","./manifest.json","./icon.svg","./icon-192.png","./icon-512.png"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch", event => {
  const request=event.request;if(request.method!=="GET")return;const url=new URL(request.url);
  if(url.origin===self.location.origin){event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{const copy=response.clone();caches.open(CACHE_NAME).then(c=>c.put(request,copy));return response;})));return;}
  if(request.destination==="image"){event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{const copy=response.clone();caches.open(CACHE_NAME).then(c=>c.put(request,copy));return response;}).catch(()=>cached||Response.error())));}
});
self.addEventListener("message",event=>{if(event.data==="SKIP_WAITING")self.skipWaiting();});
