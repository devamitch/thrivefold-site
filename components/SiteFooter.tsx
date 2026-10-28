import Link from 'next/link'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-[var(--surface)] text-[var(--ink)] mt-24">
      {/* Crisis Help Banner */}
      <div className="bg-[var(--surface2)] px-4 py-4 text-center">
        <p className="text-xs sm:text-sm text-[var(--ink-secondary)]">
          <strong className="text-[var(--terracotta-strong)]">In crisis right now?</strong>{' '}
          Call or text <strong className="text-[var(--ink)]">988</strong> (US and Canada), call{' '}
          <strong className="text-[var(--ink)]">999</strong> or <strong className="text-[var(--ink)]">111</strong> (UK),
          or contact your local emergency services. Thrivefold is a wellbeing companion, not an emergency service.
        </p>
      </div>

      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Thrivefold logo"
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-9 w-9 rounded-[10px] object-contain"
              />
              <span className="font-serif text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                Thrivefold
              </span>
            </Link>
            <p className="text-sm text-[var(--ink-secondary)] leading-relaxed max-w-sm">
              Mindful fitness, on-device pose coaching, and holistic vitality. Utilizing Health Connect strictly on-device to inspire self-care without remote cloud health databases.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--sage-subtle)] text-[var(--sage-strong)] text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Google Play Health Apps Compliant</span>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Application
            </span>
            <div className="flex flex-col space-y-2 text-sm text-[var(--ink-secondary)]">
              <a href="/#features" className="hover:text-[var(--terracotta)] transition-colors">Features & Spaces</a>
              <a href="/#screens" className="hover:text-[var(--terracotta)] transition-colors">App Screens & Tour</a>
              <a href="/#inside" className="hover:text-[var(--terracotta)] transition-colors">Pose Coach & Biomechanics</a>
              <a href="/#how" className="hover:text-[var(--terracotta)] transition-colors">How It Works</a>
              <a href="/#faq" className="hover:text-[var(--terracotta)] transition-colors">Frequently Asked Questions</a>
            </div>
          </div>

          {/* Health & Compliance Col */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Privacy &amp; Compliance
            </span>
            <div className="flex flex-col space-y-2 text-sm text-[var(--ink-secondary)]">
              <Link href="/privacy/" className="hover:text-[var(--terracotta)] transition-colors font-medium text-[var(--ink)]">
                Privacy Policy (Step 3)
              </Link>
              <a href="/#health-connect" className="hover:text-[var(--terracotta)] transition-colors">
                Health Connect Justification
              </a>
              <a href="/#permissions" className="hover:text-[var(--terracotta)] transition-colors">
                Permission &amp; Safety Matrix
              </a>
              <Link href="/terms/" className="hover:text-[var(--terracotta)] transition-colors">
                Terms of Service
              </Link>
              <a href="/terms/#medical" className="hover:text-[var(--terracotta)] transition-colors">
                Health &amp; Fitness Notice
              </a>
            </div>
          </div>

          {/* Testing / Beta Col */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Testing Access
            </span>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Active internal testing track on Google Play and TestFlight.
            </p>
            <a
              href="/#beta"
              className="squircle-button inline-flex items-center gap-1.5 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white text-xs font-semibold px-4 py-2.5 transition-colors"
            >
              <span>Join Testing</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <p>
            © {new Date().getFullYear()} Thrivefold. AnvayKosh ecosystem flagship by{' '}
            <a
              href="https://devamit.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink)] hover:text-[var(--terracotta)] font-medium underline underline-offset-2"
            >
              Amit Dev Labs
            </a>
            , Bengaluru, India.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy/" className="hover:text-[var(--terracotta)] underline underline-offset-2 font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-[var(--terracotta)] underline underline-offset-2">
              Terms of Service
            </Link>
            <a href="https://thrivefold.devamit.co.in/privacy" className="hover:text-[var(--terracotta)] underline underline-offset-2">
              thrivefold.devamit.co.in/privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
