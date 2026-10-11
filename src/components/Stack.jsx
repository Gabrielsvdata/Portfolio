import React from 'react'
import { stack } from '../data/profile'
import Reveal from './Reveal'

export default function Stack() {
  return (
    <section id="stack" className="container-page py-16 md:py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tightest sm:text-5xl lg:text-6xl">Stack</h2>
        <p className="mt-4 max-w-xl text-paper/70">
          O que uso no dia a dia. As ferramentas mudam conforme o projeto, a forma de trabalhar não.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <dl className="divide-y divide-line border-y border-line">
          {stack.map((row) => (
            <div key={row.group} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
              <dt className="eyebrow sm:col-span-3 sm:pt-1">{row.group}</dt>
              <dd className="font-display text-lg leading-snug sm:col-span-9 sm:text-xl">
                {row.items.join('  ·  ')}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
