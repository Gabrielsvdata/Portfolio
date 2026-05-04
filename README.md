# Gabriel Silvano Portfolio

Um portfólio moderno e responsivo desenvolvido com React, Vite, TailwindCSS e Framer Motion.

## 🎨 Design

- **Split-screen Hero** com animações suaves
- **Paleta Rocketseat** com cores quentes (laranja #ff6b35, roxo, azul)
- **Animations** com Framer Motion
- **Responsivo** em mobile, tablet e desktop
- **Dark mode** como padrão

## 🛠️ Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scroll**: React Scroll

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/          # Componentes reutilizáveis
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   ├── Card.jsx
│   │   ├── GradientText.jsx
│   │   └── SocialLink.jsx
│   ├── Navbar.jsx       # Navegação
│   ├── Hero.jsx         # Seção hero
│   ├── About.jsx        # Sobre mim
│   ├── Skills.jsx       # Skills técnicas
│   ├── Projects.jsx     # Projetos
│   ├── Experience.jsx   # Experiência
│   ├── Contact.jsx      # Contato
│   └── Footer.jsx       # Rodapé
├── data/
│   └── portfolioData.js # Dados do portfólio
├── App.jsx              # Componente principal
├── index.css            # Estilos globais
└── main.jsx             # Entry point
```

## 🎯 Customização

### Alterar dados pessoais

Edite [src/data/portfolioData.js](src/data/portfolioData.js):
- Projetos (`projectsData`)
- Skills (`skillsData`)
- Experiência (`experienceData`)
- Redes sociais (`socialData`)

### Cores personalizadas

Edite [tailwind.config.js](tailwind.config.js) para mudar a paleta de cores.

### Foto de perfil

Coloque sua foto em `public/images/gabriel.jpg` (400x400px) e atualize o caminho em [src/components/Hero.jsx](src/components/Hero.jsx).

## 📱 Responsividade

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Depois fazer upload da pasta 'dist' no Netlify
```

## 📄 Licença

MIT License - Veja LICENSE para mais detalhes.

---

Desenvolvido com ❤️ por Gabriel Silvano
# Portfolio
