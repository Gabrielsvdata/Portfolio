import React from 'react'
import './About.scss'

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>Sobre Mim</h2>
          <div className="header-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou um desenvolvedor backend apaixonado por criar soluções robustas e escaláveis. Com 1+ ano de experiência em Python e Node.js, utilizo as melhores práticas para desenvolver APIs eficientes e confiáveis.
            </p>
            
            <p>
              Meu foco é em arquitetura de sistemas RESTful, otimização de banco de dados e implementação de funcionalidades end-to-end. Tenho expertise em MySQL, SQLite3, e ferramentas modernas de desenvolvimento.
            </p>

            <div className="stats">
              <div className="stat-item">
                <h3>5+</h3>
                <p>Projetos Desenvolvidos</p>
              </div>
              <div className="stat-item">
                <h3>1+</h3>
                <p>Anos de Experiência</p>
              </div>
              <div className="stat-item">
                <h3>5K+</h3>
                <p>Linhas de Código</p>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3>Stack Tecnológico</h3>
            <div className="skills-grid">
              <div className="skill-badge">
                <span className="skill-icon">🐍</span>
                <span>Python</span>
              </div>
              <div className="skill-badge">
                <span className="skill-icon">📊</span>
                <span>Machine Learning</span>
              </div>
              <div className="skill-badge">
                <span className="skill-icon">🗄️</span>
                <span>SQL/PostgreSQL</span>
              </div>
              <div className="skill-badge">
                <span className="skill-icon">⚡</span>
                <span>FastAPI/Django</span>
              </div>
              <div className="skill-badge">
                <span className="skill-icon">🔄</span>
                <span>Automação RPA</span>
              </div>
              <div className="skill-badge">
                <span className="skill-icon">📈</span>
                <span>Análise de Dados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
