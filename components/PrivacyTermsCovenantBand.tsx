import Link from 'next/link'
import { AlertCircle, ArrowUpRight, Lock, Scale } from 'lucide-react'

const CARDS = [
  {
    icon: Lock,
    title: 'Privacy Policy',
    text: 'What Thrivefold stores, where it is stored, and how to export or delete it.',
    href: '/privacy/',
    cta: 'Read the privacy policy',
  },
  {
    icon: Scale,
    title: 'Terms of Service',
    text: 'The rules for using the app and taking part in circles.',
    href: '/terms/',
    cta: 'Read the terms',
  },
  {
    icon: AlertCircle,
    title: 'Medical notice',
    text: 'Thrivefold is a wellbeing tool, not medical care. In a crisis, call or text 988 (US and Canada) or your local emergency number.',
    href: '/terms/#medical',
    cta: 'Read the notice',
  },
]

export function PrivacyTermsCovenantBand() {
  return (
    <section id="legal" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          The fine print
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Plain terms, <span className="italic text-[var(--terracotta)]">clearly written.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1140px] mx-auto text-left">
        {CARDS.map((c) => {
          const Icon = c.icon
          return (
            <div key={c.title} className="squircle-card p-7 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)]">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)]">{c.title}</h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">{c.text}</p>
              </div>
              <div className="pt-6">
                <Link
                  href={c.href}
                  className="squircle-button inline-flex items-center gap-2 bg-[var(--surface2)] hover:bg-[var(--terracotta)] hover:text-white text-[var(--ink)] text-xs font-semibold px-4 py-2.5 transition-colors"
                >
                  <span>{c.cta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
