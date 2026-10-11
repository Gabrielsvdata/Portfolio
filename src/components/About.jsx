import React from 'react'
import { experience, education } from '../data/profile'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="sobre" className="container-page py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        {/* Narrativa */}
        <Reveal className="md:col-span-5">
          <h2 className="font-display text-4xl font-semibold tracking-tightest sm:text-5xl lg:text-6xl">Sobre</h2>
          <div className="mt-8 space-y-5 leading-relaxed text-paper/80">
            <p>
              Comecei em logística e operações, em empresas como Carrefour e Stone, cuidando de processos,
              indicadores e dados. Foi lá que o SQL virou ferramenta de todo dia e que aprendi a medir o
              impacto de uma decisão antes de tomá-la.
            </p>
            <p>
              Hoje trabalho como desenvolvedor fullstack pleno. Escrevo backend e frontend em TypeScript e
              Python, modelo dados em PostgreSQL com migrations e uso Supabase para autenticação, storage e
              banco. Gosto de regra de negócio bem testada e de código que outra pessoa consegue ler.
            </p>
            <p className="text-paper">
              O que trago de diferente é a experiência de ter sido o usuário do sistema antes de ser quem
              o constrói.
            </p>
          </div>
        </Reveal>

        {/* Experiência + formação */}
        <div className="md:col-span-7 md:pl-8">
          <Reveal>
            <p className="eyebrow mb-4">Experiência</p>
            <ol className="divide-y divide-line border-y border-line">
              {experience.map((job) => (
                <li key={job.company + job.role} className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-6">
                  <p className="font-mono text-xs text-muted sm:col-span-3 sm:pt-1">{job.period}</p>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                    <p className="text-sm text-muted">{job.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-paper/75">{job.summary}</p>
                    {job.bullets.length > 0 && (
                      <ul className="mt-3 space-y-1.5 text-sm text-paper/65">
                        {job.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-[9px] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-12">
            <p className="eyebrow mb-4">Formação</p>
            <ul className="divide-y divide-line border-y border-line">
              {education.map((e) => (
                <li key={e.course} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-6">
                  <p className="font-mono text-xs text-muted sm:col-span-3 sm:pt-1">{e.period}</p>
                  <div className="sm:col-span-9">
                    <p className="font-medium">{e.course}</p>
                    <p className="text-sm text-muted">{e.school}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
