import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import './App.scss'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app parallax">
      <CustomCursor />
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="home" onMouseEnter={() => setActiveSection('home')}>
          <Hero scrollY={scrollY} />
        </section>
        
        <section id="about" onMouseEnter={() => setActiveSection('about')}>
          <About />
        </section>
        
        <section id="expertise" onMouseEnter={() => setActiveSection('expertise')}>
          <Expertise />
        </section>
        
        <section id="projects" onMouseEnter={() => setActiveSection('projects')}>
          <Projects />
        </section>
        
        <section id="contact" onMouseEnter={() => setActiveSection('contact')}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
