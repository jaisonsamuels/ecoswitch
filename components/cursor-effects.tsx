"use client"

import { useEffect, useState } from "react"
import { Leaf } from "lucide-react"

export function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number; opacity: number }>>([])
  const [leafPosition, setLeafPosition] = useState({ x: 0, y: 0 })
  const [leafRotation, setLeafRotation] = useState(0)
  const [leafScale, setLeafScale] = useState(1)

  useEffect(() => {
    let trailId = 0
    let animationFrame: number

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Smooth leaf following with easing
      const easeFactor = 0.3
      setLeafPosition((prev) => ({
        x: prev.x + (e.clientX - prev.x) * easeFactor,
        y: prev.y + (e.clientY - prev.y) * easeFactor,
      }))

      // Calculate leaf rotation based on movement direction
      const deltaX = e.clientX - leafPosition.x
      const deltaY = e.clientY - leafPosition.y
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      setLeafRotation(angle + 90) // +90 to make leaf point in movement direction

      // Add enhanced trail effect with varying opacity - fewer trails for better performance
      setTrails((prev) => {
        const newTrail = {
          x: leafPosition.x,
          y: leafPosition.y,
          id: trailId++,
          opacity: 0.8,
        }
        const updatedTrails = [...prev, newTrail].slice(-8) // Keep last 8 trails for better performance
        return updatedTrails.map((trail, index) => ({
          ...trail,
          opacity: ((index + 1) / updatedTrails.length) * 0.6,
        }))
      })
    }

    const handleMouseDown = () => {
      setIsClicking(true)
      setLeafScale(1.3)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
      setLeafScale(1)
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target && typeof target.matches === "function") {
        if (target.matches('button, a, [role="button"], input, textarea, select, .magnetic, .ripple')) {
          setIsHovering(true)
          setLeafScale(1.2)
        }
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target && typeof target.matches === "function") {
        if (target.matches('button, a, [role="button"], input, textarea, select, .magnetic, .ripple')) {
          setIsHovering(false)
          setLeafScale(1)
        }
      }
    }

    // Add magnetic effect to interactive elements
    const handleMagneticHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target && typeof target.matches === "function" && target.matches(".magnetic")) {
        const rect = target.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        target.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
      }
    }

    const handleMagneticLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target && typeof target.matches === "function" && target.matches(".magnetic")) {
        target.style.transform = "translate(0px, 0px)"
      }
    }

    // Animate trails fading
    const animateTrails = () => {
      setTrails((prev) =>
        prev
          .map((trail) => ({
            ...trail,
            opacity: trail.opacity * 0.95,
          }))
          .filter((trail) => trail.opacity > 0.1),
      )

      animationFrame = requestAnimationFrame(animateTrails)
    }

    // Clean up trails periodically
    const trailCleanup = setInterval(() => {
      setTrails((prev) => prev.slice(-6))
    }, 50) // Faster cleanup interval

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnter, true)
    document.addEventListener("mouseout", handleMouseLeave, true)
    document.addEventListener("mousemove", handleMagneticHover)
    document.addEventListener("mouseleave", handleMagneticLeave, true)

    animateTrails()

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnter, true)
      document.removeEventListener("mouseout", handleMouseLeave, true)
      document.removeEventListener("mousemove", handleMagneticHover)
      document.removeEventListener("mouseleave", handleMagneticLeave, true)
      clearInterval(trailCleanup)
      cancelAnimationFrame(animationFrame)
    }
  }, [leafPosition.x, leafPosition.y])

  return (
    <>
      {/* Leaf cursor with beautiful animations */}
      <div
        className={`leaf-cursor ${isHovering ? "hover" : ""} ${isClicking ? "click" : ""}`}
        style={{
          left: leafPosition.x,
          top: leafPosition.y,
          transform: `translate(-50%, -50%) rotate(${leafRotation}deg) scale(${leafScale})`,
        }}
      >
        <div className="leaf-glow"></div>
        <Leaf className="leaf-icon" />
        <div className="leaf-sparkle"></div>
      </div>

      {/* Enhanced cursor trails with leaf shapes */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="leaf-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: trail.opacity,
            transform: `translate(-50%, -50%) rotate(${leafRotation + index * 5}deg) scale(${0.3 + (index / trails.length) * 0.7})`,
            animationDelay: `${index * 50}ms`,
          }}
        >
          <Leaf className="h-4 w-4 text-emerald-400" />
        </div>
      ))}

      {/* Floating particles around cursor */}
      {isHovering && (
        <div className="cursor-particles">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: leafPosition.x + Math.cos((i * 60 * Math.PI) / 180) * 30,
                top: leafPosition.y + Math.sin((i * 60 * Math.PI) / 180) * 30,
                animationDelay: `${i * 100}ms`,
              }}
            >
              <div className="particle-dot"></div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
