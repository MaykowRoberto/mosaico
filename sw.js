const CACHE="mosaico-studio-v5";
const APP=["./","./index.html","./manifest.json","./icon.svg","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{
  /* tolerante: um arquivo ausente não impede a instalação da nova versão */
  e.waitUntil(caches.open(CACHE)
    .then(c=>Promise.allSettled(APP.map(u=>c.add(new Request(u,{cache:"reload"})))))
    .then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
/* rede primeiro (sempre revalida); o cache só serve quando está offline */
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET"||new URL(req.url).origin!==location.origin)return;
  e.respondWith(
    fetch(req,{cache:"no-cache"}).then(r=>{
      if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy))}
      return r;
    }).catch(()=>caches.match(req).then(c=>c||caches.match("./index.html")))
  );
});
