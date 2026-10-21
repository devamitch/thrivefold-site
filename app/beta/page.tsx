'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { Sparkles, CheckCircle2, Send, ShieldCheck } from 'lucide-react'

export default function BetaPage() {
  const [email, setEmail] = useState('')
  const [platform, setPlatform] = useState<'ios' | 'android' | 'both'>('ios')
  const [interest, setInterest] = useState<'women' | 'men' | 'pride' | 'all'>('all')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-12 pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[var(--rose)]" />
              <span>Closed Beta Invitation</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] mb-4">
              Join the Thrivefold Private Alpha & Beta
            </h1>

            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed font-light">
              We roll out invitations in cohorts of 50 users each week to ensure thoughtful pen-pal letter pacing and hands-on developer feedback.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface2)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--ink)] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block mb-2">
                    Target Operating System
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['ios', 'android', 'both'] as const).map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setPlatform(p)}
                        className={`py-2.5 rounded-xl text-xs font-medium border capitalize transition-all ${
                          platform === p
                            ? 'bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)] font-semibold'
                            : 'bg-[var(--surface2)] border-[var(--border)] text-[var(--ink-secondary)]'
                        }`}
                      >
                        {p === 'both' ? 'iOS & Android' : p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block mb-2">
                    Primary Area of Interest
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'women', label: "Women's Health" },
                      { id: 'men', label: "Men's Health" },
                      { id: 'pride', label: 'Pride & Wellbeing' },
                      { id: 'all', label: 'All Spaces & Letters' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setInterest(item.id as any)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-left transition-all ${
                          interest === item.id
                            ? 'bg-[var(--surface2)] border-[var(--ink)] text-[var(--ink)] font-semibold'
                            : 'bg-[var(--surface)] border-[var(--border)] text-[var(--ink-secondary)]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[var(--ink)] text-[var(--bg)] font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Closed Beta Access</span>
                </button>

                <p className="text-[11px] text-center text-[var(--ink-muted)]">
                  Zero spam. Your email will only be used to send your TestFlight or APK invitation link.
                </p>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[var(--sage-container)] border border-[var(--sage)]/40 text-[var(--sage)] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  Invitation Request Received!
                </h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed max-w-md mx-auto">
                  Thank you for applying. We have registered <span className="font-semibold text-[var(--ink)]">{email}</span> for the {platform.toUpperCase()} closed beta cohort. Expect an invite email with install steps shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
