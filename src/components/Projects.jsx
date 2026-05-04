import { motion } from 'framer-motion'
import Card from './common/Card'
import Button from './common/Button'
import { projectsData } from '../data/portfolioData'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gray-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-tech to-primary-purple mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden cursor-grab hover:cursor-grabbing transition-all">
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg h-72 bg-gray-900">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-orange-tech text-sm font-semibold mb-3">{project.subtitle}</p>
                <p className="text-gray-text mb-3 text-sm flex-grow">{project.description}</p>

                {/* Problem/Solution */}
                <div className="mb-4 text-xs space-y-2">
                  <p><span className="text-orange-tech font-bold">Problema:</span> <span className="text-gray-secondary">{project.problem}</span></p>
                  <p><span className="text-primary-purple font-bold">Solução:</span> <span className="text-gray-secondary">{project.solution}</span></p>
                  <p><span className="text-cyan-light font-bold">Impacto:</span> <span className="text-gray-secondary">{project.impact}</span></p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-dark text-orange-tech text-xs rounded-full border border-orange-tech/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="flex-1 flex items-center justify-center gap-2 text-sm"
                    as="a"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                    GitHub
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="flex-1 flex items-center justify-center gap-2 text-sm"
                    as="a"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Live
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Large Project */}
        {projectsData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="overflow-hidden lg:flex">
              <div className="lg:w-1/2 overflow-hidden rounded-lg">
                <motion.img
                  src={projectsData[0].image}
                  alt={projectsData[0].title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Projeto em Destaque</h3>
                  <p className="text-lg text-gray-text mb-6">{projectsData[0].long_description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projectsData[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-orange-tech/20 text-orange-tech text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="primary">Ver Projeto Completo</Button>
                  <Button variant="secondary">Código no GitHub</Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}
