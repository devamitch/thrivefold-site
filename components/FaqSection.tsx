'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'What are the Three Health Sanctuaries and can I switch between them?',
    a: 'Thrivefold features three dedicated health sanctuaries: Women’s Health (menstrual & ovulation cycle days, follicular vs. luteal nutrition, basal body temperature, pelvic floor reminders), Men’s Health (testosterone support habits, circadian sun exposure, VO2 max telemetry, cold recovery, stoic reflections), and Pride & LGBTQ+ Wellbeing (hormone replacement therapy schedule, injection site rotation, affirming care milestones, quick panic lock). You select your primary sanctuary during onboarding and can seamlessly switch or adjust your experience at any time with total data isolation.',
  },
  {
    q: 'How does Slow Correspondence work, and why is there no free-form chat?',
    a: 'Traditional messaging platforms create urgency, dopamine dependency, spam, and unsolicited harassment. Thrivefold replaces instant messaging with the unhurried cadence of postal letters. Letters are composed exclusively using curated sentiment cards and collectible digital stamps (max 5 cards per letter). Delivery time is mathematically calculated using the Haversine formula based on physical distance (ranging from 4 hours for local exchanges up to 72 hours for transcontinental post). This eliminates harassment, prevents toxic impulsive messaging, and fosters genuine intentional connection.',
  },
  {
    q: 'What is the 18+ Adult Age Assurance and under-25 pilot safety shield?',
    a: 'To guarantee absolute community safety, all social correspondence and affinity circle discovery is strictly gated behind an 18+ adult age assurance verification. Additionally, participants under 25 are shielded by a protective 7-day trial period: during this introductory week, users are limited to a maximum of 1 new pen-pal intro per day and are completely isolated from public community directories to prevent bad-actor manipulation.',
  },
  {
    q: 'How does on-device MediaPipe telemetry work without exposing my camera?',
    a: 'Our posture, alignment, and mindful breathing exercises are powered by Google MediaPipe running directly on your phone’s local CPU/GPU/NPU. Camera frames are processed strictly in volatile device RAM as landmark coordinate vectors. Zero photos, video streams, or camera frames are ever written to persistent disk or transmitted over the network.',
  },
  {
    q: 'Is Thrivefold a replacement for professional healthcare or therapy?',
    a: 'No. Thrivefold is an evidence-based self-care, lifestyle, and slow-correspondence companion. It is strictly non-diagnostic and does not prescribe medicine or replace licensed therapists or physicians. If you are experiencing an acute emotional or mental health crisis, please call or text 988 immediately (in the US & Canada) or contact your nearest emergency services.',
  },
  {
    q: 'What is the commercial pricing model? Is the core app truly free for life?',
    a: 'Yes. Our core sanctuary is $0 Free-For-Life: you receive 100% offline personal health tracking, local AI insights, encrypted MMKV memory vault with JSON export, and standard slow postal letter exchange (up to 3 simultaneous in-transit letters). For members who want expanded outbox capacity (up to 10 simultaneous letters), quarterly artist-commissioned collectible digital stamps, and optional cross-device end-to-end encrypted backup, we offer Correspondence Plus for $4.99/month ($39.99/year). We never host ads or broker data.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Frequently Asked Questions
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Everything you need to know about <span className="italic text-[var(--terracotta)]">sovereign wellbeing.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Clear, straightforward answers about our three health sanctuaries, slow letter correspondence, and zero-compromise hardware privacy.
        </p>
      </div>

      <div className="max-w-[840px] mx-auto space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className="squircle-card bg-white overflow-hidden transition-all text-left"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-medium text-[var(--ink)]"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[var(--terracotta)] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed pt-1 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
