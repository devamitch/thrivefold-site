'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const PRIMARY_NAV = [
  { href: '/#features', label: 'Features' },
  { href: '/#screens', label: 'Screens' },
  { href: '/#health-connect', label: 'Health Connect' },
  { href: '/#ecosystem', label: 'AnvayKosh' },
  { href: '/download', label: 'Download APK' },
]

const SECONDARY_NAV = [
  { href: '/beta', label: 'Join Beta' },
  { href: '/#permissions', label: 'Permissions' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/privacy/', label: 'Privacy Policy' },
  { href: '/terms/', label: 'Terms' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-[var(--bg,#faf7f2)]/90 backdrop-blur-md' : 'bg-[var(--bg,#faf7f2)]'
      }`}
    >
      <div className="mx-auto flex h-[64px] sm:h-[70px] w-full max-w-[1240px] items-center justify-between px-4 sm:px-8 lg:px-10">
        {/* Brand */}
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2.5 rounded-2xl transition-opacity hover:opacity-90"
          onClick={closeMenu}
          aria-label="Thrivefold home"
        >
          <img
            src="/logo.png"
            alt="Thrivefold"
            width={36}
            height={36}
            decoding="async"
            className="h-9 w-9 rounded-xl object-contain bg-white"
          />
          <div className="flex flex-col text-left">
            <span className="font-serif text-[1.25rem] sm:text-[1.35rem] font-semibold tracking-tight text-[var(--ink,#191918)] leading-none">
              Thrivefold
            </span>
            <span className="text-[10px] font-medium text-[var(--terracotta,#d77259)] tracking-wider uppercase mt-0.5">
              Mindful Health
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Centered Aesthetic Pill, No Borders, No Shadows */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-1 bg-[var(--surface2,#eae4dc)]/60 px-2 py-1.5 rounded-full"
        >
          {PRIMARY_NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-[var(--ink-secondary,#5c584e)] transition-colors hover:text-[var(--ink,#191918)] hover:bg-[var(--surface,#ffffff)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/beta"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--terracotta,#d77259)] hover:bg-[var(--terracotta-hover,#c25f47)] text-white text-[13px] font-semibold px-4 py-2 transition-all active:scale-[0.98]"
          >
            <span>Beta Access</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-[var(--ink,#191918)] bg-[var(--surface2,#eae4dc)] hover:bg-[var(--surface3,#cdc7b7)] transition-colors md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel - Floating Clean Squircle, Zero Shadows, Zero Borders */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-[72px] z-50 rounded-3xl bg-[var(--surface,#ffffff)] p-5 transition-all md:hidden">
          <div className="flex flex-col gap-1">
            <div className="text-[11px] font-semibold text-[var(--terracotta,#d77259)] uppercase tracking-wider px-4 py-1">
              Navigation
            </div>
            {PRIMARY_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-2.5 text-sm font-semibold text-[var(--ink,#191918)] hover:bg-[var(--surface2,#eae4dc)] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="text-[11px] font-semibold text-[var(--ink-secondary,#5c584e)] uppercase tracking-wider px-4 pt-3 pb-1">
              Resources &amp; Testing
            </div>
            {SECONDARY_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-2.5 text-sm font-medium text-[var(--ink-secondary,#5c584e)] hover:bg-[var(--surface2,#eae4dc)] hover:text-[var(--ink,#191918)] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-1 flex flex-col gap-2">
              <Link
                href="/beta"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--terracotta,#d77259)] py-3 text-sm font-semibold text-white"
              >
                <span>Join Google Play Beta</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/download"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--surface2,#eae4dc)] py-3 text-sm font-semibold text-[var(--ink,#191918)]"
              >
                <span>Download APK Directly</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
