import React from 'react'
import { motion } from 'framer-motion'

const CONTACTS = [
  { label: 'WhatsApp', value: '+55 11 97401-9394', href: 'https://wa.me/5511974019394' },
  { label: 'E-mail', value: 'gabrielsilvanovieira7@gmail.com', href: 'mailto:gabrielsilvanovieira7@gmail.com' },
  { label: 'LinkedIn', value: '/in/gabriel-silvano-vieira', href: 'https://linkedin.com/in/gabriel-silvano-vieira' },
  { label: 'GitHub', value: '@Gabrielsvdata', href: 'https://github.com/Gabrielsvdata' },
]

export default function Footer() {
  return (
    <footer id="contato" className="px-5 md:px-10 pt-20 md:pt-28 pb-8 bg-ink text-paper">
      <motion.h2
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="text-[16vw] md:text-[11vw] leading-[0.85] uppercase font-black tracking-[-0.04em]"
      >
        Vamos<br />conversar
      </motion.h2>

      <div className="grid md:grid-cols-12 gap-8 mt-12 md:mt-16 pt-8 border-t border-paper/30">
        <p className="md:col-span-5 text-[15px] leading-relaxed text-paper/70 max-w-sm">
          Aberto a oportunidades Full Stack e a projetos que envolvam dados e IA aplicada a operação.
        </p>

        <dl className="md:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {CONTACTS.map((c) => (
            <div key={c.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50 mb-1">{c.label}</dt>
              <dd>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-[15px] md:text-[17px] underline underline-offset-4 decoration-paper/40 hover:decoration-paper break-all">
                  {c.value} ↗
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-16 pt-6 border-t border-paper/30 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
        <span>© {new Date().getFullYear()} Gabriel Silvano</span>
        <a href="/curriculo_gabriel_silvano.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-paper">Baixar currículo ↗</a>
        <span>São Paulo, SP — Brasil</span>
      </div>
    </footer>
  )
}
