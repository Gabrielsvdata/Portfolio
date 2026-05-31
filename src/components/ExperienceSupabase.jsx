import React from 'react'
import { motion } from 'framer-motion'

export default function ExperienceSupabase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-primary/5 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiência <span className="text-green-primary">Profissional</span>
          </h2>
        </motion.div>

        {/* Experience Items */}
        <div className="space-y-8">
          {/* Stone Pagamentos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-green-primary/30 hover:border-green-primary/60 transition-colors"
          >
            <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-green-primary border-4 border-dark-bg" />
            
            <div className="group p-6 rounded-lg border border-green-primary/10 bg-gradient-to-r from-green-primary/5 to-transparent hover:border-green-primary/30 transition-all">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-light">Stone</h3>
                  <p className="text-green-primary text-sm font-medium">Técnico de Suprimentos • Análise de Dados & Sistemas</p>
                </div>
                <span className="text-gray-medium text-sm whitespace-nowrap">2021 – Atual</span>
              </div>

              <p className="text-gray-medium text-sm mb-4 leading-relaxed">
                Atuação em ambiente corporativo de alta escala no segmento de fintechs, com foco em
                análise de dados, SQL, suporte a sistemas e processos operacionais. Essa experiência
                fortaleceu minha visão sobre tecnologia aplicada a negócios e impulsionou minha
                transição para a área de desenvolvimento de software.
              </p>

              <ul className="space-y-2 text-gray-medium text-sm">
                <li className="flex gap-2">
                  <span className="text-green-primary">→</span>
                  <span>Uso de <strong className="text-gray-light">SQL</strong> e <strong className="text-gray-light">Metabase</strong> para geração de indicadores estratégicos e auditoria de dados</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-primary">→</span>
                  <span>Automação de processos operacionais e controle de estoque em ambiente de alto volume transacional</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-primary">→</span>
                  <span>Suporte a sistemas internos, identificação de inconsistências e resolução de problemas de dados em produção</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-primary">→</span>
                  <span>Contato direto com fluxos de dados corporativos, o que fundamentou a transição para desenvolvimento de APIs e sistemas de dados</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Carrefour */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-green-primary/30 hover:border-green-primary/60 transition-colors"
          >
            <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-green-primary border-4 border-dark-bg" />
            
            <div className="group p-6 rounded-lg border border-green-primary/10 bg-gradient-to-r from-green-primary/5 to-transparent hover:border-green-primary/30 transition-all">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-light">Carrefour</h3>
                  <p className="text-green-primary text-sm font-medium">Líder de Equipe / Vendedor</p>
                </div>
                <span className="text-gray-medium text-sm whitespace-nowrap">2018 – 2021</span>
              </div>

              <ul className="space-y-2 text-gray-medium">
                <li className="flex gap-2">
                  <span className="text-green-primary">→</span>
                  <span>Gestão de equipe, treinamento e organização de operações</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-primary">→</span>
                  <span>Liderança e motivação de times multidisciplinares</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-lg border border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-transparent"
        >
          <h3 className="text-2xl font-bold mb-6 text-green-primary">Formação</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-light">Análise e Desenvolvimento de Sistemas</p>
                <p className="text-gray-medium text-sm">FATEC Praia Grande (em andamento)</p>
              </div>
              <span className="text-green-primary text-sm">2023 - 2027</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-light">Técnico em Logística</p>
                <p className="text-gray-medium text-sm">ETEC São Vicente</p>
              </div>
              <span className="text-green-primary text-sm">2019 - 2020</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-light">Técnico em Inteligência Artificial</p>
                <p className="text-gray-medium text-sm">IFNMG (em andamento)</p>
              </div>
              <span className="text-green-primary text-sm">2026 - 2028</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
