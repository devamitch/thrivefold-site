import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { EcosystemDirectorySection } from '@/components/EcosystemDirectorySection'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Download Thrivefold Android APK & Google Play Beta',
  description:
    'Download Thrivefold APK or install from Google Play closed beta track. On-device pose coaching, Health Connect sync, and local RAG vitality companion.',
  alternates: { canonical: `${siteConfig.url}/download/` },
}

const SPECS = [
  { label: 'Package Name', value: siteConfig.appPackage },
  { label: 'Target OS', value: 'Android 8.0+ (API 26)' },
  { label: 'Pose Engine', value: 'MediaPipe / 33 Landmarks in RAM' },
  { label: 'Health Engine', value: 'Android Health Connect strictly local' },
  { label: 'Ecosystem', value: 'AnvayKosh (अन्वयकोश)' },
  { label: 'Data Boundary', value: 'Encrypted Keystore / Zero Cloud DB' },
]

export default function DownloadPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[960px] space-y-12">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--ink-secondary)] hover:text-[var(--terracotta)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Thrivefold Home</span>
          </Link>

          {/* Header */}
          <div className="text-left space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AnvayKosh Ecosystem · Downloads</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] leading-tight">
              Get Thrivefold for Android. <br />
              <span className="italic text-[var(--terracotta)]">Play Store Beta or Direct APK.</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
              Install Thrivefold through Google Play closed testing or sideload the release APK. Health metrics and camera coaching run 100% locally on your phone.
            </p>
          </div>

          {/* Direct Download & Play Store Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle,#e7e5e4)] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)] flex items-center justify-center font-bold">
                    <Smartphone className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    Google Play Track
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--ink)]">Google Play Store</h3>
                  <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                    Automatic background updates, delta patches, and Google Play Protect verification.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-[var(--border-subtle,#e7e5e4)] mt-6 flex flex-col gap-2">
                <a
                  href={siteConfig.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-stone-900 hover:bg-black text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <span>Install from Google Play</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.playStoreBetaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[var(--terracotta)] hover:bg-[#b05a3c] text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Join Google Play Beta</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle,#e7e5e4)] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                    <ArrowDownToLine className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">
                    Direct APK
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--ink)]">Direct APK Package</h3>
                  <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                    Direct release APK sideload. Independent offline install with zero remote database dependencies.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-[var(--border-subtle,#e7e5e4)] mt-6 flex flex-col gap-2">
                <a
                  href="https://github.com/devamitch/thrivefold/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-[var(--ink)] text-xs font-semibold transition-colors"
                >
                  <ArrowDownToLine className="w-4 h-4" />
                  <span>Download APK on GitHub Releases</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-center text-[var(--ink-muted)]">
                  Package: {siteConfig.appPackage}
                </span>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle,#e7e5e4)]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink-muted)] mb-4">
              Thrivefold Android Technical Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SPECS.map((spec) => (
                <div key={spec.label} className="p-3.5 rounded-2xl bg-[var(--bg)] border border-[var(--border-subtle,#e7e5e4)]">
                  <span className="block text-[10px] uppercase font-bold text-[var(--ink-muted)]">{spec.label}</span>
                  <span className="block text-xs font-semibold text-[var(--ink)] mt-0.5">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-App Ecosystem Directory */}
        <div className="mt-20">
          <EcosystemDirectorySection />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

