import React, { useState, useEffect } from 'react'
import './CustomCursor.scss'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <div className="cursor" style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isHovering ? 'scale(1.5)' : 'scale(1)'
      }} />
      <div className="cursor-trail" style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }} />
    </>
  )
}

export default CustomCursor
