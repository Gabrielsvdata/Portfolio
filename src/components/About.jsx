import { motion } from 'framer-motion'
import Card from './common/Card'
import { metricsData } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gray-dark">
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
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-tech to-primary-purple mx-auto" />
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-text leading-relaxed">
              Sou desenvolvedor backend. Trabalho com Node.js, Python e IA. Prefiro código limpo que resolve o problema sem complicar as coisas.
            </p>
            <p className="text-lg text-gray-text leading-relaxed">
              Trabalhei em 5 projetos em produção (SISPAR, KID IA, Doação Solidária, Gestão Cuidadora e Bot Especialista), passei por Stone e Carrefour, e fiz alguns trabalhos freelancer. Aprendi bastante sobre o que funciona na prática.
            </p>
            <p className="text-lg text-gray-text leading-relaxed">
              Fico atento a novas tecnologias, principalmente IA. Mas só uso quando faz sentido pro projeto. Prefiro simplicidade a hype.
            </p>
          </motion.div>

          {/* Metrics Cards */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {metricsData.map((metric, index) => (
              <Card 
                key={index} 
                delay={index * 0.1}
                className="text-center"
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-orange-tech mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {metric.value}
                </motion.h3>
                <p className="text-sm text-gray-secondary">{metric.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
