import React, { useState } from 'react'
import './Projects.scss'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projectsData = [
    {
      id: 1,
      title: 'Chatbot Especialista',
      description: 'Sistema de chatbot com estruturação de LLM para atendimento especializado. Machine Learning integrado com processamento de linguagem natural.',
      image: '/images/chatbot-especialista-screenshot.png',
      technologies: ['Python', 'LLM', 'NLP', 'Backend'],
      link: 'https://github.com/Gabrielsvdata/Chatbot-especialista'
    },
    {
      id: 2,
      title: 'Kid IA',
      description: 'Chatbot educativo para crianças com estruturação de LLM. Backend robusto para interações pedagógicas e aprendizado adaptativo.',
      image: '/images/kidia-screenshot.png',
      technologies: ['Python', 'LLM', 'Backend', 'IA Educativa'],
      link: 'https://github.com/Gabrielsvdata/KidIA-backend'
    },
    {
      id: 3,
      title: 'Doação Solidária',
      description: 'Plataforma de doações com automação de processos e análise de impacto social.',
      image: '/images/doacao-solidaria-screenshot.png',
      technologies: ['Backend', 'Python', 'Automação', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 4,
      title: 'Gestão Cuidadora',
      description: 'Sistema de gestão de cuidados com análise de dados e IA para otimização de recursos.',
      image: '/images/gestao-cuidadora-screenshot.png',
      technologies: ['IA', 'Análise de Dados', 'Backend', 'SQL'],
      link: '#'
    },
    {
      id: 5,
      title: 'SisPar',
      description: 'Sistema de processamento de parâmetros com automação RPA e análise em tempo real.',
      image: '/images/sispar-screenshot.png',
      technologies: ['RPA', 'Automação', 'Dados', 'Backend'],
      link: '#'
    }
  ]

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Projetos em Destaque</h2>
          <div className="header-line"></div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{animation: `fadeInUp 0.8s ease-out ${0.1 * index}s backwards`}}
              onMouseEnter={() => setSelectedProject(project.id)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="project-link">Ver Projeto →</button>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
