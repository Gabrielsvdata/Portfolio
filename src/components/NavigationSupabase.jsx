import React from 'react'
import { motion } from 'framer-motion'

export default function NavigationSupabase() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Stack', href: '#stack' },
    { label: 'Experiência', href: '#experiencia' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-green-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl font-bold text-green-primary hover:text-green-glow transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GS.
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-gray-medium hover:text-green-primary transition-colors text-sm font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-2 items-center">
          <motion.a
            href="https://wa.me/5513991689394"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-green-primary/25 text-green-primary rounded-lg hover:border-green-primary/60 hover:bg-green-primary/5 transition-all text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            WhatsApp
          </motion.a>
          <motion.a
            href="/curriculo_gabriel_silvano.pdf"
            download
            className="px-4 py-2 border border-green-primary/25 text-green-primary rounded-lg hover:border-green-primary/60 hover:bg-green-primary/5 transition-all text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CV
          </motion.a>
          <motion.a
            href="https://github.com/Gabrielsvdata"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-green-primary/50 text-green-primary rounded-lg hover:border-green-primary hover:bg-green-primary/5 transition-all text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-6 flex flex-col justify-between"
          whileTap={{ scale: 0.9 }}
        >
          <span className={`h-0.5 w-full bg-green-primary transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`h-0.5 w-full bg-green-primary transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-green-primary transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </motion.button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-bg border-b border-green-primary/10 md:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-medium hover:text-green-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 space-y-2 border-t border-green-primary/10">
                <a
                  href="https://wa.me/5513991689394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 border border-green-primary/25 text-green-primary rounded text-center hover:bg-green-primary/5 transition-all text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  WhatsApp
                </a>
                <a
                  href="/curriculo_gabriel_silvano.pdf"
                  download
                  className="block px-3 py-2 border border-green-primary/25 text-green-primary rounded text-center hover:bg-green-primary/5 transition-all text-sm"
                >
                  CV
                </a>
                <a
                  href="https://github.com/Gabrielsvdata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 border border-green-primary/40 text-green-primary rounded text-center hover:bg-green-primary/5 transition-all text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
