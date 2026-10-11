import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'

const fade = (reduce, delay) => ({
  initial: reduce ? false : { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] },
})

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="container-page pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        {/* Texto */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <motion.p {...fade(reduce, 0)} className="eyebrow mb-8">
              {profile.role} · {profile.location}
            </motion.p>

            <motion.h1
              {...fade(reduce, 0.1)}
              className="font-display text-[2.75rem] leading-[0.98] tracking-tightest sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              Construo produtos
              <br />
              do banco
              <span className="text-accent"> à tela.</span>
            </motion.h1>

            <motion.p {...fade(reduce, 0.2)} className="mt-8 max-w-xl text-lg leading-relaxed text-paper/75">
              Desenvolvedor fullstack pleno com TypeScript, Python, Supabase e PostgreSQL. Cuido da regra
              de negócio, dos testes e das migrations, e trago cinco anos de operação e dados em
              empresas grandes para entender o problema antes de abrir o editor.
            </motion.p>
          </div>

          <motion.div {...fade(reduce, 0.3)} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#projetos"
              className="rounded-full bg-paper px-6 py-3 font-medium text-ink transition-colors hover:bg-accent"
            >
              Ver projetos
            </a>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="link-line text-sm">
              WhatsApp
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-line text-sm">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-line text-sm">
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Foto */}
        <motion.figure
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-sm border border-line bg-ink-2">
            <img
              src={profile.photo}
              alt="Gabriel Silvano em um estádio, foto em preto e branco"
              width="1179"
              height="1767"
              fetchpriority="high"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <figcaption className="eyebrow mt-3 flex justify-between">
            <span>Gabriel Silvano</span>
            <span>Fullstack · 2026</span>
          </figcaption>
        </motion.figure>
      </div>

      {/* Linha de fatos */}
      <motion.dl
        {...fade(reduce, 0.4)}
        className="rule mt-16 grid grid-cols-2 gap-6 pt-6 md:grid-cols-4"
      >
        {[
          ['Atuação', 'Fullstack pleno, PJ'],
          ['Foco', 'TypeScript · Python · PostgreSQL'],
          ['Base', '+5 anos em operações e dados'],
          ['Formação', 'ADS · FATEC'],
        ].map(([k, v]) => (
          <div key={k}>
            <dt className="eyebrow mb-1">{k}</dt>
            <dd className="text-sm text-paper/85">{v}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}
