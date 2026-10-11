import React from 'react'
import { motion } from 'framer-motion'

// Conceito B — Bento grid
// Cinza-chumbo com superfícies suaves, blocos arredondados, um único acento laranja.
const ACCENT = '#ff6a3d'
const tile = 'rounded-[28px] bg-[#18181b] border border-white/[0.06] p-6 md:p-7 relative overflow-hidden'

const fade = (i) => ({
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
})

const STACK = ['Python', 'Flask', 'Node', 'React', 'PostgreSQL', 'Supabase', 'OpenAI', 'Docker']

export default function HeroBento() {
  return (
    <div className="min-h-screen text-[#f4f4f5]" style={{ background: '#0e0e10', fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Nav flutuante em pílula */}
      <header className="sticky top-4 z-20 flex justify-center px-4">
        <nav className="flex items-center gap-1 rounded-full bg-[#18181b]/90 backdrop-blur border border-white/[0.08] p-1.5 text-[13px]">
          <span className="px-4 font-semibold">GS</span>
          {['Projetos', 'Stack', 'Experiência'].map((n) => (
            <a key={n} href="#" className="px-3 py-1.5 rounded-full !text-[#a1a1aa] hover:!text-white hover:bg-white/[0.06] transition-colors hidden sm:block">{n}</a>
          ))}
          <a href="#" className="ml-1 px-4 py-1.5 rounded-full !text-[#0e0e10] font-medium" style={{ background: ACCENT }}>Contato</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[170px] gap-3 md:gap-4">
          {/* Intro — 2x2 */}
          <motion.div {...fade(0)} className={`${tile} col-span-2 row-span-2 flex flex-col justify-between`}>
            <div className="flex items-center gap-2 text-[12px] text-[#a1a1aa]">
              <span className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
              Disponível · São Paulo, BR
            </div>
            <div>
              <h1 className="text-[40px] md:text-[56px] font-semibold leading-[1] tracking-[-0.03em]">
                Gabriel<br />Silvano
              </h1>
              <p className="mt-4 text-[15px] md:text-[17px] text-[#a1a1aa] leading-relaxed max-w-md">
                Desenvolvedor Full Stack. Construo APIs, pipelines de dados e produtos com IA — do banco à tela.
              </p>
            </div>
            <div className="flex gap-2">
              <a href="#projetos" className="px-5 py-2.5 rounded-full text-[14px] font-medium !text-[#0e0e10]" style={{ background: ACCENT }}>Ver projetos</a>
              <a href="https://github.com/Gabrielsvdata" className="px-5 py-2.5 rounded-full text-[14px] font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] transition-colors">GitHub</a>
            </div>
          </motion.div>

          {/* Foto — 1x2 */}
          <motion.div {...fade(1)} className={`${tile} col-span-1 row-span-2 p-0`}>
            <img src="/images/gabriel.jpg" alt="Gabriel Silvano" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0e0e10] to-transparent" />
            <div className="absolute bottom-5 left-5 text-[12px]">
              <p className="text-[#a1a1aa]">Olá, eu sou o</p>
              <p className="font-semibold">Gabriel 👋</p>
            </div>
          </motion.div>

          {/* Números */}
          <motion.div {...fade(2)} className={`${tile} flex flex-col justify-between`}>
            <p className="text-[12px] text-[#a1a1aa]">Projetos entregues</p>
            <p className="text-[44px] md:text-[52px] font-semibold leading-none tracking-tight">04<span style={{ color: ACCENT }}>+</span></p>
          </motion.div>

          <motion.div {...fade(3)} className={`${tile} flex flex-col justify-between`}>
            <p className="text-[12px] text-[#a1a1aa]">Foco</p>
            <div className="space-y-1 text-[15px] font-medium">
              <p>Backend</p><p>Dados</p><p style={{ color: ACCENT }}>IA</p>
            </div>
          </motion.div>

          {/* Stack — 2x1 */}
          <motion.div {...fade(4)} className={`${tile} col-span-2 flex flex-col justify-between`}>
            <p className="text-[12px] text-[#a1a1aa]">Stack principal</p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-white/[0.06] text-[13px]">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Projeto em destaque — 2x1 */}
          <motion.div {...fade(5)} className={`${tile} col-span-2 flex items-center gap-5 group cursor-pointer`}>
            <div className="w-24 h-full rounded-2xl overflow-hidden shrink-0 border border-white/[0.06]">
              <img src="/images/doacao-solidaria-screenshot.png" alt="" className="w-full h-full object-cover object-left-top" />
            </div>
            <div className="min-w-0">
              <p className="text-[12px] text-[#a1a1aa] mb-1">Projeto em destaque</p>
              <p className="font-semibold text-[17px] truncate">Doação Solidária</p>
              <p className="text-[13px] text-[#a1a1aa] line-clamp-2">Plataforma de doações com API em Flask, PostgreSQL e painel React.</p>
            </div>
            <span className="ml-auto text-[22px] transition-transform group-hover:translate-x-1" style={{ color: ACCENT }}>→</span>
          </motion.div>

          {/* Trajetória */}
          <motion.div {...fade(6)} className={`${tile} flex flex-col justify-between`}>
            <p className="text-[12px] text-[#a1a1aa]">Trajetória</p>
            <p className="text-[14px] leading-snug">Logística & Operações <span style={{ color: ACCENT }}>→</span> Tecnologia</p>
          </motion.div>

          {/* Status de API animado */}
          <motion.div {...fade(7)} className={`${tile} flex flex-col justify-between font-mono text-[12px]`}>
            <p className="text-[#a1a1aa] font-sans">Agora</p>
            <div>
              <p className="text-[#a1a1aa]">GET /api/health</p>
              <p className="flex items-center gap-2">
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.6 }} className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                200 OK · 42ms
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
