import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms for using the Thrivefold app and taking part in circles, plus our medical notice.',
  alternates: { canonical: `${siteConfig.url}/terms/` },
}

const SECTIONS = [
  {
    id: 'using',
    title: 'Using Thrivefold',
    body: [
      'These terms apply to the Thrivefold app and this website. By using them you agree to these terms.',
      'You need to be old enough under the law where you live to accept these terms. Thrivefold is currently in beta, so features may change and things may not always work as expected.',
    ],
  },
  {
    id: 'health',
    title: 'Health tracking',
    body: [
      'Cycle tracking, check-ins, workouts, meal logs and reminders are tools to help you notice patterns and build habits. Cycle predictions are not a form of contraception.',
      'Medication reminders are a personal log. They are not prescriptions or dosing advice. Follow the instructions of your doctor or pharmacist.',
      'Stop any workout that causes pain, dizziness or shortness of breath, and check with a doctor before starting a new exercise programme if you have a health condition.',
    ],
  },
  {
    id: 'circles',
    title: 'Circles',
    body: [
      'Circles are private groups for training, meditation, sports and support that open up as you build a routine.',
      'Be respectful. Harassment, hate, threats, spam, selling and sharing other people’s personal information are not allowed. We may remove content or accounts that break these rules.',
      'Support circles are peer groups. They are not therapy and are not run by licensed professionals unless a circle says so.',
    ],
  },
  {
    id: 'your-content',
    title: 'Your content',
    body: [
      'You own what you record in Thrivefold. You can export your records as HL7 FHIR or delete them from the settings screen at any time.',
    ],
  },
  {
    id: 'liability',
    title: 'No warranty and limits on liability',
    body: [
      'Thrivefold is provided "as is". To the extent the law allows, Amit Dev Labs is not liable for indirect or consequential losses arising from your use of the app.',
    ],
  },
  {
    id: 'law',
    title: 'Governing law',
    body: ['These terms are governed by the laws of Karnataka, India.'],
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-28 pb-20 px-4 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[820px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--ink-secondary)] hover:text-[var(--terracotta)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to home</span>
          </Link>

          <div className="rounded-[28px] bg-[var(--surface)] p-8 sm:p-12 mb-10">
            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] mb-4">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
              The rules for using Thrivefold, written as plainly as we can.
            </p>
            <p className="mt-6 text-xs text-[var(--ink-muted)]">Last updated: 25 October 2026</p>
          </div>

          <section id="medical" className="scroll-mt-24 rounded-[24px] bg-[var(--terracotta-subtle)] p-6 sm:p-8 mb-6">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--terracotta-strong)] mb-3">
              Medical notice
            </h2>
            <div className="space-y-3 text-[15px] sm:text-base text-[var(--ink-secondary)] leading-relaxed">
              <p>
                Thrivefold is a wellbeing and fitness tool. It is not a medical service, does not diagnose or treat
                any condition and is not an emergency service.
              </p>
              <p>
                If you are thinking about harming yourself or need urgent help, call or text <strong>988</strong> in
                the US and Canada, call <strong>999</strong> or <strong>111</strong> in the UK, or contact your local
                emergency services.
              </p>
            </div>
          </section>

          <div className="space-y-6 text-[15px] sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            {SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 rounded-[24px] bg-[var(--surface)] p-6 sm:p-8">
                <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-3">{section.title}</h2>
                {section.body.map((para) => (
                  <p key={para} className="mt-3 first:mt-0">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            <section id="contact" className="scroll-mt-24 rounded-[24px] bg-[var(--surface)] p-6 sm:p-8">
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-3">Contact</h2>
              <p>
                Questions about these terms:{' '}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-[var(--ink)] underline underline-offset-2">
                  {siteConfig.contactEmail}
                </a>
                . Thrivefold is made by Amit Dev Labs, Bengaluru, Karnataka, India.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
