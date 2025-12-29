# Gabriel Silvano Vieira - Portfólio

Um portfólio moderno e responsivo desenvolvido com React e Tailwind CSS.

## 🚀 Tecnologias

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápido para desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos

## 📋 Seções

- **Hero** - Apresentação pessoal com links sociais
- **Projetos** - Portfólio de projetos com links para GitHub e deploy
- **Habilidades** - Tecnologias e ferramentas dominadas
- **Contato** - Formulário de contato e informações

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Visualizar build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## ✏️ Personalizando

### Alterando Informações Pessoais

Edite os seguintes arquivos:

- **Hero.jsx** - Nome, título e descrição
- **Contact.jsx** - Email, localização e links sociais
- **Footer.jsx** - Links e informações de copyright

### Adicionando Projetos

Edite o arquivo `Projects.jsx` e adicione objetos ao array `projects`:

```javascript
{
  id: 4,
  title: 'Novo Projeto',
  description: 'Descrição do projeto',
  image: 'https://url-da-imagem.com',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/seu-usuario/projeto',
  deploy: 'https://seu-projeto.vercel.app',
  featured: true,
}
```

### Alterando Habilidades

Edite o arquivo `Skills.jsx` para modificar as categorias e níveis de proficiência.

## 🎨 Cores

O projeto usa um esquema de cores roxo/índigo que pode ser personalizado no arquivo `tailwind.config.js`.

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona bem em:
- Desktops
- Tablets
- Smartphones

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ por Gabriel Silvano Vieira
# Portfolio
