import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'
import { Heart, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Thrivefold & Amit Dev Labs',
  description: 'The philosophy and mission behind Thrivefold: sovereign on-device health telemetry, zero-surveillance architecture, and humane slow correspondence.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/about' },
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[var(--rose)]" />
            <span>Philosophy & Ethos</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--ink)] mb-6">
            Reclaiming Health from Algorithmic Surveillance
          </h1>

          <div className="space-y-6 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed font-light mb-12">
            <p>
              Over the last decade, wellness applications have transitioned from personal tools into data extraction pipelines. Intimate menstrual cycle records, hormonal blood panels, emotional check-ins, and personal reflections are routinely packaged, fingerprinted, and monetized to ad networks and insurance underwriters.
            </p>
            <p>
              Thrivefold was created as a radical alternative. Engineered by <a href={siteConfig.authorUrl} className="underline font-medium text-[var(--ink)]">{siteConfig.author}</a> under the <strong>Amit Dev Labs</strong> umbrella, Thrivefold asks a simple question: <em>What if your health software treated you as an autonomous human being instead of an engagement metric?</em>
            </p>
            <p>
              By combining local-first hardware storage (MMKV + iOS Secure Enclave / Android Keystore), on-device neural processing (ONNX Runtime), and contemplative slow-letter exchanges, Thrivefold offers a peaceful sanctuary where your body’s data belongs solely to you.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card mb-12">
            <h2 className="font-serif text-2xl font-bold text-[var(--ink)] mb-4">Sister Projects in Amit Dev Labs</h2>
            <p className="text-sm text-[var(--ink-secondary)] mb-6">
              Thrivefold is part of a larger ecosystem of privacy-first, local-sovereign engineering projects:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <a href="https://setu.devamit.co.in" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all">
                <span className="font-bold text-sm text-[var(--ink)] block mb-1">Setu P2P</span>
                <span className="text-[var(--ink-secondary)]">Direct offline Wi-Fi & BLE high-speed transfer platform without cloud accounts.</span>
              </a>
              <a href="https://neevsanctuary.devamit.co.in" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all">
                <span className="font-bold text-sm text-[var(--ink)] block mb-1">Neev Sanctuary</span>
                <span className="text-[var(--ink-secondary)]">The modern multi-generational Indian joint family operating system.</span>
              </a>
              <a href="https://blinkquest.devamit.co.in" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all">
                <span className="font-bold text-sm text-[var(--ink)] block mb-1">BlinkQuest</span>
                <span className="text-[var(--ink-secondary)]">Privacy-first eye wellness platform with on-device computer vision.</span>
              </a>
              <a href="https://devamit.co.in" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all">
                <span className="font-bold text-sm text-[var(--ink)] block mb-1">Amit Systems Build</span>
                <span className="text-[var(--ink-secondary)]">The core engineering hub and open-source systems architecture portfolio.</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
