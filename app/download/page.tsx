import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { EcosystemDirectorySection } from '@/components/EcosystemDirectorySection'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Download Thrivefold Android APK & Google Play Beta',
  description:
    'Download Thrivefold for Android. Direct APK download or Google Play closed beta access. On-device pose coaching, Health Connect sync, and hardware encryption.',
  alternates: {
    canonical: `${siteConfig.url}/download`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Download Thrivefold Android APK & Google Play Beta',
    description:
      'Download Thrivefold for Android. Direct APK download or Google Play closed beta access with zero telemetry and on-device machine learning.',
    url: `${siteConfig.url}/download`,
    siteName: 'Thrivefold',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Thrivefold Android APK & Google Play Beta',
    description:
      'Download Thrivefold for Android. Direct APK download or Google Play closed beta access with zero telemetry.',
  },
}

const TECHNICAL_SPECS = [
  { term: 'Package Identifier', definition: siteConfig.appPackage },
  { term: 'Operating System Compatibility', definition: 'Android 8.0 Oreo (API Level 26) through Android 15' },
  { term: 'Computer Vision Pose Engine', definition: 'Google MediaPipe Pose Landmark Pipeline (33 points) in device RAM' },
  { term: 'Health API Layer', definition: 'Android Health Connect (strictly local on-device reads)' },
  { term: 'Cryptographic Storage', definition: 'Android Keystore AES-256 GCM hardware-backed encryption' },
  { term: 'Database Architecture', definition: 'Local SQLite engine with vector embedding indices' },
  { term: 'Ecosystem Standard', definition: 'AnvayKosh (अन्वयकोश) Federated Zero-Cloud Protocol' },
  { term: 'Licensing & Cost', definition: 'Free Software Application (No subscriptions, zero telemetry)' },
]

const DOWNLOAD_METHODS = [
  {
    channel: 'Google Play Store Closed Beta',
    distribution: 'Google Play Testing Track',
    targetAudience: 'Users wanting automated background updates and Google Play Protect verification.',
    verification: 'Signed with official AnvayKosh production key and scanned by Play Protect.',
    url: siteConfig.playStoreUrl,
    actionText: 'Install via Google Play',
  },
  {
    channel: 'Direct Release APK',
    distribution: 'GitHub Releases Sideload',
    targetAudience: 'Privacy practitioners, de-Googled devices, and offline Android systems.',
    verification: 'Standalone release APK with verifiable SHA-256 fingerprint.',
    url: 'https://github.com/devamitch/thrivefold/releases',
    actionText: 'Download Direct APK',
  },
]

export default function DownloadPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Thrivefold',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Android 8.0 and above',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Thrivefold is a private health and wellbeing application for Android featuring on-device camera pose guidance, Health Connect integration, and hardware-encrypted local databases.',
    softwareVersion: '1.0.0-beta',
    downloadUrl: `${siteConfig.url}/download`,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
      url: siteConfig.authorUrl,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[960px] space-y-12">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--ink-secondary)] hover:text-[var(--terracotta)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Thrivefold Overview</span>
            </Link>
          </nav>

          {/* Page Heading & Direct Answer */}
          <header className="text-left space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
              <span>AnvayKosh Ecosystem Application Distribution</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] leading-tight">
              Download Thrivefold for Android: <br />
              <span className="italic text-[var(--terracotta)]">Google Play Beta or Release APK</span>
            </h1>
            <p className="max-w-3xl text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
              Thrivefold is an on-device health companion that guides posture, tracks daily check-ins, and monitors biometric rhythms through local processing. You can install it directly from the Google Play closed testing track or download the standalone release APK for complete offline independence.
            </p>
          </header>

          {/* Installation Channels */}
          <section aria-labelledby="download-channels-heading" className="space-y-6">
            <h2 id="download-channels-heading" className="font-serif text-2xl font-bold text-[var(--ink)]">
              Available Android Installation Channels
            </h2>
            <p className="text-sm text-[var(--ink-secondary)] max-w-2xl leading-relaxed">
              Choose your preferred deployment method. Both packages contain identical on-device AI models, cryptographic Keystore enforcement, and local Health Connect integration.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle,#e7e5e4)] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)] flex items-center justify-center font-bold">
                      <Smartphone className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800">
                      Automated Updates
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[var(--ink)]">Google Play Store Beta</h3>
                    <p className="text-xs text-[var(--ink-secondary)] mt-2 leading-relaxed">
                      Recommended for most users. Receives automated updates, delta patches, and background validation through Google Play Protect.
                    </p>
                  </div>
                </div>
                <div className="pt-6 border-t border-[var(--border-subtle,#e7e5e4)] mt-6 flex flex-col gap-2.5">
                  <a
                    href={siteConfig.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-stone-900 hover:bg-black text-white text-xs font-semibold transition-colors"
                  >
                    <span>Install from Google Play</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.playStoreBetaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[var(--terracotta)] hover:bg-[#b05a3c] text-white text-xs font-semibold transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Join Closed Beta Group</span>
                  </a>
                </div>
              </article>

              <article className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle,#e7e5e4)] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                      <ArrowDownToLine className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                      Direct Sideload
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[var(--ink)]">Direct Release APK</h3>
                    <p className="text-xs text-[var(--ink-secondary)] mt-2 leading-relaxed">
                      Designed for de-Googled devices, privacy-focused operating systems, or offline environments. Contains zero Google Play Services dependencies.
                    </p>
                  </div>
                </div>
                <div className="pt-6 border-t border-[var(--border-subtle,#e7e5e4)] mt-6 flex flex-col gap-2.5">
                  <a
                    href="https://github.com/devamitch/thrivefold/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-[var(--ink)] text-xs font-semibold transition-colors"
                  >
                    <ArrowDownToLine className="w-4 h-4" />
                    <span>Download APK via GitHub Releases</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-center text-[var(--ink-secondary)]">
                    Android Package: {siteConfig.appPackage}
                  </span>
                </div>
              </article>
            </div>
          </section>

          {/* Machine-Parsable Technical Specifications Table */}
          <section aria-labelledby="technical-specs-heading" className="space-y-6 pt-6">
            <h2 id="technical-specs-heading" className="font-serif text-2xl font-bold text-[var(--ink)]">
              Technical Runtime Specifications
            </h2>
            <p className="text-sm text-[var(--ink-secondary)] max-w-2xl leading-relaxed">
              Every build of Thrivefold operates under strict architectural constraints. All computer vision and biometric processing executed on the local CPU/NPU without cloud offloading.
            </p>

            <div className="overflow-hidden rounded-3xl border border-[var(--border-subtle,#e7e5e4)] bg-[var(--surface)]">
              <table className="min-w-full divide-y divide-[var(--border-subtle,#e7e5e4)] text-left text-xs">
                <thead className="bg-stone-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wider text-[var(--ink-secondary)]">
                      Specification Property
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wider text-[var(--ink-secondary)]">
                      Technical Standard & Architecture
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle,#e7e5e4)]">
                  {TECHNICAL_SPECS.map((spec) => (
                    <tr key={spec.term} className="hover:bg-stone-50/50 transition-colors">
                      <td className="px-6 py-3.5 font-semibold text-[var(--ink)] whitespace-nowrap">
                        {spec.term}
                      </td>
                      <td className="px-6 py-3.5 text-[var(--ink-secondary)]">
                        {spec.definition}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sideload & Installation Verification DL */}
          <section aria-labelledby="verification-heading" className="space-y-6 pt-6">
            <h2 id="verification-heading" className="font-serif text-2xl font-bold text-[var(--ink)]">
              Installation Verification & Security Assurance
            </h2>
            <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle,#e7e5e4)] space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--terracotta)]" />
                <h3 className="text-sm font-bold text-[var(--ink)]">How to verify package authenticity</h3>
              </div>
              <dl className="grid gap-4 sm:grid-cols-2 text-xs leading-relaxed">
                <div>
                  <dt className="font-bold text-[var(--ink)]">Cryptographic Fingerprint</dt>
                  <dd className="text-[var(--ink-secondary)] mt-1">
                    Every release build is signed by the certified AnvayKosh ecosystem release certificate. Verify the SHA-256 fingerprint matching our published release notes before executing sideload installation.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-[var(--ink)]">Permission Sandboxing</dt>
                  <dd className="text-[var(--ink-secondary)] mt-1">
                    Thrivefold requests only camera access during active workout sessions and read-only Health Connect permissions. It does not request internet access permissions for health data transmission.
                  </dd>
                </div>
              </dl>
            </div>
          </section>
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
