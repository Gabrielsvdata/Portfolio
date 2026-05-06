import React, { useState } from 'react'
import './Contact.scss'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório'
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido'
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      setLoading(true)
      
      try {
        // Enviar para o backend
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        })

        if (response.ok) {
          setSubmitted(true)
          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setSubmitted(false), 5000)
        } else {
          const errorData = await response.json()
          setErrors({ form: errorData.error || 'Erro ao enviar mensagem. Tente novamente.' })
        }
      } catch (error) {
        console.error('Erro:', error)
        setErrors({ form: 'Servidor de emails não está rodando. Use "npm run server" em outro terminal.' })
      } finally {
        setLoading(false)
      }
    } else {
      setErrors(newErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Entre em Contato</h2>
          <div className="header-line"></div>
          <p>Estou sempre aberto para novas oportunidades e colaborações</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:gabrielsilvanovieira7@gmail.com">gabrielsilvanovieira7@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h4>Telefone / WhatsApp</h4>
                <a href="https://wa.me/5513991689394" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  (13) 99168-9394
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Localização</h4>
                <p>São Vicente, SP - Brasil</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Gabrielsvdata" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/gabriel-silvano-vieira" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {errors.form && <div className="error-message">{errors.form}</div>}
            {submitted && (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <div className="success-content">
                  <h3>Mensagem Enviada</h3>
                  <p>Obrigado por entrar em contato! Responderei em breve.</p>
                </div>
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                className={`form-input ${errors.name ? 'error' : ''}`}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className={`form-input ${errors.email ? 'error' : ''}`}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                className={`form-input ${errors.message ? 'error' : ''}`}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
