import { ArrowRight, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const MAILTO = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
  'Thrivefold beta',
)}&body=${encodeURIComponent('Hi, I would like to join the Thrivefold beta.\n\nPhone (iOS or Android): ')}`

export function BetaSignupSection() {
  return (
    <section id="beta" className="scroll-mt-24">
      <div className="squircle-card p-8 sm:p-14 max-w-[940px] mx-auto text-center">
        <div className="max-w-[620px] mx-auto space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--terracotta)] block">
            Beta
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
            Try Thrivefold <span className="italic text-[var(--terracotta)]">before launch.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            We are inviting a small group of testers on iOS (TestFlight) and Android. Send us an email with the
            phone you use and we will reply with an invite when a place opens.
          </p>
          <div className="flex flex-col items-center gap-3 pt-2">
            <a
              href={MAILTO}
              className="squircle-button inline-flex items-center justify-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-7 py-3.5 text-sm font-semibold"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Email to join the beta</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <span className="text-xs text-[var(--ink-muted)]">{siteConfig.contactEmail}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
