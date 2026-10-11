import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'SisPar',
    subtitle: 'API de Reembolsos Corporativos com IA',
    problem: 'Empresas processam reembolsos manualmente em planilhas, gerando inconsistências, fraudes em comprovantes e alto custo operacional.',
    solution: 'API REST em Flask com OCR de comprovantes via Pytesseract, validação automática de notas fiscais pelo Google Gemini e chatbot integrado com Groq/LLaMA para consultas de reembolso em linguagem natural.',
    impact: 'Python · Flask · PostgreSQL · IA',
    description: 'Backend Python/Flask com arquitetura MVC, múltiplos ambientes (dev/prod/test), deploy no Render com PostgreSQL em produção e documentação Swagger completa em /apidocs.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'Groq (LLaMA)', 'Google Gemini', 'OCR', 'Docker', 'Swagger'],
    concepts: ['API REST', 'Arquitetura Backend', 'Persistência de Dados', 'Integração Frontend e Backend', 'Modelagem de Dados'],
    link: 'https://projeto-sispar.vercel.app/#/',
    github: 'https://github.com/Gabrielsvdata/Sispar-Backend',
    image: '/images/sispar.png',
    stats: [
      { label: 'Stack', value: 'Python' },
      { label: 'IA', value: 'Groq + Gemini' },
      { label: 'Deploy', value: 'Render' },
    ],
  },
  {
    id: 2,
    title: 'Chatbot Especialista',
    subtitle: 'Assistente Virtual com Gemini 2.5 Flash',
    problem: 'Empresas de assistência técnica perdem tempo respondendo manualmente as mesmas perguntas sobre serviços, preços e horários.',
    solution: 'Chatbot especializado construído com Google Gemini 2.5 Flash, com instruções de sistema customizadas, histórico de conversa estruturado e limite controlado de interações por sessão.',
    description: 'Implementação em Python com engenharia de prompt avançada: system instructions definindo persona, contexto de negócio e regras de comportamento. Gerenciamento de histórico de conversa com estrutura de dicionário para manter contexto entre turnos.',
    tech: ['Python', 'Google Gemini 2.5 Flash', 'Engenharia de Prompt', 'python-dotenv'],
    concepts: ['IA Generativa', 'Engenharia de Prompt', 'Processamento de Linguagem Natural', 'Fluxo Conversacional'],
    link: 'https://github.com/Gabrielsvdata/Chatbot-especialista',
    image: '/images/chatbot-especialista-screenshot.png',
    icon: '💬',
  },
  {
    id: 3,
    title: 'Gestão Cuidadora',
    subtitle: 'API REST para Gestão de Cuidados de Idosos',
    problem: 'Cuidadores e casas de repouso gerenciam histórico de pacientes em anotações físicas, sem rastreabilidade de evolução clínica ou acesso rápido ao histórico.',
    solution: 'API REST em Node.js/Express com banco de dados relacional SQLite, relacionamento entre entidades via INNER JOIN e proteção contra SQL Injection com queries parametrizadas.',
    description: 'Backend com rotas para cadastro de pacientes, registros diários (pressão arterial, alimentação, observações) e consulta de histórico completo por paciente. Deploy no Render com banco de dados auto-provisionado.',
    tech: ['Node.js', 'Express', 'SQLite', 'SQL (INNER JOIN)', 'REST API', 'Render'],
    concepts: ['Arquitetura Backend', 'CRUD', 'Banco de Dados Relacional', 'APIs REST'],
    link: 'https://gestao-cuidadora-api.onrender.com',
    github: 'https://github.com/Gabrielsvdata/GESTAO-CUIDADORA-API',
    image: '/images/gestao-cuidadora-screenshot.png',
    icon: '⚙️',
  },
  {
    id: 4,
    title: 'KidIA Backend',
    subtitle: 'API de Chatbot Educativo com Segurança por Camadas',
    problem: 'Plataformas de IA para crianças carecem de controles de segurança robustos: sem filtros de conteúdo, sem autenticação por responsável e sem personalização por faixa etária.',
    solution: 'API Flask com LLaMA 3 70B via Groq, autenticação JWT em cookies HttpOnly, filtro automático de conteúdo inapropriado, rate limiting, CORS/CSP/HSTS e perfis múltiplos de crianças por responsável.',
    description: 'Arquitetura de serviços separados: auth_service (JWT), chat_service (Groq integration), memory_service (histórico). Deploy no Render com Gunicorn (1 worker forçado para memória consistente) e suporte a MySQL ou in-memory storage.',
    tech: ['Python', 'Flask', 'Groq (LLaMA 3 70B)', 'JWT', 'Rate Limiting', 'bcrypt', 'Gunicorn', 'Render'],
    concepts: ['Inteligência Artificial', 'Integração de Serviços', 'Processamento de Dados', 'APIs REST'],
    link: 'https://github.com/Gabrielsvdata/KidIA-backend',
    image: '/images/kidIA.jpeg',
    icon: '🧠',
  },
  {
    id: 5,
    title: 'Doação Solidária',
    subtitle: 'Sistema de Recomendação de Doações por Prioridade',
    problem: 'Em crises humanitárias, doadores não sabem quais instituições têm estoque crítico, gerando excesso em algumas e falta grave em outras.',
    solution: 'API Node.js/Express com algoritmo de scoring que calcula prioridade por percentual de estoque, retornando TOP 3 instituições ordenadas por urgência. Painel admin com autenticação por bcrypt e documentação Swagger completa.',
    description: 'Backend com módulo rules.js centralizando toda a lógica de prioridade (CRÍTICO/BAIXO/MÉDIO/BOM/EXCESSO), validação de entrada via Zod schemas, histórico de movimentações e rotas separadas por perfil (doador público vs. admin autenticado).',
    tech: ['Node.js', 'Express', 'SQLite', 'bcrypt', 'Zod', 'Swagger/OpenAPI', 'Render'],
    concepts: ['Persistência de Dados', 'Regras de Negócio', 'APIs REST', 'Estruturação de Dados'],
    featured: true,
    link: 'https://doacaosolidaria.vercel.app/',
    github: 'https://github.com/Gabrielsvdata/doacao-solidaria-backend',
    image: '/images/doacao-solidaria-screenshot.png',
    stats: [
      { label: 'Categorias', value: '4' },
      { label: 'Algoritmo', value: 'Scoring' },
      { label: 'Docs', value: 'Swagger' },
    ],
    icon: '❤️',
  },
]

export default function ProjectsSupabase() {
  const featuredProject = projects.find(p => p.featured)
  const secondaryProjects = projects.filter(p => !p.featured)
  const [hoveredProjectId, setHoveredProjectId] = useState(null)
  const videoRef = useRef(null)

  const handleMouseEnter = (projectId) => {
    if (projectId === 5) {
      setHoveredProjectId(projectId)
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 4
          const playPromise = videoRef.current.play()
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log('Vídeo tocando')
              })
              .catch(error => {
                console.log('Erro ao tocar:', error.message)
              })
          }
        }
      }, 100)
    }
  }

  const handleMouseLeave = (projectId) => {
    if (projectId === 5) {
      setHoveredProjectId(null)
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }

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
            Sistemas reais em operação resolvendo problemas complexos com tecnologia escalável.
          </p>
        </motion.div>

        {/* FEATURED PROJECT - SISPAR */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 -mx-6"
        >
          <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative overflow-hidden rounded-none md:rounded-2xl border-0 md:border border-green-primary/30 bg-gradient-to-br from-green-primary/8 to-transparent px-6 md:p-16 py-8 md:py-16 hover:border-green-primary/60 transition-all duration-500 hover:shadow-[0_0_60px_rgb(var(--accent-rgb)/0.15)]">
              {/* Badge */}
              <div className="absolute top-6 md:top-12 right-6 md:right-12 z-10">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full bg-green-primary/10 border border-green-primary/40 text-green-primary text-sm font-semibold cursor-default"
                >
                  ⭐ Destaque
                </motion.span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
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

                  <h3 className="text-3xl md:text-5xl font-bold mb-2 text-gray-light group-hover:text-green-glow transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-green-primary text-lg md:text-xl mb-8">{featuredProject.subtitle}</p>

                  {/* Problem */}
                  <div className="mb-6 md:mb-8 p-4 rounded-lg bg-dark-bg/50 border border-green-primary/10">
                    <p className="text-gray-medium text-sm font-semibold mb-2">O Problema</p>
                    <p className="text-gray-light text-sm md:text-base">{featuredProject.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6 md:mb-8 p-4 rounded-lg bg-green-primary/5 border border-green-primary/20">
                    <p className="text-green-primary text-sm font-semibold mb-2">Solução</p>
                    <p className="text-gray-light text-sm md:text-base">{featuredProject.solution}</p>
                  </div>

                  {/* Conceitos Aplicados */}
                  {featuredProject.concepts && (
                    <div className="mb-6 md:mb-8">
                      <p className="text-gray-dim text-xs font-semibold uppercase tracking-wider mb-3">Conceitos Aplicados</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.concepts.map((concept) => (
                          <span key={concept} className="px-2.5 py-1 text-xs bg-dark-bg/60 border border-green-primary/15 text-gray-medium rounded-md">
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                    {featuredProject.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4 }}
                        className="p-3 rounded-lg border border-green-primary/20 text-center group-hover:border-green-primary/40 transition-all"
                      >
                        <p className="text-green-primary font-bold text-sm md:text-base">{stat.value}</p>
                        <p className="text-gray-dim text-xs">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
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
                  <div className="flex items-center gap-2 text-green-primary font-semibold group-hover:gap-4 transition-all text-base md:text-lg">
                    Explorar Projeto <span className="text-lg md:text-xl">→</span>
                  </div>
                </motion.div>

                {/* Dashboard Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative w-full h-64 md:h-[550px] rounded-xl overflow-hidden border border-green-primary/30 bg-gradient-to-br from-dark-secondary to-dark-tertiary group-hover:border-green-primary/60 transition-all flex items-center justify-center"
                  onMouseEnter={() => handleMouseEnter(featuredProject.id)}
                  onMouseLeave={() => handleMouseLeave(featuredProject.id)}
                >
                  <img
                    src={featuredProject.image}
                    alt="Dashboard Preview"
                    className={`w-full h-full object-contain transition-opacity duration-300 ${
                      featuredProject.id === 5 && hoveredProjectId === 5 ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'
                    }`}
                  />

                  {/* Video Preview - Only for Doação Solidária */}
                  {featuredProject.id === 5 && (
                    <video
                      ref={videoRef}
                      src="/images/doacao-video.mp4"
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                        hoveredProjectId === 5 ? 'opacity-100' : 'opacity-0'
                      }`}
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  )}
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

                        {/* Conceitos Aplicados */}
                        {project.concepts && (
                          <div className="mb-6">
                            <p className="text-gray-dim text-xs font-semibold uppercase tracking-wider mb-3">Conceitos Aplicados</p>
                            <div className="flex flex-wrap gap-2">
                              {project.concepts.map((concept) => (
                                <span key={concept} className="px-2.5 py-1 text-xs bg-dark-bg/60 border border-green-primary/15 text-gray-medium rounded-md">
                                  {concept}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

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
                      onMouseEnter={() => handleMouseEnter(project.id)}
                      onMouseLeave={() => handleMouseLeave(project.id)}
                    >
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-green-primary/20 bg-gradient-to-br from-dark-secondary to-dark-tertiary group-hover:border-green-primary/50 transition-all">
                        {/* Static Image */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                            project.id === 5 && hoveredProjectId === 5 ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'
                          }`}
                        />

                        {/* Video Preview - Only for Doação Solidária */}
                        {project.id === 5 && (
                          <video
                            ref={videoRef}
                            src="/images/doacao-video.mp4"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                              hoveredProjectId === 5 ? 'opacity-100' : 'opacity-0'
                            }`}
                            muted
                            loop
                            playsInline
                            preload="auto"
                          />
                        )}
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
