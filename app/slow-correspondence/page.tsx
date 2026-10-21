import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { LetterComposerDemo } from '@/components/LetterComposerDemo'
import Link from 'next/link'
import { Mail, Clock, ShieldAlert, ArrowRight, Stamp, Users, Ban } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Slow Correspondence & Pen-Pal Postal Letters',
  description: 'Contemplative, distance-delayed letter exchange. Card and chip-only composer prevents toxic unstructured chat, phone number sharing, and predatory algorithms.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/slow-correspondence' },
}

export default function SlowCorrespondencePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-6">
            <Mail className="w-3.5 h-3.5 text-[var(--rose)]" />
            <span>Intentional Communication Architecture</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--ink)] mb-6">
            Letters Written with Care, Delivered with Patience
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed mb-12 font-light">
            Instant messaging apps have engineered an anxiety epidemic: read receipts, typing bubbles, and algorithmic dopamine hooks that degrade humane connection. Thrivefold re-introduces the grace of the postal letter — asynchronous, distance-delayed, and entirely chip-composed.
          </p>

          {/* Three Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface2)] flex items-center justify-center text-[var(--rose)] mb-4">
                <Stamp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[var(--ink)] mb-2">Chip-Only Composer</h3>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Letters are constructed strictly from vetted sentiment cards, health reflections, and poetic inquiries. Freeform text is disabled, rendering toxic insults, spam, and unsolicited phone harvesting technically impossible.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface2)] flex items-center justify-center text-[var(--sage)] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[var(--ink)] mb-2">Distance-Delayed Delivery</h3>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Letters travel at simulated postal speeds based on geographical distance (4 to 48 hours). The anticipation of arrival restores value and contemplative appreciation to every message received.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface2)] flex items-center justify-center text-[var(--amethyst)] mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[var(--ink)] mb-2">Zero-Trust Safety & Isolation</h3>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Strict 18+ adult age assurance is mandated for all correspondence. Cohorts under 25 are placed in a 7-day restricted trial with a 1 intro/day quota and complete quarantine from open directories.
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Simulator */}
        <LetterComposerDemo />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card text-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-3">
              Experience the Return to Calmer Words
            </h3>
            <p className="text-sm text-[var(--ink-secondary)] max-w-xl mx-auto mb-6">
              Download Thrivefold on iOS TestFlight or Android APK and receive your first welcome letter from the founding community.
            </p>
            <Link
              href="/beta"
              className="px-8 py-3 rounded-full bg-[var(--ink)] text-[var(--bg)] font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <span>Request TestFlight Invite</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
