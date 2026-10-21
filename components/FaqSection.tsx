'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Is Thrivefold a replacement for professional therapy?',
    a: 'No. Thrivefold is designed as an evidence-based companion to enhance and support your work with a licensed mental health professional. It helps you track cognitive distortions, regulate your nervous system between appointments, and organize thoughts so your clinical hours are as focused and productive as possible.',
  },
  {
    q: 'How does Thrivefold guarantee zero cloud detour?',
    a: 'Thrivefold contains no user registration systems, no database servers, and no analytics SDKs. All notes, emotional tracking logs, and somatic exercises are stored strictly on your phone’s local flash memory via MMKV binary stores. Cryptographic keys are protected by your device’s hardware Secure Enclave or Android Keystore.',
  },
  {
    q: 'Can I export my notes for my therapist?',
    a: 'Yes. With a single tap, Thrivefold can compile a clean, respectful clinical session brief formatted for CBT, ACT, or psychodynamic modalities. You can export it as an encrypted PDF or printed document to review directly during your appointment.',
  },
  {
    q: 'Does Thrivefold work completely offline?',
    a: 'Yes, 100%. Thrivefold requires zero internet connectivity to function. You can practice breathwork, log cognitive distortions, and review past progress while in Airplane Mode, in remote locations, or with cellular data disabled.',
  },
  {
    q: 'Is Thrivefold free to use?',
    a: 'The full on-device vault is completely free for all approved closed beta testers. Our goal is to ensure the core sovereign sanctuary remains accessible and uncompromising on privacy.',
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
          Everything you need to know about <span className="italic text-[var(--terracotta)]">sovereign therapy.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Clear, straightforward answers about how Thrivefold safeguards your mental health reflections.
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
