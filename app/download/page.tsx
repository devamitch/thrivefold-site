import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'
import Image from 'next/image'
import { Smartphone, Apple, CheckCircle2, ShieldCheck, ArrowRight, Download, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Download Thrivefold for iOS & Android',
  description: 'Download Thrivefold early release builds: Apple iOS TestFlight beta invite and Android APK signed package. Local-first sovereign health and slow correspondence.',
  alternates: { canonical: 'https://thrivefold.devamit.co.in/download' },
}

export default function DownloadPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-6">
            <Download className="w-3.5 h-3.5 text-[var(--rose)]" />
            <span>Early Access Releases</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--ink)] mb-6">
            Get Thrivefold on Your Device
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Thrivefold is currently in active closed beta testing for iOS (via Apple TestFlight) and Android (signed release APK). Choose your platform below to get started.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
            {/* iOS TestFlight */}
            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)] mb-6">
                  <Apple className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block mb-1">Apple iOS</span>
                <h3 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">TestFlight Beta</h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-6">
                  Requires iOS 16.0 or later. Seamless installation via the Apple TestFlight app with automatic weekly updates and crash reporting.
                </p>
                <ul className="space-y-2 text-xs text-[var(--ink-secondary)] mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--sage)]" />
                    <span>Native Apple HealthKit sync (optional)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--sage)]" />
                    <span>Face ID biometric enclave lock</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--sage)]" />
                    <span>Neural Engine ONNX acceleration</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/beta"
                className="w-full py-3 rounded-full bg-[var(--ink)] text-[var(--bg)] font-semibold text-xs text-center uppercase tracking-wider hover:opacity-90 transition-all block"
              >
                Request TestFlight Invitation
              </Link>
            </div>

            {/* Android APK */}
            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--sage)] mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block mb-1">Google Android</span>
                <h3 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">Signed APK & Play Testing</h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-6">
                  Supports Android 8.0 (API 26) through Android 15. Direct APK download or Google Play Closed Testing track invitation.
                </p>
                <ul className="space-y-2 text-xs text-[var(--ink-secondary)] mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--sage)]" />
                    <span>Zero Google Play Services dependency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--sage)]" />
                    <span>BiometricPrompt hardware keystore</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--sage)]" />
                    <span>100% offline-sovereign installation</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/beta"
                className="w-full py-3 rounded-full border border-[var(--border-strong)] bg-[var(--surface2)] text-[var(--ink)] font-semibold text-xs text-center uppercase tracking-wider hover:border-[var(--ink)] transition-all block"
              >
                Join Android Closed Testing
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] max-w-xl mx-auto flex items-center gap-3 text-xs text-[var(--ink-secondary)] text-left">
            <ShieldCheck className="w-5 h-5 text-[var(--sage)] shrink-0" />
            <span>All release binaries are cryptographically signed by Amit Dev Labs with SHA-256 integrity checksums.</span>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
