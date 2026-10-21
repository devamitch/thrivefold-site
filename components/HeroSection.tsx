import { ArrowRight, Check, Heart, Brain, Lock, ShieldCheck, Sparkles, Smile, Radio } from 'lucide-react'

const PROMISES = [
  '100% On-Device Vault',
  'No Cloud Detour',
  'Hardware Enclave Encrypted',
  'Therapy Session Ready',
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10">
      {/* Setu & BlinkQuest Signature Warm Radial Ambient Light */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(60%_60%_at_70%_18%,rgba(215,114,89,0.16),transparent_70%),radial-gradient(40%_40%_at_12%_10%,rgba(205,199,183,0.5),transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Left Narrative Column */}
        <div className="max-w-[640px] text-left">
          {/* Beta Pill Badge */}
          <a
            href="#beta"
            className="group mb-7 inline-flex items-center gap-2.5 rounded-full bg-[var(--surface)] py-1.5 pl-1.5 pr-4 text-[13px] font-medium text-[var(--ink-secondary)] shadow-[0_2px_10px_rgba(25,25,24,0.06)] transition-shadow hover:shadow-[0_4px_16px_rgba(25,25,24,0.1)] border border-[var(--border)]"
          >
            <span className="rounded-full bg-[var(--terracotta)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
              Private Beta
            </span>
            <span>Now testing on iOS TestFlight & Android</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 text-[var(--terracotta)]" aria-hidden="true" />
          </a>

          {/* Heading */}
          <h1 className="text-balance font-serif text-[clamp(2.75rem,7.2vw,5.8rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[var(--ink)]">
            A quiet sanctuary for your mind, <span className="italic text-[var(--terracotta)]">measured privately.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[560px] text-[17px] leading-relaxed text-[var(--ink-secondary)] sm:text-[19px]">
            Commercial mental health apps store your rawest vulnerabilities on central cloud clusters. Thrivefold runs completely on your own device: somatic breath regulation, cognitive distortion tracking, and structured preparation for your next therapy appointment.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#beta"
              className="squircle-button inline-flex min-h-14 items-center justify-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-7 text-base font-semibold shadow-sm"
            >
              <span>Request Early Access</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#experience"
              className="squircle-button inline-flex min-h-14 items-center justify-center gap-2 bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--ink)] border border-[var(--border-strong)] px-6 text-base font-medium transition-colors"
            >
              <span>Explore The Sanctuary</span>
              <span className="text-[var(--ink-muted)]">↓</span>
            </a>
          </div>

          {/* Value Checklist */}
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {PROMISES.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-[var(--ink-secondary)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--terracotta-subtle)]">
                  <Check className="h-3 w-3 text-[var(--terracotta-strong)]" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Layered Phone Canvas (Inspired by Setu phone card layering) */}
        <div className="relative mx-auto h-[480px] sm:h-[580px] w-full max-w-[500px]" aria-hidden="true">
          {/* Ambient Glow */}
          <div className="absolute inset-[10%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(215,114,89,0.26),transparent_65%)] blur-2xl" />

          {/* Left Tilted Card: Somatic Vagus Pulse */}
          <div className="absolute left-0 top-[14%] w-[58%] -rotate-[6deg] rounded-[28px] bg-white p-5 border border-[var(--border)] shadow-[0_25px_60px_-15px_rgba(25,25,24,0.12)] text-left space-y-3 transition-transform duration-300 hover:rotate-0 hover:z-20">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-[var(--border)]">
              <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                Vagus Tone
              </span>
              <span className="text-[10px] text-[var(--sage-strong)] font-semibold">Paced</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-[var(--ink-secondary)]">
                <span>Parasympathetic Shift</span>
                <span className="font-bold text-[var(--ink)]">68 bpm</span>
              </div>
              <div className="w-full bg-[var(--surface2)] h-2 rounded-full overflow-hidden">
                <div className="bg-[var(--sage-strong)] h-full rounded-full w-[84%]" />
              </div>
            </div>
            <p className="text-[10px] text-[var(--ink-muted)] leading-tight">
              3 cycles of 4-7-8 breathing returned HRV to autonomic equilibrium.
            </p>
          </div>

          {/* Right Tilted Card: Clinical Prep Agenda */}
          <div className="absolute right-0 top-[18%] w-[58%] rotate-[6deg] rounded-[28px] bg-white p-5 border border-[var(--border)] shadow-[0_25px_60px_-15px_rgba(25,25,24,0.12)] text-left space-y-3 transition-transform duration-300 hover:rotate-0 hover:z-20">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-[var(--border)]">
              <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                Session Prep
              </span>
              <span className="text-[10px] font-semibold text-[var(--terracotta-strong)]">Thursday</span>
            </div>
            <p className="text-xs text-[var(--ink)] font-serif italic">
              &ldquo;Discussing feedback sensitivity and perfectionist traps.&rdquo;
            </p>
            <div className="flex items-center justify-between text-[10px] text-[var(--ink-muted)] pt-1 border-t border-[var(--border)]">
              <span>Ready for Dr. Vance</span>
              <span>Encrypted PDF</span>
            </div>
          </div>

          {/* Center Spotlight Card */}
          <div className="absolute left-1/2 top-0 z-10 w-[78%] -translate-x-1/2 rounded-[32px] sm:rounded-[36px] bg-white p-6 sm:p-7 border border-[var(--border)] shadow-[0_35px_80px_-20px_rgba(25,25,24,0.22)] text-left space-y-4">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)]">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[var(--ink)]">Hardware Enclave</span>
                  <span className="text-[10px] text-[var(--ink-muted)]">AES-256-GCM · 0 Bytes Cloud</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--sage-subtle)] text-[var(--sage-strong)] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage-strong)] animate-pulse" />
                Active
              </span>
            </div>

            {/* Daily Mood Spectrum Tag */}
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-[var(--ink-secondary)]">Current State</span>
              <span className="px-2.5 py-1 rounded-full bg-[var(--surface2)] text-[11px] font-semibold text-[var(--ink)]">
                🌿 Grounded & Reflective
              </span>
            </div>

            {/* Cognitive Deconstruction Module */}
            <div className="squircle-inner p-4 space-y-2 border border-[rgba(25,25,24,0.06)]">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[var(--ink)]">Deconstructed Distortion</span>
                <span className="text-[11px] text-[var(--terracotta)] font-semibold">Catastrophizing</span>
              </div>
              <p className="font-serif italic text-xs sm:text-sm text-[var(--ink)] leading-snug">
                &ldquo;If this presentation falters, my standing across the team is permanently ruined.&rdquo;
              </p>
              <div className="pt-2 text-[11px] sm:text-xs text-[var(--sage-strong)] font-medium border-t border-[rgba(25,25,24,0.06)] flex items-start gap-1">
                <span className="shrink-0 font-bold">✓ Reframe:</span>
                <span>An uncomfortable meeting is feedback, not an existential verdict. Professional trust builds over years.</span>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-1 flex items-center justify-between text-[11px] text-[var(--ink-muted)]">
              <span>Face ID Authorized</span>
              <span className="text-[var(--terracotta-strong)] font-semibold">Ready for Export</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
