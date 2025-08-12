"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { Leaf } from "lucide-react"

export function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const leafRef = useRef<HTMLDivElement>(null)
  const trailsRef = useRef<HTMLDivElement[]>([])
  const animationRef = useRef<number>()
  const lastMousePos = useRef({ x: 0, y: 0 })
  const leafPos = useRef({ x: 0, y: 0 })
  const rotation = useRef(0)

  // Throttled mouse position update
  const updateMousePosition = useCallback((e: MouseEvent) => {
    const newX = e.clientX
    const newY = e.clientY

    // Only update if mouse moved significantly (reduces unnecessary updates)
    if (Math.abs(newX - lastMousePos.current.x) > 2 || Math.abs(newY - lastMousePos.current.y) > 2) {
      setMousePosition({ x: newX, y: newY })
      lastMousePos.current = { x: newX, y: newY }
    }
  }, [])

  // Optimized animation loop using RAF
  const animate = useCallback(() => {
    if (!leafRef.current) return

    // Smooth leaf following with optimized easing
    const easeFactor = 0.2
    leafPos.current.x += (lastMousePos.current.x - leafPos.current.x) * easeFactor
    leafPos.current.y += (lastMousePos.current.y - leafPos.current.y) * easeFactor

    // Calculate rotation based on movement
    const deltaX = lastMousePos.current.x - leafPos.current.x
    const deltaY = lastMousePos.current.y - leafPos.current.y
    const targetRotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90
    rotation.current += (targetRotation - rotation.current) * 0.1

    // Update leaf position using transform (more performant than left/top)
    leafRef.current.style.transform = `translate3d(${leafPos.current.x - 16}px, ${leafPos.current.y - 16}px, 0) rotate(${rotation.current}deg) scale(${isHovering ? 1.2 : isClicking ? 0.8 : 1})`

    // Update trails with reduced frequency
    trailsRef.current.forEach((trail, index) => {
      if (trail) {
        const delay = index * 0.05
        const trailX = leafPos.current.x - 8 + Math.sin(Date.now() * 0.001 + index) * 2
        const trailY = leafPos.current.y - 8 + Math.cos(Date.now() * 0.001 + index) * 2
        const opacity = Math.max(0, 0.6 - index * 0.1)
        const scale = Math.max(0.2, 1 - index * 0.15)

        trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) rotate(${rotation.current + index * 10}deg) scale(${scale})`
        trail.style.opacity = opacity.toString()
      }
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [isHovering, isClicking])

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target?.matches?.('button, a, [role="button"], input, textarea, select, .magnetic, .ripple')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target?.matches?.('button, a, [role="button"], input, textarea, select, .magnetic, .ripple')) {
        setIsHovering(false)
      }
    }

    // Optimized magnetic effect
    const handleMagneticHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target?.matches?.(".magnetic")) {
        const rect = target.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) * 0.1
        const y = (e.clientY - rect.top - rect.height / 2) * 0.1
        target.style.transform = `translate(${x}px, ${y}px)`
      }
    }

    const handleMagneticLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target?.matches?.(".magnetic")) {
        target.style.transform = "translate(0px, 0px)"
      }
    }

    // Throttled event listeners
    let ticking = false
    const throttledMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateMousePosition(e)
          handleMagneticHover(e)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("mousemove", throttledMouseMove, { passive: true })
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnter, { passive: true })
    document.addEventListener("mouseout", handleMouseLeave, { passive: true })
    document.addEventListener("mouseleave", handleMagneticLeave, { passive: true })

    // Start animation loop
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
      document.removeEventListener("mouseleave", handleMagneticLeave)

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [updateMousePosition, animate])

  return (
    <>
      {/* Optimized leaf cursor */}
      <div
        ref={leafRef}
        className="leaf-cursor-optimized"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      >
        <div className="leaf-glow-optimized"></div>
        <Leaf className="leaf-icon-optimized" />
        {isHovering && <div className="leaf-sparkle-optimized"></div>}
      </div>

      {/* Simplified trails - only 4 elements for better performance */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailsRef.current[i] = el
          }}
          className="leaf-trail-optimized"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "16px",
            height: "16px",
            pointerEvents: "none",
            zIndex: 9998 - i,
            willChange: "transform, opacity",
          }}
        >
          <Leaf className="h-4 w-4 text-emerald-400" />
        </div>
      ))}
    </>
  )
}
