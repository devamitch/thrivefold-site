'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight, Sparkles, Activity, ShieldCheck, HeartPulse } from 'lucide-react'
import { navItems, siteConfig } from '@/lib/site'

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[var(--border)] flex items-center justify-center bg-[var(--surface)] p-1 shadow-xs transition-transform group-hover:scale-105">
            <Image
              src="/favicon.svg"
              alt="Thrivefold Therapy Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-tight text-[var(--ink)] tracking-tight">
              Thrivefold
            </span>
            <span className="text-[10px] font-mono text-[var(--ink-muted)] tracking-wider uppercase">
              Sovereign Therapy OS
            </span>
          </div>
        </a>

        {/* Desktop Nav (Anchors for Single Page) */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors py-1 hover:border-b hover:border-[var(--sage)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#tracker"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[var(--border)] text-[var(--ink-secondary)] hover:border-[var(--sage)] hover:text-[var(--sage)] transition-all bg-[var(--surface)] interactive-btn"
          >
            <Activity className="w-3.5 h-3.5 text-[var(--sage)]" />
            <span>Live Tracker</span>
          </a>
          <a
            href="#beta"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 transition-all shadow-xs interactive-btn"
          >
            <span>Early Access</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg text-[var(--ink-secondary)] hover:text-[var(--ink)] interactive-btn"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-[var(--border)] bg-[var(--surface)] px-4 py-6 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[var(--ink)] py-2 border-b border-[var(--border)] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[var(--ink-muted)]">→</span>
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#tracker"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl font-medium text-xs border border-[var(--border)] bg-[var(--surface2)] text-[var(--ink)]"
            >
              Test Live Therapy Tracker
            </a>
            <a
              href="#beta"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl font-semibold text-xs bg-[var(--ink)] text-[var(--bg)]"
            >
              Request iOS / Android Beta Invite
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
