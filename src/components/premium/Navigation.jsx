import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Projetos', id: 'featured' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contato', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'glass-effect-strong'
          : 'bg-dark-bg/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <span className="text-2xl font-bold glow-text">GS</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={800}
              offset={-60}
              className="relative text-gray-light hover:text-green-primary transition-colors cursor-pointer group"
            >
              <span>{item.label}</span>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-green-primary"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </ScrollLink>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-green-primary text-dark-bg font-bold rounded-lg hover:bg-green-glow transition-colors"
        >
          Download CV
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1 group"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-green-primary"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-green-primary"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-green-primary"
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-effect-strong border-t border-green-primary/20"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={800}
                  offset={-60}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-light hover:text-green-primary transition-colors cursor-pointer text-lg"
                >
                  {item.label}
                </ScrollLink>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 bg-green-primary text-dark-bg font-bold rounded-lg hover:bg-green-glow transition-colors"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
