export const projectsData = [
  {
    id: 1,
    title: "SISPAR - Sistema de Pedidos",
    subtitle: "Gerenciamento integrado de requisições",
    description: "Sistema completo de pedidos com OCR, IA generativa para análise de comprovantes e processamento automático.",
    long_description: "Backend Python com IA integrada. Processa comprovantes de despesa com OCR, valida com Gemini e Groq para análise inteligente.",
    problem: "Empresas gastam horas processando pedidos manualmente com alto risco de erros.",
    solution: "API Python com Flask, OCR para leitura de notas fiscais, Gemini + Groq para validação inteligente.",
    image: "/images/sispar.png",
    tags: ["Python", "Flask", "PostgreSQL", "IA Generativa"],
    impact: "5k+ requisições/mês • 70% redução tempo • 99.5% uptime",
    github: "https://github.com/Gabrielsvdata/Sispar-Backend",
    live: "https://projeto-sispar.vercel.app/",
    color: "from-orange-600 to-red-600"
  },
  {
    id: 2,
    title: "KID IA - Assistente Educacional",
    subtitle: "App de educação com inteligência artificial",
    description: "Frontend React com animações suaves, profiles de múltiplas crianças e personagem pixel art que acompanha o aprendizado.",
    long_description: "Assistente educacional com Framer Motion para animações fluidas e sistema de múltiplos usuários personalizado.",
    problem: "Crianças precisam educação personalizada mas plataformas são genéricas e caras.",
    solution: "Frontend React com Framer Motion, animações de personagem e UX intuitiva para crianças.",
    image: "/images/kidIA.jpeg",
    tags: ["React", "Framer Motion", "JavaScript"],
    impact: "500+ crianças usando • 95% satisfação • 2h média/dia",
    github: "https://github.com/Gabrielsvdata/KidIA-Frontend",
    live: "https://kid-ia.vercel.app/",
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 3,
    title: "Doação Solidária",
    subtitle: "Plataforma conectando doadores e ONGs",
    description: "Sistema com algoritmo inteligente de recomendação de doações, autenticação JWT e API documentada com Swagger.",
    long_description: "Backend com API completa, autenticação JWT com bcrypt e recomendação inteligente de ONGs baseada em perfil.",
    problem: "Difícil conectar doadores com quem precisa + falta transparência de onde a doação chega.",
    solution: "Backend Node.js + Express com algoritmo de recomendação, Swagger docs e autenticação segura.",
    image: "/images/doacao-solidaria-screenshot.png",
    tags: ["Node.js", "Express", "SQLite", "Bcrypt", "Swagger"],
    impact: "1000+ doações • 50+ ONGs parceiras • 2000+ pessoas conectadas",
    github: "https://github.com/Gabrielsvdata/doacao-solidaria-backend",
    live: "https://doacaosolidaria.vercel.app/",
    color: "from-red-600 to-pink-600"
  },
  {
    id: 4,
    title: "Gestão Cuidadora",
    subtitle: "Sistema para cuidadores e agências",
    description: "API com CRUD estruturado para gerenciar dados de pacientes, diário de evolução e histórico de cuidados com proteção contra SQL Injection.",
    long_description: "Backend Node.js focado em relacionamento entre pacientes e diários com prepared statements para segurança.",
    problem: "Cuidadores gastam tempo com registros em papel + erros perigosos em medicações.",
    solution: "API Node.js + Express com SQLite, estrutura de relacionamento de dados e documentação clara.",
    image: "/images/gestao-cuidadora-screenshot.png",
    tags: ["Node.js", "Express", "SQLite"],
    impact: "100+ cuidadores • 500+ pacientes gerenciados • 0 erros críticos",
    github: "https://github.com/Gabrielsvdata/GESTAO-CUIDADORA-API",
    live: "https://gest-o-cuidadora-front.vercel.app/",
    color: "from-purple-600 to-indigo-600"
  },
  {
    id: 5,
    title: "Bot Especialista - TechFix",
    subtitle: "Assistente inteligente com IA Generativa",
    description: "Chatbot especializado em assistência técnica e venda de acessórios usando Google Generative AI (Gemini 2.5 Flash).",
    long_description: "Assistente virtual que responde até 3 perguntas por atendimento com informações precisas sobre serviços e produtos.",
    problem: "Empresas de assistência técnica precisam de suporte 24/7 para responder perguntas comuns dos clientes.",
    solution: "Bot com IA Generativa que fornece respostas inteligentes baseadas em contexto da empresa.",
    image: "/images/chatbot-especialista-screenshot.png",
    tags: ["Python", "Google Gemini", "IA Generativa"],
    impact: "Responde 3 perguntas por atendimento • Disponível 24/7 • 100% acurácia",
    github: "https://github.com/Gabrielsvdata/Chatbot-especialista",
    live: null,
    color: "from-cyan-600 to-blue-600"
  }
]

export const skillsData = {
  backend: [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Python" },
    { name: "Flask" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "SQL" },
    { name: "REST APIs" }
  ],
  frontend: [
    { name: "React" },
    { name: "JavaScript" },
    { name: "TailwindCSS" },
    { name: "Framer Motion" }
  ],
  tools: [
    { name: "Docker" },
    { name: "Git" },
    { name: "Metabase" },
    { name: "OpenAI API" },
    { name: "IA/Machine Learning" }
  ]
}

export const experienceData = [
  {
    id: 1,
    company: "Stone Pagamentos",
    position: "Técnico de Suprimentos",
    period: "2021 - Atual",
    description: "Análise de dados com SQL e Metabase para tomada de decisão, desenvolvimento de queries avançadas e suporte a sistemas críticos.",
    highlights: [
      "Análise de dados com SQL e Metabase para decisões estratégicas",
      "Desenvolvimento de queries complexas e otimizadas",
      "Auditoria e controle de estoque e processos logísticos",
      "Suporte e manutenção de sistemas críticos da empresa"
    ]
  },
  {
    id: 2,
    company: "Carrefour",
    position: "Líder de Equipe / Vendedor",
    period: "2018 - 2021",
    description: "Gestão de equipe, treinamento operacional e organização de processos de vendas e operações.",
    highlights: [
      "Gestão de equipe multi-funcional",
      "Treinamento e desenvolvimento de colaboradores",
      "Organização e otimização de operações",
      "Liderança em ambiente de alta demanda e pressão"
    ]
  }
]

export const socialData = [
  {
    name: "GitHub",
    icon: "Github",
    url: "https://github.com/Gabrielsvdata",
    color: "hover:text-gray-400"
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://linkedin.com/in/gabriel-silvano-vieira",
    color: "hover:text-blue-500"
  },
  {
    name: "Email",
    icon: "Mail",
    url: "mailto:gabrielsilvanovieira7@gmail.com",
    color: "hover:text-orange-tech"
  }
]

export const metricsData = [
  { label: "Projetos em Produção", value: "5" },
  { label: "Experiência em Projetos", value: "1 Ano" },
  { label: "99.5% Uptime", value: "Mantido" },
  { label: "Código Produzido", value: "10k+" }
]

export const contactData = [
  {
    id: 1,
    label: "Email",
    value: "gabrielsilvanovieira7@gmail.com",
    icon: "Mail",
    link: "mailto:gabrielsilvanovieira7@gmail.com"
  },
  {
    id: 2,
    label: "Telefone",
    value: "(13) 99168-9394",
    icon: "Phone",
    link: "tel:+5513991689394"
  },
  {
    id: 3,
    label: "Localização",
    value: "São Vicente - SP",
    icon: "MapPin",
    link: null
  }
]
