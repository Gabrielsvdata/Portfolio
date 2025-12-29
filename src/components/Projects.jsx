import { ExternalLink, Github, Code2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'SISPAR Frontend',
    description: 'Sistema de Emissão de Boletos e Parcelamentos. Interface moderna e intuitiva desenvolvida com React, oferecendo autenticação segura e gestão completa de boletos.',
    image: '/images/sispar.png',
    technologies: ['React', 'JavaScript', 'CSS', 'Vite'],
    github: 'https://github.com/Gabrielsvdata/Sispar-Frontend',
    deploy: 'https://projeto-sispar.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'SISPAR Backend',
    description: 'API robusta e escalável para o sistema SISPAR. Backend completo com autenticação, gestão de usuários e emissão de boletos.',
    image: '/images/sispar.png',
    technologies: ['Python', 'API REST', 'Database', 'Backend'],
    github: 'https://github.com/Gabrielsvdata/Sispar-Backend',
    deploy: 'https://projeto-sispar.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Projeto Vermelho',
    description: 'Projeto web com design criativo e estilização avançada. Desenvolvido com HTML semântico e SASS para uma estrutura organizada e estilos modulares.',
    image: '/images/vermelho.png',
    technologies: ['HTML', 'SASS', 'CSS'],
    github: 'https://github.com/Gabrielsvdata/Projeto_Vermelho',
    deploy: 'https://projeto-vermelho-8gel.vercel.app/',
    featured: true,
  },
]

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-walnut-800/50 rounded-2xl overflow-hidden glass glow-on-hover transition-all duration-500 hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-walnut-900 via-walnut-900/20 to-transparent"></div>
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500/90 text-sand-100 text-xs font-semibold rounded-full">
            Destaque
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-sand-100 mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sand-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sand-400 hover:text-sand-100 transition-colors text-sm"
          >
            <Github size={18} />
            <span>Código</span>
          </a>
          <a
            href={project.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm"
          >
            <ExternalLink size={18} />
            <span>Ver Demo</span>
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="text-primary-400" size={28} />
            <span className="text-primary-400 font-semibold uppercase tracking-wider text-sm">
              Portfólio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sand-100 mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-sand-400 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades em desenvolvimento Full Stack.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Gabrielsvdata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-walnut-600 text-sand-300 font-semibold rounded-full hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
          >
            <Github size={20} />
            <span>Ver mais no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
