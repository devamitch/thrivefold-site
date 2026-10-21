import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'
import { Heart, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Activity, Calendar, Moon } from 'lucide-react'

export const metadata: Metadata = {
  title: "Women's Health & Cyclical Harmony",
  description: 'Private on-device menstrual cycle tracking, follicular and luteal phase nutrition, basal body temperature logs, and pelvic floor cadence with zero surveillance.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/women-health' },
}

export default function WomenHealthPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Thrivefold Women's Health",
    description: 'On-device menstrual cycle tracking, follicular and luteal phase nutrition intelligence, and basal temperature logs.',
    url: 'https://thrivefold.devamit.co.in/women-health',
    audience: 'Women',
    aspect: ['Diagnostic', 'Lifestyle'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2EE] border border-[#E07A5F]/30 text-xs font-mono uppercase tracking-wider text-[#9B2226] mb-6">
            <Heart className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>Experience A · Hormonal Autonomy & Cyclical Wisdom</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--ink)] mb-6">
            Intimate Rhythms, Safeguarded in Absolute Privacy
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed mb-12 font-light">
            Commercial fertility and period trackers frequently harvest cycle logs and share them with data brokers and ad networks. Thrivefold changes the paradigm: all cycle algorithms, basal body temperature trends, and phase nutrition execute 100% on your device, encrypted in an MMKV hardware vault.
          </p>

          {/* Core Feature Deep-Dives */}
          <div className="space-y-8 mb-16">
            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2EE] flex items-center justify-center text-[#E07A5F]">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  Follicular vs. Luteal Phase Nutrition
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                Your body metabolizes energy differently across each phase. Thrivefold automatically translates your cycle day into actionable macronutrient guidance: high-energy complex carbs during the follicular surge, and magnesium-rich, anti-inflammatory whole foods during the luteal descent.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)]">
                  <span className="font-semibold text-[var(--ink)] block mb-1">Follicular & Ovulatory Surge</span>
                  <span className="text-[var(--ink-secondary)]">Lean proteins, sprouted grains, hydration focus, and strength training optimization.</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)]">
                  <span className="font-semibold text-[var(--ink)] block mb-1">Luteal & Menstrual Descent</span>
                  <span className="text-[var(--ink-secondary)]">Roasted roots, magnesium, restorative movement, and gentle sleep hygiene prompts.</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2EE] flex items-center justify-center text-[#E07A5F]">
                  <Activity className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  Basal Temperature & Pelvic Floor Cadence
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                Log morning Basal Body Temperature (BBT) with tenth-of-a-degree precision to recognize ovulation shifts. Accompanied by gentle, non-intrusive pelvic floor cadence audio cues that run silently without alerting onlookers.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)] font-mono">
                <ShieldCheck className="w-4 h-4 text-[var(--sage)]" />
                <span>Zero telemetry shared · No cloud backup requirement · Hardware Keystore AES-256</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2EE] flex items-center justify-center text-[#E07A5F]">
                  <Moon className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  HarmonyBloom Audio Resonance Continuity
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                Directly connected with Amit Dev Labs' mindfulness engine, <a href="https://aura.devamit.co.in" className="text-[var(--rose)] underline font-medium">HarmonyBloom</a>. Access generative solfeggio audio frequencies, binaural delta beats, and guided cyclic meditations designed specifically for each phase of your month.
              </p>
            </div>
          </div>

          {/* Navigation CTA */}
          <div className="flex items-center justify-between p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] flex-wrap gap-4">
            <div>
              <span className="font-semibold text-sm text-[var(--ink)] block">Ready to experience private cyclical tracking?</span>
              <span className="text-xs text-[var(--ink-secondary)]">Join the closed beta testing program for iOS and Android.</span>
            </div>
            <Link
              href="/beta"
              className="px-6 py-2.5 rounded-full bg-[var(--ink)] text-[var(--bg)] text-xs font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <span>Join Closed Beta</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
