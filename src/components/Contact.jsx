import React from 'react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer id="contato" className="container-page pb-10 pt-16 md:pt-24">
      <Reveal>
        <p className="eyebrow mb-6">Contato</p>
        <h2 className="font-display text-4xl font-semibold tracking-tightest sm:text-5xl lg:text-7xl">
          Vamos conversar
          <span className="text-accent">.</span>
        </h2>
        <p className="mt-6 max-w-xl text-paper/70">
          Aberto a oportunidades fullstack, remoto ou híbrido na Baixada Santista. Respondo mais rápido no
          WhatsApp.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['WhatsApp', profile.whatsappLabel, `https://wa.me/${profile.whatsapp}`],
            ['E-mail', profile.email, `mailto:${profile.email}`],
            ['LinkedIn', 'gabriel-silvano-vieira', profile.linkedin],
            ['GitHub', 'Gabrielsvdata', profile.github],
          ].map(([label, value, href]) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group block rounded-sm border border-line p-5 transition-colors hover:border-paper"
              >
                <span className="eyebrow block">{label}</span>
                <span className="mt-2 block break-all text-sm group-hover:text-accent">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="rule mt-16 flex flex-col gap-2 pt-6 font-mono text-[11px] text-muted sm:flex-row sm:justify-between">
        <span>© {year} Gabriel Silvano</span>
        <span>React · Vite · Tailwind</span>
      </div>
    </footer>
  )
}
