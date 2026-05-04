import { motion } from 'framer-motion'

export default function Badge({ children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-orange-tech text-white',
    secondary: 'bg-primary-purple text-white',
    outline: 'border border-orange-tech text-orange-tech'
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  )
}
