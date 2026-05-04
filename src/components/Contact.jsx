import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Button from './common/Button'
import Card from './common/Card'
import { contactData } from '../data/portfolioData'

const iconMap = {
  Mail,
  Phone,
  MapPin
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would send the form data to your backend or service like FormSpree
    console.log(formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gray-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Gostaria de discutir oportunidades? 
            Entre em contato comigo!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-tech to-primary-purple mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactData.map((contact) => {
              const IconComponent = iconMap[contact.icon]
              const colorClasses = {
                'Email': 'bg-orange-tech/20 text-orange-tech',
                'Telefone': 'bg-primary-purple/20 text-primary-purple',
                'Localização': 'bg-cyan-light/20 text-cyan-light'
              }
              const color = colorClasses[contact.label] || 'bg-orange-tech/20 text-orange-tech'

              return (
                <Card key={contact.id}>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center`}>
                      <IconComponent size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{contact.label}</h3>
                      {contact.link ? (
                        <a href={contact.link} className="text-gray-text hover:text-orange-tech transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-text">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-dark border border-gray-600 rounded-lg text-white placeholder-gray-secondary focus:border-orange-tech focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-dark border border-gray-600 rounded-lg text-white placeholder-gray-secondary focus:border-orange-tech focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-bg-dark border border-gray-600 rounded-lg text-white placeholder-gray-secondary focus:border-orange-tech focus:outline-none transition-colors resize-none"
                    placeholder="Sua mensagem aqui..."
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </Button>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-lg text-center"
                  >
                    ✓ Mensagem enviada com sucesso!
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
