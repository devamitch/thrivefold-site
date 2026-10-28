'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'How does Thrivefold utilize Health Connect and device sensor permissions?',
    a: 'Thrivefold utilizes Health Connect and device sensor permissions strictly on-device to read user activity, step count, sleep, and fitness matrices. This data is processed locally within gamified wellbeing routines to provide real-time self-care motivation. No raw health metrics or personal health data are sold, shared, or persisted to remote backend databases.',
  },
  {
    q: 'How does the on-device camera pose coach work?',
    a: 'During guided movement workouts, the camera coach observes body alignment using 33 skeletal landmarks in real time to guide your cadence and posture. All computer vision models run locally on your phone using volatile device RAM. Camera frames are never recorded, saved to storage, or transmitted over any network.',
  },
  {
    q: 'Where is my health data stored?',
    a: 'Your check-ins, cycle data, workout logs, sleep metrics, and personal notes are stored locally on your device and encrypted using hardware Keystore AES-256 keys. We do not operate remote databases that store your biometric logs. You can export everything in HL7 FHIR or wipe all local data in one tap from settings.',
  },
  {
    q: 'Are any health metrics sold, shared, or used for advertising?',
    a: 'Never. Thrivefold contains zero third-party advertising trackers, zero telemetrySDKs, and zero commercial data broker partnerships. We never sell, rent, or monetize your health information under any circumstances.',
  },
  {
    q: 'Who is Thrivefold designed for?',
    a: 'Anyone seeking a calm, mindful, and private health companion. Thrivefold includes dedicated spaces for Women’s Health (cycle intelligence and symptom rhythms), Men’s Health (strength biomechanics and posture resets), and LGBTQ+ Affirming Wellbeing (medication notes and holistic support). You can choose any space and switch anytime.',
  },
  {
    q: 'Does Thrivefold replace professional medical care?',
    a: 'No. Thrivefold is an observational fitness and mindful wellbeing tool designed to encourage healthy habits and posture awareness. It is not a medical device and does not diagnose, treat, or prevent any medical condition. If you are experiencing a mental health crisis, please call or text 988 (US & Canada), call 999/111 (UK), or contact local emergency services.',
  },
  {
    q: 'How do I join the beta?',
    a: 'Thrivefold is currently in internal testing on Android (Google Play) and iOS (TestFlight). Send an email to amit@devamit.co.in with your platform of choice, and we will send you an invite code.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24">
      {/* Section Header */}
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Frequently Asked Questions
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Clear answers, <span className="italic text-[var(--terracotta)]">total clarity.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Everything you need to know about our privacy architecture, Health Connect integration, and on-device features.
        </p>
      </div>

      <div className="max-w-[880px] mx-auto space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={faq.q} className="squircle-card overflow-hidden text-left bg-[var(--surface)]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-medium text-[var(--ink)]"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[var(--terracotta)] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                hidden={!isOpen}
                className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed pt-2"
              >
                {faq.a}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
