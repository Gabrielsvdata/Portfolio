import { useState } from 'react'
import { ExternalLink, Github, Code2, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/projectsData'

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-walnut-800/50 rounded-2xl overflow-hidden glass glow-on-hover transition-all duration-500 hover:-translate-y-2 flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
      {/* Project Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-walnut-900 via-walnut-900/20 to-transparent"></div>
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-primary-500/90 text-sand-100 text-xs font-semibold rounded-full">
            Destaque
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-sand-100 mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sand-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full border border-primary-500/20"
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="text-primary-400" size={28} />
            <span className="text-primary-400 font-semibold uppercase tracking-wider text-sm">
              Portfólio
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sand-100 mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-sand-400 max-w-2xl mx-auto text-sm sm:text-base">
            Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades em desenvolvimento Full Stack.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          {projects.length > itemsPerPage && (
            <>
              <button
                onClick={prevSlide}
                className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full items-center justify-center text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
                aria-label="Projeto anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full items-center justify-center text-sand-400 hover:text-sand-100 hover:bg-primary-500/20 transition-all duration-300"
                aria-label="Próximo projeto"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Desktop Carousel - hidden on mobile */}
          <div className="hidden lg:block overflow-hidden">
            <div 
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className="flex gap-8 min-w-full">
                {projects
                  .slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </div>
          </div>

          {/* Mobile: Show all projects stacked */}
          <div className="lg:hidden flex flex-col gap-4 sm:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Desktop Dots Navigation */}
          <div className="hidden lg:block">
            {/* Dots Navigation */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary-500 w-8' 
                        : 'bg-walnut-600 hover:bg-walnut-500'
                    }`}
                    aria-label={`Ir para página ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <a
            href="https://github.com/Gabrielsvdata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-walnut-600 text-sand-300 font-semibold rounded-full hover:border-primary-500 hover:text-primary-400 transition-all duration-300 text-sm sm:text-base"
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
