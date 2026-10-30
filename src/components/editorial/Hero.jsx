import React from 'react'
import { motion } from 'framer-motion'

const AREAS = [
  { n: '01', t: 'Full Stack', d: 'Sistemas web do banco à tela, com React, TypeScript, Node e Python, na Uiara Amazon Xperience.' },
  { n: '02', t: 'Dados', d: 'SQL e Metabase para indicadores e decisões de estoque na Stone.' },
  { n: '03', t: 'IA aplicada', d: 'Chatbots, OCR e agentes com LLM (Gemini, Groq/LLaMA) em projetos reais.' },
]
const TICKER = ['React', 'TypeScript', 'Node.js', 'Python', 'Flask', 'Express', 'PostgreSQL', 'SQL', 'Metabase', 'Supabase', 'Gemini', 'Groq', 'Docker']

export default function Hero() {
  return (
    <section className="relative px-5 md:px-10 pt-10 md:pt-14 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="font-mono text-[12px] uppercase tracking-[0.2em] mb-6 flex items-center gap-3"
      >
        <span className="inline-block w-10 h-px bg-ink" /> Desenvolvedor Full Stack
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
        className="leading-[0.85] uppercase font-black tracking-[-0.04em] text-[19vw] md:text-[12.5vw]"
      >
        Gabriel<br />Silvano
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 font-mono text-[13px] md:text-[14px] leading-relaxed max-w-md text-mute"
      >
        React, TypeScript, Node e Python. Construo sistemas que resolvem problemas de operação,
        com dados e IA onde fazem diferença.
      </motion.p>

      <div className="grid md:grid-cols-12 gap-8 mt-10 md:mt-16 border-t border-ink items-start">
        <div className="md:col-span-7 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink">
          {AREAS.map((a, i) => (
            <motion.div
              key={a.n}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              className="py-8 sm:px-6 sm:first:pl-0"
            >
              <p className="font-mono text-[11px] mb-5">({a.n})</p>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">{a.t}</h3>
              <p className="text-[14px] leading-relaxed text-mute">{a.d}</p>
            </motion.div>
          ))}

          <div className="sm:col-span-3 !border-l-0 border-t border-ink py-6 flex flex-wrap items-center gap-4">
            <a href="#projetos" className="px-6 py-3 bg-ink text-paper text-sm font-medium rounded-full hover:bg-[#333] transition-colors">
              Ver projetos ↓
            </a>
            <a href="https://github.com/Gabrielsvdata" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-ink text-sm font-medium rounded-full hover:bg-ink hover:text-paper transition-colors">
              GitHub ↗
            </a>
            <span className="sm:ml-auto font-mono text-[11px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ink animate-pulse" /> Dev Full Stack na Uiara Amazon Xperience
            </span>
          </div>
        </div>

        <motion.figure
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          transition={{ delay: 0.3, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="md:col-span-5 relative md:-mt-[9vw] aspect-[3/4] overflow-hidden"
        >
          <img
            src="/images/gabriel-2026.jpg"
            alt="Gabriel Silvano"
            className="w-full h-full object-cover object-top"
            style={{ filter: 'grayscale(1) contrast(1.15) brightness(0.95)' }}
          />
          <div className="absolute inset-0 mix-blend-multiply bg-[#e8e2d2]" />
          <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-paper mix-blend-difference">
            fig. 01 — Gabriel Silvano
          </figcaption>
        </motion.figure>
      </div>

      {/* Ticker da stack */}
      <div className="-mx-5 md:-mx-10 mt-12 border-y border-ink overflow-hidden py-3 whitespace-nowrap">
        <motion.div
          className="inline-flex gap-10 font-mono text-[12px] uppercase tracking-[0.2em]"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t} <span className="opacity-40">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
