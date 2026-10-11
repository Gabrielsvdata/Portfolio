import React from 'react'
import { motion } from 'framer-motion'

// Nós do diagrama: Navegador → API → Banco → IA
const NODES = [
  { id: 'web', label: 'Navegador', sub: 'React', x: 40, y: 40 },
  { id: 'api', label: 'API', sub: 'Flask / Node', x: 40, y: 150 },
  { id: 'db', label: 'Banco', sub: 'PostgreSQL', x: 40, y: 260 },
  { id: 'ia', label: 'IA', sub: 'LLM', x: 40, y: 370 },
]

const NODE_W = 150
const NODE_H = 56
const SVG_W = 230
const SVG_H = 460

// Linhas conectando o centro-inferior de um nó ao centro-superior do próximo
const LINKS = NODES.slice(0, -1).map((n, i) => ({
  id: `${n.id}-${NODES[i + 1].id}`,
  x: n.x + NODE_W / 2,
  y1: n.y + NODE_H,
  y2: NODES[i + 1].y,
}))

const REQUESTS = ['GET /api/projects', 'POST /api/donations', 'SELECT * FROM users', 'llm.generate()']

export default function HeroArt() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative flex items-center justify-center gap-6"
    >
      {/* Foto com moldura e glow */}
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-green-primary/20 blur-2xl" />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-56 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden border border-green-primary/40 shadow-glow-green"
        >
          <img
            src="/images/gabriel.jpg"
            alt="Gabriel Silvano"
            className="w-full h-full object-cover object-top grayscale"
          />
          {/* Overlay esverdeado sutil + fade na base */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
          <div className="absolute inset-0 bg-green-primary/10 mix-blend-overlay" />

          {/* Badge de status */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-bg/80 border border-green-primary/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-glow opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-primary" />
            </span>
            <span className="text-xs text-gray-light font-mono">Full Stack Dev</span>
          </div>
        </motion.div>
      </div>

      {/* Diagrama de arquitetura animado */}
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="hidden md:block w-[230px] h-[460px]"
        aria-label="Arquitetura: Navegador, API, Banco de dados e IA"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Conexões + pacote de dados subindo e descendo */}
        {LINKS.map((l, i) => (
          <g key={l.id}>
            <line x1={l.x} y1={l.y1} x2={l.x} y2={l.y2} stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
            <motion.circle
              r="4"
              cx={l.x}
              fill="#4ade80"
              filter="url(#glow)"
              animate={{ cy: [l.y1, l.y2, l.y1], opacity: [0, 1, 1, 1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: 'easeInOut' }}
            />
          </g>
        ))}

        {/* Nós */}
        {NODES.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.15, duration: 0.5 }}
          >
            <rect
              x={n.x}
              y={n.y}
              width={NODE_W}
              height={NODE_H}
              rx="10"
              fill="#0f1411"
              stroke="#22c55e"
              strokeOpacity="0.35"
            />
            <motion.rect
              x={n.x}
              y={n.y}
              width={NODE_W}
              height={NODE_H}
              rx="10"
              fill="none"
              stroke="#4ade80"
              strokeWidth="1.5"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8 }}
            />
            <circle cx={n.x + 18} cy={n.y + NODE_H / 2} r="4" fill="#22c55e" />
            <text x={n.x + 32} y={n.y + 24} fill="#e5e7eb" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">
              {n.label}
            </text>
            <text x={n.x + 32} y={n.y + 42} fill="#6b7280" fontSize="10" fontFamily="monospace">
              {n.sub}
            </text>
          </motion.g>
        ))}

        {/* Requisição passando ao lado, estilo log */}
        {LINKS.map((l, i) => (
          <motion.text
            key={REQUESTS[i]}
            x={l.x + 12}
            y={(l.y1 + l.y2) / 2 + 3}
            fill="#22c55e"
            fontSize="9"
            fontFamily="monospace"
            animate={{ opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8 }}
          >
            {REQUESTS[i]}
          </motion.text>
        ))}
      </svg>
    </motion.div>
  )
}
