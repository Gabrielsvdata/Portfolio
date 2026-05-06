import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Erro ao enviar:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    { icon: '📧', label: 'Email', value: 'gabriel@email.com', href: 'mailto:gabriel@email.com' },
    { icon: '💼', label: 'LinkedIn', value: 'Gabriel Silvano', href: '#' },
    { icon: '💻', label: 'GitHub', value: 'Gabrielsvdata', href: 'https://github.com/Gabrielsvdata' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-dark-secondary py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest text-green-glow uppercase">
            Vamos Conversar
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            <span className="text-gray-light">Entre em</span>
            <br />
            <span className="glow-text text-green-primary">Contato Comigo</span>
          </h2>
          <p className="text-gray-medium text-lg mt-6 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades, colaborações e conversas interessantes.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-8 glass-effect rounded-xl border border-green-primary/20 text-center group hover:border-green-primary/50 transition-all glow-box"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-light mb-2">{method.label}</h3>
              <p className="text-green-primary hover:text-green-glow transition-colors">
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-12 glass-effect-strong rounded-2xl border border-green-primary/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm uppercase tracking-widest text-green-glow mb-3">
                Seu Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Gabriel"
                className="w-full px-6 py-4 bg-dark-bg border border-green-primary/20 rounded-lg text-gray-light placeholder-gray-dim focus:border-green-primary focus:outline-none focus:shadow-lg focus:shadow-green-primary/20 transition-all"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm uppercase tracking-widest text-green-glow mb-3">
                Seu Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@exemplo.com"
                className="w-full px-6 py-4 bg-dark-bg border border-green-primary/20 rounded-lg text-gray-light placeholder-gray-dim focus:border-green-primary focus:outline-none focus:shadow-lg focus:shadow-green-primary/20 transition-all"
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm uppercase tracking-widest text-green-glow mb-3">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Diga como posso te ajudar..."
                rows="6"
                className="w-full px-6 py-4 bg-dark-bg border border-green-primary/20 rounded-lg text-gray-light placeholder-gray-dim focus:border-green-primary focus:outline-none focus:shadow-lg focus:shadow-green-primary/20 transition-all resize-none"
                required
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-green-primary text-dark-bg font-bold rounded-lg text-lg hover:bg-green-glow transition-all glow-box disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </motion.button>
            </motion.div>

            {/* Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-4 bg-green-primary/10 border border-green-primary rounded-lg text-green-primary text-center"
                >
                  ✓ Mensagem enviada com sucesso!
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
