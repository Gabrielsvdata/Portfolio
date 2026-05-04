import { motion } from 'framer-motion'

export default function SocialLink({ icon: Icon, url, name, color = '' }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      className={`text-gray-text transition-colors duration-300 ${color}`}
      aria-label={name}
    >
      <Icon size={24} />
    </motion.a>
  )
}
