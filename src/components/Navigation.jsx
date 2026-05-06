import React, { useState } from 'react'
import './Navigation.scss'

function Navigation({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <svg viewBox="0 0 32 48" width="32" height="48" xmlns="http://www.w3.org/2000/svg">
            {/* Minimalist monogram design */}
            <circle cx="16" cy="16" r="13" fill="none" stroke="#ff6b35" strokeWidth="1.2" opacity="0.5"/>
            
            {/* G */}
            <text x="16" y="18" fontSize="14" fontWeight="700" fill="#ff6b35" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">G</text>
            
            {/* S */}
            <text x="16" y="42" fontSize="12" fontWeight="700" fill="#8b5a3c" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">S</text>
          </svg>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation
