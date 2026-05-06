import React from 'react'
import './Expertise.scss'

function Expertise() {
  const expertiseData = [
    {
      title: 'Backend Python',
      icon: '🐍',
      skills: [
        'Flask',
        'RESTful APIs',
        'MySQL',
        'SQLite3',
        'Estrutura de Dados',
        'Segurança'
      ]
    },
    {
      title: 'Backend Node.js',
      icon: '⚙️',
      skills: [
        'Express.js',
        'Nodemon',
        'APIs REST',
        'Middlewares',
        'Autenticação',
        'Routing'
      ]
    },
    {
      title: 'Banco de Dados',
      icon: '💾',
      skills: [
        'MySQL',
        'SQLite3',
        'Queries SQL',
        'Design de Schema',
        'Otimização',
        'Índices'
      ]
    },
    {
      title: 'Ferramentas & DevTools',
      icon: '🛠️',
      skills: [
        'Git/GitHub',
        'npm',
        'Postman',
        'VS Code',
        'Terminal/Bash',
        'Debugging'
      ]
    }
  ]

  return (
    <section className="expertise">
      <div className="expertise-container">
        <div className="expertise-header">
          <h2>Expertise</h2>
          <div className="header-line"></div>
        </div>

        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <div key={index} className="expertise-card" style={{animation: `fadeInUp 0.8s ease-out ${0.1 * index}s backwards`}}>
              <div className="expertise-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <div className="skills-list">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
