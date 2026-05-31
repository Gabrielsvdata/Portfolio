import React from 'react'
import { motion } from 'framer-motion'

const milestones = [
  {
    icon: '📦',
    label: 'Logística & Operações',
    description: 'Atuação em ambientes corporativos com foco em processos, indicadores e análise de dados operacionais.',
  },
  {
    icon: '📊',
    label: 'Dados & SQL',
    description: 'Contato direto com sistemas corporativos, automações em SQL e inteligência de negócios.',
  },
  {
    icon: '💻',
    label: 'Desenvolvimento de Software',
    description: 'Transição para engenharia de software: Backend, APIs REST, bancos de dados e Inteligência Artificial aplicada.',
  },
]

export default function JourneySupabase() {
  return (
    <section id="trajetoria" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-primary/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-green-primary/5 rounded-full blur-3xl opacity-10 -translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block text-green-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Trajetória
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Da Logística à <span className="text-green-primary">Tecnologia</span>
          </h2>
          <p className="text-gray-medium text-lg max-w-2xl leading-relaxed">
            Uma transição construída sobre experiência corporativa real, não apenas sobre código.
          </p>
        </motion.div>

        {/* Narrative */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-gray-medium leading-relaxed">
              Minha trajetória profissional começou na área de{' '}
              <span className="text-gray-light font-medium">logística e operações</span>, atuando em ambientes
              corporativos com foco em processos, indicadores e análise de dados.
            </p>
            <p className="text-gray-medium leading-relaxed">
              O contato constante com sistemas, automações e tecnologia despertou meu interesse por{' '}
              <span className="text-green-primary font-medium">desenvolvimento de software</span> e engenharia de soluções.
            </p>
            <p className="text-gray-medium leading-relaxed">
              Hoje desenvolvo aplicações Full Stack com foco em{' '}
              <span className="text-green-primary font-medium">Backend</span>,{' '}
              <span className="text-green-primary font-medium">APIs</span>,{' '}
              <span className="text-green-primary font-medium">Dados</span> e{' '}
              <span className="text-green-primary font-medium">Inteligência Artificial</span>,
              unindo experiência operacional e conhecimento técnico para transformar
              desafios de negócio em soluções digitais.
            </p>
          </motion.div>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 rounded-xl border border-green-primary/15 bg-gradient-to-r from-green-primary/5 to-transparent hover:border-green-primary/35 transition-all duration-300"
              >
                <div className="text-2xl shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-light text-sm mb-1">{item.label}</p>
                  <p className="text-gray-medium text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Differentials bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-5 rounded-xl border border-green-primary/20 bg-gradient-to-r from-green-primary/8 to-transparent"
        >
          <p className="text-green-primary text-sm font-semibold mb-3 uppercase tracking-wider">Diferencial</p>
          <p className="text-gray-light leading-relaxed">
            A experiência corporativa em operações, dados e processos industriais agrega uma visão que
            poucos desenvolvedores possuem: <span className="text-green-primary">entender o problema de negócio antes de escrever a primeira linha de código.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
