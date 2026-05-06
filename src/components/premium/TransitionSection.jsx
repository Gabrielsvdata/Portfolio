import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const TransitionSection = () => {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [500, 1200], [0.8, 1])
  const opacity = useTransform(scrollY, [500, 1000], [0, 1])

  return (
    <section className="relative w-full py-32 bg-dark-secondary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-green-glow/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          style={{ scale, opacity }}
          className="text-center"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gray-light">Transformando ideias em</span>
            <br />
            <span className="glow-text text-green-primary">soluções de impacto</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-medium max-w-2xl mx-auto mb-12"
          >
            Cada projeto é uma oportunidade de resolver problemas complexos com
            tecnologia criativa. Veja como estou moldando o futuro digital.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: '5+', label: 'Projetos Premium', icon: '🚀' },
              { number: '10K+', label: 'Linhas de Código', icon: '💻' },
              { number: '100%', label: 'Qualidade', icon: '⭐' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)' }}
                className="p-6 glass-effect rounded-xl border border-green-primary/20 hover:border-green-primary/50 transition-all"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TransitionSection
