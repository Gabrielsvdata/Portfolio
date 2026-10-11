import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader, reveal } from './Section'

const JOBS = [
  {
    company: 'Uiara Amazon Xperience',
    role: 'Desenvolvedor Full Stack',
    period: 'set 2026 — atual',
    stack: 'React · TypeScript · Node · Python',
    bullets: [
      'Implementação de sistemas e novos projetos, do levantamento à entrega.',
      'Avaliação de regras de negócio junto às áreas antes de cada implementação.',
      'Treinamento das equipes nas novas funcionalidades em produção.',
    ],
  },
  {
    company: 'Stone',
    role: 'Analista de Suprimentos',
    period: '2021 — atual',
    stack: 'SQL · Metabase · Operações',
    bullets: [
      'Dashboards em Metabase e consultas SQL para decisões de estoque do setor.',
      'Auditoria de dados e identificação de inconsistências em ambiente de alto volume.',
      'Automação de controles operacionais e suporte a sistemas internos.',
    ],
  },
  {
    company: 'Carrefour',
    role: 'Logística & Operações',
    period: 'antes de 2021',
    stack: 'Processos · Indicadores',
    bullets: [
      'Operação e processos em varejo de grande porte, com foco em indicadores.',
    ],
  },
]

export default function Experiencia() {
  return (
    <section id="experiencia" className="px-5 md:px-10 py-20 md:py-28">
      <SectionHeader n="04" title="Experiência" note="Duas frentes ao mesmo tempo: desenvolvimento e dados em operação." />

      <ol>
        {JOBS.map((j, i) => (
          <motion.li key={j.company} {...reveal(i)} className="grid md:grid-cols-12 gap-3 md:gap-8 py-8 md:py-10 border-b border-ink">
            <div className="md:col-span-3">
              <p className="font-mono text-[11px] mb-2">{j.period}</p>
              <p className="font-mono text-[11px] text-mute">{j.stack}</p>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-[26px] md:text-[32px] font-black uppercase tracking-[-0.03em] leading-[0.95]">{j.company}</h3>
              <p className="mt-2 text-[15px] font-medium">{j.role}</p>
            </div>
            <ul className="md:col-span-5 space-y-2 text-[14px] leading-relaxed text-mute">
              {j.bullets.map((b) => (
                <li key={b} className="flex gap-3"><span className="shrink-0">—</span><span>{b}</span></li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      <p className="mt-6 font-mono text-[11px] text-mute">
        Formação: Tecnólogo em Análise e Desenvolvimento de Sistemas (concluído).
      </p>
    </section>
  )
}
