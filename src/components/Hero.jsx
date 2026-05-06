import React from 'react'
import './Hero.scss'

function Hero({ scrollY }) {
  return (
    <section className="hero parallax-layer">
      <div className="hero-background" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(139, 90, 60, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%)',
        transform: `translateY(${scrollY * 0.55}px)`,
        transition: 'transform 0.1s cubic-bezier(0.33, 0.66, 0.66, 1)'
      }} />
      <div className="code-matrix" />
      
      <div className="hero-content">
        <div className="hero-text" style={{
          transform: `translateY(${scrollY * 0.25}px)`,
          opacity: 1 - (scrollY / 600)
        }}>
          <h1 className="hero-title">
            Gabriel <span className="highlight">Silvano</span>
          </h1>
          <p className="hero-subtitle">
            Desenvolvedor Backend
          </p>
          <p className="hero-description">
            Python • Node.js • APIs RESTful • Banco de Dados
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              Ver Projetos
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Entrar em Contato
            </button>
          </div>
        </div>

        <div className="hero-image" style={{
          transform: `translateY(${scrollY * 0.15}px)`
        }}>
          <div className="image-wrapper">
            <img src="/images/profile.jpg" alt="Gabriel Silvano" />
            <div className="image-border"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" style={{
        opacity: 1 - (scrollY / 300)
      }}>
        <span>Rolar para explorar</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
