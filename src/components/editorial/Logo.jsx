import React from 'react'

// Marca "gs." — iniciais em caixa-baixa, peso máximo, com ponto.
// Herda a cor do texto ao redor (currentColor), então funciona no fundo papel e no rodapé preto.
export default function Logo({ className = 'h-6' }) {
  return (
    <svg viewBox="0 0 48 32" className={`normal-case ${className}`} aria-hidden="true" focusable="false">
      <text x="0" y="27" fontFamily="Inter, system-ui, sans-serif" fontWeight="900" fontSize="34" letterSpacing="-3" fill="currentColor" style={{ textTransform: "none" }}>gs</text>
      <circle cx="43" cy="24" r="3.5" fill="currentColor" />
    </svg>
  )
}
