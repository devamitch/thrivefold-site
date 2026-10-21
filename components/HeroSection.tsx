import { ShieldCheck, ArrowRight, HeartPulse, Brain, Activity, Lock, Compass } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="overview" className="relative overflow-hidden pt-14 pb-20 sm:pt-24 sm:pb-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--ink-secondary)] mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--sage)]" />
            <span>On-Device Mental Health & Somatic OS · Zero Cloud Telemetry</span>
          </div>

          {/* Main Title with Pure Roman Typography (No Italic Slop) */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--ink)] leading-[1.08] mb-6">
            Private Therapy Journaling. Grounded Somatic Telemetry.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed max-w-2xl font-light mb-10">
            Thrivefold helps you track emotional patterns, deconstruct automatic cognitive distortions, prepare for clinical therapy sessions, and measure nervous system regulation — completely encrypted on your hardware.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#tracker"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--sage)] transition-colors flex items-center justify-center gap-2 shadow-xs interactive-btn"
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
          <div className="w-full max-w-3xl p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xs text-left thrive-card relative">
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border)] flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[var(--sage-container)] flex items-center justify-center text-[var(--sage)]">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] block">
                    Telemetry Overview
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
                <span className="text-xs text-[var(--ink-muted)] font-mono block mb-1">Current Baseline</span>
                <span className="text-sm font-bold text-[var(--ink)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--sage)]" />
                  Grounded & Clear
                </span>
                <span className="text-[11px] text-[var(--ink-secondary)] mt-1 block">
                  Parasympathetic dominant tone
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)]">
                <span className="text-xs text-[var(--ink-muted)] font-mono block mb-1">Cognitive Deconstruction</span>
                <span className="text-sm font-bold text-[var(--ink)] flex items-center gap-1.5">
                  <Brain className="w-4 h-4 text-[var(--lavender)]" />
                  Catastrophizing Reframed
                </span>
                <span className="text-[11px] text-[var(--ink-secondary)] mt-1 block">
                  1 automatic distortion resolved
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)]">
                <span className="text-xs text-[var(--ink-muted)] font-mono block mb-1">Therapy Continuity</span>
                <span className="text-sm font-bold text-[var(--ink)] flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[var(--clay)]" />
                  Session in 4 Days
                </span>
                <span className="text-[11px] text-[var(--ink-secondary)] mt-1 block">
                  3 clinical agenda notes saved
                </span>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 text-xs font-mono text-[var(--ink-secondary)] text-left w-full max-w-4xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--sage)] shrink-0" />
              <span>Zero Cloud Telemetry</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[var(--sage)] shrink-0" />
              <span>Hardware Keystore Vault</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-[var(--sage)] shrink-0" />
              <span>Local ONNX Classifiers</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-[var(--sage)] shrink-0" />
              <span>CBT & Somatics Aligned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
