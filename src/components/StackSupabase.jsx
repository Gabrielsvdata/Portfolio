import React from 'react'
import { motion } from 'framer-motion'

const stack = [
  {
    category: 'Backend',
    icon: '⚙️',
    emphasis: true,
    items: ['Python', 'Node.js', 'Flask', 'Express', 'APIs REST'],
  },
  {
    category: 'Dados',
    icon: '📊',
    emphasis: true,
    items: ['SQL', 'PostgreSQL', 'SQLite', 'Análise de Dados', 'Metabase'],
  },
  {
    category: 'Inteligência Artificial',
    icon: '🤖',
    emphasis: true,
    items: ['IA Generativa', 'Engenharia de Prompt', 'Groq (LLaMA)', 'Google Gemini', 'Integração de LLMs'],
  },
  {
    category: 'Ferramentas',
    icon: '🛠️',
    emphasis: false,
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Swagger / OpenAPI'],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    emphasis: false,
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Segurança & Infra',
    icon: '🔐',
    emphasis: false,
    items: ['JWT', 'bcrypt', 'CORS', 'Rate Limiting', 'Render / Vercel'],
  },
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
            Tecnologias organizadas por área de atuação — com foco em Backend, Dados e IA aplicada.
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
              className={`group p-6 rounded-xl border transition-all duration-300 ${
                section.emphasis
                  ? 'border-green-primary/35 bg-gradient-to-br from-green-primary/8 to-transparent hover:border-green-primary/60'
                  : 'border-green-primary/15 bg-gradient-to-br from-green-primary/3 to-transparent hover:border-green-primary/40'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{section.icon}</span>
                <h3 className={`text-lg font-semibold transition-colors ${
                  section.emphasis
                    ? 'text-green-primary group-hover:text-green-glow'
                    : 'text-gray-light group-hover:text-green-primary'
                }`}>
                  {section.category}
                </h3>
                {section.emphasis && (
                  <span className="ml-auto text-xs text-green-primary/60 border border-green-primary/20 px-2 py-0.5 rounded-full">
                    foco
                  </span>
                )}
              </div>
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
