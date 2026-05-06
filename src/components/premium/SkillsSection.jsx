import React from 'react'
import { motion } from 'framer-motion'

const SkillsSection = () => {
  const skills = [
    {
      category: 'Backend & Server',
      icon: '⚙️',
      items: ['Python', 'Node.js', 'Flask', 'Express.js', 'APIs REST'],
      color: '#22c55e',
    },
    {
      category: 'Banco de Dados',
      icon: '📊',
      items: ['SQL', 'Metabase', 'PostgreSQL', 'Query Optimization', 'Analysis'],
      color: '#4ade80',
    },
    {
      category: 'IA & Machine Learning',
      icon: '🧠',
      items: ['Machine Learning', 'Engenharia de Prompt', 'LLM', 'NLP', 'IA Aplicada'],
      color: '#22c55e',
    },
    {
      category: 'Automação & RPA',
      icon: '🤖',
      items: ['Git', 'Scrum', 'Metodologias Ágeis', 'CI/CD Pipelines', 'Workflows'],
      color: '#4ade80',
    },
    {
      category: 'Análise de Dados',
      icon: '📈',
      items: ['SQL Queries', 'Metabase', 'Data Visualization', 'Insights', 'Decision Making'],
      color: '#22c55e',
    },
    {
      category: 'DevOps & Cloud',
      icon: '☁️',
      items: ['Docker', 'Git', 'Vercel', 'APIs REST', 'Cloud Deployment'],
      color: '#4ade80',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-dark-bg py-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-widest text-green-glow uppercase">
            Competências
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            <span className="text-gray-light">Expertise</span>
            <br />
            <span className="glow-text text-green-primary">Técnica & Ferramentas</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: `0 20px 40px ${skill.color}20`,
                borderColor: skill.color,
              }}
              className="group p-8 glass-effect rounded-2xl border border-green-primary/20 transition-all hover:border-green-primary/50"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">
                {skill.icon}
              </div>

              {/* Category */}
              <h3 className="text-xl font-bold text-gray-light mb-6">
                {skill.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {skill.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="text-gray-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Glow on hover */}
              <motion.div
                whileHover={{ opacity: 0.5 }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-primary/0 via-green-primary/0 to-green-primary/0 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '15+', label: 'Tecnologias Dominadas' },
            { number: '100+', label: 'Linhas de Código' },
            { number: '5+', label: 'Anos de Experiência' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-8 text-center glass-effect rounded-xl border border-green-primary/20"
            >
              <div className="text-4xl font-bold text-green-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
