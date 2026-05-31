import React from 'react'
import { motion } from 'framer-motion'

const areas = [
  {
    icon: '⚙️',
    title: 'Backend Development',
    description:
      'Desenvolvimento de APIs REST, regras de negócio, integrações e aplicações voltadas para escalabilidade, organização de processos e centralização de informações.',
  },
  {
    icon: '📊',
    title: 'Data Solutions',
    description:
      'Utilização de SQL, análise de dados e estruturação de informações para apoiar processos, indicadores e tomada de decisão.',
  },
  {
    icon: '🤖',
    title: 'Inteligência Artificial',
    description:
      'Desenvolvimento de soluções utilizando IA Generativa, integração de LLMs, engenharia de prompts e automação de fluxos inteligentes.',
  },
]

export default function AreasSupabase() {
  return (
    <section id="areas" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-primary/15 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-primary/5 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block text-green-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Especialidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Áreas de <span className="text-green-primary">Atuação</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-xl border border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-transparent hover:border-green-primary/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-5">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-light mb-3 group-hover:text-green-glow transition-colors">
                {area.title}
              </h3>
              <p className="text-gray-medium text-sm leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
