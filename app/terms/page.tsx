import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service — Thrivefold',
  description: 'The terms for using the Thrivefold app and taking part in circles, plus our health and medical notice.',
  alternates: { canonical: `${siteConfig.url}/terms/` },
}

const SECTIONS = [
  {
    id: 'using',
    title: 'Using Thrivefold',
    body: [
      'These terms apply to the Thrivefold mobile application and this website. By downloading, accessing, or using them, you agree to be bound by these terms.',
      'You must be of legal age under applicable law in your jurisdiction to accept these terms. Thrivefold is currently in internal testing / beta, so features may adapt and evolve over time.',
    ],
  },
  {
    id: 'health',
    title: 'Health Tracking, Health Connect & Pose Coaching',
    body: [
      'Thrivefold utilizes Health Connect and device sensor permissions strictly on-device to read user activity, step count, sleep, and fitness matrices. This data is processed locally within gamified wellbeing routines to provide real-time self-care motivation. No raw health metrics or personal health data are sold, shared, or persisted to remote backend databases.',
      'Cycle tracking, daily check-ins, workouts, and quest reminders are personal observational tools to help you notice patterns and build sustainable habits. Cycle predictions are estimates and are NOT a method of contraception.',
      'The on-device camera pose coach computes skeletal landmark coordinates purely in volatile memory. Stop any physical exercise immediately if you experience pain, dizziness, or shortness of breath.',
    ],
  },
  {
    id: 'circles',
    title: 'Support Circles & Community Conduct',
    body: [
      'Circles are private groups for training, meditation, sports, and peer support that unlock as you establish consistent routines.',
      'Harassment, hate speech, threats, spam, unsolicited commercial selling, and unauthorized sharing of personal health records are strictly prohibited. We reserve the right to suspend or remove participation for violations.',
      'Support circles are peer encouragement communities. They do not constitute clinical therapy or medical group counseling.',
    ],
  },
  {
    id: 'your-content',
    title: 'User Sovereignty & Content Ownership',
    body: [
      'You retain full ownership of all check-ins, personal notes, workout logs, and entries recorded in Thrivefold.',
      'You may export your records at any time in standardized HL7 FHIR or JSON format, or delete all records locally from device settings with a single tap.',
    ],
  },
  {
    id: 'liability',
    title: 'No Warranty & Limitation of Liability',
    body: [
      'Thrivefold is provided on an "as is" and "as available" basis without warranties of any kind. To the maximum extent permitted by applicable law, Amit Dev Labs and its contributors are not liable for indirect, incidental, or consequential damages resulting from your use of the application.',
    ],
  },
  {
    id: 'law',
    title: 'Governing Law',
    body: ['These terms are governed by and construed in accordance with the laws of Karnataka, India.'],
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
            <span>Back to Thrivefold Home</span>
          </Link>

          <div className="rounded-[28px] bg-[var(--surface)] p-8 sm:p-12 mb-10 border border-[var(--border)]">
            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] mb-4">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
              Clear, transparent rules governing the use of the Thrivefold application, on-device features, and website.
            </p>
            <p className="mt-6 text-xs text-[var(--ink-muted)]">Last updated: 28 October 2026</p>
          </div>

          <section id="medical" className="scroll-mt-24 rounded-[24px] bg-[var(--terracotta-subtle)] p-6 sm:p-8 mb-8 border border-[var(--terracotta)]/20">
            <div className="flex items-center gap-2.5 mb-3">
              <AlertCircle className="w-5 h-5 text-[var(--terracotta-strong)] shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--terracotta-strong)]">
                Health &amp; Medical Notice
              </h2>
            </div>
            <div className="space-y-3 text-[15px] sm:text-base text-[var(--ink-secondary)] leading-relaxed">
              <p>
                Thrivefold is a general fitness, ergonomic movement, and mindful wellbeing application intended to encourage healthy physical activity and posture habits. Thrivefold is NOT a medical device and does NOT diagnose, treat, cure, or prevent any injury, cardiovascular condition, musculoskeletal disorder, or disease. Always consult a qualified physician or healthcare provider before beginning any new exercise routine.
              </p>
              <p className="font-semibold text-[var(--ink)]">
                Crisis Hotline: If you are in crisis or need urgent help, call or text <strong>988</strong> in the US and Canada, call <strong>999</strong> or <strong>111</strong> in the UK, <strong>112</strong> in India and the EU, or contact your local emergency services immediately.
              </p>
            </div>
          </section>

          <div className="space-y-6 text-[15px] sm:text-base text-[var(--ink-secondary)] leading-relaxed text-left">
            {SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 rounded-[24px] bg-[var(--surface)] p-6 sm:p-8 border border-[var(--border)]">
                <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-3">{section.title}</h2>
                {section.body.map((para) => (
                  <p key={para} className="mt-3 first:mt-0">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            <section id="contact" className="scroll-mt-24 rounded-[24px] bg-[var(--surface)] p-6 sm:p-8 border border-[var(--border)]">
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-3">Contact</h2>
              <p>
                Questions regarding these terms may be directed to:{' '}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-[var(--terracotta)] underline underline-offset-2">
                  {siteConfig.contactEmail}
                </a>
                . Thrivefold is engineered by Amit Dev Labs, Bengaluru, Karnataka, India.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
