import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Users,
  AlertCircle,
} from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { EcosystemDirectorySection } from '@/components/EcosystemDirectorySection'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Join Android Beta Testing: Thrivefold On-Device Health',
  description:
    'Join the Thrivefold Google Play closed beta program. Step-by-step instructions to enroll, opt in, and test on-device pose coaching and Health Connect sync.',
  alternates: {
    canonical: `${siteConfig.url}/beta`,
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
    title: 'Join Android Beta Testing: Thrivefold On-Device Health',
    description:
      'Enroll in the Google Play closed testing track for Thrivefold. Test private health tracking, on-device pose analysis, and local RAG routines.',
    url: `${siteConfig.url}/beta`,
    siteName: 'Thrivefold',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Android Beta Testing: Thrivefold On-Device Health',
    description:
      'Enroll in the Google Play closed testing track for Thrivefold. Test private health tracking and on-device pose analysis.',
  },
}

const STEPS = [
  {
    step: '1',
    title: 'Join the AnvayKosh Google Testers Group',
    description:
      'Google Play closed testing requires participant authorization through a centralized Google Group. Enrolling your Play Store Gmail address grants automatic access to Thrivefold and sibling ecosystem applications.',
    note: 'Sign in with the primary Gmail account associated with your Android Google Play Store account.',
    action: 'Join Google Group',
    href: siteConfig.googleGroupUrl,
    icon: Users,
  },
  {
    step: '2',
    title: 'Opt In on Google Play Testing',
    description:
      'Navigate to the official Google Play opt-in portal and click Become a tester. Your account will immediately be designated as an authorized testing participant.',
    note: 'If you encounter an unauthorized notification, confirm you have joined the Google Group in Step 1.',
    action: 'Accept Invite on Google Play',
    href: siteConfig.playStoreBetaUrl,
    icon: CheckCircle2,
  },
  {
    step: '3',
    title: 'Install Thrivefold on Your Device',
    description:
      'Open the Google Play Store link on your phone or search for Thrivefold. Tap Install to receive the production beta build with automated delta updates.',
    note: 'Background updates and delta patches are delivered directly through Google Play Protect.',
    action: 'Open in Google Play Store',
    href: siteConfig.playStoreUrl,
    icon: Smartphone,
  },
]

const TESTING_CRITERIA = [
  { parameter: 'Target Testing Platform', detail: 'Android 8.0 Oreo (API Level 26) through Android 15' },
  { parameter: 'Required Hardware Sensors', detail: 'Front-facing camera for MediaPipe pose estimation; accelerometer for steps' },
  { parameter: 'Permitted Data Connections', detail: 'Offline operation verified; network required only for initial package download' },
  { parameter: 'Health Data Access', detail: 'Optional Android Health Connect integration with read-only scopes' },
  { parameter: 'Reporting Protocol', detail: 'Direct in-app feedback or email dispatch to amit@devamit.co.in' },
]

export default function BetaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Join Android Beta Testing: Thrivefold',
    url: `${siteConfig.url}/beta`,
    description:
      'Complete onboarding documentation and instructions for enrolling in the Thrivefold Android closed beta testing program on Google Play.',
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: 'Thrivefold',
      operatingSystem: 'Android 8.0+',
      applicationCategory: 'HealthApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: {
        '@type': 'Person',
        name: siteConfig.author,
        url: siteConfig.authorUrl,
      },
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
              <span>Closed Testing Program Enrollment</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] leading-tight">
              Join the Android Closed Beta: <br />
              <span className="italic text-[var(--terracotta)]">Step-by-Step Google Play Setup</span>
            </h1>
            <p className="max-w-3xl text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
              Thrivefold is distributed through Google Play closed testing to validate on-device machine learning and local Health Connect synchronization across diverse Android devices. Follow the three standard steps below to enroll your account and install the app.
            </p>
          </header>

          {/* The 3 Steps Cards */}
          <section aria-labelledby="enrollment-steps-heading" className="space-y-6">
            <h2 id="enrollment-steps-heading" className="font-serif text-2xl font-bold text-[var(--ink)]">
              Enrollment Workflow
            </h2>
            <div className="space-y-4">
              {STEPS.map((step) => {
                const Icon = step.icon
                return (
                  <article
                    key={step.step}
                    className="p-6 sm:p-7 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle,#e7e5e4)] shadow-xs transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <span className="w-9 h-9 rounded-2xl bg-[var(--terracotta)] text-white font-bold text-sm flex items-center justify-center shrink-0">
                          {step.step}
                        </span>
                        <div className="space-y-2 max-w-xl text-left">
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--ink)]">
                            {step.title}
                          </h3>
                          <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                            {step.description}
                          </p>
                          <p className="text-xs text-[var(--ink-secondary)] font-medium">
                            Requirement: {step.note}
                          </p>
                        </div>
                      </div>

                      <div className="sm:shrink-0 pt-2 sm:pt-0">
                        <a
                          href={step.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-semibold transition-all"
                        >
                          <span>{step.action}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>

          {/* Machine-Parsable Testing Criteria Table */}
          <section aria-labelledby="testing-criteria-heading" className="space-y-6 pt-6">
            <h2 id="testing-criteria-heading" className="font-serif text-2xl font-bold text-[var(--ink)]">
              Beta Program Specifications
            </h2>
            <p className="text-sm text-[var(--ink-secondary)] max-w-2xl leading-relaxed">
              The closed testing track focuses on validating camera frame processing stability and SQLite query efficiency under memory constraints.
            </p>

            <div className="overflow-hidden rounded-3xl border border-[var(--border-subtle,#e7e5e4)] bg-[var(--surface)]">
              <table className="min-w-full divide-y divide-[var(--border-subtle,#e7e5e4)] text-left text-xs">
                <thead className="bg-stone-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wider text-[var(--ink-secondary)]">
                      Testing Parameter
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wider text-[var(--ink-secondary)]">
                      Architecture & Environment Requirements
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle,#e7e5e4)]">
                  {TESTING_CRITERIA.map((item) => (
                    <tr key={item.parameter} className="hover:bg-stone-50/50 transition-colors">
                      <td className="px-6 py-3.5 font-semibold text-[var(--ink)] whitespace-nowrap">
                        {item.parameter}
                      </td>
                      <td className="px-6 py-3.5 text-[var(--ink-secondary)]">
                        {item.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section aria-labelledby="troubleshooting-heading" className="pt-8 border-t border-[var(--border-subtle,#e7e5e4)] space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-700" />
              <h2 id="troubleshooting-heading" className="font-serif text-xl font-bold text-[var(--ink)]">
                Troubleshooting Google Play Opt-In
              </h2>
            </div>

            <dl className="grid gap-4 sm:grid-cols-2 text-xs leading-relaxed">
              <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle,#e7e5e4)]">
                <dt className="font-bold text-[var(--ink)] mb-1">Issue: App not available for this account</dt>
                <dd className="text-[var(--ink-secondary)]">
                  Ensure the browser profile used to accept the invite matches the primary Google account logged into your Android device. Multi-account browser sessions often default to an unlisted email address.
                </dd>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle,#e7e5e4)]">
                <dt className="font-bold text-[var(--ink)] mb-1">Issue: Slow invite propagation</dt>
                <dd className="text-[var(--ink-secondary)]">
                  Google Play services occasionally require up to 30 minutes to synchronize group membership across regional CDN edges. Wait briefly or force stop the Google Play Store app before retrying.
                </dd>
              </div>
            </dl>
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
