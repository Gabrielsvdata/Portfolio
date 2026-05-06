# 🚀 Gabriel Silvano - Portfolio

Um portfolio web moderno e responsivo criado com React 18, Vite e um backend Node.js funcional para contato.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.5.14-green)
![Node.js](https://img.shields.io/badge/Node.js-Express-lightgrey)
![License](https://img.shields.io/badge/License-MIT-orange)

## ✨ Características

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Efeitos Parallax**: Scroll dynamics com animações suaves
- **Formulário de Contato Funcional**: Integração com backend Node.js + Nodemailer
- **Performance**: Build otimizado com Vite (~261ms)
- **Tema Dark Mode**: Paleta de cores profissional (Grafite, Marrom, Laranja)
- **Componentes Reutilizáveis**: Arquitetura modular com React

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI Framework
- **Vite 4.5** - Build tool & dev server
- **SCSS** - Styling with CSS Variables
- **React Scroll** - Smooth scrolling

### Backend
- **Node.js** - Runtime
- **Express 5.2** - Web framework
- **Nodemailer 8.0** - Email service
- **CORS 2.8** - Cross-origin requests
- **dotenv 17.4** - Environment variables

## 📋 Pré-requisitos

- Node.js v16+
- npm ou yarn
- Git (opcional)

## 🚀 Quick Start

### 1. Clonar / Configurar Projeto

```bash
cd "Área de Trabalho/projetos DEV/Portfolio"
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Email (Gmail)

Crie um arquivo `.env` na raiz do projeto:

```bash
GMAIL_USER=seu_email@gmail.com
GMAIL_PASS=sua_app_password_16_caracteres
CONTACT_EMAIL=seu_email@gmail.com
PORT=3001
```

**Como gerar App Password:**
1. Acesse: https://myaccount.google.com/security
2. Ative "Verificação em duas etapas"
3. Vá para "Senhas de app"
4. Selecione "Correio" e "Windows"
5. Copie a senha gerada (16 caracteres)

### 4. Iniciar Servidores

**Terminal 1 - Frontend (Vite):**
```bash
npm run dev
```
Acessa em: http://localhost:3000

**Terminal 2 - Backend (Express):**
```bash
npm run server
```
Acessa em: http://localhost:3001

## 📁 Estrutura do Projeto

```
Portfolio/
├── public/
│   └── images/           # Imagens dos projetos
├── src/
│   ├── components/       # Componentes React
│   │   ├── About.jsx
│   │   ├── Contact.jsx   # Formulário de contato
│   │   ├── Expertise.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   └── CustomCursor.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.scss
├── server.js             # Backend Express
├── package.json
├── vite.config.js
└── .env                  # Variáveis de ambiente
```

## 🎨 Componentes

### Navigation
- Header fixo com logo minimalist
- Menu de navegação responsivo
- Altura: 60px com blur backdrop

### Hero
- Seção com parallax effect
- Background com matrix de código
- CTA buttons para navegação

### About
- Estatísticas de experiência
- Habilidades resumidas
- "1+ anos", "5+ projetos", "5K+ linhas de código"

### Expertise
- Grid de 4 cards com tech stack
- Backend Python, Node.js, Banco de Dados, DevTools
- Ícones e descrições detalhadas

### Projects
- Showcase de 5 projetos reais
- Links diretos para GitHub
- Imagens responsivas

### Contact
- Formulário com validação
- Informações de contato (Email, WhatsApp, GitHub, LinkedIn)
- Mensagem de sucesso estilizada

## 📧 Formulário de Contato

O formulário envia dois emails:
1. **Email ao Owner**: Notificação com mensagem do visitante
2. **Email ao Visitante**: Confirmação de recebimento

**Validações:**
- Nome obrigatório
- Email válido (regex pattern)
- Mensagem obrigatória

**Resposta de sucesso:**
```json
{
  "message": "Email enviado com sucesso!"
}
```

## 🎨 Paleta de Cores

```scss
--bg-dark: #1a1a1a         // Grafite
--accent-primary: #ff6b35  // Laranja
--accent-secondary: #8b5a3c // Marrom
--text-primary: #ffffff
--text-secondary: #b0b0b0
```

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor Vite em http://localhost:3000
npm run server   # Inicia backend Express em http://localhost:3001
npm run build    # Build para produção
npm run preview  # Preview do build
```

## 🔒 Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `GMAIL_USER` | Email Gmail para envio |
| `GMAIL_PASS` | App Password (16 caracteres) |
| `CONTACT_EMAIL` | Email para receber mensagens |
| `PORT` | Porta do backend (padrão: 3001) |

⚠️ **Importante**: Nunca commit `.env` em git - já está em `.gitignore`

## 🌐 Endpoints API

### POST `/send-email`
Envia email de contato

**Request:**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "message": "Olá, gostaria de saber mais..."
}
```

**Response (200):**
```json
{
  "message": "Email enviado com sucesso!"
}
```

**Response (400):**
```json
{
  "error": "Todos os campos são obrigatórios"
}
```

### GET `/health`
Verifica status do servidor

**Response (200):**
```json
{
  "status": "Servidor de emails rodando!"
}
```

## 🔧 Troubleshooting

### "Servidor de emails não está rodando"
- Verifique se rodou `npm run server` em outro terminal
- Confirme que a porta 3001 está disponível

### Emails não chegam
- Valide credenciais do Gmail em `.env`
- Confirme que 2FA está ativado
- App Password deve ter 16 caracteres

### Erro CORS
- Verifique se frontend em 3000 e backend em 3001
- Confirme que `cors()` está ativado em `server.js`

## 📱 Responsividade

Breakpoints implementados:
- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🚀 Deploy

### Vercel (Recomendado para Frontend)
```bash
npm run build
# Deploy o arquivo dist/
```

### Backend (Heroku / Railway)
```bash
npm install --production
git push
```

## 📄 Licença

MIT License - Livre para uso pessoal e comercial

## 👨‍💻 Autor

**Gabriel Silvano**
- 🔗 GitHub: [github.com/Gabrielsvdata](https://github.com/Gabrielsvdata)
- 💼 LinkedIn: [linkedin.com/in/gabriel-silvano-vieira](https://linkedin.com/in/gabriel-silvano-vieira)
- 📧 Email: gabrielsilvanovieira7@gmail.com
- 📱 WhatsApp: (13) 99168-9394

---

**Desenvolvido com ❤️ usando React + Node.js**
