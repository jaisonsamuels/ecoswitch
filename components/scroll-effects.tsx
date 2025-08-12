"use client"

import { useEffect, useState } from "react"

export function ScrollEffects() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0
      setScrollProgress(scrolled)
    }

    const handleScroll = () => {
      updateScrollProgress()

      // Reveal elements on scroll
      const elements = document.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale",
      )
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("revealed")
        }
      })

      // Parallax effect
      const parallaxElements = document.querySelectorAll(".parallax")
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement
        const speed = Number.parseFloat(htmlElement.getAttribute("data-speed") || "0.5")
        const yPos = -(window.pageYOffset * speed)
        htmlElement.style.transform = `translateY(${yPos}px)`
      })

      // Text reveal animation
      const textElements = document.querySelectorAll(".text-reveal")
      textElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        if (elementTop < window.innerHeight - 100) {
          element.classList.add("revealed")
        }
      })
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
}
