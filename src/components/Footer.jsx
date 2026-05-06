import React from 'react'
import './Footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Gabriel Silvano</h3>
            <p>Desenvolvedor Backend & Especialista em IA</p>
          </div>

          <div className="footer-section">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a href="https://github.com/gabrielsvdata" target="_blank" rel="noopener noreferrer" title="GitHub">
                GitHub
              </a>
              <a href="https://linkedin.com/in/gabriel-silvano-vieira" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Gabriel Silvano. Todos os direitos reservados.</p>
          <p>Desenvolvido com <span className="heart">❤️</span> usando React + Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
