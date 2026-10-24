import Link from 'next/link'
import { Lock, Scale, AlertCircle, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react'

export function PrivacyTermsCovenantBand() {
  return (
    <section id="covenant" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Sovereign Covenant
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Transparent terms. <span className="italic text-[var(--terracotta)]">Uncompromising privacy.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          We believe true health requires absolute legal and cryptographic sovereignty. Review our foundational covenants and safety protocols.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1140px] mx-auto text-left">
        {/* Card 1: Privacy Policy */}
        <div className="squircle-card p-7 sm:p-8 bg-white flex flex-col justify-between border border-[var(--border)]">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--terracotta)] block">
                Local-First Covenant
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mt-1">
                Privacy Policy
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
              Explore our 7-section local sovereignty architecture: zero cloud storage for reproductive cycles, in-memory MediaPipe pose processing, zero ad trackers, and 1-tap instant purge.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/privacy"
              className="squircle-button inline-flex items-center gap-2 bg-[var(--surface2)] hover:bg-[var(--terracotta)] hover:text-white text-[var(--ink)] text-xs font-semibold px-4 py-2.5 transition-all"
            >
              <span>Read Privacy Policy</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 2: Terms of Service */}
        <div className="squircle-card p-7 sm:p-8 bg-white flex flex-col justify-between border border-[var(--border)]">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
                Community Rules
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mt-1">
                Terms of Service
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
              Learn about our strict 18+ adult age assurance gate, under-25 7-day introductory trial shield, chip-only correspondence anti-harassment rules, and transparent subscription terms.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/terms"
              className="squircle-button inline-flex items-center gap-2 bg-[var(--surface2)] hover:bg-[var(--terracotta)] hover:text-white text-[var(--ink)] text-xs font-semibold px-4 py-2.5 transition-all"
            >
              <span>Read Terms of Service</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 3: Crisis & Medical Notice */}
        <div className="squircle-card p-7 sm:p-8 bg-white flex flex-col justify-between border border-[var(--border)]">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--sage-strong)] block">
                Safety &amp; Support
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mt-1">
                Crisis &amp; Care Disclaimer
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
              Thrivefold is an intentional lifestyle companion and not a clinical diagnostic tool. If you are experiencing acute distress, access immediate 24/7 crisis hotlines (988 in US/CA).
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/terms#emergency"
              className="squircle-button inline-flex items-center gap-2 bg-[var(--surface2)] hover:bg-[var(--terracotta)] hover:text-white text-[var(--ink)] text-xs font-semibold px-4 py-2.5 transition-all"
            >
              <span>View Crisis Protocols</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
