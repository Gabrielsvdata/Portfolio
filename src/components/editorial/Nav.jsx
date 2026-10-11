import React, { useState } from 'react'

const LINKS = [
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-ink">
      <div className="px-5 md:px-10 h-14 flex items-center justify-between text-[13px] uppercase tracking-[0.18em]">
        <a href="#" className="font-semibold">Gabriel Silvano</a>

        <nav className="hidden md:flex gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline underline-offset-4">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a href="/curriculo_gabriel_silvano.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">CV ↗</a>
          <span className="font-mono text-[11px] normal-case tracking-normal">Santos · BR</span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-[11px] normal-case tracking-normal"
          aria-label="Abrir menu"
        >
          {open ? 'fechar' : 'menu'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink px-5 py-4 flex flex-col gap-3 text-[13px] uppercase tracking-[0.18em]">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="/curriculo_gabriel_silvano.pdf" target="_blank" rel="noopener noreferrer">CV ↗</a>
        </nav>
      )}
    </header>
  )
}
