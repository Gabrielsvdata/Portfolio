import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ProjectsGallery = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Scroll mais rápido
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-400%'])

  const projects = [
    {
      id: 1,
      title: 'Chatbot Especialista',
      description: 'Sistema de chatbot com estruturação de LLM para atendimento especializado.',
      image: '/images/chatbot-especialista-screenshot.png',
      technologies: ['Python', 'LLM', 'NLP', 'Backend'],
      color: '#22c55e',
    },
    {
      id: 2,
      title: 'Kid IA',
      description: 'Chatbot educativo para crianças com estruturação de LLM avançada.',
      image: '/images/kidia-screenshot.png',
      technologies: ['Python', 'LLM', 'Backend', 'IA Educativa'],
      color: '#4ade80',
    },
    {
      id: 3,
      title: 'Doação Solidária',
      description: 'Plataforma de doações com automação de processos e análise social.',
      image: '/images/doacao-solidaria-screenshot.png',
      technologies: ['Backend', 'Python', 'Automação', 'PostgreSQL'],
      color: '#22c55e',
    },
    {
      id: 4,
      title: 'Gestão Cuidadora',
      description: 'Sistema de gestão de cuidados com análise de dados e IA.',
      image: '/images/gestao-cuidadora-screenshot.png',
      technologies: ['IA', 'Análise de Dados', 'Backend', 'SQL'],
      color: '#4ade80',
    },
  ]

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative w-full bg-dark-secondary py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-green-primary/10 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-widest text-green-glow uppercase">
            Galeria de Projetos
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="text-gray-light">Portfólio</span>
            <br />
            <span className="glow-text text-green-primary">Multidisciplinar</span>
          </h2>
          <p className="text-gray-medium text-lg max-w-2xl">
            Uma seleção de projetos que demonstram expertise em backend, IA e automação.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative h-screen flex items-center overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-8 px-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[90vw] md:min-w-[80vw] lg:min-w-[70vw] xl:min-w-[60vw]"
            >
              <motion.div
                whileHover={{ y: -20, boxShadow: '0 20px 50px rgba(34, 197, 94, 0.2)' }}
                className="h-full glass-effect rounded-2xl overflow-hidden border border-green-primary/20 transition-all group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden h-96 lg:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-transparent opacity-30" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        className="h-1 rounded-full mb-6"
                        style={{ backgroundColor: project.color }}
                      />

                      <h3 className="text-3xl font-bold mb-4 text-gray-light">
                        {project.title}
                      </h3>

                      <p className="text-gray-medium mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-dark-bg border border-green-primary/30 rounded-lg text-sm text-green-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-6 py-3 bg-green-primary text-dark-bg font-bold rounded-lg text-sm hover:bg-green-glow transition-all flex items-center gap-2 w-fit"
                    >
                      Ver Detalhes
                      <span>→</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-12">
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-dim text-sm flex items-center gap-2"
        >
          <span>Scroll horizontalmente</span>
          <span>→</span>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsGallery
