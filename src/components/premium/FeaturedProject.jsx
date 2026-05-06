import React from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef } from 'react'

const FeaturedProject = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  return (
    <section
      id="featured"
      ref={containerRef}
      className="relative w-full min-h-screen bg-dark-bg py-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-green-primary/5 via-transparent to-green-glow/5"
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm tracking-widest text-green-glow uppercase">
            Projeto em Destaque
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            <span className="text-gray-light">SisPar</span>
            <br />
            <span className="glow-text text-green-primary">RPA + Automação Inteligente</span>
          </h2>
        </motion.div>

        {/* Featured Project Container */}
        <motion.div
          style={{ opacity, scale, y }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-primary/20 to-green-glow/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative rounded-2xl overflow-hidden border border-green-primary/30 glow-box">
                <img
                  src="/images/sispar-screenshot.png"
                  alt="SisPar Project"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-30" />
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-medium text-lg mb-6 leading-relaxed">
                Sistema de processamento de parâmetros com automação RPA e análise
                em tempo real. Uma solução enterprise que otimiza fluxos de trabalho
                complexos através de inteligência artificial.
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-widest text-green-glow mb-4">
                  Tecnologias
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['RPA', 'Automação', 'Python', 'Backend', 'Análise de Dados'].map(
                    (tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="px-4 py-2 bg-dark-secondary border border-green-primary/30 rounded-lg text-sm text-green-primary glow-box transition-all"
                      >
                        {tech}
                      </motion.span>
                    )
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8 space-y-4">
                <h4 className="text-sm uppercase tracking-widest text-green-glow mb-4">
                  Principais Features
                </h4>
                {[
                  'Processamento automático de parâmetros em tempo real',
                  'Dashboard interativo com análise de dados avançada',
                  'Integração seamless com sistemas legados',
                  'Escalabilidade e performance otimizada',
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-2 h-2 bg-green-primary rounded-full flex-shrink-0" />
                    <span className="text-gray-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="w-full px-8 py-4 bg-green-primary text-dark-bg font-bold rounded-lg text-lg hover:bg-green-glow transition-all glow-box">
                  Ver Case de Sucesso
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Parallax Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            { label: 'Tempo de Implementação', value: '4 meses' },
            { label: 'Aumento de Produtividade', value: '300%' },
            { label: 'Economia Anual', value: '500K+' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, borderColor: '#22c55e' }}
              className="p-6 glass-effect rounded-xl border border-green-primary/20 transition-all text-center"
            >
              <div className="text-3xl font-bold text-green-primary mb-2">
                {stat.value}
              </div>
              <p className="text-gray-medium text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProject
