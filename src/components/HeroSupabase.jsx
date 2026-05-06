import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSupabase() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-primary/5 rounded-full blur-3xl opacity-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-green-primary/30 text-green-primary text-sm font-medium backdrop-blur-sm">
            Desenvolvedor Full Stack
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Gabriel <span className="text-green-primary">Silvano</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-medium mb-12 leading-relaxed"
        >
          Construo sistemas com <span className="text-green-primary">APIs robustas</span>,{' '}
          <span className="text-green-primary">IA aplicada</span> e{' '}
          <span className="text-green-primary">front-end moderno</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-green-primary text-dark-bg font-semibold rounded-lg hover:bg-green-primary hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300"
          >
            Ver Projetos
          </button>
          <a
            href="https://github.com/Gabrielsvdata"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-green-primary/50 text-green-primary font-semibold rounded-lg hover:border-green-primary hover:bg-green-primary/5 transition-all duration-300"
          >
            GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-dim text-sm"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
