import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for utilizing the Thrivefold health and slow correspondence platform.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/terms' },
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-12 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] mb-4">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-[var(--ink-muted)] mb-8">
            Last Updated: October 2026 · Effective Immediately
          </p>

          <div className="space-y-8 text-sm text-[var(--ink-secondary)] leading-relaxed">
            <section className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <h2 className="font-serif text-xl font-bold text-[var(--ink)] mb-3">1. Medical Disclaimer</h2>
              <p>
                Thrivefold is a personal health tracking, reflection, and correspondence tool. It does not provide medical diagnoses, clinical treatment plans, or emergency triage. Always consult a qualified medical professional for health emergencies or clinical decisions.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <h2 className="font-serif text-xl font-bold text-[var(--ink)] mb-3">2. 18+ Age Assurance for Social Features</h2>
              <p>
                Participation in the Slow Correspondence pen-pal subsystem requires you to be at least 18 years of age. By activating pen-pal discovery, you represent and warrant that you meet this age requirement.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <h2 className="font-serif text-xl font-bold text-[var(--ink)] mb-3">3. Code of Conduct & Chip Integrity</h2>
              <p>
                Any attempt to bypass chip-only composer constraints, reverse-engineer encryption handshakes, harvest user aliases, or inject malicious payloads will result in immediate client termination.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <h2 className="font-serif text-xl font-bold text-[var(--ink)] mb-3">4. Limitation of Liability</h2>
              <p>
                Thrivefold and Amit Dev Labs provide the software &ldquo;as is&rdquo; without warranties of any kind. We are not liable for data loss caused by hardware theft, unbacked device wipes, or third-party operating system updates.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
