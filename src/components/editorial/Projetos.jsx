import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader, reveal } from './Section'

const PROJECTS = [
  {
    n: '01',
    title: 'Club Sette',
    kind: 'Loja de camisas de futebol — projeto vendido',
    year: '2026',
    text: 'E-commerce desenvolvido sob encomenda e entregue ao cliente: loja pública com catálogo, filtros e página de produto, conversão via WhatsApp, e painel administrativo com estoque, tamanhos e upload de imagens (Supabase Auth e Storage).',
    tech: ['React 19', 'TypeScript', 'Vite', 'Turborepo', 'Supabase', 'PostgreSQL'],
    link: 'https://club-sette-web.vercel.app/',
    image: '/images/club-sette.png',
    portrait: true,
  },
  {
    n: '02',
    title: 'FinVise',
    kind: 'Plataforma de inteligência financeira — finalista do hackathon Oracle (No Country)',
    year: '2026',
    text: 'Importação de transações (CSV e Open Finance via Pluggy), classificação por Machine Learning, indicadores e agente financeiro com RAG. Em equipe, fui responsável por todo o frontend e pela identidade visual: React 19, TypeScript, Tailwind, TanStack Query, Recharts e PWA, consumindo backend Spring Boot e serviço de IA em FastAPI.',
    tech: ['React 19', 'TypeScript', 'Tailwind', 'TanStack Query', 'Recharts', 'Spring Boot', 'FastAPI', 'PostgreSQL + pgvector'],
    github: 'https://github.com/No-Country-simulation/G9-BR-Team-17-FinVise',
    image: '/images/finvise.png',
  },
  {
    n: '03',
    title: 'SisPar',
    kind: 'API de reembolsos corporativos com IA',
    year: '2025',
    text: 'Reembolsos em planilha geram inconsistência e fraude. API REST em Flask com OCR de comprovantes, validação de notas fiscais via Gemini e chatbot com Groq/LLaMA para consultas em linguagem natural.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'Gemini', 'Groq', 'OCR', 'Docker'],
    link: 'https://projeto-sispar.vercel.app/#/',
    github: 'https://github.com/Gabrielsvdata/Sispar-Backend',
    image: '/images/sispar.png',
  },
  {
    n: '04',
    title: 'Petmind',
    kind: 'Registro de comportamento de pets com análise por IA — World Code Cup',
    year: '2026',
    text: 'Tutores registram rotinas e comportamentos do pet; a API calcula o estado emocional e gera análise com LLM. Backend em FastAPI com SQLAlchemy, PostgreSQL, testes automatizados e typecheck estrito; frontend em React com pets em pixel art que reagem ao humor.',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Groq', 'React'],
    github: 'https://github.com/Gabrielsvdata/Petmind',
    image: '/images/petmind.png',
  },
  {
    n: '05',
    title: 'Doação Solidária',
    kind: 'Sistema de recomendação por prioridade',
    year: '2025',
    text: 'Em crises humanitárias, doadores não sabem onde o estoque está crítico. API em Node/Express com algoritmo de scoring que ranqueia as 3 instituições mais urgentes, painel admin autenticado e documentação Swagger.',
    tech: ['Node.js', 'Express', 'SQLite', 'Zod', 'Swagger'],
    link: 'https://doacaosolidaria.vercel.app/',
    github: 'https://github.com/Gabrielsvdata/doacao-solidaria-backend',
    image: '/images/doacao-solidaria-screenshot.png',
  },
  {
    n: '06',
    title: 'Winchester',
    kind: "Fan game beat 'em up em pixel art inspirado em Supernatural, jogável no navegador",
    year: '2026',
    text: "Jogo de luta com rolagem lateral no estilo Golden Axe, em 4 capítulos: espíritos, vampiros, demônios e o confronto com Azazel, decidido por um tiro do Colt. Cinco caçadores jogáveis (Dean, Sam, John, Bobby e Castiel), cada um com arma, tiro e magia próprios, apresentados na história conforme entram na equipe. Tudo em um único arquivo, sem engine nem imagens: personagens animados por esqueleto e desenhados pixel a pixel no Canvas, combos, IA dos inimigos, chefe com padrões de ataque, trilha chiptune gerada com Web Audio e controles de teclado, toque e gamepad.",
    tech: ['JavaScript', 'HTML5 Canvas', 'Web Audio API', 'Gamepad API', 'Pixel art procedural'],
    link: 'https://winchester-mu.vercel.app/',
    github: 'https://github.com/Gabrielsvdata/winchester',
    image: '/images/winchester.png',
  },
]

export default function Projetos() {
  return (
    <section id="projetos" className="px-5 md:px-10 py-20 md:py-28">
      <SectionHeader
        n="02"
        title={<>Projetos<br />selecionados</>}
        note="Backend próprio, API documentada e deploy em nuvem."
      />

      <div>
        <ol>
          {PROJECTS.map((p, i) => (
            <motion.li
              key={p.n}
              {...reveal(i)}
              className="group border-b border-ink"
            >
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10">
                <p className="md:col-span-1 font-mono text-[11px] pt-2">({p.n})</p>

                <div className="md:col-span-6">
                  <h3 className="text-[32px] md:text-[48px] leading-[0.95] font-black uppercase tracking-[-0.03em] group-hover:translate-x-2 transition-transform duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-mono text-[12px] text-mute">{p.kind} — {p.year}</p>
                  {/* Tela do projeto: abre no hover (desktop) */}
                  <div className="hidden lg:block overflow-hidden max-h-0 group-hover:max-h-[300px] transition-[max-height] duration-500 ease-out">
                    <div className="mt-6 w-[400px] aspect-[16/10] border border-ink overflow-hidden">
                      <img src={p.image} alt={p.title} className={`w-full h-full object-cover ${p.portrait ? 'object-top' : 'object-left-top'}`} style={{ filter: 'grayscale(1) contrast(1.05)' }} loading="lazy" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <p className="text-[14px] leading-relaxed text-mute">{p.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider">
                    {p.tech.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <div className="mt-5 flex gap-4 text-[13px] font-medium">
                    {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">Ver online ↗</a>}
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">Código ↗</a>}
                  </div>
                </div>

                {/* Imagem inline no mobile */}
                <div className="md:col-span-12 lg:hidden border border-ink aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt={p.title} className={`w-full h-full object-cover ${p.portrait ? 'object-top' : 'object-left-top'}`} style={{ filter: 'grayscale(1)' }} loading="lazy" />
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
