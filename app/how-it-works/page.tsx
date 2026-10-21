import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'
import { Cpu, Lock, Database, ArrowRight, ShieldCheck, RefreshCw, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'System Architecture & Technical Foundations',
  description: 'Deep dive into Thrivefold architecture: React Native Expo 55, MMKV hardware encryption, on-device ONNX classifiers, and zero-knowledge synchronization.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/how-it-works' },
}

export default function HowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Local Client Sandbox',
      desc: 'Written in TypeScript on Expo SDK 55 with React Native New Architecture (Fabric + TurboModules). Every UI interaction and health record write operates strictly inside the sandbox memory.',
    },
    {
      num: '02',
      title: 'MMKV Hardware Encryption',
      desc: 'Data persistence uses Tencent MMKV wrapped with AES-256-GCM keys stored directly in iOS Secure Enclave (Keychain) and Android Keystore. Data remains encrypted at rest.',
    },
    {
      num: '03',
      title: 'On-Device Neural Execution',
      desc: 'Machine learning classifiers for cycle inference and sentiment card categorization run via ONNX Runtime using CoreML / NNAPI. The model runs locally without internet connectivity.',
    },
    {
      num: '04',
      title: 'Zero-Knowledge Asynchronous Relay',
      desc: 'For postal letter delivery, messages are encrypted with the recipient’s public key. The transit server routes opaque binary blobs and cannot inspect contents or metadata.',
    },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-6">
            <Cpu className="w-3.5 h-3.5 text-[var(--sage)]" />
            <span>Architecture & Engineering Specs</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--ink)] mb-6">
            Technical Architecture & Privacy Guarantees
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed mb-12 font-light">
            Thrivefold is built on the tenet that privacy cannot rely on policy promises alone — it must be enforced by architecture. We eliminate surveillance by ensuring the server possesses neither raw data nor keys.
          </p>

          <div className="space-y-6 mb-16">
            {steps.map((s, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card flex flex-col sm:flex-row gap-6 items-start">
                <span className="font-mono text-2xl font-bold text-[var(--rose)] shrink-0 sm:pt-1">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--ink)] mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-[var(--surface2)] border border-[var(--border)] mb-12">
            <h3 className="font-serif text-xl font-bold text-[var(--ink)] mb-3">Ecosystem Synergy</h3>
            <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
              Thrivefold is a member of the Amit Dev Labs distributed software suite. It shares encryption foundations with <a href="https://setu.devamit.co.in" className="underline font-medium text-[var(--ink)]">Setu P2P</a>, visual grounding with <a href="https://blinkquest.devamit.co.in" className="underline font-medium text-[var(--ink)]">BlinkQuest</a>, and sensory mindfulness with <a href="https://aura.devamit.co.in" className="underline font-medium text-[var(--ink)]">HarmonyBloom</a>.
            </p>
          </div>

          <div className="flex items-center justify-between p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex-wrap gap-4">
            <div>
              <span className="font-semibold text-sm text-[var(--ink)] block">Want to inspect the code or test builds?</span>
              <span className="text-xs text-[var(--ink-secondary)]">Explore the repository or join our beta testers.</span>
            </div>
            <Link
              href="/beta"
              className="px-6 py-2.5 rounded-full bg-[var(--ink)] text-[var(--bg)] text-xs font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <span>Get Beta Builds</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
