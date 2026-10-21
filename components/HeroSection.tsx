import Link from 'next/link'
import { Sparkles, ShieldCheck, ArrowRight, HeartPulse, Brain, Activity, Lock, Compass, Smile } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="overview" className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32 border-b border-[var(--border)]">
      {/* Subtle organic ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] ambient-glow rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] ambient-clay-glow rounded-full blur-3xl pointer-events-none -z-10 opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--sage)] animate-pulse" />
            <span>Sovereign Therapy OS · 100% On-Device Neural Processing</span>
          </div>

          {/* Main Title with Fraunces Serif Contrast */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--ink)] leading-[1.08] mb-6">
            Your Mind, Reflected with Clarity.{' '}
            <span className="italic font-normal text-[var(--sage)]">Your Progress,</span>{' '}
            Guarded in Sanctuary.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[var(--ink-secondary)] leading-relaxed max-w-2xl font-light mb-10">
            Thrivefold is a private on-device therapy companion and mental health telemetry system. Monitor emotional fluctuations, log somatic sensations, deconstruct cognitive distortions, and track longitudinal therapeutic progress — without sending a single byte to the cloud.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#tracker"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--sage)] transition-colors flex items-center justify-center gap-2 shadow-sm interactive-btn"
            >
              <Activity className="w-4 h-4 text-[var(--sage-light)]" />
              <span>Launch Live Therapy Tracker</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="#pillars"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-medium text-sm border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] text-[var(--ink)] transition-colors flex items-center justify-center gap-2 interactive-btn"
            >
              <Brain className="w-4 h-4 text-[var(--lavender)]" />
              <span>Explore Clinical Pillars</span>
            </a>
          </div>

          {/* Live Mock Hero Telemetry Card */}
          <div className="w-full max-w-3xl p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-md text-left thrive-card relative overflow-hidden">
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border)] flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[var(--sage-container)] flex items-center justify-center text-[var(--sage)]">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block">
                    Active Telemetry Profile
                  </span>
                  <span className="font-serif font-bold text-lg text-[var(--ink)]">
                    Emotional Homeostasis & Nervous System Telemetry
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--surface2)] text-[11px] font-mono text-[var(--sage)] border border-[var(--border)]">
                <Lock className="w-3 h-3 text-[var(--sage)]" />
                <span>AES-256 Vault Locked</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)]">
                <span className="text-xs text-[var(--ink-muted)] font-mono block mb-1">Current State</span>
                <span className="text-base font-bold text-[var(--ink)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--sage)]" />
                  Grounded & Clear
                </span>
                <span className="text-[11px] text-[var(--ink-secondary)] mt-1 block">
                  Parasympathetic dominant baseline
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)]">
                <span className="text-xs text-[var(--ink-muted)] font-mono block mb-1">CBT Deconstruction</span>
                <span className="text-base font-bold text-[var(--ink)] flex items-center gap-1.5">
                  <Brain className="w-4 h-4 text-[var(--lavender)]" />
                  Catastrophizing Reframed
                </span>
                <span className="text-[11px] text-[var(--ink-secondary)] mt-1 block">
                  Identified 1 automatic thought today
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)]">
                <span className="text-xs text-[var(--ink-muted)] font-mono block mb-1">Therapy Continuity</span>
                <span className="text-base font-bold text-[var(--ink)] flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[var(--clay)]" />
                  Session in 4 Days
                </span>
                <span className="text-[11px] text-[var(--ink-secondary)] mt-1 block">
                  3 breakthrough notes prepared
                </span>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 text-xs font-mono text-[var(--ink-secondary)] text-left w-full max-w-4xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--sage)] shrink-0" />
              <span>Zero-Cloud Telemetry</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[var(--sage)] shrink-0" />
              <span>Biometric Keystore</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-[var(--sage)] shrink-0" />
              <span>Local Onnx Classifiers</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--sage)] shrink-0" />
              <span>CBT & Somatics Aligned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
