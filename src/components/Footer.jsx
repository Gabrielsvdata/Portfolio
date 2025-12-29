import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-walnut-900/50 border-t border-walnut-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-block">
              <span className="text-2xl font-bold gradient-text">GSV</span>
            </a>
            <p className="text-sand-400 mt-2 text-sm">
              Estudante de Desenvolvimento Backend em constante evolução.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            <a href="#home" className="text-sand-400 hover:text-sand-100 transition-colors text-sm">
              Início
            </a>
            <a href="#projects" className="text-sand-400 hover:text-sand-100 transition-colors text-sm">
              Projetos
            </a>
            <a href="#skills" className="text-sand-400 hover:text-sand-100 transition-colors text-sm">
              Habilidades
            </a>
            <a href="#contact" className="text-sand-400 hover:text-sand-100 transition-colors text-sm">
              Contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/Gabrielsvdata"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-silvano-vieira/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:gabrielsilvanovieira7@gmail.com"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-walnut-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sand-500 text-sm flex items-center gap-1">
            © {currentYear} Gabriel Silvano Vieira. 
          </p>
          
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
