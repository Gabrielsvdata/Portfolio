import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NavigationSupabase from './components/NavigationSupabase'
import HeroSupabase from './components/HeroSupabase'
import ProjectsSupabase from './components/ProjectsSupabase'
import StackSupabase from './components/StackSupabase'
import ExperienceSupabase from './components/ExperienceSupabase'
import FooterSupabase from './components/FooterSupabase'
import './App.scss'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-dark-bg text-gray-light overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="pointer-events-none fixed w-6 h-6 border-2 border-green-primary rounded-full z-50 mix-blend-screen opacity-60"
        animate={{ x: cursorPosition.x - 12, y: cursorPosition.y - 12 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      <NavigationSupabase />

      <main className="relative pt-16">
        <HeroSupabase />
        <ProjectsSupabase />
        <section id="stack">
          <StackSupabase />
        </section>
        <section id="experiencia">
          <ExperienceSupabase />
        </section>
      </main>

      <FooterSupabase />
    </div>
  )
}

export default App
