import React from 'react'
import { motion } from 'framer-motion'

export default function FooterSupabase() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-green-primary/10 bg-gradient-to-t from-green-primary/5 to-transparent py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-green-primary mb-2">Gabriel Silvano</h3>
            <p className="text-gray-medium text-sm">Desenvolvedor Full Stack • IA • Automação</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <a href="#" className="text-gray-medium hover:text-green-primary transition-colors text-sm">
                Início
              </a>
              <a href="#projetos" className="text-gray-medium hover:text-green-primary transition-colors text-sm">
                Projetos
              </a>
              <a href="#stack" className="text-gray-medium hover:text-green-primary transition-colors text-sm">
                Stack
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="space-y-2">
              <a href="https://github.com/Gabrielsvdata" target="_blank" rel="noopener noreferrer" className="text-gray-medium hover:text-green-primary transition-colors text-sm">
                GitHub
              </a>
              <a href="https://linkedin.com/in/gabriel-silvano-vieira" target="_blank" rel="noopener noreferrer" className="text-gray-medium hover:text-green-primary transition-colors text-sm">
                LinkedIn
              </a>
              <a href="mailto:gabrielsilvanovieira7@gmail.com" className="text-gray-medium hover:text-green-primary transition-colors text-sm">
                Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-primary/10 pt-8">
          <p className="text-gray-dim text-sm text-center">
            © {currentYear} Gabriel Silvano. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
