'use client'

import { useEffect } from 'react'
import type { ReactNode } from 'react'
import Lenis from 'lenis'

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 0.85,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
    })

    // Expose lenis globally for anchor interactions
    ;(window as any).__lenis = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Handle initial hash
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          lenis.scrollTo(el, { offset: -70, duration: 0.85 })
        }
      }, 150)
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return

      if (href.startsWith('#') && href.length > 1) {
        const id = href.slice(1)
        const el = document.getElementById(id)
        if (el) {
          e.preventDefault()
          lenis.scrollTo(el, { offset: -70, duration: 0.85 })
          window.history.pushState(null, '', href)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as any).__lenis
    }
  }, [])

  return <>{children}</>
}
