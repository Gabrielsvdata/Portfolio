import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'SisPar',
    subtitle: 'Sistema de Pagamentos e Reembolso',
    problem: 'Empresas gastam 18 horas por semana processando reembolsos manualmente em planilhas desorganizadas.',
    solution: 'Sistema automatizado que centraliza pedidos, valida documentos com IA e processa reembolsos em minutos.',
    impact: '4 meses • 92% Redução de Tempo • R$850K Economizado',
    description: 'Plataforma enterprise de pagamentos e reembolso com validação automática, dashboard em tempo real e conformidade fiscal completa.',
    tech: ['React', 'Flask', 'PostgreSQL', 'Rest APIs'],
    link: 'https://projeto-sispar.vercel.app/#/',
    github: 'https://github.com/Gabrielsvdata/Sispar-Frontend',
    image: '/images/sispar.png',
    stats: [
      { label: 'Tempo Implementação', value: '4 meses' },
      { label: 'Redução de Tempo', value: '92%' },
      { label: 'Economia Anual', value: 'R$850K' },
    ],
  },
  {
    id: 2,
    title: 'Chatbot Especialista',
    subtitle: 'Atendimento Automatizado com IA',
    problem: 'Equipes de suporte gastam 60% do tempo respondendo perguntas repetitivas sobre reembolsos.',
    solution: 'Chatbot inteligente com LLM que compreende contexto, aprende padrões e resolve 94% dos problemas automaticamente.',
    description: 'Sistema de chatbot inteligente com processamento de linguagem natural, engenharia de prompt avançada e integração com APIs.',
    tech: ['Python', 'LLM', 'NLP', 'OpenAI API'],
    link: 'https://github.com/Gabrielsvdata/Chatbot-especialista',
    image: '/images/chatbot-especialista-screenshot.png',
    icon: '💬',
  },
  {
    id: 3,
    title: 'Gestão Cuidadora',
    subtitle: 'API Escalável para Cuidados',
    problem: 'Casas de repouso usam sistemas legados que não comunicam, criando silos de informação.',
    solution: 'API REST moderna que integra agendamentos, prescrições, histórico médico e notificações em tempo real.',
    description: 'Backend profissional com arquitetura escalável, autenticação segura, documentação OpenAPI e suporte multi-tenant.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'RESTful APIs'],
    link: 'https://gestao-cuidadora-api.onrender.com',
    github: 'https://github.com/Gabrielsvdata/GESTAO-CUIDADORA-API',
    image: '/images/gestao-cuidadora-screenshot.png',
    icon: '⚙️',
  },
  {
    id: 4,
    title: 'KidIA Backend',
    subtitle: 'Plataforma de IA para Educação',
    problem: 'Educadores carecem de ferramentas que entendem contexto pedagógico e adaptam conteúdo em tempo real.',
    solution: 'API especializada que integra LLMs educacionais, análise de progressão e recomendações personalizadas.',
    description: 'Backend robusto com 45.8K requisições diárias, 96.2% acurácia em predições de IA e latência média de 247ms.',
    tech: ['Python', 'Flask', 'Machine Learning', 'PostgreSQL'],
    link: 'https://github.com/Gabrielsvdata/KidIA-backend',
    image: '/images/kidIA.jpeg',
    icon: '🧠',
  },
  {
    id: 5,
    title: 'Doação Solidária',
    subtitle: 'Plataforma de Impacto Social',
    problem: 'ONGs perdem doadores por falta de transparência, automação e rastreamento de impacto.',
    solution: 'Plataforma que automatiza doações, rastreia impacto com 100% de transparência e constrói comunidade engajada.',
    description: 'Sistema inteligente de recomendação para conectar doadores com instituições em cenários de crise humanitária, com foco em eficiência e transparência.',
    tech: ['Backend', 'Automação', 'Data Analytics', 'SQLite3'],
    featured: true,
    link: 'https://doacaosolidaria.vercel.app/',
    github: 'https://github.com/Gabrielsvdata/doacao-solidaria-backend',
    image: '/images/doacao-solidaria-screenshot.png',
    stats: [
      { label: 'Categorias Monitoradas', value: '4' },
      { label: 'Instituições Parceiras', value: '3' },
      { label: 'Taxa de Plataforma', value: '0%' },
    ],
    icon: '❤️',
  },
]

export default function ProjectsSupabase() {
  const featuredProject = projects.find(p => p.featured)
  const secondaryProjects = projects.filter(p => !p.featured)

  return (
    <section id="projetos" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-primary/5 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Produtos em <span className="text-green-primary">Produção</span>
          </h2>
          <p className="text-gray-medium text-lg max-w-2xl">
            Soluções reais resolvendo problemas reais. Cada projeto é um sistema em produção, não um exercício.
          </p>
        </motion.div>

        {/* FEATURED PROJECT - SISPAR */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative overflow-hidden rounded-2xl border border-green-primary/30 bg-gradient-to-br from-green-primary/8 to-transparent p-8 md:p-16 hover:border-green-primary/60 transition-all duration-500 hover:shadow-[0_0_60px_rgba(34,197,94,0.15)]">
              {/* Badge */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full bg-green-primary/10 border border-green-primary/40 text-green-primary text-sm font-semibold cursor-default"
                >
                  ⭐ Destaque
                </motion.span>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <span className="text-green-primary text-sm font-semibold tracking-widest uppercase">
                      Projeto Principal
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-2 text-gray-light group-hover:text-green-glow transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-green-primary text-xl mb-8">{featuredProject.subtitle}</p>

                  {/* Problem */}
                  <div className="mb-8 p-4 rounded-lg bg-dark-bg/50 border border-green-primary/10">
                    <p className="text-gray-medium text-sm font-semibold mb-2">O Problema</p>
                    <p className="text-gray-light">{featuredProject.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8 p-4 rounded-lg bg-green-primary/5 border border-green-primary/20">
                    <p className="text-green-primary text-sm font-semibold mb-2">Solução</p>
                    <p className="text-gray-light">{featuredProject.solution}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {featuredProject.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4 }}
                        className="p-3 rounded-lg border border-green-primary/20 text-center group-hover:border-green-primary/40 transition-all"
                      >
                        <p className="text-green-primary font-bold">{stat.value}</p>
                        <p className="text-gray-dim text-xs">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-dark-bg border border-green-primary/30 text-green-primary text-xs rounded-lg hover:border-green-primary/60 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-green-primary font-semibold group-hover:gap-4 transition-all text-lg">
                    Explorar Projeto <span className="text-xl">→</span>
                  </div>
                </motion.div>

                {/* Dashboard Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-80 md:h-96 rounded-xl overflow-hidden border border-green-primary/30 bg-gradient-to-br from-dark-secondary to-dark-tertiary group-hover:border-green-primary/60 transition-all"
                >
                  <img
                    src={featuredProject.image}
                    alt="SisPar Dashboard"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* SECONDARY PROJECTS - VERTICAL ALTERNATING LAYOUT */}
        <div className="space-y-20">
          {secondaryProjects.map((project, idx) => {
            const isEven = idx % 2 === 0
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                  <div
                    className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <motion.div
                      whileHover={{ x: isEven ? 10 : -10 }}
                      className={`order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}
                    >
                      <div className="p-8 rounded-xl border border-green-primary/20 bg-gradient-to-br from-green-primary/3 to-transparent hover:border-green-primary/50 hover:bg-gradient-to-br hover:from-green-primary/5 transition-all duration-400">
                        <div className="mb-4">
                          <span className="text-green-primary text-sm font-semibold uppercase">{project.subtitle}</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-light group-hover:text-green-glow transition-colors">
                          {project.title}
                        </h3>

                        {/* Problem */}
                        <div className="mb-6">
                          <p className="text-gray-dim text-sm font-semibold mb-2">Problema:</p>
                          <p className="text-gray-medium">{project.problem}</p>
                        </div>

                        {/* Solution */}
                        <div className="mb-6">
                          <p className="text-green-primary text-sm font-semibold mb-2">Solução:</p>
                          <p className="text-gray-light">{project.solution}</p>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs bg-dark-bg border border-green-primary/20 text-green-primary rounded group-hover:border-green-primary/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center gap-2 text-green-primary text-sm font-semibold group-hover:gap-3 transition-all">
                          Ver no GitHub <span>→</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}
                    >
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-green-primary/20 bg-gradient-to-br from-dark-secondary to-dark-tertiary group-hover:border-green-primary/50 transition-all">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </motion.div>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
