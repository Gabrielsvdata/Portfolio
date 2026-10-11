import React from 'react'
import { motion } from 'framer-motion'

// Cabeçalho padrão das seções: número à esquerda, título gigante, nota à direita.
export function SectionHeader({ n, title, note }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="grid md:grid-cols-12 gap-4 md:gap-8 items-end pb-6 border-b border-ink"
    >
      <p className="md:col-span-2 font-mono text-[11px]">({n})</p>
      <h2 className="md:col-span-6 text-[11vw] md:text-[5.5vw] leading-[0.9] uppercase font-black tracking-[-0.03em]">{title}</h2>
      {note && <p className="md:col-span-4 md:text-right font-mono text-[12px] text-mute leading-relaxed">{note}</p>}
    </motion.div>
  )
}

export const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay: i * 0.08 },
})
