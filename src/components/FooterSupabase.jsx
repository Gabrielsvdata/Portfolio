import React from 'react'
import { motion } from 'framer-motion'

export default function FooterSupabase() {
  const currentYear = new Date().getFullYear()

  const LinkItem = ({ href, label, external = false }) => (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center gap-2"
    >
      {label}
    </motion.a>
  )

  return (
    <footer className="border-t border-green-primary/10 bg-gradient-to-b from-transparent via-green-primary/[0.03] to-transparent py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-16 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-xl font-bold text-green-primary">Gabriel Silvano</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Desenvolvedor Full Stack focado em APIs, dados e aplicações inteligentes.
            </p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Navegação
            </h4>
            <div className="space-y-3">
              <LinkItem href="#" label="Início" />
              <LinkItem href="#projetos" label="Projetos" />
              <LinkItem href="#stack" label="Stack" />
              <LinkItem href="#experiencia" label="Experiência" />
            </div>
          </motion.div>

          {/* Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Social
            </h4>
            <div className="space-y-3">
              <LinkItem 
                href="https://github.com/Gabrielsvdata" 
                label="GitHub" 
                external 
              />
              <LinkItem 
                href="https://linkedin.com/in/gabriel-silvano-vieira" 
                label="LinkedIn" 
                external 
              />
              <LinkItem 
                href="mailto:gabrielsilvanovieira7@gmail.com" 
                label="Email" 
              />
            </div>
          </motion.div>
        </div>

        {/* Divider & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-green-primary/10 pt-8"
        >
          <p className="text-gray-400 text-xs text-center tracking-wide">
            © {currentYear} Gabriel Silvano. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
