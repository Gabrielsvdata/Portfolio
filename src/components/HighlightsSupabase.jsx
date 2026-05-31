import React from 'react'
import { motion } from 'framer-motion'

const highlights = [
  {
    icon: '🏢',
    value: '+5 anos',
    label: 'Experiência corporativa',
    description: 'Atuação em empresas de grande porte como Stone e Carrefour, com foco em dados, processos e sistemas.',
  },
  {
    icon: '📊',
    value: 'SQL & Dados',
    label: 'Análise de dados aplicada',
    description: 'SQL aplicado a analytics estratégico, uso de Metabase e auditoria de dados em produção.',
  },
  {
    icon: '🚀',
    value: '5 projetos',
    label: 'Full Stack publicados',
    description: 'Sistemas em produção com backend próprio, APIs REST documentadas e deploy em ambientes de nuvem.',
  },
  {
    icon: '🎓',
    value: 'ADS',
    label: 'Análise e Desenvolvimento de Sistemas',
    description: 'Formação técnica em andamento na FATEC, com foco em engenharia de software e sistemas de informação.',
  },
  {
    icon: '🤖',
    value: 'IA aplicada',
    label: 'Projetos com Inteligência Artificial',
    description: 'Integração de LLMs (Groq, Gemini), engenharia de prompt, OCR e chatbots em aplicações reais.',
  },
]

export default function HighlightsSupabase() {
  return (
    <section id="destaques" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-primary/15 to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-primary/5 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block text-green-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Por que contratar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-primary">Destaques</span>
          </h2>
          <p className="text-gray-medium text-lg max-w-2xl">
            O que diferencia este perfil de um desenvolvedor sem experiência corporativa.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-xl border border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-transparent hover:border-green-primary/50 hover:from-green-primary/8 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <p className="text-2xl font-bold text-green-primary mb-1">{item.value}</p>
              <p className="text-gray-light font-semibold text-sm mb-3">{item.label}</p>
              <p className="text-gray-medium text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
