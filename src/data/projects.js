// Projetos em destaque, na ordem em que aparecem na página.
// `demo` é opcional: sem ele, o card aponta só para o código.
export const projects = [
  {
    slug: 'club-sette',
    title: 'Club Sette',
    year: '2026',
    kind: 'E-commerce · Loja + Admin',
    role: 'Produto completo, solo',
    summary:
      'Loja de camisas de futebol com experiência editorial e conversão via WhatsApp. Monorepo com loja pública e painel administrativo separados.',
    details: [
      'Catálogo com filtros, página de produto com galeria, tamanhos e estoque por variação.',
      'Registro de interesse antes do contato, para medir demanda por produto, time e tamanho.',
      'Admin protegido por Supabase Auth com verificação em tabela própria, upload para Storage e promoções via migration SQL.',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Turborepo', 'Supabase', 'PostgreSQL'],
    image: '/images/club-sette.webp',
    imageAlt: 'Imagem editorial da loja Club Sette',
    // TODO: URL pública da loja
    demo: null,
    repo: null, // repositório privado
  },
  {
    slug: 'finvise',
    title: 'FinVise',
    year: '2026',
    kind: 'Plataforma financeira · Projeto em equipe',
    // TODO: confirmar o que o Gabriel construiu no time
    role: 'Time No Country · G9-BR',
    summary:
      'Inteligência financeira com importação de transações, classificação por Machine Learning e agente conversacional com RAG sobre PostgreSQL e pgvector.',
    details: [
      'Três serviços atrás de um gateway Nginx: API Spring Boot, serviço de IA em FastAPI e SPA React.',
      'Agente com busca vetorial e full-text em português combinadas por RRF, respostas por SSE e cancelamento ponta a ponta.',
      'Fila RAG durável no próprio PostgreSQL, com retry e reprocessamento manual.',
    ],
    stack: ['Java 21', 'Spring Boot', 'FastAPI', 'React 19', 'PostgreSQL', 'pgvector', 'Docker'],
    image: '/images/finvise.webp',
    imageAlt: 'Logotipo do FinVise',
    demo: null,
    repo: 'https://github.com/No-Country-simulation/G9-BR-Team-17-FinVise',
  },
  {
    slug: 'petmind',
    title: 'PetMind',
    year: '2026',
    kind: 'API + Web · World Code Cup',
    role: 'Backend e frontend',
    summary:
      'Registro de rotinas e comportamento de pets com análise por IA. API tipada de ponta a ponta e front com pets em pixel art que reagem ao estado emocional.',
    details: [
      'FastAPI com SQLAlchemy 2, Pydantic v2 e Alembic para versionar o schema.',
      'Lógica de estado emocional isolada em serviço puro, coberta por 25 testes com Pytest.',
      'Lint com Ruff e mypy em modo strict no CI local.',
    ],
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'Groq', 'React'],
    image: '/images/petmind.webp',
    imageAlt: 'Sprites em pixel art dos pets do PetMind',
    demo: null,
    repo: 'https://github.com/Gabrielsvdata/Petmind',
  },
  {
    slug: 'sispar',
    title: 'SisPar',
    year: '2025',
    kind: 'API de reembolsos · OCR + IA',
    role: 'Backend, solo',
    summary:
      'Reembolsos corporativos com leitura de comprovantes por OCR, validação de notas fiscais pelo Gemini e chatbot para consultas em linguagem natural.',
    details: [
      'Flask em MVC com ambientes dev, test e prod, Docker e documentação Swagger.',
      'Pytesseract para extrair dados dos comprovantes e Gemini para validar a nota.',
      'Deploy no Render com PostgreSQL em produção.',
    ],
    stack: ['Python', 'Flask', 'PostgreSQL', 'Gemini', 'Groq', 'OCR', 'Docker', 'Swagger'],
    image: '/images/sispar.webp',
    imageAlt: 'Tela de login do portal SisPar',
    demo: 'https://projeto-sispar.vercel.app/#/',
    repo: 'https://github.com/Gabrielsvdata/Sispar-Backend',
  },
  {
    slug: 'doacao-solidaria',
    title: 'Doação Solidária',
    year: '2026',
    kind: 'API de priorização de doações',
    role: 'Backend, solo',
    summary:
      'Em crises humanitárias, direciona doadores para as instituições com estoque mais crítico usando um algoritmo de score por categoria.',
    details: [
      'Regras de prioridade centralizadas em um único módulo, fáceis de testar e ajustar.',
      'Validação de entrada com Zod, admin autenticado com bcrypt e histórico de movimentações.',
      'Documentação OpenAPI completa.',
    ],
    stack: ['Node.js', 'Express', 'SQLite', 'Zod', 'bcrypt', 'Swagger'],
    image: '/images/doacao-solidaria.webp',
    imageAlt: 'Tela do sistema Doação Solidária',
    demo: 'https://doacaosolidaria.vercel.app/',
    repo: 'https://github.com/Gabrielsvdata/doacao-solidaria-backend',
  },
]

// Projetos menores, listados em uma linha só.
export const moreProjects = [
  {
    title: 'KidIA',
    kind: 'Chatbot educativo com JWT em cookie HttpOnly, filtro de conteúdo e rate limiting',
    repo: 'https://github.com/Gabrielsvdata/KidIA-backend',
  },
  {
    title: 'Gestão Cuidadora',
    kind: 'API REST para histórico clínico de idosos em casas de repouso',
    repo: 'https://github.com/Gabrielsvdata/GESTAO-CUIDADORA-API',
  },
  {
    title: 'Chatbot Especialista',
    kind: 'Assistente com Gemini, persona por system instruction e histórico estruturado',
    repo: 'https://github.com/Gabrielsvdata/Chatbot-especialista',
  },
]
