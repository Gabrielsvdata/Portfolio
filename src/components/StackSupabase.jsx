import React from 'react'
import { motion } from 'framer-motion'

const stack = [
  { category: 'Backend', items: ['Python', 'Node.js', 'Flask', 'Express', 'APIs REST'] },
  { category: 'Banco de Dados', items: ['PostgreSQL', 'SQL', 'Metabase', 'Query Optimization'] },
  { category: 'IA & ML', items: ['Machine Learning', 'LLM', 'NLP', 'Engenharia de Prompt', 'Deep Learning'] },
  { category: 'DevOps', items: ['Docker', 'Git', 'CI/CD', 'Vercel', 'Cloud'] },
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion'] },
  { category: 'Metodologias', items: ['Scrum', 'Agile', 'API Design', 'Data Analysis'] },
]

export default function StackSupabase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-primary/5 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stack <span className="text-green-primary">Técnico</span>
          </h2>
          <p className="text-gray-medium text-lg max-w-2xl">
            Ferramentas e tecnologias que uso para arquitetar sistemas escaláveis, APIs de alta performance e aplicações inteligentes.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-green-primary/20 bg-gradient-to-br from-green-primary/3 to-transparent hover:border-green-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-green-primary group-hover:text-green-glow transition-colors">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm bg-dark-bg border border-green-primary/20 text-gray-light rounded-lg group-hover:border-green-primary/50 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
