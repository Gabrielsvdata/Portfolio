import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary-400 to-primary-700 p-1 shadow-xl shadow-primary-500/25">
              <img 
                src="/images/profile.jpg" 
                alt="Gabriel Silvano Vieira"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-sand-100">Olá, eu sou</span>
            <br />
            <span className="gradient-text">Gabriel Silvano Vieira</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-sand-400 mb-8 max-w-2xl mx-auto">
            Estudante de <span className="text-primary-400 font-semibold">Desenvolvedor Backend</span> em constante evolução, transformando conhecimento em código e ideias em projetos reais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-sand-100 font-semibold rounded-full hover:from-primary-600 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 glow-on-hover"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-500 text-primary-400 font-semibold rounded-full hover:bg-primary-500/10 transition-all duration-300"
            >
              Entre em Contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Gabrielsvdata"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-silvano-vieira/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gabrielsilvanovieira7@gmail.com"
              className="p-3 glass rounded-full text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <a href="#projects" className="text-sand-500 hover:text-primary-400 transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
