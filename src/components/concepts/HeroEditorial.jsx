import React from 'react'
import { motion } from 'framer-motion'

// Conceito A — Editorial / Revista
// Fundo claro, tipografia gigante condensada, linhas finas, foto em duotone.
const NAV = ['Trajetória', 'Projetos', 'Stack', 'Experiência', 'Contato']
const AREAS = [
  { n: '01', t: 'Backend', d: 'APIs em Python e Node, bancos relacionais, integrações.' },
  { n: '02', t: 'Dados', d: 'SQL, análise e automação de processos operacionais.' },
  { n: '03', t: 'IA', d: 'LLMs aplicados a produtos reais, chatbots e agentes.' },
]
const TICKER = ['Python', 'Flask', 'Node.js', 'React', 'PostgreSQL', 'Supabase', 'OpenAI', 'SQL', 'Docker']

export default function HeroEditorial() {
  return (
    <div
      className="min-h-screen text-[#111] selection:bg-[#111] selection:text-[#f4f1ea]"
      style={{ background: '#f4f1ea', fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Nav */}
      <header className="border-b border-[#111] px-6 md:px-10 h-14 flex items-center justify-between text-[13px] uppercase tracking-[0.18em]">
        <span className="font-semibold">Gabriel Silvano</span>
        <nav className="hidden md:flex gap-8">
          {NAV.map((n) => (
            <a key={n} href="#" className="text-[#111] hover:underline underline-offset-4">{n}</a>
          ))}
        </nav>
        <span className="font-mono text-[11px] normal-case tracking-normal">São Paulo · BR — {new Date().getFullYear()}</span>
      </header>

      <section className="relative px-6 md:px-10 pt-10 md:pt-14 pb-0 overflow-hidden">
        {/* Rótulo */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-mono text-[12px] uppercase tracking-[0.2em] mb-6 flex items-center gap-3"
        >
          <span className="inline-block w-10 h-px bg-[#111]" /> Desenvolvedor Full Stack
        </motion.p>

        {/* Nome gigante */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="leading-[0.85] uppercase font-black tracking-[-0.04em] text-[18vw] md:text-[12.5vw]"
          style={{ fontFamily: "'Inter', 'Arial Narrow', Impact, sans-serif", fontStretch: 'condensed' }}
        >
          Gabriel
          <br />
          Silvano
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 font-mono text-[13px] md:text-[14px] leading-relaxed max-w-md text-[#333]"
        >
          Backend, dados e inteligência artificial aplicados a problemas reais de negócio.
        </motion.p>

        {/* Grade: texto + foto */}
        <div className="grid md:grid-cols-12 gap-8 mt-10 md:mt-16 border-t border-[#111]">
          {/* Coluna áreas */}
          <div className="md:col-span-7 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#111]">
            {AREAS.map((a, i) => (
              <motion.div
                key={a.n}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="py-8 sm:px-6 first:pl-0"
              >
                <p className="font-mono text-[11px] mb-5">({a.n})</p>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">{a.t}</h3>
                <p className="text-[14px] leading-relaxed text-[#444]">{a.d}</p>
              </motion.div>
            ))}

            <div className="sm:col-span-3 border-t border-[#111] py-6 flex flex-wrap items-center gap-4">
              <a href="#projetos" className="px-6 py-3 bg-[#111] !text-[#f4f1ea] text-sm font-medium rounded-full hover:bg-[#333] transition-colors">
                Ver projetos ↗
              </a>
              <a href="https://github.com/Gabrielsvdata" className="px-6 py-3 border border-[#111] text-[#111] text-sm font-medium rounded-full hover:bg-[#111] hover:text-[#f4f1ea] transition-colors">
                GitHub
              </a>
              <span className="ml-auto font-mono text-[11px] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#111] animate-pulse" /> Disponível para novos projetos
              </span>
            </div>
          </div>

          {/* Foto duotone */}
          <motion.figure
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ delay: 0.3, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="md:col-span-5 relative md:-mt-[9vw] aspect-[3/4] overflow-hidden"
          >
            <img
              src="/images/gabriel.jpg"
              alt="Gabriel Silvano"
              className="w-full h-full object-cover object-top"
              style={{ filter: 'grayscale(1) contrast(1.15) brightness(0.95)' }}
            />
            {/* duotone: multiplica com o tom do fundo */}
            <div className="absolute inset-0 mix-blend-multiply" style={{ background: '#e8e2d2' }} />
            <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-[#f4f1ea] mix-blend-difference">
              fig. 01 — Gabriel Silvano
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* Ticker da stack */}
      <div className="mt-12 border-y border-[#111] overflow-hidden py-3 whitespace-nowrap">
        <motion.div
          className="inline-flex gap-10 font-mono text-[12px] uppercase tracking-[0.2em]"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t} <span className="opacity-40">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
