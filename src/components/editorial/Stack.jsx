import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader, reveal } from './Section'

const STACK = [
  { cat: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'] },
  { cat: 'Backend', items: ['Node.js', 'Express', 'Python', 'Flask', 'APIs REST', 'Swagger / OpenAPI'] },
  { cat: 'Dados', items: ['SQL', 'PostgreSQL', 'SQLite', 'Supabase', 'Metabase', 'Análise de dados'] },
  { cat: 'IA', items: ['Google Gemini', 'Groq (LLaMA)', 'Engenharia de prompt', 'OCR', 'Integração de LLMs'] },
  { cat: 'Segurança & Infra', items: ['JWT', 'bcrypt', 'CORS', 'Rate limiting', 'Docker', 'Render / Vercel'] },
  { cat: 'Ferramentas', items: ['Git', 'GitHub', 'Postman', 'Linux'] },
]

export default function Stack() {
  return (
    <section id="stack" className="px-5 md:px-10 py-20 md:py-28">
      <SectionHeader n="03" title="Stack" note="O que uso no trabalho e nos projetos, sem enfeite." />

      <dl>
        {STACK.map((row, i) => (
          <motion.div key={row.cat} {...reveal(i)} className="grid md:grid-cols-12 gap-2 md:gap-8 py-5 md:py-6 border-b border-ink">
            <dt className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.18em] pt-1">{row.cat}</dt>
            <dd className="md:col-span-9 flex flex-wrap gap-x-6 gap-y-2 text-[18px] md:text-[22px] font-medium tracking-tight">
              {row.items.map((it) => <span key={it}>{it}</span>)}
            </dd>
          </motion.div>
        ))}
      </dl>
    </section>
  )
}
