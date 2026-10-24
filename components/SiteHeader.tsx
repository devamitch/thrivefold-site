'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/#pillars', label: 'Health Pillars', isAnchor: true },
  { href: '/#circles', label: 'Activity Circles', isAnchor: true },
  { href: '/#telemetry', label: 'On-Device Tech', isAnchor: true },
  { href: '/#security', label: 'Security', isAnchor: true },
  { href: '/#covenant', label: 'Covenant', isAnchor: true },
  { href: '/privacy', label: 'Privacy', isAnchor: false },
  { href: '/terms', label: 'Terms', isAnchor: false },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl'
          : 'bg-[var(--bg)]/85 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[64px] sm:h-[68px] w-full max-w-[1240px] items-center justify-between px-4 sm:px-8 lg:px-10">
        {/* Brand Link */}
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center gap-2.5 rounded-xl focus-visible:outline-offset-4"
          aria-label="Thrivefold Home"
          onClick={closeMenu}
        >
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-[12px] transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Thrivefold"
              width={40}
              height={40}
              priority
              className="h-full w-full object-contain rounded-[12px]"
            />
          </span>
          <span className="font-serif text-[1.25rem] sm:text-[1.35rem] font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Thrivefold
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            if (link.isAnchor) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[13px] font-medium text-[var(--ink-secondary)] transition-colors hover:bg-[var(--surface2)] hover:text-[var(--ink)]"
                >
                  {link.label}
                </a>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[13px] font-medium text-[var(--ink-secondary)] transition-colors hover:bg-[var(--surface2)] hover:text-[var(--ink)]"
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="/#beta"
            className="squircle-button inline-flex items-center gap-1.5 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white text-[13px] font-semibold px-4 py-2 sm:min-h-10 sm:px-5"
          >
            <span>Get Beta Access</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-[var(--ink)] transition-colors hover:bg-[var(--surface2)] md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full bg-[var(--surface)] px-5 pb-6 pt-3 md:hidden"
        >
          <div className="mx-auto flex max-w-[720px] flex-col gap-1">
            {NAV_LINKS.map((link) => {
              if (link.isAnchor) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--ink)] hover:bg-[var(--surface2)]"
                  >
                    {link.label}
                  </a>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--ink)] hover:bg-[var(--surface2)]"
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
