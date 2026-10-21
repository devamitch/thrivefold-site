'use client'

import { useState } from 'react'
import { ArrowRight, Check, ShieldCheck, Mail, Apple, Smartphone } from 'lucide-react'

export function BetaSignupSection() {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section id="beta" className="scroll-mt-24">
      <div className="squircle-card p-8 sm:p-14 bg-white max-w-[940px] mx-auto text-center border border-[var(--border)] relative overflow-hidden shadow-xl">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(215,114,89,0.18),transparent_70%)]" />

        <div className="relative z-10 max-w-[620px] mx-auto space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--terracotta)] block">
            Closed Beta Invitation
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
            Claim your spot in the <span className="italic text-[var(--terracotta)]">private test flight.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            We are admitting a limited cohort of beta testers across iOS (Apple TestFlight) and Android. Experience a private, sovereign mental sanctuary before public release.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-[var(--sage-subtle)] border border-[rgba(125,156,123,0.3)] text-left space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-[var(--sage-strong)] font-semibold text-base">
                <Check className="w-5 h-5" />
                <span>You&apos;re on the priority invitation list</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--ink-secondary)]">
                We have registered your interest for <strong>{platform === 'ios' ? 'Apple TestFlight' : 'Android APK'}</strong> at <span className="font-mono text-[var(--ink)]">{email}</span>. You will receive your direct invitation link as soon as your slot opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              {/* Platform Selector Pills */}
              <div className="inline-flex p-1 rounded-full bg-[var(--surface2)] border border-[var(--border)]">
                <button
                  type="button"
                  onClick={() => setPlatform('ios')}
                  className={`squircle-button px-5 py-2 text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    platform === 'ios'
                      ? 'bg-white text-[var(--ink)] shadow-xs'
                      : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                  }`}
                >
                  <Apple className="w-3.5 h-3.5" />
                  <span>iOS TestFlight</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform('android')}
                  className={`squircle-button px-5 py-2 text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    platform === 'android'
                      ? 'bg-white text-[var(--ink)] shadow-xs'
                      : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Android Build</span>
                </button>
              </div>

              {/* Email Input & Submit */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 max-w-[500px] mx-auto pt-2">
                <div className="relative w-full">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--ink-muted)]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[var(--bg)] border border-[var(--border-strong)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--terracotta)] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="squircle-button w-full sm:w-auto shrink-0 px-7 py-3.5 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <span>{loading ? 'Submitting...' : 'Request Access'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[var(--ink-muted)] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--sage-strong)]" />
                <span>Zero spam. No newsletter blasts. Invitation link only.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
