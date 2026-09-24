MOSAICO STUDIO — PWA
====================

Arquivos principais
- index.html       Aplicativo completo (HTML + CSS + JavaScript em um único arquivo)
- manifest.json    Manifesto PWA
- sw.js            Service Worker / cache offline
- icon.svg         Ícone vetorial
- icon-192.png     Ícone PWA 192x192
- icon-512.png     Ícone PWA 512x512

PESQUISA DE IMAGENS
- O aplicativo detecta o locale disponibilizado pelo navegador/dispositivo via navigator.languages/navigator.language.
- Em Português do Brasil, a pesquisa usa o termo em português e também uma expansão automática de termos comuns para melhorar a compatibilidade com catálogos internacionais.
- A busca tenta preencher até 100 resultados únicos, usando páginas/continuação das APIs e, quando necessário, a segunda fonte.
- Fontes: Wikimedia Commons e Openverse.

ELEMENTOS CRIATIVOS
- Molduras: formas retangular, círculo, hexágono, diamante, estrela, coração e orgânica; estilos clássico, duplo e destaque.
- Adesivos: conjunto visual baseado em OpenMoji, carregado por CDN quando necessário.
- Fundos: sólidos, gradientes e padrões de grade/pontos.

CRÉDITOS / LICENÇAS
OpenMoji — gráficos sob CC BY-SA 4.0.
Projeto: https://openmoji.org/
Repositório: https://github.com/hfg-gmuend/openmoji

A pesquisa consulta catálogos externos apenas quando há conexão. O editor, projeto salvo, recursos internos e Service Worker continuam funcionando localmente.

TESTE LOCAL
1. Extraia esta pasta.
2. Abra um terminal nela.
3. Execute: python -m http.server 8080
4. Acesse: http://localhost:8080/

Não abra por file:// para testar instalação e Service Worker da PWA.
