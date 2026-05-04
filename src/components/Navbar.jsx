import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'Sobre', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projetos', to: 'projects' },
    { label: 'Experiência', to: 'experience' },
    { label: 'Contato', to: 'contact' }
  ]

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-bg-dark border-b border-gray-700 backdrop-blur-sm bg-opacity-90"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <ScrollLink to="hero" smooth duration={500} className="cursor-pointer flex items-center gap-2">
              <div className="bg-gradient-to-r from-orange-tech to-primary-purple p-2 rounded-lg">
                <Code2 size={20} className="text-white" />
              </div>
              <span className="hidden sm:inline text-lg font-bold gradient-text">Gabriel</span>
            </ScrollLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-text hover:text-orange-tech transition-colors cursor-pointer font-medium"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="bg-orange-tech text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-light transition-colors"
            >
              Vamos Conversar
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-text hover:text-orange-tech transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-gray-700 py-4 space-y-3"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block text-gray-text hover:text-orange-tech transition-colors cursor-pointer px-4 py-2"
              >
                {item.label}
              </ScrollLink>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-orange-tech text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-light transition-colors"
              >
                Vamos Conversar
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
