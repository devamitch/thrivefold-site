import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'
import { Activity, Sun, ShieldCheck, ArrowRight, Zap, BatteryCharging, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: "Men's Health & Endocrine Fortitude",
  description: 'Private on-device testosterone support telemetry, circadian sunlight exposure pacing, VO2 max progression, and stoic mental grounding chips.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/men-health' },
}

export default function MenHealthPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: "Thrivefold Men's Health",
    description: 'On-device testosterone support telemetry, circadian sunlight timing, VO2 max tracking, and stoic reflection.',
    url: 'https://thrivefold.devamit.co.in/men-health',
    audience: 'Men',
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5EE] border border-[#52B788]/30 text-xs font-mono uppercase tracking-wider text-[#1B4332] mb-6">
            <Activity className="w-3.5 h-3.5 text-[#52B788]" />
            <span>Experience B · Endocrine Grounding & Physical Fortitude</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--ink)] mb-6">
            Physical Resilience Without Predatory Feeds
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed mb-12 font-light">
            Modern fitness apps flood men with aggressive push notifications, toxic social leaderboards, and subscription paywalls. Thrivefold Experience B strips away the noise to deliver pure physiological fundamentals: circadian sun timing, endocrine habit support, and calm stoic accountability.
          </p>

          {/* Core Feature Deep-Dives */}
          <div className="space-y-8 mb-16">
            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5EE] flex items-center justify-center text-[#52B788]">
                  <Sun className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  Circadian Sun Exposure & Sleep Architecture
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                Natural morning sunlight triggers cortisol timing and sets your nighttime melatonin timer. Thrivefold calculates the optimal lux window based on your local sunrise coordinates, tracking 10–20 minute outdoor exposure without collecting GPS tracks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)]">
                  <span className="font-semibold text-[var(--ink)] block mb-1">Morning Photoperiod Timer</span>
                  <span className="text-[var(--ink-secondary)]">Calculated optimal blue-wavelength sunlight absorption for natural dopamine calibration.</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)]">
                  <span className="font-semibold text-[var(--ink)] block mb-1">Wind-Down Dark Window</span>
                  <span className="text-[var(--ink-secondary)]">Gentle twilight notification prompting red-spectrum night lighting and digital detox.</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5EE] flex items-center justify-center text-[#52B788]">
                  <Zap className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  Endocrine Habits & VO2 Max Progression
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                Monitor the four pillars of natural testosterone and cardiovascular resilience: heavy compound load frequency, cold immersion recovery minutes, dietary zinc/magnesium intake, and weekly aerobic threshold progression.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)] font-mono">
                <ShieldCheck className="w-4 h-4 text-[var(--sage)]" />
                <span>On-device telemetry · Zero third-party ad pixels · Hardware Keystore encryption</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5EE] flex items-center justify-center text-[#52B788]">
                  <Compass className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  Stoic Reflection Chips & Mental Grounding
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                Replace empty social scrolling with single-chip stoic reflections. Prompt yourself on daily obstacles, accountability, and gratitude — recorded strictly into your offline vault without public peer comparison.
              </p>
            </div>
          </div>

          {/* Navigation CTA */}
          <div className="flex items-center justify-between p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] flex-wrap gap-4">
            <div>
              <span className="font-semibold text-sm text-[var(--ink)] block">Step into focused men’s health telemetry.</span>
              <span className="text-xs text-[var(--ink-secondary)]">Download the closed test release for Android and iOS.</span>
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
