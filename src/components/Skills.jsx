import { motion } from 'framer-motion'
import Card from './common/Card'
import { skillsData } from '../data/portfolioData'

export default function Skills() {
  const renderSkillTag = (name) => (
    <motion.div
      key={name}
      className="inline-block bg-gray-dark border border-gray-600 rounded-lg px-4 py-2 text-gray-text hover:border-orange-tech hover:text-orange-tech transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-bg-dark">
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
            Minhas <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-tech to-primary-purple mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold text-orange-tech mb-8">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.backend.map((skill) => renderSkillTag(skill.name))}
              </div>
            </Card>
          </motion.div>

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold text-primary-purple mb-8">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.frontend.map((skill) => renderSkillTag(skill.name))}
              </div>
            </Card>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold text-cyan-light mb-8">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.tools.map((skill) => renderSkillTag(skill.name))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
