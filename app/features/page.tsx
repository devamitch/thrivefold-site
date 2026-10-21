import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'
import { CheckCircle2, Shield, Cpu, Lock, Sparkles, Send, Database, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features & Technical Capabilities',
  description: 'Complete breakdown of Thrivefold local-first features: MMKV hardware-encrypted vault, on-device AI classifiers, three dedicated health experiences, and slow correspondence.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/features' },
}

export default function FeaturesPage() {
  const featuresList = [
    {
      category: 'Privacy & Security',
      items: [
        'Hardware Keystore AES-256-GCM encryption for all MMKV records',
        'Biometric authentication (Face ID, Touch ID, Android BiometricPrompt)',
        'Zero-knowledge relay synchronization with end-to-end encrypted hashes',
        'One-tap panic lock gesture concealing affirming records behind a neutral notepad',
        'Zero tracking pixels, third-party analytics SDKs, or data broker sales',
      ],
    },
    {
      category: 'Three Sovereign Spaces',
      items: [
        'Women: Menstrual cycle & ovulation day prediction without cloud leaks',
        'Women: Follicular vs. Luteal phase macronutrient planning and guidance',
        'Women: Basal Body Temperature (BBT) log & silent pelvic floor cadence timer',
        'Men: Morning circadian sunlight timing based on local sunrise angles',
        'Men: Endocrine habit tracking, VO2 max progression, and cold recovery minutes',
        'Men: Stoic reflection chips without competitive dopamine leaderboards',
        'Pride: HRT dosing schedules with 8-zone visual injection site rotation map',
        'Pride: Surgical healing progress notes & affirming dysphoria grounding chips',
      ],
    },
    {
      category: 'Slow Correspondence',
      items: [
        'Chip-only letter composer preventing unstructured spam or harassment',
        'Simulated postal delivery delay based on physical geographic distance',
        'Pseudonymous pen-pal discovery based on shared health interests',
        'Strict 18+ adult age assurance mandated for all social interaction',
        '7-day restricted trial for under-25 cohorts with strict 1 intro/day quota',
      ],
    },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[var(--rose)]" />
            <span>Product Specifications</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--ink)] mb-6">
            Engineered for Sovereignty & Intentionality
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed mb-12 font-light">
            Every screen, algorithm, and byte in Thrivefold is designed with an uncompromising ethical compass. Here is the comprehensive feature index of the platform.
          </p>

          <div className="space-y-10 mb-16">
            {featuresList.map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)] mb-4">{f.category}</h2>
                <ul className="space-y-3">
                  {f.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[var(--ink-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--sage)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] flex-wrap gap-4">
            <div>
              <span className="font-semibold text-sm text-[var(--ink)] block">Experience these features firsthand.</span>
              <span className="text-xs text-[var(--ink-secondary)]">Request access to the closed beta program today.</span>
            </div>
            <Link
              href="/beta"
              className="px-6 py-2.5 rounded-full bg-[var(--ink)] text-[var(--bg)] text-xs font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <span>Request Access</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
