import { motion } from 'framer-motion'
import Card from './common/Card'
import { experienceData } from '../data/portfolioData'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-bg-dark">
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
            Minha <span className="gradient-text">Experiência</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-tech to-primary-purple mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-8 pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-3 md:left-1/2 top-16 h-24 w-1 bg-gradient-to-b from-orange-tech to-transparent transform md:-translate-x-1/2" />
              )}

              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-orange-tech rounded-full border-4 border-bg-dark transform md:-translate-x-1/2 flex items-center justify-center"
                whileInView={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Briefcase size={16} className="text-white" />
              </motion.div>

              {/* Content */}
              <Card className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                </div>
                
                <p className="text-orange-tech font-semibold mb-2">{experience.position}</p>
                
                <div className="flex items-center gap-2 text-gray-secondary text-sm mb-4">
                  <Calendar size={16} />
                  {experience.period}
                </div>

                <p className="text-gray-text mb-4">{experience.description}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-text">
                      <span className="text-orange-tech font-bold mt-1">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
