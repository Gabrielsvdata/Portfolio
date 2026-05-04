import { motion } from 'framer-motion'

export default function GradientText({ children, className = '' }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-r from-orange-tech via-primary-purple to-cyan-light bg-clip-text text-transparent font-bold ${className}`}
    >
      {children}
    </motion.h1>
  )
}
