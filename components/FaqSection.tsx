'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Who is Thrivefold for?',
    a: 'Anyone who wants a simple, private way to look after their health. There are dedicated spaces for women’s health (including cycle tracking), men’s health and LGBTQ+ wellbeing. You pick one when you start and can switch at any time.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Your check-ins, cycle data, workouts and meal logs are stored on your phone and encrypted there. You can export them as HL7 FHIR or delete them from the settings screen.',
  },
  {
    q: 'How does the camera coach work?',
    a: 'During a guided workout, the camera coach looks at your movement and gives feedback on your form. It runs on your phone, and the camera video is not uploaded.',
  },
  {
    q: 'What are circles?',
    a: 'Circles are private groups for training, meditation, sports and support that open up as you build a routine. Anything you post in a circle is visible to the members of that circle.',
  },
  {
    q: 'Is Thrivefold medical care?',
    a: 'No. Thrivefold is a wellbeing and fitness tool. It does not diagnose conditions, prescribe treatment or replace a doctor or therapist. If you are in crisis, call or text 988 in the US and Canada, or contact your local emergency services.',
  },
  {
    q: 'How do I get the app?',
    a: 'Thrivefold is in beta on iOS and Android. Email us from the beta section below and we will send you an invite when a place opens.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          FAQ
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Common <span className="italic text-[var(--terracotta)]">questions.</span>
        </h2>
      </div>

      <div className="max-w-[840px] mx-auto space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={faq.q} className="squircle-card overflow-hidden text-left">
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
              {/* Answers stay in the HTML so they are readable without JavaScript. */}
              <div
                hidden={!isOpen}
                className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm text-[var(--ink-secondary)] leading-relaxed pt-1"
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
