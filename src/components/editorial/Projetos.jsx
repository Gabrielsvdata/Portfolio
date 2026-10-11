import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader, reveal } from './Section'

const PROJECTS = [
  {
    n: '01',
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
    n: '02',
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
    n: '03',
    title: 'KidIA',
    kind: 'Chatbot educativo com segurança por camadas',
    year: '2025',
    text: 'IA para crianças sem controle é risco. API Flask com LLaMA 3 70B, autenticação JWT em cookies HttpOnly, filtro de conteúdo, rate limiting e perfis múltiplos por responsável.',
    tech: ['Python', 'Flask', 'Groq', 'JWT', 'bcrypt', 'Gunicorn'],
    github: 'https://github.com/Gabrielsvdata/KidIA-backend',
    image: '/images/kidIA.jpeg',
  },
  {
    n: '04',
    title: 'Gestão Cuidadora',
    kind: 'API para cuidados de idosos',
    year: '2024',
    text: 'Histórico de pacientes em papel não tem rastreabilidade. API REST em Node/Express com banco relacional, registros diários (pressão, alimentação, observações) e consulta de evolução por paciente.',
    tech: ['Node.js', 'Express', 'SQLite', 'REST'],
    link: 'https://gestao-cuidadora-api.onrender.com',
    github: 'https://github.com/Gabrielsvdata/GESTAO-CUIDADORA-API',
    image: '/images/gestao-cuidadora-screenshot.png',
  },
  {
    n: '05',
    title: 'Chatbot Especialista',
    kind: 'Assistente virtual com Gemini 2.5 Flash',
    year: '2024',
    text: 'Assistências técnicas respondem as mesmas perguntas todo dia. Chatbot com persona e regras via system instructions, histórico estruturado e limite de interações por sessão.',
    tech: ['Python', 'Gemini 2.5', 'Engenharia de prompt'],
    github: 'https://github.com/Gabrielsvdata/Chatbot-especialista',
    image: '/images/chatbot-especialista-screenshot.png',
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
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover object-left-top" style={{ filter: 'grayscale(1) contrast(1.05)' }} loading="lazy" />
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
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover object-left-top" style={{ filter: 'grayscale(1)' }} loading="lazy" />
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
