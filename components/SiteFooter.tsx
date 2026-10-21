import Image from 'next/image'
import { Heart, ShieldCheck, ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-white text-[var(--ink)] mt-24">
      {/* 24/7 Crisis Support Bar */}
      <div className="border-b border-[var(--border)] bg-[var(--surface2)] px-4 py-4 text-center">
        <p className="text-xs sm:text-sm text-[var(--ink-secondary)]">
          <strong className="text-[var(--terracotta-strong)]">In immediate distress?</strong>{' '}
          You are not alone. Call or text <strong className="text-[var(--ink)]">988</strong> (USA & Canada),{' '}
          <strong className="text-[var(--ink)]">111</strong> (UK), or reach out to your local emergency services immediately.
        </p>
      </div>

      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[var(--border)]">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-[14px] bg-white border border-[var(--border)] shadow-xs p-1">
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
            </a>

            <p className="text-sm text-[var(--ink-secondary)] leading-relaxed max-w-sm">
              Sovereign mental health sanctuary running strictly on your personal hardware. Somatic nervous system regulation, cognitive distortion tracking, and clinical appointment preparation.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface2)] text-xs text-[var(--ink-secondary)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--sage-strong)]" />
              <span>Zero-knowledge hardware cryptography</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Sanctuary Navigation
            </span>
            <div className="flex flex-col space-y-2 text-sm text-[var(--ink-secondary)]">
              <a href="#features" className="hover:text-[var(--terracotta)] transition-colors">
                Therapeutic Architecture
              </a>
              <a href="#pacer" className="hover:text-[var(--terracotta)] transition-colors">
                4-7-8 Somatic Pacer
              </a>
              <a href="#tracker" className="hover:text-[var(--terracotta)] transition-colors">
                Interactive Distortion Tracker
              </a>
              <a href="#clinical" className="hover:text-[var(--terracotta)] transition-colors">
                Clinical Progression Band
              </a>
              <a href="#security" className="hover:text-[var(--terracotta)] transition-colors">
                Hardware Enclave Security
              </a>
              <a href="#faq" className="hover:text-[var(--terracotta)] transition-colors">
                Frequently Asked Questions
              </a>
            </div>
          </div>

          {/* Early Access Action (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Private Release
            </span>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Available via private invitation for Apple iOS and Android.
            </p>
            <a
              href="#beta"
              className="squircle-button inline-flex items-center gap-1.5 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white text-xs font-semibold px-4 py-2.5 shadow-xs"
            >
              <span>Get Beta Access</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Legal & Medical Disclaimer Colophon */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <p>
            © {new Date().getFullYear()} Thrivefold · An <a href="https://devamit.co.in" target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] hover:text-[var(--terracotta)] font-medium underline underline-offset-2">Amit Dev Labs</a> Sovereign Project.
          </p>

          <p className="max-w-xl text-[11px] leading-normal">
            Disclaimer: Thrivefold is an on-device self-regulation workbook and therapy companion, not a licensed medical clinic or emergency service. If you are experiencing acute distress, please contact emergency professionals.
          </p>
        </div>
      </div>
    </footer>
  )
}
