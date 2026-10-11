import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Stack from './components/Stack'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Pular para os projetos
      </a>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stack />
      </main>
      <Contact />
    </>
  )
}
