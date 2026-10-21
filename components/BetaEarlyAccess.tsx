'use client'

import { useState } from 'react'
import { Send, CheckCircle2, Apple, Smartphone, ShieldCheck, Lock } from 'lucide-react'

export function BetaEarlyAccess() {
  const [email, setEmail] = useState('')
  const [platform, setPlatform] = useState<'ios' | 'android' | 'both'>('ios')
  const [focus, setFocus] = useState('Therapy Prep & CBT')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  const focusOptions = [
    'Therapy Prep & CBT',
    'Somatic Anxiety Tracking',
    'Mood & Recovery Analytics',
    'Complete Sovereign Suite',
  ]

  return (
    <section id="beta" className="py-20 sm:py-28 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--sage)] mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Closed Beta & Direct Early Release</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mb-4">
            Claim Your Sovereign Therapy Haven
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed font-light">
            We invite cohorts of 50 thoughtful users weekly across Apple iOS TestFlight and Android to test our on-device mental health architecture. Experience zero surveillance, zero ads, and total peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[var(--surface2)] border border-[var(--border)] shadow-xs thrive-card">
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
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--ink)] transition-colors"
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
                        className={`py-2.5 rounded-xl text-xs font-medium border capitalize transition-all interactive-btn ${
                          platform === p
                            ? 'bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)] font-bold'
                            : 'bg-[var(--surface)] border-[var(--border)] text-[var(--ink-secondary)] hover:border-[var(--border-strong)]'
                        }`}
                      >
                        {p === 'both' ? 'iOS & Android' : p.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block mb-2">
                    Primary Mental Health Focus
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {focusOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFocus(opt)}
                        className={`p-3 rounded-xl text-left text-xs border transition-all interactive-btn ${
                          focus === opt
                            ? 'border-[var(--sage)] bg-[var(--sage-container)] text-[var(--ink)] font-semibold'
                            : 'border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] hover:border-[var(--border-strong)]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[var(--ink)] text-[var(--bg)] font-semibold text-xs uppercase tracking-wider hover:bg-[var(--sage)] transition-all flex items-center justify-center gap-2 interactive-btn shadow-xs"
                >
                  <Send className="w-4 h-4 text-[var(--sage-light)]" />
                  <span>Request Closed Beta Invitation</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[var(--ink-muted)]">
                  <Lock className="w-3.5 h-3.5 text-[var(--sage)]" />
                  <span>Zero Spam Guarantee · Kept strictly confidential</span>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[var(--sage-container)] text-[var(--sage)] flex items-center justify-center mx-auto border border-[var(--sage)]/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--ink)]">
                  Cohort Request Confirmed!
                </h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed max-w-md mx-auto font-light">
                  Thank you for applying. We have registered <strong className="text-[var(--ink)]">{email}</strong> for the upcoming weekly <span className="uppercase font-mono font-bold text-[var(--sage)]">{platform}</span> closed beta cohort. Watch your inbox for test download instructions.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs underline text-[var(--ink-muted)] hover:text-[var(--ink)] font-mono"
                  >
                    Submit another application
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Platforms Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* iOS Box */}
            <div className="p-6 rounded-3xl bg-[var(--surface2)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface)] flex items-center justify-center text-[var(--ink)]">
                  <Apple className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[var(--ink)]">Apple iOS TestFlight</h4>
                  <span className="text-[10px] font-mono text-[var(--ink-muted)]">iOS 16.0+ · Face ID Vault</span>
                </div>
              </div>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed mb-3">
                Install directly via Apple TestFlight. Features hardware encryption in the iOS Secure Enclave and Neural Engine acceleration for ONNX classifiers.
              </p>
              <div className="text-[11px] font-mono text-[var(--sage)] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero HealthKit export without consent</span>
              </div>
            </div>

            {/* Android Box */}
            <div className="p-6 rounded-3xl bg-[var(--surface2)] border border-[var(--border)] thrive-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface)] flex items-center justify-center text-[var(--sage)]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[var(--ink)]">Android Signed APK & Play</h4>
                  <span className="text-[10px] font-mono text-[var(--ink-muted)]">Android 8.0 - 15 · Keystore</span>
                </div>
              </div>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed mb-3">
                Google Play Closed Testing track or direct signed APK for complete offline independence. Uses Android BiometricPrompt for zero-cloud security.
              </p>
              <div className="text-[11px] font-mono text-[var(--sage)] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% de-Googled offline sovereign build</span>
              </div>
            </div>

            {/* Verification signature */}
            <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] text-[11px] font-mono text-[var(--ink-muted)] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--sage)] shrink-0" />
              <span>Signed by Amit Dev Labs with SHA-256 binary validation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
