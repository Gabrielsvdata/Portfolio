import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Conceito C — Editor de código / IDE
// O hero inteiro é uma janela de editor: abas, números de linha, perfil escrito em Python,
// painel de preview com a foto e barra de status. Paleta "One Dark".
const C = {
  bg: '#0b0e14', panel: '#11151c', line: '#1f2530', text: '#c8ccd4', dim: '#5c6370',
  kw: '#c678dd', str: '#98c379', key: '#e06c75', num: '#d19a66', fn: '#61afef', cm: '#7f848e',
}

const CODE = [
  [['cm', '# gabriel.py — perfil profissional']],
  [['kw', 'class '], ['fn', 'GabrielSilvano'], ['text', ':']],
  [['text', '    role      = '], ['str', '"Desenvolvedor Full Stack"']],
  [['text', '    focus     = ['], ['str', '"Backend"'], ['text', ', '], ['str', '"Dados"'], ['text', ', '], ['str', '"IA"'], ['text', ']']],
  [['text', '    stack     = {']],
  [['text', '        '], ['str', '"backend"'], ['text', ': ['], ['str', '"Python"'], ['text', ', '], ['str', '"Flask"'], ['text', ', '], ['str', '"Node"'], ['text', '],']],
  [['text', '        '], ['str', '"data"'], ['text', ':    ['], ['str', '"SQL"'], ['text', ', '], ['str', '"PostgreSQL"'], ['text', ', '], ['str', '"Supabase"'], ['text', '],']],
  [['text', '        '], ['str', '"ai"'], ['text', ':      ['], ['str', '"OpenAI"'], ['text', ', '], ['str', '"LLM agents"'], ['text', '],']],
  [['text', '    }']],
  [['text', '    from_     = '], ['str', '"Logística & Operações"']],
  [['text', '    to        = '], ['str', '"Tecnologia"']],
  [['text', '    available = '], ['num', 'True']],
  [['text', '']],
  [['text', '    '], ['kw', 'def '], ['fn', 'build'], ['text', '(self, problem):']],
  [['text', '        '], ['kw', 'return '], ['fn', 'solution'], ['text', '(problem, api='], ['num', 'True'], ['text', ', data='], ['num', 'True'], ['text', ', ai='], ['num', 'True'], ['text', ')']],
]

function useTyping(lines, speed = 14) {
  const [count, setCount] = useState(0)
  const total = lines.reduce((n, l) => n + l.reduce((m, [, t]) => m + t.length, 0) + 1, 0)
  useEffect(() => {
    if (count >= total) return
    const id = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(id)
  }, [count, total, speed])
  return count
}

export default function HeroTerminal() {
  const typed = useTyping(CODE)

  // Renderiza as linhas até o número de caracteres já "digitados"
  let budget = typed
  const visible = CODE.map((line) => {
    if (budget <= 0) return null
    const out = []
    for (const [tok, text] of line) {
      if (budget <= 0) break
      const slice = text.slice(0, budget)
      budget -= text.length
      out.push([tok, slice])
    }
    budget -= 1 // quebra de linha
    return out
  })

  return (
    <div className="min-h-screen flex flex-col" style={{ background: C.bg, color: C.text, fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Barra superior minimalista */}
      <header className="h-12 px-6 flex items-center justify-between text-[13px]" style={{ borderBottom: `1px solid ${C.line}` }}>
        <span className="font-mono" style={{ color: C.fn }}>~/gabriel-silvano</span>
        <nav className="hidden md:flex gap-6 font-mono text-[12px]" style={{ color: C.dim }}>
          {['projetos', 'stack', 'experiencia', 'contato'].map((n) => (
            <a key={n} href="#" className="hover:!text-white transition-colors" style={{ color: C.dim }}>./{n}</a>
          ))}
        </nav>
      </header>

      <section className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-6 py-8 md:py-14 grid md:grid-cols-[1.35fr_1fr] gap-4 md:gap-6 items-stretch">
        {/* Janela do editor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden flex flex-col shadow-2xl"
          style={{ background: C.panel, border: `1px solid ${C.line}` }}
        >
          <div className="h-10 flex items-center px-4 gap-2" style={{ borderBottom: `1px solid ${C.line}` }}>
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <div className="ml-4 flex text-[12px] font-mono">
              <span className="px-3 py-1 rounded-t-md" style={{ background: C.bg, color: C.text }}>gabriel.py</span>
              <span className="px-3 py-1" style={{ color: C.dim }}>README.md</span>
            </div>
          </div>

          <pre className="flex-1 p-5 md:p-6 font-mono text-[12.5px] md:text-[13.5px] leading-[1.75] overflow-x-auto">
            {visible.map((line, i) => (
              <div key={i} className="flex">
                <span className="w-8 shrink-0 select-none text-right pr-4" style={{ color: C.dim }}>{line ? i + 1 : ''}</span>
                <span>
                  {line && line.map(([tok, text], j) => (
                    <span key={j} style={{ color: C[tok] || C.text }}>{text}</span>
                  ))}
                  {line && i === visible.filter(Boolean).length - 1 && (
                    <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-[7px] h-[15px] align-middle ml-px" style={{ background: C.text }} />
                  )}
                </span>
              </div>
            ))}
          </pre>

          <div className="h-7 px-4 flex items-center justify-between font-mono text-[11px]" style={{ background: '#1a1f29', color: C.dim }}>
            <span>main ✓ · Python 3.12 · UTF-8</span>
            <span>Ln {visible.filter(Boolean).length}, Col 1</span>
          </div>
        </motion.div>

        {/* Painel lateral: foto + ações */}
        <div className="flex flex-col gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl overflow-hidden flex-1 min-h-[300px] relative"
            style={{ border: `1px solid ${C.line}` }}
          >
            <div className="h-10 flex items-center justify-between px-4 font-mono text-[12px]" style={{ background: C.panel, color: C.dim, borderBottom: `1px solid ${C.line}` }}>
              <span>preview — gabriel.jpg</span>
              <span>1182 × 1856</span>
            </div>
            <img src="/images/gabriel.jpg" alt="Gabriel Silvano" className="absolute inset-0 top-10 w-full h-[calc(100%-2.5rem)] object-cover object-top" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl p-4 font-mono text-[12.5px]"
            style={{ background: C.panel, border: `1px solid ${C.line}` }}
          >
            <p style={{ color: C.dim }}>$ gabriel --help</p>
            <div className="mt-2 grid gap-1.5">
              <a href="#projetos" className="flex justify-between hover:text-white" style={{ color: C.text }}><span style={{ color: C.str }}>--projetos</span><span style={{ color: C.dim }}>ver trabalhos ↵</span></a>
              <a href="https://github.com/Gabrielsvdata" className="flex justify-between hover:text-white" style={{ color: C.text }}><span style={{ color: C.str }}>--github</span><span style={{ color: C.dim }}>repositórios ↵</span></a>
              <a href="#" className="flex justify-between hover:text-white" style={{ color: C.text }}><span style={{ color: C.str }}>--contato</span><span style={{ color: C.dim }}>WhatsApp / CV ↵</span></a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
