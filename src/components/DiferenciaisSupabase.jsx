import React from 'react'
import { motion } from 'framer-motion'

const diferenciais = [
  {
    icon: '🏢',
    title: 'Experiência Corporativa',
    description:
      'Mais de 5 anos atuando em ambientes corporativos com foco em operações, processos e análise de dados.',
  },
  {
    icon: '📊',
    title: 'Experiência com Dados',
    description:
      'Vivência prática com SQL, indicadores e suporte à tomada de decisão em contexto de negócio real.',
  },
  {
    icon: '💻',
    title: 'Projetos Autorais',
    description:
      'Desenvolvimento individual de aplicações Full Stack, APIs e soluções com Inteligência Artificial.',
  },
  {
    icon: '🎯',
    title: 'Visão de Negócio',
    description:
      'Capacidade de compreender problemas operacionais e transformá-los em soluções tecnológicas funcionais.',
  },
]

export default function DiferenciaisSupabase() {
  return (
    <section id="diferenciais" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-primary/15 to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-primary/5 rounded-full blur-3xl opacity-10" />
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
            Além do código
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-primary">Diferenciais</span>
          </h2>
          <p className="text-gray-medium text-lg max-w-2xl">
            Experiência prática, visão de negócio e capacidade de transformar contexto operacional em solução digital.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-transparent hover:border-green-primary/50 hover:from-green-primary/8 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-gray-light font-bold text-base mb-3 group-hover:text-green-glow transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-medium text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
