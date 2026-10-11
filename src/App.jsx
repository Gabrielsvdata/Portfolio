import React from 'react'
import Nav from './components/editorial/Nav'
import Hero from './components/editorial/Hero'
import Trajetoria from './components/editorial/Trajetoria'
import Projetos from './components/editorial/Projetos'
import Stack from './components/editorial/Stack'
import Experiencia from './components/editorial/Experiencia'
import Footer from './components/editorial/Footer'

function App() {
  return (
    <div className="editorial min-h-screen bg-paper text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Trajetoria />
        <Projetos />
        <Stack />
        <Experiencia />
      </main>
      <Footer />
    </div>
  )
}

export default App
