import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'
import { ShieldCheck, Lock, AlertTriangle, ArrowRight, UserCheck, ShieldAlert } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zero-Trust Safety & Policy Engine',
  description: 'Thrivefold zero-trust safety architecture: 18+ adult age assurance, 7-day restricted correspondence trial for under-25 cohorts, and deterministic on-device policy classification.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/security' },
}

export default function SecurityPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--sage)]" />
            <span>Zero-Trust Policy Specifications</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--ink)] mb-6">
            Safety Enforced by Code, Not Empty Community Guidelines
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed mb-12 font-light">
            Most social applications rely on reactive moderation after abuse or grooming occurs. Thrivefold adopts a zero-trust model: we structure interactions so harmful patterns cannot be initiated in the first place.
          </p>

          <div className="space-y-8 mb-16">
            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface2)] flex items-center justify-center text-[var(--rose)]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  18+ Adult Age Assurance Requirement
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                While individual health tracking features remain locally accessible, all correspondence features, pen-pal discoveries, and letter exchanges strictly require adult age assurance. Minors are barred from participating in social exchanges.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface2)] flex items-center justify-center text-[var(--sage)]">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  7-Day Under-25 Restricted Trial & Isolation Quota
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                Users aged 18 to 24 entering correspondence are automatically placed into a 7-day observation sandbox. During this period:
              </p>
              <ul className="space-y-2 text-xs text-[var(--ink-secondary)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" />
                  <span>Maximum of 1 introduction letter per 24 hours.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" />
                  <span>Complete quarantine and invisibility from open community pen-pal directories.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" />
                  <span>Only mutually accepted replies can continue after the initial greeting arrives.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface2)] flex items-center justify-center text-[var(--amethyst)]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  Founder Review Hold Status
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                As documented in the master product spec, any controversial, sensitive religious, or high-risk cohort policy modifications are locked in an explicit <code className="px-2 py-0.5 rounded bg-[var(--surface2)] text-xs font-mono">REVIEW_REQUIRED</code> status pending formal human architectural review.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] flex-wrap gap-4">
            <div>
              <span className="font-semibold text-sm text-[var(--ink)] block">Read our full privacy manifesto</span>
              <span className="text-xs text-[var(--ink-secondary)]">Discover our zero-surveillance legal commitments.</span>
            </div>
            <Link
              href="/privacy"
              className="px-6 py-2.5 rounded-full bg-[var(--ink)] text-[var(--bg)] text-xs font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <span>Read Privacy Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
