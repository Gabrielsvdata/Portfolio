import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: 'GitHub', url: 'https://github.com/Gabrielsvdata', label: 'Github' },
    { icon: 'LinkedIn', url: '#', label: 'LinkedIn' },
    { icon: 'Email', url: 'mailto:gabriel@email.com', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="relative w-full bg-dark-bg border-t border-green-primary/10 py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-t from-green-primary/5 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold glow-text mb-4">Gabriel Silvano</h3>
            <p className="text-gray-medium max-w-xs">
              Desenvolvedor Full Stack especializado em Backend, IA e Automação.
              Transformando ideias em soluções inovadoras.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm uppercase tracking-widest text-green-glow mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {['Projetos', 'Skills', 'Contato', 'CV'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-medium hover:text-green-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm uppercase tracking-widest text-green-glow mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg glass-effect border border-green-primary/20 flex items-center justify-center text-green-primary hover:border-green-primary hover:glow-box transition-all"
                  title={social.label}
                >
                  <span className="text-lg">{social.icon === 'GitHub' ? '🔗' : social.icon === 'LinkedIn' ? '💼' : '📧'}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-green-primary/30 to-transparent mb-8 origin-center"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-dim text-sm"
        >
          <div>© {currentYear} Gabriel Silvano. Todos os direitos reservados.</div>
          <div className="mt-4 md:mt-0">
            Crafted with{' '}
            <span className="text-green-primary">💚</span> using React +
            Framer Motion + Three.js
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
