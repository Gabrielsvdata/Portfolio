import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-dark-bg"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
        <motion.div
          animate={{
            y: [-200, 200, -200],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-green-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [200, -200, 200],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-green-glow/10 rounded-full blur-3xl"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/0 via-dark-bg/20 to-dark-bg pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-block"
          >
            <span className="text-sm tracking-widest text-green-glow uppercase">
              Bem-vindo ao meu portfólio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-light">Gabriel</span>{' '}
            <span className="glow-text text-green-primary">Silvano</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-medium mb-8"
          >
            Desenvolvedor Full Stack especializado em Backend, IA e Automação
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-dim mb-12"
          >
            Python • Node.js • Machine Learning • RPA • Análise de Dados
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="#featured"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-primary text-dark-bg font-bold rounded-lg text-lg transition-all glow-box"
            >
              Explorar Projetos
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: '#22c55e', color: '#22c55e' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-medium text-gray-light font-bold rounded-lg text-lg transition-all hover:glow-box"
            >
              Entrar em Contato
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-green-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-green-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
