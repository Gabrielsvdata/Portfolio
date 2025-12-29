import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-walnut-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">GSV</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sand-300 hover:text-sand-100 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Gabrielsvdata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand-400 hover:text-sand-100 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:gabrielsilvanovieira7@gmail.com"
              className="text-sand-400 hover:text-sand-100 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sand-400 hover:text-sand-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-walnut-900/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sand-300 hover:text-sand-100 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-walnut-600">
              <a
                href="https://github.com/Gabrielsvdata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-400 hover:text-sand-100 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:gabrielsilvanovieira7@gmail.com"
                className="text-sand-400 hover:text-sand-100 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
