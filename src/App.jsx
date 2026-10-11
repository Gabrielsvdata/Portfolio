import React from 'react'
import NavigationSupabase from './components/NavigationSupabase'
import HeroSupabase from './components/HeroSupabase'
import AreasSupabase from './components/AreasSupabase'
import JourneySupabase from './components/JourneySupabase'
import HighlightsSupabase from './components/HighlightsSupabase'
import DiferenciaisSupabase from './components/DiferenciaisSupabase'
import ProjectsSupabase from './components/ProjectsSupabase'
import StackSupabase from './components/StackSupabase'
import ExperienceSupabase from './components/ExperienceSupabase'
import FooterSupabase from './components/FooterSupabase'
import CodeBackground from './components/background/CodeBackground'
import WhatsAppButton from './components/WhatsAppButton'
import HeroEditorial from './components/concepts/HeroEditorial'
import HeroBento from './components/concepts/HeroBento'
import HeroTerminal from './components/concepts/HeroTerminal'
import './App.scss'

// Protótipos de conceito visual: abra com ?concept=editorial | bento | terminal
const CONCEPTS = { editorial: HeroEditorial, bento: HeroBento, terminal: HeroTerminal }
const concept = new URLSearchParams(window.location.search).get('concept')

function App() {
  if (CONCEPTS[concept]) {
    const Concept = CONCEPTS[concept]
    return <Concept />
  }

  return (
    <div className="relative w-full min-h-screen bg-dark-bg text-gray-light overflow-x-hidden">
      <CodeBackground />
      <WhatsAppButton />

      <div className="relative z-10">
        <NavigationSupabase />

        <main className="relative pt-16">
          <HeroSupabase />
          <AreasSupabase />
          <JourneySupabase />
          <HighlightsSupabase />
          <DiferenciaisSupabase />
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
    </div>
  )
}

export default App
