import React from 'react'
import { projects, moreProjects } from '../data/projects'
import Reveal from './Reveal'

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-line">
          Ver no ar ↗
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link-line">
          Código ↗
        </a>
      )}
      {!project.demo && !project.repo && <span className="text-muted">Repositório privado</span>}
    </div>
  )
}

function Project({ project, index }) {
  const flip = index % 2 === 1
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal>
      <article className="group rule grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
        {/* Imagem */}
        <a
          href={project.demo || project.repo || '#'}
          target={project.demo || project.repo ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={`${project.title}: abrir`}
          className={`block md:col-span-7 ${flip ? 'md:order-2' : ''}`}
        >
          <div className="aspect-[16/10] overflow-hidden rounded-sm border border-line bg-ink-2">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="img-editorial h-full w-full object-cover"
            />
          </div>
        </a>

        {/* Texto */}
        <div className={`flex flex-col md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
          <div className="eyebrow mb-6 flex items-center justify-between">
            <span>{number}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-display text-3xl font-semibold tracking-tight lg:text-4xl">{project.title}</h3>
          <p className="mt-2 text-sm text-muted">
            {project.kind} · {project.role}
          </p>

          <p className="mt-6 leading-relaxed text-paper/80">{project.summary}</p>

          <ul className="mt-6 space-y-2 text-sm text-paper/70">
            {project.details.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-[9px] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologias">
            {project.stack.map((t) => (
              <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-paper/80">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="container-page py-16 md:py-24">
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-semibold tracking-tightest sm:text-5xl lg:text-6xl">Projetos</h2>
          <p className="eyebrow pb-2">{projects.length} selecionados</p>
        </div>
      </Reveal>

      <div className="mt-10">
        {projects.map((p, i) => (
          <Project key={p.slug} project={p} index={i} />
        ))}
      </div>

      {/* Outros projetos, em lista */}
      <Reveal>
        <div className="rule pt-10">
          <p className="eyebrow mb-6">Também no GitHub</p>
          <ul className="divide-y divide-line border-y border-line">
            {moreProjects.map((p) => (
              <li key={p.title}>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-1 py-4 transition-colors hover:text-accent sm:grid-cols-12 sm:gap-6"
                >
                  <span className="font-display text-lg sm:col-span-3">{p.title}</span>
                  <span className="text-sm text-muted sm:col-span-8">{p.kind}</span>
                  <span className="hidden text-right text-sm sm:col-span-1 sm:block">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
