'use client'

import { useState } from 'react'
import { Send, CheckCircle2, ShieldCheck, Mail, MapPin, Clock, Stamp } from 'lucide-react'

export function LetterComposerDemo() {
  const [selectedGreeting, setSelectedGreeting] = useState<string>('Greetings from calm horizons')
  const [selectedReflection, setSelectedReflection] = useState<string>('Currently moving through luteal phase rest and quiet reading.')
  const [selectedInquiry, setSelectedInquiry] = useState<string>('How are you restoring your rhythm this evening?')
  const [distanceKm, setDistanceKm] = useState<number>(1420)
  const [sent, setSent] = useState<boolean>(false)

  const greetings = [
    'Greetings from calm horizons',
    'Sending quiet thoughts across distance',
    'A contemplative hello from the desk',
  ]

  const reflections = [
    'Currently moving through luteal phase rest and quiet reading.',
    'Focused on early morning sunlight exposure and stoic journaling.',
    'Celebrating an identity milestone in affirming peace today.',
    'Taking an intentional pause from fast screens and chaotic feeds.',
  ]

  const inquiries = [
    'How are you restoring your rhythm this evening?',
    'What simple ritual has grounded you this week?',
    'May your tea be warm and your evening tranquil.',
  ]

  const hoursToDeliver = Math.max(4, Math.round(distanceKm / 80))

  return (
    <section className="w-full py-16 sm:py-24 border-t border-[var(--border)] bg-[var(--surface2)]/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-4">
            <Mail className="w-3.5 h-3.5 text-[var(--rose)]" />
            <span>Interactive Simulator · Chip-Only Pen-Pal Postal</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mb-4">
            The Slow Correspondence Engine
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            Replace instant dopamine messaging with the contemplative cadence of postal letters. Letters are composed exclusively using curated sentiment cards — eliminating toxic spam, harassment, and telephone number sharing by mathematical constraint.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Card / Chip Selector (Left Column) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Step 1: Greeting Chip */}
            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <label className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block mb-3">
                1. Select Opening Salutation
              </label>
              <div className="flex flex-col gap-2">
                {greetings.map((g) => (
                  <button
                    key={g}
                    onClick={() => { setSelectedGreeting(g); setSent(false); }}
                    className={`text-left text-xs p-3 rounded-xl border transition-all ${
                      selectedGreeting === g
                        ? 'border-[var(--rose)] bg-[var(--rose-container)] text-[var(--ink)] font-medium'
                        : 'border-[var(--border)] bg-[var(--surface2)] text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Health & Phase Reflection Chip */}
            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <label className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block mb-3">
                2. Select Health Reflection Card
              </label>
              <div className="flex flex-col gap-2">
                {reflections.map((r) => (
                  <button
                    key={r}
                    onClick={() => { setSelectedReflection(r); setSent(false); }}
                    className={`text-left text-xs p-3 rounded-xl border transition-all ${
                      selectedReflection === r
                        ? 'border-[var(--sage)] bg-[var(--sage-container)] text-[var(--ink)] font-medium'
                        : 'border-[var(--border)] bg-[var(--surface2)] text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Inquiry & Closing */}
            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <label className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block mb-3">
                3. Select Contemplative Inquiry
              </label>
              <div className="flex flex-col gap-2">
                {inquiries.map((q) => (
                  <button
                    key={q}
                    onClick={() => { setSelectedInquiry(q); setSent(false); }}
                    className={`text-left text-xs p-3 rounded-xl border transition-all ${
                      selectedInquiry === q
                        ? 'border-[var(--amethyst)] bg-[var(--amethyst-container)] text-[var(--ink)] font-medium'
                        : 'border-[var(--border)] bg-[var(--surface2)] text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Postal Letter Preview & Delivery Envelope (Right Column) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-strong)] thrive-card">
              {/* Postage Stamp & Distance Header */}
              <div className="flex items-start justify-between border-b border-[var(--border)] pb-4 mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[var(--ink-muted)] uppercase tracking-wider">
                    Thrivefold Postal Airmail
                  </span>
                  <span className="font-serif font-bold text-base text-[var(--ink)]">
                    Letter to Anonymous Pen-Pal
                  </span>
                </div>
                {/* Vintage Postage Stamp Representation */}
                <div className="w-12 h-14 rounded-md border-2 border-dashed border-[var(--rose)] bg-[var(--rose-container)] flex flex-col items-center justify-center p-1 text-center shrink-0">
                  <span className="text-[8px] font-mono uppercase text-[var(--rose)] font-bold">Post</span>
                  <span className="text-[10px] font-bold text-[var(--crimson)]">18h</span>
                </div>
              </div>

              {/* Letter Content Preview */}
              <div className="space-y-4 font-serif text-[var(--ink)] text-sm sm:text-base leading-relaxed py-2">
                <p className="font-medium text-[var(--rose)]">{selectedGreeting},</p>
                <p className="p-3.5 rounded-xl bg-[var(--surface2)] border border-[var(--border)] font-sans text-xs sm:text-sm text-[var(--ink-secondary)]">
                  {selectedReflection}
                </p>
                <p className="italic text-[var(--ink-secondary)]">{selectedInquiry}</p>
                <p className="font-sans text-xs text-[var(--ink-muted)] pt-2">— A fellow traveler</p>
              </div>

              {/* Delivery Telemetry */}
              <div className="mt-8 pt-4 border-t border-[var(--border)] grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface2)] border border-[var(--border)]">
                  <MapPin className="w-4 h-4 text-[var(--sage)] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[var(--ink-muted)] block">Distance</span>
                    <span className="font-semibold text-[var(--ink)]">{distanceKm} km</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface2)] border border-[var(--border)]">
                  <Clock className="w-4 h-4 text-[var(--rose)] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[var(--ink-muted)] block">Transit Delay</span>
                    <span className="font-semibold text-[var(--ink)]">~{hoursToDeliver} Hours</span>
                  </div>
                </div>
              </div>

              {/* Dispatch Action */}
              <div className="mt-6">
                {!sent ? (
                  <button
                    onClick={() => setSent(true)}
                    className="w-full py-3.5 rounded-full bg-[var(--ink)] text-[var(--bg)] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Asynchronous Letter</span>
                  </button>
                ) : (
                  <div className="p-4 rounded-2xl bg-[var(--sage-container)] border border-[var(--sage)]/40 text-[var(--ink)] text-xs flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--sage)] shrink-0" />
                    <div>
                      <p className="font-bold">Dispatched with Distance Envelope!</p>
                      <p className="text-[11px] text-[var(--ink-secondary)]">Your letter is traveling over {distanceKm} km. Expected arrival in {hoursToDeliver} hours. Free of instant notifications.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Zero-Toxicity Policy Guarantee */}
            <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-start gap-3 text-xs text-[var(--ink-secondary)]">
              <ShieldCheck className="w-5 h-5 text-[var(--sage)] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[var(--ink)] block mb-0.5">Zero-Toxicity Architecture</span>
                <span>Because letters are assembled strictly from vetted chips, harassment, unsolicited photos, and phone harvesting are impossible by technical design.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
