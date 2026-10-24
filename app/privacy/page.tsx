import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck, Lock, EyeOff, Smartphone, Trash2, HeartPulse, FileText } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Privacy Policy — Thrivefold Sovereign Health Sanctuary',
  description: 'Thrivefold zero-surveillance privacy covenant. Learn how on-device cryptography, local MMKV partitions, and zero-tracking architectures protect your health sovereignty.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-28 pb-20 px-4 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[880px]">
          {/* Breadcrumb / Back Link */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[var(--ink-secondary)] hover:text-[var(--terracotta)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Sanctuary</span>
          </Link>

          {/* Header Card */}
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-8 sm:p-12 shadow-[var(--shadow-card)] mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface2)] px-3 py-1.5 text-xs font-semibold text-[var(--terracotta)] mb-4">
              <ShieldCheck className="w-4 h-4 text-[var(--terracotta)]" />
              <span>Zero-Surveillance Privacy Covenant</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] mb-4">
              Your Health and Intimate Thoughts Belong Exclusively to You.
            </h1>

            <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
              Thrivefold is fundamentally architected to eliminate the surveillance capitalism model of commercial health and therapy apps. We do not hold your health records on central servers, we cannot see your journal entries, and we will never monetize your biology.
            </p>

            <div className="mt-6 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
              <span>Effective: October 2026 · Sovereign Edition</span>
              <span className="inline-flex items-center gap-1.5 text-[var(--sage-strong)] font-medium">
                <Lock className="w-3.5 h-3.5" />
                Hardware-Enforced Cryptography
              </span>
            </div>
          </div>

          {/* Policy Body */}
          <div className="space-y-8 text-[15px] sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            {/* Section 1 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  1
                </span>
                <h2>Zero-Trust Local-First Philosophy</h2>
              </div>
              <p className="mb-4">
                Health information, cycle rhythms, hormone therapies, workout telemetry, and emotional reflections belong strictly inside your physical device. Thrivefold operates under a <strong>local-sovereignty paradigm</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>100% Offline Sovereign:</strong> All daily reflections, trackers, symptom logs, and cognitive check-ins run locally on your phone using high-performance MMKV and SQLite enclaves without internet dependency.
                </li>
                <li>
                  <strong>Zero Cloud Backup Requirement:</strong> You are never forced to synchronize personal metrics to our servers to unlock app functionality.
                </li>
                <li>
                  <strong>Hardware Key Enclave:</strong> On-device encryption keys are anchored directly into Apple Secure Enclave (iOS) and Android Keystore hardware.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  2
                </span>
                <h2>Three Dedicated Sanctuary Data Partitions</h2>
              </div>
              <p className="mb-4">
                Thrivefold separates data across three specialized pillars to ensure relevant isolation and strict privacy:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-[#FFF8F5] border border-[#E07A5F]/20">
                  <h3 className="font-semibold text-sm text-[#9B2226] mb-1">Women&apos;s Health</h3>
                  <p className="text-xs text-[var(--ink-secondary)]">Menstrual dates, luteal/follicular nutrition, basal body temp, and pelvic floor records stored strictly in local memory partitions.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F4F9F5] border border-[#2D6A4F]/20">
                  <h3 className="font-semibold text-sm text-[#2D6A4F] mb-1">Men&apos;s Health</h3>
                  <p className="text-xs text-[var(--ink-secondary)]">Strength, recovery scores, VO2 max telemetry, and stoic mental fortitude records kept local on hardware.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F3FA] border border-[#7209B7]/20">
                  <h3 className="font-semibold text-sm text-[#7209B7] mb-1">Pride & Wellbeing</h3>
                  <p className="text-xs text-[var(--ink-secondary)]">HRT schedules, injection site rotations, and identity reflections protected behind biometric quick-panic concealment.</p>
                </div>
              </div>
              <p className="text-xs text-[var(--ink-muted)]">
                None of the metrics from any of the three pillars are aggregated, indexed, or shared with third-party medical data brokers.
              </p>
            </section>

            {/* Section 3 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  3
                </span>
                <h2>Slow Correspondence & Postal Letter Privacy</h2>
              </div>
              <p className="mb-4">
                Our pen-pal postal exchange replaces addictive, toxic chat with contemplative asynchronous correspondence:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Chip-Only Composer:</strong> Letters are assembled using curated reflection chips, preventing phone number dissemination, address leaks, photo transfers, or verbal abuse.
                </li>
                <li>
                  <strong>Pseudonymous Identity:</strong> Pen-pals interact via self-selected sanctuary aliases. Your real legal name, email address, and exact GPS coordinates are never exposed.
                </li>
                <li>
                  <strong>Distance Calculation:</strong> Delivery delays (4 to 72 hours) are computed using coarse, low-precision regional centroids (hundreds of square kilometers wide), never exact device telemetry.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  4
                </span>
                <h2>On-Device Computer Vision & Posture Telemetry</h2>
              </div>
              <p className="mb-4">
                Thrivefold utilizes on-device Google MediaPipe pose landmarkers for somatic breath tracking and physical alignment verification.
              </p>
              <p>
                <strong>Zero Camera Cloud Streaming:</strong> Camera frames are processed strictly in volatile device RAM in real time. No images, video streams, or biometric face meshes are ever saved to disk or transmitted across the internet.
              </p>
            </section>

            {/* Section 5 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  5
                </span>
                <h2>Zero Third-Party Advertising & Tracking SDKs</h2>
              </div>
              <p>
                We do not include third-party marketing trackers (no Meta Pixel, no Google Ads SDK, no AppsFlyer, no Adjust, no data brokers). We do not monetize your data through advertising. Our business is sustained exclusively by voluntary supporter subscriptions and private enterprise licensing.
              </p>
            </section>

            {/* Section 6 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  6
                </span>
                <h2>Sovereign Data Export & One-Tap Irreversible Purge</h2>
              </div>
              <p className="mb-3">
                In strict compliance with GDPR, CCPA, and digital human rights frameworks:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Complete JSON Export:</strong> You can download a structured, human-readable export of all your check-ins, journal entries, and correspondence history at any time.
                </li>
                <li>
                  <strong>One-Tap Instant Purge:</strong> Tapping &quot;Wipe Sanctuary&quot; in Settings executes an immediate cryptographic wipe of all on-device MMKV databases and triggers a CASCADE delete across any private letter enclaves. This action is final and unrecoverable.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  7
                </span>
                <h2>Contact & Data Protection Officer</h2>
              </div>
              <p className="mb-2">
                If you have questions regarding this Privacy Covenant or our on-device cryptographic architecture, please reach out directly:
              </p>
              <p className="font-mono text-xs sm:text-sm bg-[var(--surface2)] p-4 rounded-xl text-[var(--ink)]">
                Amit Dev Labs · Data Protection & Cryptographic Sovereignty<br />
                Email: amit@devamit.co.in<br />
                Address: Bengaluru, Karnataka, India<br />
                Web: https://devamit.co.in
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
