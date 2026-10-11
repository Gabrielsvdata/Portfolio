# Portfólio — Gabriel Silvano

Site pessoal de Gabriel Silvano, desenvolvedor fullstack pleno. Página única, estática, com estética editorial escura.

## Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (só para o fade-in das seções)

Não há backend. Contato é por WhatsApp, e-mail e LinkedIn.

## Rodando

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # gera dist/
npm run preview   # serve o build
```

## Onde editar

Todo o conteúdo fica em dois arquivos, sem tocar nos componentes:

- `src/data/profile.js` — nome, links, experiência, formação e stack
- `src/data/projects.js` — projetos em destaque e lista "também no GitHub"

Imagens dos projetos ficam em `public/images/` em WebP, com no máximo 1400px de largura. A foto do hero é `gabriel-bw.webp` e a imagem de compartilhamento é `og.jpg` (1200×630).

Antes de publicar em um domínio novo, troque as URLs absolutas de `og:image` e `og:url` em `index.html`.
