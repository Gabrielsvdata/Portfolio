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
import './App.scss'

function App() {
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
