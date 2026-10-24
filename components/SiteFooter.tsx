import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-[var(--surface)] text-[var(--ink)] mt-24">
      <div className="bg-[var(--surface2)] px-4 py-4 text-center">
        <p className="text-xs sm:text-sm text-[var(--ink-secondary)]">
          <strong className="text-[var(--terracotta-strong)]">In crisis right now?</strong>{' '}
          Call or text <strong className="text-[var(--ink)]">988</strong> (US and Canada), call{' '}
          <strong className="text-[var(--ink)]">999</strong> or <strong className="text-[var(--ink)]">111</strong> (UK),
          or contact your local emergency services.
        </p>
      </div>

      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-5 space-y-4">
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
              A private health and wellbeing app for daily check-ins, cycle tracking, workouts, meals and small
              support groups. Your records are encrypted on your phone.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              The app
            </span>
            <div className="flex flex-col space-y-2 text-sm text-[var(--ink-secondary)]">
              <a href="/#features" className="hover:text-[var(--terracotta)] transition-colors">Features</a>
              <a href="/#circles" className="hover:text-[var(--terracotta)] transition-colors">Circles</a>
              <a href="/#how" className="hover:text-[var(--terracotta)] transition-colors">How it works</a>
              <a href="/#faq" className="hover:text-[var(--terracotta)] transition-colors">FAQ</a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Legal
            </span>
            <div className="flex flex-col space-y-2 text-sm text-[var(--ink-secondary)]">
              <Link href="/privacy/" className="hover:text-[var(--terracotta)] transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="hover:text-[var(--terracotta)] transition-colors">Terms of Service</Link>
              <a href="/terms/#medical" className="hover:text-[var(--terracotta)] transition-colors">Medical notice</a>
              <a href="/privacy/#your-data" className="hover:text-[var(--terracotta)] transition-colors">Export and delete</a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Beta
            </span>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Testing now on iOS and Android.
            </p>
            <a
              href="/#beta"
              className="squircle-button inline-flex items-center gap-1.5 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white text-xs font-semibold px-4 py-2.5"
            >
              <span>Join the beta</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <p>
            © {new Date().getFullYear()} Thrivefold, made by{' '}
            <a
              href="https://devamit.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink)] hover:text-[var(--terracotta)] font-medium underline underline-offset-2"
            >
              Amit Dev Labs
            </a>
            .
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy/" className="hover:text-[var(--terracotta)] underline underline-offset-2">Privacy</Link>
            <Link href="/terms/" className="hover:text-[var(--terracotta)] underline underline-offset-2">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
