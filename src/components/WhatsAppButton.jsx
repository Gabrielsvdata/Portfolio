import React from 'react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const whatsappNumber = '5513991689394'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-30 group"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-green-primary/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Button */}
      <div className="relative w-14 h-14 bg-green-primary/90 text-dark-bg rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 border border-green-primary/40">
        {/* WhatsApp Icon */}
        <img
          src="/images/whatsapp.svg"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </div>

      {/* Tooltip - appears on hover */}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-dark-bg border border-green-primary/20 rounded text-xs text-green-primary font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        (13) 99168-9394
      </div>
    </motion.a>
  )
}
