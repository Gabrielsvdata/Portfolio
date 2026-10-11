import React, { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const links = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contato', href: '#contato' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/90 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#" className="font-display text-base font-semibold tracking-tight">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-line text-sm text-paper/80 hover:text-paper">
              {l.label}
            </a>
          ))}
          <a
            href={profile.cv}
            download
            className="rounded-full border border-line px-4 py-1.5 text-sm transition-colors hover:border-paper"
          >
            Baixar CV
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden font-mono text-xs uppercase tracking-[0.18em]"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" className="container-page border-t border-line py-6 md:hidden" aria-label="Principal">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="font-display text-2xl">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={profile.cv} download className="eyebrow !text-paper">
                Baixar CV ↓
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
