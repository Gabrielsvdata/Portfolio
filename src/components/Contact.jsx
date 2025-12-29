import { useState } from 'react'
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react'
import { contactInfo as contactData, socialLinks } from '../data/contactData'

// Mapeamento de ícones
const iconMap = {
  Mail,
  Linkedin,
  MapPin,
  Github,
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Adiciona os componentes de ícone aos dados
  const contactInfo = contactData.map(info => ({
    ...info,
    icon: iconMap[info.icon] || Mail,
  }))

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:${socialLinks.email}?subject=Contato do Portfólio - ${formData.name}&body=${formData.message}%0A%0AEmail: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="text-primary-400" size={28} />
            <span className="text-primary-400 font-semibold uppercase tracking-wider text-sm">
              Contato
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sand-100 mb-4">
            Vamos <span className="gradient-text">Conversar</span>?
          </h2>
          <p className="text-sand-400 max-w-2xl mx-auto text-sm sm:text-base">
            Estou disponível para novos projetos e oportunidades. Entre em contato!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-sand-100 mb-6">
                Informações de Contato
              </h3>
              <p className="text-sand-400 mb-8">
                Sinta-se à vontade para entrar em contato comigo para discutir projetos, 
                oportunidades ou apenas para trocar ideias sobre desenvolvimento.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                const content = (
                  <div className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-walnut-800/50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                      <IconComponent className="text-primary-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sand-400 text-sm">{info.label}</p>
                      <p className="text-sand-100 font-medium">{info.value}</p>
                    </div>
                  </div>
                )

                return info.href ? (
                  <a key={index} href={info.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sand-400 mb-4">Siga-me nas redes sociais:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Gabrielsvdata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-silvano-vieira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:gabrielsilvanovieira7@gmail.com"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold text-sand-100 mb-6">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sand-400 text-sm mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-walnut-800/50 border border-walnut-600 rounded-xl text-sand-100 placeholder-sand-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sand-400 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-walnut-800/50 border border-walnut-600 rounded-xl text-sand-100 placeholder-sand-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sand-400 text-sm mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-walnut-800/50 border border-walnut-600 rounded-xl text-sand-100 placeholder-sand-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-sand-100 font-semibold rounded-xl hover:from-primary-600 hover:to-primary-800 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 glow-on-hover"
              >
                <Send size={18} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
