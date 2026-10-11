export const profile = {
  name: 'Gabriel Silvano',
  role: 'Desenvolvedor Fullstack Pleno',
  location: 'Baixada Santista, SP · Remoto',
  email: 'gabrielsilvanovieira7@gmail.com',
  whatsapp: '5513991689394',
  whatsappLabel: '(13) 99168-9394',
  github: 'https://github.com/Gabrielsvdata',
  linkedin: 'https://linkedin.com/in/gabriel-silvano-vieira',
  cv: '/curriculo_gabriel_silvano.pdf',
  photo: '/images/gabriel-bw.webp',
}

export const experience = [
  {
    company: 'Contrato PJ',
    role: 'Desenvolvedor Fullstack Pleno',
    // TODO: confirmar mês/ano de início
    period: '2026 — atual',
    summary:
      'Desenvolvimento de produto ponta a ponta com TypeScript e Python, Supabase e PostgreSQL.',
    bullets: [
      'Implementação de regras de negócio no backend e no front, com cobertura de testes.',
      'Modelagem de dados em PostgreSQL com migrations versionadas.',
      'Autenticação, storage e banco gerenciados no Supabase.',
    ],
  },
  {
    company: 'Stone',
    role: 'Analista de Suprimentos',
    period: '2021 — atual',
    summary:
      'Dados e processos em uma fintech de alta escala, em paralelo ao trabalho como desenvolvedor.',
    bullets: [
      'SQL e Metabase para indicadores estratégicos e auditoria de dados em produção.',
      'Automação de processos operacionais e controle de estoque em alto volume transacional.',
      'Suporte a sistemas internos e resolução de inconsistências de dados.',
    ],
  },
  {
    company: 'Carrefour',
    role: 'Líder de Equipe',
    period: '2018 — 2021',
    summary: 'Gestão de equipe, treinamento e organização de operações de loja.',
    bullets: [],
  },
]

export const education = [
  { course: 'Análise e Desenvolvimento de Sistemas', school: 'FATEC Praia Grande', period: '2023 — 2027' },
  { course: 'Técnico em Inteligência Artificial', school: 'IFNMG', period: '2026 — 2028' },
  { course: 'Técnico em Logística', school: 'ETEC São Vicente', period: '2019 — 2020' },
]

export const stack = [
  { group: 'Linguagens', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Java'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Flask', 'Spring Boot', 'REST', 'JWT'] },
  { group: 'Dados', items: ['PostgreSQL', 'Supabase', 'SQLAlchemy', 'Alembic', 'Migrations', 'Metabase', 'pgvector'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Turborepo'] },
  { group: 'Qualidade', items: ['Pytest', 'Ruff', 'mypy', 'ESLint', 'Zod', 'Swagger / OpenAPI'] },
  { group: 'IA', items: ['Groq (LLaMA)', 'Google Gemini', 'Engenharia de prompt', 'RAG', 'OCR'] },
  { group: 'Infra', items: ['Docker', 'Git', 'Vercel', 'Render', 'Nginx'] },
]
