import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CodeBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Code snippets representing different technologies
  const codeSnippets = [
    {
      id: 1,
      code: 'SELECT * FROM donations\nWHERE active = true;',
      type: 'sql',
      top: '10%',
      left: '5%',
    },
    {
      id: 2,
      code: 'POST /api/v1/donations\nContent-Type: application/json',
      type: 'api',
      top: '20%',
      left: '75%',
    },
    {
      id: 3,
      code: 'response = llm.generate(\n  prompt, model="gpt-4"\n)',
      type: 'python',
      top: '35%',
      left: '10%',
    },
    {
      id: 4,
      code: '{\n  "model": "gpt-4",\n  "tokens": 2048\n}',
      type: 'json',
      top: '50%',
      left: '80%',
    },
    {
      id: 5,
      code: '@app.route(\'/api/projects\')\ndef get_projects():',
      type: 'python',
      top: '65%',
      left: '8%',
    },
    {
      id: 6,
      code: 'const response = await\nfetch(\'/api/data\');',
      type: 'javascript',
      top: '75%',
      left: '70%',
    },
    {
      id: 7,
      code: 'UPDATE database SET\nstatus = "processed"',
      type: 'sql',
      top: '85%',
      left: '15%',
    },
  ]

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-bg/95" />

      {/* Grid pattern overlay - very subtle */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(34, 197, 94, 0.05) 25%, rgba(34, 197, 94, 0.05) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, 0.05) 75%, rgba(34, 197, 94, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 197, 94, 0.05) 25%, rgba(34, 197, 94, 0.05) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, 0.05) 75%, rgba(34, 197, 94, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Code snippets */}
      {codeSnippets.map((snippet) => (
        <motion.div
          key={snippet.id}
          className="absolute text-xs font-mono text-green-primary/[0.15] pointer-events-none"
          style={{
            top: snippet.top,
            left: snippet.left,
            width: '200px',
            filter: 'blur(0.5px)',
            lineHeight: '1.5',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
          animate={{
            x: mousePosition.x * (15 + snippet.id * 2),
            y: mousePosition.y * (15 + snippet.id * 2),
          }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 40,
            mass: 1,
          }}
        >
          <div className="border border-green-primary/20 rounded px-3 py-2 bg-green-primary/[0.04] backdrop-blur-sm">
            {snippet.code}
          </div>
        </motion.div>
      ))}

      {/* Animated orb - top left */}
      <motion.div
        className="absolute w-40 h-40 rounded-full"
        style={{
          top: '5%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 40,
        }}
      />

      {/* Animated orb - bottom right */}
      <motion.div
        className="absolute w-60 h-60 rounded-full"
        style={{
          bottom: '-10%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: mousePosition.x * -15,
          y: mousePosition.y * -15,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 40,
        }}
      />

      {/* Scan lines - very subtle */}
      <div
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.3) 2px, rgba(34, 197, 94, 0.3) 4px)',
          animation: 'scanlines 8s linear infinite',
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-bg/40 pointer-events-none" />

      <style>{`
        @keyframes scanlines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(10px);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, transparent 0%, rgba(10, 15, 13, 0.4) 100%);
        }
      `}</style>
    </div>
  )
}
