import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'
import { Sparkles, ShieldCheck, ArrowRight, Lock, Syringe, HeartHandshake, EyeOff } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pride & LGBTQ+ Wellbeing Haven',
  description: 'Private on-device affirming health space. Hormone replacement therapy (HRT) schedule and dosage reminders, injection site rotation maps, and discreet panic lock.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/pride-wellbeing' },
}

export default function PrideWellbeingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Thrivefold Pride & LGBTQ+ Wellbeing',
    description: 'On-device gender-affirming care milestones, HRT schedule tracking, injection site rotation, and safe identity grounding.',
    url: 'https://thrivefold.devamit.co.in/pride-wellbeing',
    audience: 'LGBTQ+ Community',
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#7209B7]/30 text-xs font-mono uppercase tracking-wider text-[#4A0E4E] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#7209B7]" />
            <span>Experience C · Affirming Care & Identity Milestone Haven</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--ink)] mb-6">
            An Affirming, Unconditionally Private Sanctuary
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed mb-12 font-light">
            Gender-affirming healthcare records are among the most sensitive personal data a human can hold. In an era of increasing surveillance, Thrivefold Experience C is engineered from the ground up to protect your dignity: local biometric locking, alias masking, and dedicated tooling for hormone therapy and surgical milestones.
          </p>

          {/* Core Feature Deep-Dives */}
          <div className="space-y-8 mb-16">
            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#7209B7]">
                  <Syringe className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  HRT Schedule Alarms & Injection Site Rotation Map
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                Never miss an estradiol, testosterone, or progesterone dose. Thrivefold provides dedicated scheduling calibrated for oral, transdermal patch, gel, and subcutaneous/intramuscular injection cadences — including a visual 8-zone body rotation map to prevent scar tissue buildup.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)]">
                  <span className="font-semibold text-[var(--ink)] block mb-1">Visual Injection Site Tracker</span>
                  <span className="text-[var(--ink-secondary)]">Thigh, abdomen, and glute quadrant rotation tracking with recovery resting intervals.</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)]">
                  <span className="font-semibold text-[var(--ink)] block mb-1">Serum Lab Work Milestones</span>
                  <span className="text-[var(--ink-secondary)]">Log total & free testosterone, estradiol, and CBC blood test results over time.</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#7209B7]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  Surgical Healing & Dysphoria Grounding Tools
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                Track post-operative recovery milestones (top surgery, bottom surgery, facial confirmation) with safe encrypted photo notes that never sync to Apple/Google cloud photo libraries. In moments of dysphoria, tap single-chip grounding exercises designed with affirming psychologists.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)] font-mono">
                <ShieldCheck className="w-4 h-4 text-[var(--sage)]" />
                <span>Zero telemetry shared · End-to-end local biometric vault · No public identity link</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#7209B7]">
                  <EyeOff className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  One-Tap Panic Lock & Alias Masking
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                If someone asks to see your phone, a double-tap gesture instantly locks all affirming records and switches the active screen to an innocuous neutral notepad, ensuring complete peace of mind anywhere in the world.
              </p>
            </div>
          </div>

          {/* Navigation CTA */}
          <div className="flex items-center justify-between p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] flex-wrap gap-4">
            <div>
              <span className="font-semibold text-sm text-[var(--ink)] block">Claim your affirming private health sanctuary.</span>
              <span className="text-xs text-[var(--ink-secondary)]">Available in closed beta testing for iOS and Android.</span>
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
