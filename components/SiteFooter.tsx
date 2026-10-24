import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShieldCheck, ArrowUpRight, Lock, Scale, FileText } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-white text-[var(--ink)] mt-24">
      {/* 24/7 Crisis Support Bar */}
      <div className="bg-[var(--surface2)] px-4 py-4 text-center">
        <p className="text-xs sm:text-sm text-[var(--ink-secondary)]">
          <strong className="text-[var(--terracotta-strong)]">In immediate distress?</strong>{' '}
          You are not alone. Call or text <strong className="text-[var(--ink)]">988</strong> (USA &amp; Canada),{' '}
          <strong className="text-[var(--ink)]">111</strong> (UK), or contact your local emergency services immediately.
        </p>
      </div>

      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-[14px] bg-[var(--surface2)] p-1 shadow-xs border border-[var(--border)]">
                <Image
                  src="/favicon.svg"
                  alt="Thrivefold Mark"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </span>
              <span className="font-serif text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                Thrivefold
              </span>
            </Link>

            <p className="text-sm text-[var(--ink-secondary)] leading-relaxed max-w-sm">
              Sovereign health sanctuary running strictly on your personal hardware. Three dedicated pillars (Women&apos;s Cycle, Men&apos;s Stamina, Pride &amp; Affirming Care) alongside contemplative, asynchronous slow postal correspondence.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface2)] text-xs text-[var(--ink-secondary)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--sage-strong)]" />
              <span>Zero-knowledge hardware cryptography</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Sanctuary Navigation
            </span>
            <div className="flex flex-col space-y-2 text-sm text-[var(--ink-secondary)]">
              <a href="/#pillars" className="hover:text-[var(--terracotta)] transition-colors">
                Three Health Pillars
              </a>
              <a href="/#correspondence" className="hover:text-[var(--terracotta)] transition-colors">
                Slow Letter Correspondence
              </a>
              <a href="/#telemetry" className="hover:text-[var(--terracotta)] transition-colors">
                On-Device Pose Telemetry
              </a>
              <a href="/#security" className="hover:text-[var(--terracotta)] transition-colors">
                Hardware Enclave Security
              </a>
              <a href="/#covenant" className="hover:text-[var(--terracotta)] transition-colors">
                Sovereign Covenant
              </a>
              <a href="/#faq" className="hover:text-[var(--terracotta)] transition-colors">
                Frequently Asked Questions
              </a>
            </div>
          </div>

          {/* Legal & Privacy Sovereignty (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Legal &amp; Privacy Sovereignty
            </span>
            <div className="flex flex-col space-y-2 text-sm text-[var(--ink-secondary)]">
              <Link href="/privacy" className="hover:text-[var(--terracotta)] font-medium transition-colors flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                <span>Privacy Policy</span>
              </Link>
              <Link href="/terms" className="hover:text-[var(--terracotta)] font-medium transition-colors flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                <span>Terms of Service</span>
              </Link>
              <a href="/terms#emergency" className="hover:text-[var(--terracotta)] transition-colors">
                Crisis &amp; Medical Disclaimer
              </a>
              <a href="/terms#age-shield" className="hover:text-[var(--terracotta)] transition-colors">
                18+ Adult Safety Shield
              </a>
              <a href="/privacy#data-purge" className="hover:text-[var(--terracotta)] transition-colors">
                One-Tap Sovereign Wipe
              </a>
            </div>
          </div>

          {/* Early Access Action (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Private Release
            </span>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Native on-device iOS TestFlight &amp; Android.
            </p>
            <a
              href="/#beta"
              className="squircle-button inline-flex items-center gap-1.5 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white text-xs font-semibold px-4 py-2.5"
            >
              <span>Get Access</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Legal & Medical Disclaimer Colophon */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <p>
            © {new Date().getFullYear()} Thrivefold · An <a href="https://devamit.co.in" target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] hover:text-[var(--terracotta)] font-medium underline underline-offset-2">Amit Dev Labs</a> Sovereign Project.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-[var(--terracotta)] underline underline-offset-2">
              Privacy Covenant
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[var(--terracotta)] underline underline-offset-2">
              Terms of Service
            </Link>
            <span>·</span>
            <span>Zero-Knowledge Hardware Enclave</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
