Mosaico Studio — PWA

Arquivos:
- index.html — interface + CSS + JavaScript em um único arquivo
- manifest.json — manifesto PWA
- sw.js — service worker para cache/offline
- icon.svg, icon-192.png, icon-512.png — ícones

Teste local:
1. Abra um terminal nesta pasta.
2. Execute: python -m http.server 8080
3. Acesse: http://localhost:8080/

Para instalar como PWA, use HTTPS ou localhost/127.0.0.1. Abrir o index.html diretamente com file:// não ativa Service Worker nem instalação PWA.

A pesquisa de imagens usa Openverse em tempo de execução, sem chave de API embutida no código.
