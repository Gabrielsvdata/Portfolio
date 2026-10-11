import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader, reveal } from './Section'

const STEPS = [
  {
    year: '2019',
    title: 'Logística & Operações',
    text: 'Mais de 5 anos em operações de grande porte, lidando com processos, indicadores e o problema real antes de qualquer sistema.',
  },
  {
    year: '2021',
    title: 'Dados & SQL',
    text: 'Na Stone, SQL e Metabase viram ferramenta de trabalho: indicadores, auditoria de dados e decisões de estoque em alto volume.',
  },
  {
    year: '2024',
    title: 'Engenharia de software',
    text: 'Formado em Análise e Desenvolvimento de Sistemas. Projetos publicados com backend próprio, APIs documentadas e IA integrada, e finalista do hackathon da Oracle com o Finvise.',
  },
  {
    year: '2026',
    title: 'Desenvolvedor Full Stack',
    text: 'Na Uiara Amazon Xperience: implementação de sistemas, regras de negócio e treinamento de equipes, com React, TypeScript, Node e Python.',
  },
]

const NUMBERS = [
  { v: '+5', l: 'anos de experiência corporativa' },
  { v: '05', l: 'projetos publicados' },
  { v: '04', l: 'linguagens no dia a dia' },
  { v: 'ADS', l: 'Tecnólogo, formado' },
]

export default function Trajetoria() {
  return (
    <section id="trajetoria" className="px-5 md:px-10 py-20 md:py-28">
      <SectionHeader
        n="01"
        title={<>Da operação<br />ao código</>}
        note="Entendo o problema de negócio antes de escrever a primeira linha. Isso vem de anos dentro da operação."
      />

      <ol className="grid md:grid-cols-4 border-b border-ink divide-y md:divide-y-0 md:divide-x divide-ink">
        {STEPS.map((s, i) => (
          <motion.li key={s.year} {...reveal(i)} className="py-8 md:px-6 md:first:pl-0 md:last:pr-0">
            <p className="font-mono text-[11px] mb-6">{s.year}</p>
            <h3 className="text-xl font-semibold tracking-tight mb-3">{s.title}</h3>
            <p className="text-[14px] leading-relaxed text-mute">{s.text}</p>
          </motion.li>
        ))}
      </ol>

      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-ink divide-x divide-ink">
        {NUMBERS.map((n, i) => (
          <motion.div key={n.l} {...reveal(i)} className="py-8 pl-4 md:px-6 first:pl-0 [&:nth-child(3)]:pl-0 md:[&:nth-child(3)]:pl-6">
            <p className="text-[48px] md:text-[64px] font-black leading-none tracking-[-0.04em]">{n.v}</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-mute">{n.l}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
