import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/site'
import { ShieldCheck, Heart, Cpu, Send, Lock } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[var(--border)]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl border border-[var(--border)] p-1 flex items-center justify-center bg-[var(--surface2)]">
                <Image src="/favicon.svg" alt="Thrivefold Logo" width={32} height={32} />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">Thrivefold</span>
            </div>
            <p className="text-sm text-[var(--ink-secondary)] leading-relaxed max-w-sm">
              Local-first on-device AI health and slow correspondence platform for iOS, Android, and Web. Built with calm architecture and zero-surveillance guarantees.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[var(--ink-muted)]">
              <ShieldCheck className="w-4 h-4 text-[var(--sage)]" />
              <span>Offline Sovereign · On-Device Neural Processing</span>
            </div>
          </div>

          {/* Three Spaces */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">Dedicated Spaces</h4>
            <ul className="space-y-2 text-sm text-[var(--ink-secondary)]">
              <li>
                <Link href="/women-health" className="hover:text-[var(--rose)] transition-colors">
                  Women's Health
                </Link>
              </li>
              <li>
                <Link href="/men-health" className="hover:text-[var(--sage)] transition-colors">
                  Men's Health
                </Link>
              </li>
              <li>
                <Link href="/pride-wellbeing" className="hover:text-[var(--amethyst)] transition-colors">
                  Pride & LGBTQ+
                </Link>
              </li>
              <li>
                <Link href="/slow-correspondence" className="hover:text-[var(--ink)] transition-colors">
                  Slow Correspondence
                </Link>
              </li>
            </ul>
          </div>

          {/* Architecture & Safety */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">Safety & Tech</h4>
            <ul className="space-y-2 text-sm text-[var(--ink-secondary)]">
              <li>
                <Link href="/how-it-works" className="hover:text-[var(--ink)] transition-colors">
                  System Architecture
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-[var(--ink)] transition-colors">
                  Zero-Trust Engine
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-[var(--ink)] transition-colors">
                  Local-First Features
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[var(--ink)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--ink)] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Ecosystem Sister Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">Amit Dev Labs</h4>
            <ul className="space-y-2 text-sm text-[var(--ink-secondary)]">
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
          <p>© {new Date().getFullYear()} Thrivefold. Engineered by <a href={siteConfig.authorUrl} className="underline hover:text-[var(--ink)] font-medium">{siteConfig.author}</a> under Amit Dev Labs.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--ink)]">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--ink)]">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-[var(--ink)]">Sitemap</Link>
            <Link href="/llms.txt" className="hover:text-[var(--ink)]">llms.txt</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
