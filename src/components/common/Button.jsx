import { motion } from 'framer-motion'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer inline-block'
  
  const variants = {
    primary: 'bg-orange-tech text-white hover:bg-orange-light hover:shadow-glow-orange transform hover:-translate-y-1',
    secondary: 'border-2 border-orange-tech text-orange-tech hover:bg-orange-tech hover:text-white transform hover:-translate-y-1',
    outline: 'border-2 border-gray-text text-gray-text hover:border-orange-tech hover:text-orange-tech'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
