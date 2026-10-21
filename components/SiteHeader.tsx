'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { navItems, siteConfig } from '@/lib/site'

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[var(--border)] flex items-center justify-center bg-[var(--surface)] p-1">
            <Image
              src="/favicon.svg"
              alt="Thrivefold Icon"
              width={32}
              height={32}
              className="object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-tight text-[var(--ink)] tracking-tight">
              Thrivefold
            </span>
            <span className="text-[10px] font-mono text-[var(--ink-muted)] tracking-wider uppercase">
              Amit Dev Labs
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/slow-correspondence"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[var(--border)] text-[var(--ink-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--ink)] transition-all bg-[var(--surface)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--rose)]" />
            <span>Slow Letters</span>
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 transition-all"
          >
            <span>Get Thrivefold</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[var(--ink-secondary)] hover:text-[var(--ink)]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border)] bg-[var(--surface)] px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[var(--ink)] py-2 border-b border-[var(--border)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl font-medium text-sm bg-[var(--ink)] text-[var(--bg)]"
            >
              Download App (iOS & Android)
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
