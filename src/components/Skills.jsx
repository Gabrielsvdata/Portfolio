import { Code, Database, Layout, Server, Smartphone, Terminal, Palette, GitBranch, Zap } from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    color: 'from-primary-400 to-primary-600',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'from-primary-500 to-primary-700',
    items: ['Python', 'Node.js', 'API REST', 'Express', 'Flask', 'Django'],
  },
  {
    category: 'Database',
    icon: Database,
    color: 'from-primary-600 to-primary-800',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'],
  },
  {
    category: 'Ferramentas',
    icon: Terminal,
    color: 'from-primary-400 to-primary-700',
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Docker', 'Linux'],
  },
]

const technologies = [
  { name: 'React', icon: '⚛️', level: 60 },
  { name: 'Python', icon: '🐍', level: 50 },
  { name: 'JavaScript', icon: '📜', level: 60 },
  { name: 'Tailwind CSS', icon: '🎨', level: 40 },
  { name: 'Node.js', icon: '💚', level: 70 },
  { name: 'Git', icon: '📦', level: 80 },
]

const SkillCard = ({ skill }) => {
  const IconComponent = skill.icon
  
  return (
    <div className="group p-6 glass rounded-2xl hover:bg-walnut-800/50 transition-all duration-300 glow-on-hover">
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="w-full h-full text-sand-100" />
      </div>
      
      {/* Category Title */}
      <h3 className="text-xl font-bold text-sand-100 mb-4">
        {skill.category}
      </h3>
      
      {/* Skills List */}
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-walnut-700/50 text-sand-300 text-sm rounded-full hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

const TechBar = ({ tech }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sand-100 font-medium flex items-center gap-2">
          <span>{tech.icon}</span>
          {tech.name}
        </span>
        <span className="text-primary-400 font-semibold">{tech.level}%</span>
      </div>
      <div className="h-2 bg-walnut-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-1000"
          style={{ width: `${tech.level}%` }}
        ></div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-primary-400" size={28} />
            <span className="text-primary-400 font-semibold uppercase tracking-wider text-sm">
              Competências
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sand-100 mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-sand-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Technology Bars */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-sand-100 text-center mb-8">
            Nível de <span className="gradient-text">Proficiência</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <TechBar key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
