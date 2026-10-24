import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Thrivefold handles your information: health records are encrypted on your phone, can be exported as HL7 FHIR, and can be deleted from settings.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
}

const SECTIONS = [
  {
    id: 'on-your-phone',
    title: 'What stays on your phone',
    body: [
      'Your daily check-ins, cycle data, symptoms, workouts, meal logs, quests and personal notes are stored on your phone and encrypted there.',
      'You do not need to create a cloud backup to use these features.',
    ],
  },
  {
    id: 'camera',
    title: 'Camera coach',
    body: [
      'The camera coach used in guided workouts runs on your phone. Camera video is processed on the phone and is not uploaded.',
    ],
  },
  {
    id: 'circles',
    title: 'Circles',
    body: [
      'Circles are private groups for training, meditation, sports and support that open up as you build a routine.',
      'If you join a circle, the name you choose and anything you post there are visible to that circle’s members. Your health records are not posted to a circle unless you choose to share something yourself.',
    ],
  },
  {
    id: 'not-collected',
    title: 'What we do not do',
    body: [
      'We do not show ads, and we do not sell or rent your information.',
      'This website does not use cookies or analytics scripts. Our hosting provider, Cloudflare, processes standard request data such as IP address and browser type to deliver and protect the site.',
    ],
  },
  {
    id: 'your-data',
    title: 'Export and delete',
    body: [
      'You can export your records from the app in the HL7 FHIR format, for example to share with a clinician.',
      'You can delete everything Thrivefold has stored on your phone from the settings screen.',
    ],
  },
  {
    id: 'email',
    title: 'If you email us',
    body: [
      'If you email us to join the beta or ask a question, we keep your email address and message so we can reply and send your invite. Ask us to delete them at any time.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: [
      'If we change how Thrivefold handles your information, we will update this page and the date at the top before the change takes effect.',
    ],
  },
]

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
              Thrivefold is a health and wellbeing app. This page explains what information it handles, where that
              information is kept and what you can do with it.
            </p>
            <p className="mt-6 text-xs text-[var(--ink-muted)]">Last updated: 25 October 2026</p>
          </div>

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
                Questions about this policy or your information:{' '}
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
