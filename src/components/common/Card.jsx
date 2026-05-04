import { motion } from 'framer-motion'

export default function Card({ 
  children, 
  className = '',
  delay = 0,
  hover = true
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -10, boxShadow: '0 25px 50px rgba(255, 107, 53, 0.15)' } : {}}
      viewport={{ once: true }}
      className={`bg-gray-dark border border-gray-600 rounded-xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
