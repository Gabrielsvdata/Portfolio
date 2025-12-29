import { Database, Layout, Server, Terminal, Zap } from 'lucide-react'
import { skills as skillsData } from '../data/skillsData'

// Mapeamento de ícones
const iconMap = {
  Layout,
  Server,
  Database,
  Terminal,
}

// Adiciona os componentes de ícone aos dados
const skills = skillsData.map(skill => ({
  ...skill,
  icon: iconMap[skill.icon] || Layout,
}))

const SkillCard = ({ skill }) => {
  const IconComponent = skill.icon
  
  return (
    <div className="group p-4 sm:p-6 glass rounded-2xl hover:bg-walnut-800/50 transition-all duration-300 glow-on-hover">
      {/* Icon */}
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${skill.color} p-2.5 sm:p-3 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="w-full h-full text-sand-100" />
      </div>
      
      {/* Category Title */}
      <h3 className="text-lg sm:text-xl font-bold text-sand-100 mb-3 sm:mb-4">
        {skill.category}
      </h3>
      
      {/* Skills List */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {skill.items.map((item, index) => (
          <span
            key={index}
            className="px-2 sm:px-3 py-1 bg-walnut-700/50 text-sand-300 text-xs sm:text-sm rounded-full hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-primary-400" size={28} />
            <span className="text-primary-400 font-semibold uppercase tracking-wider text-sm">
              Competências
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sand-100 mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-sand-400 max-w-2xl mx-auto text-sm sm:text-base">
            Tecnologias e ferramentas que utilizo para criar soluções completas.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
