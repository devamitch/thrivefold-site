import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2, Mail, Smartphone, Users } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const MAILTO = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
  'Thrivefold beta',
)}&body=${encodeURIComponent('Hi, I would like to join the Thrivefold beta.\n\nPhone (iOS or Android): ')}`

const STEPS = [
  {
    step: '1',
    title: 'Join Google Group',
    desc: 'Google Play requires beta testers to belong to an approved Google Group.',
    action: 'Join Group',
    href: siteConfig.googleGroupUrl,
    icon: Users,
  },
  {
    step: '2',
    title: 'Accept Beta Invite',
    desc: 'Opt-in to the closed test on Google Play and become an authorized tester.',
    action: 'Become Tester',
    href: siteConfig.playStoreBetaUrl,
    icon: CheckCircle2,
  },
  {
    step: '3',
    title: 'Install from Google Play',
    desc: 'Download Thrivefold directly from Google Play Store to your phone.',
    action: 'Install App',
    href: siteConfig.playStoreUrl,
    icon: Smartphone,
  },
]

export function BetaSignupSection() {
  return (
    <section id="beta" className="scroll-mt-24">
      <div className="squircle-card p-8 sm:p-14 max-w-[1000px] mx-auto text-center">
        <div className="max-w-[760px] mx-auto space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--terracotta)] block">
            Google Play Beta Program
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
            Try Thrivefold <span className="italic text-[var(--terracotta)]">on your phone.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Thrivefold is available for Android testers on Google Play. Follow the 3 simple steps below
            using the Gmail account linked to your Play Store.
          </p>

          {/* 3 Step Quick Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-2">
            {STEPS.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.step}
                  className="rounded-2xl border border-[var(--border-subtle,#e7e5e4)] bg-white p-5 flex flex-col justify-between shadow-xs hover:border-[var(--terracotta)] transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-full bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)] text-xs font-bold flex items-center justify-center">
                        {s.step}
                      </span>
                      <Icon className="w-4 h-4 text-[var(--ink-muted)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--ink)]">{s.title}</h3>
                      <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle,#e7e5e4)] mt-4">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--terracotta)] hover:underline"
                    >
                      <span>{s.action}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Direct CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="squircle-button inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-black text-white px-6 py-3.5 text-sm font-semibold shadow-sm"
            >
              <Smartphone className="w-4 h-4" />
              <span>Open on Google Play</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.playStoreBetaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="squircle-button inline-flex items-center justify-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-6 py-3.5 text-sm font-semibold shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Accept Beta Invite</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/beta"
              className="squircle-button inline-flex items-center justify-center gap-2 bg-[var(--surface2)] hover:bg-white text-[var(--ink)] px-5 py-3.5 text-sm font-medium transition-colors"
            >
              <span>Full Beta Guide &amp; All Apps</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-2 text-xs text-[var(--ink-muted)] flex flex-wrap items-center justify-center gap-3">
            <span>Package: <code className="font-mono text-[var(--ink)]">{siteConfig.appPackage}</code></span>
            <span>·</span>
            <span>Need iOS TestFlight? <a href={MAILTO} className="text-[var(--terracotta)] hover:underline">Email us for invite</a></span>
          </div>
        </div>
      </div>
    </section>
  )
}
