import Image from 'next/image'
import { siteConfig } from '@/lib/site'
import { ShieldCheck, HeartPulse, Brain, Compass, PhoneCall, ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[var(--border)]">
          {/* Brand Column (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl border border-[var(--border)] p-1 flex items-center justify-center bg-[var(--surface2)] shadow-xs">
                <Image src="/favicon.svg" alt="Thrivefold Logo" width={32} height={32} />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">Thrivefold</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed max-w-sm font-light">
              Sovereign on-device therapy companion, somatic mood monitoring, and longitudinal progress tracking. Built with calm architecture and zero cloud surveillance.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[var(--ink-muted)]">
              <ShieldCheck className="w-4 h-4 text-[var(--sage)]" />
              <span>Offline Sovereign · AES-256 Keystore Hardware Vault</span>
            </div>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">Therapy Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--ink-secondary)]">
              <li>
                <a href="#tracker" className="hover:text-[var(--sage)] transition-colors">
                  Interactive Mood Tracker
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-[var(--sage)] transition-colors">
                  Clinical Pillars
                </a>
              </li>
              <li>
                <a href="#progress" className="hover:text-[var(--sage)] transition-colors">
                  Progress Telemetry
                </a>
              </li>
              <li>
                <a href="#breathwork" className="hover:text-[var(--sage)] transition-colors">
                  Somatic Breathwork Pacer
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-[var(--sage)] transition-colors">
                  Zero-Cloud Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Safety */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">Sovereignty & Safety</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--ink-secondary)]">
              <li>
                <a href="#security" className="hover:text-[var(--ink)] transition-colors">
                  Clinical Boundaries
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[var(--ink)] transition-colors">
                  Zero-Knowledge Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[var(--ink)] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#beta" className="hover:text-[var(--ink)] transition-colors">
                  Early Access Cohort
                </a>
              </li>
              <li>
                <a href="tel:988" className="hover:text-[var(--clay)] transition-colors font-medium flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-[var(--clay)]" />
                  <span>988 Crisis Hotline (24/7)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Amit Dev Labs Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">Amit Dev Labs</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--ink-secondary)]">
              <li>
                <a href={siteConfig.ecosystem.neev} target="_blank" rel="noreferrer" className="hover:text-[var(--ink)] transition-colors flex items-center justify-between">
                  <span>Neev Sanctuary</span>
                  <span className="text-[10px] font-mono text-[var(--ink-muted)]">Family OS</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.ecosystem.setu} target="_blank" rel="noreferrer" className="hover:text-[var(--ink)] transition-colors flex items-center justify-between">
                  <span>Setu P2P</span>
                  <span className="text-[10px] font-mono text-[var(--ink-muted)]">Direct WiFi</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.ecosystem.blinkquest} target="_blank" rel="noreferrer" className="hover:text-[var(--ink)] transition-colors flex items-center justify-between">
                  <span>BlinkQuest</span>
                  <span className="text-[10px] font-mono text-[var(--ink-muted)]">Eye Care</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.ecosystem.kshem} target="_blank" rel="noreferrer" className="hover:text-[var(--ink)] transition-colors flex items-center justify-between">
                  <span>KSHEM</span>
                  <span className="text-[10px] font-mono text-[var(--ink-muted)]">Safety</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.ecosystem.labs} target="_blank" rel="noreferrer" className="hover:text-[var(--ink)] transition-colors flex items-center justify-between">
                  <span>Devamit Hub</span>
                  <span className="text-[10px] font-mono text-[var(--ink-muted)]">Systems</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <p>© {new Date().getFullYear()} Thrivefold. Engineered with care by <a href={siteConfig.authorUrl} target="_blank" rel="noreferrer" className="underline hover:text-[var(--ink)] font-medium">{siteConfig.author}</a> under Amit Dev Labs.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-[var(--ink)]">Privacy</a>
            <a href="#terms" className="hover:text-[var(--ink)]">Terms</a>
            <a href="/sitemap.xml" className="hover:text-[var(--ink)]">Sitemap</a>
            <a href="/llms.txt" className="hover:text-[var(--ink)]">llms.txt</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
