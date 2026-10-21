import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { ShieldCheck, Lock, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy & Zero-Knowledge Architecture',
  description: 'Thrivefold uncompromising privacy policy: 100% on-device data storage, zero ad networks, zero analytics trackers, and cryptographic isolation.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-12 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--sage)]" />
            <span>Zero-Knowledge Privacy Commitment</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[var(--ink-muted)] mb-8">
            Last Updated: October 2026 · Effective Immediately
          </p>

          <div className="space-y-8 text-sm text-[var(--ink-secondary)] leading-relaxed">
            <section className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <h2 className="font-serif text-xl font-bold text-[var(--ink)] mb-3">1. Fundamental Principle</h2>
              <p>
                Thrivefold operates on a local-first, zero-surveillance architecture. We do not collect, store, transmit, or monetize your personal health data, menstrual cycle records, hormonal dosages, stoic reflections, or personal notes. Your phone is your personal datacenter.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <h2 className="font-serif text-xl font-bold text-[var(--ink)] mb-3">2. On-Device Storage & Encryption</h2>
              <p>
                All records are written into an MMKV binary store on your local filesystem, protected with AES-256-GCM cryptographic keys maintained inside the iOS Secure Enclave or Android Keystore. Data is inaccessible to third-party apps and cannot be read without biometric authorization.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <h2 className="font-serif text-xl font-bold text-[var(--ink)] mb-3">3. Slow Correspondence Relays</h2>
              <p>
                When you exchange slow letters with a pen-pal, messages are encrypted end-to-end with the recipient’s public key. The relay server routes opaque encrypted payloads and does not possess private keys, identity mappings, or the ability to inspect letter content.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <h2 className="font-serif text-xl font-bold text-[var(--ink)] mb-3">4. Third-Party Trackers & Ads</h2>
              <p>
                Thrivefold contains zero Facebook, Google, Adjust, AppsFlyer, or other advertising trackers. We do not sell data to insurers, data brokers, or research conglomerates.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <h2 className="font-serif text-xl font-bold text-[var(--ink)] mb-3">5. Contact & Data Deletion</h2>
              <p>
                Because all data is stored on-device, deleting the application permanently and irreversibly purges your data from your hardware. For questions, contact <a href="mailto:amit@devamit.co.in" className="underline text-[var(--ink)] font-medium">amit@devamit.co.in</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
