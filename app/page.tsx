import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import { SiteHeader } from '@/components/SiteHeader'
import { HeroSection } from '@/components/HeroSection'
import { ThreeSpacesBento } from '@/components/ThreeSpacesBento'
import { LetterComposerDemo } from '@/components/LetterComposerDemo'
import { LocalAiArchitecture } from '@/components/LocalAiArchitecture'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'
import { ArrowUpRight, Sparkles, Smartphone, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
        <HeroSection />
        <ThreeSpacesBento />
        <LetterComposerDemo />
        <LocalAiArchitecture />

        {/* Global Beta & Download Banner */}
        <section className="w-full py-16 sm:py-24 border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[var(--rose)]" />
              <span>Available for Closed Beta Testing</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mb-4">
              Step Into Sovereign Health & Calm Letters
            </h2>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed max-w-2xl mx-auto mb-8">
              Experience the harmony of Women’s, Men’s, and Pride health telemetry backed by zero-surveillance local architecture and contemplative pen-pal letters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/download"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Download Early Release</span>
              </Link>
              <Link
                href="/beta"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm border border-[var(--border)] bg-[var(--surface2)] hover:border-[var(--border-strong)] text-[var(--ink)] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Closed Beta Access</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
