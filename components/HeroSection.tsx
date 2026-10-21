import { ArrowRight, Check, ShieldCheck, Heart, Sparkles, Brain, Lock } from 'lucide-react'

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
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(215,114,89,0.14),transparent_70%),radial-gradient(40%_40%_at_10%_10%,rgba(205,199,183,0.45),transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
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
            Commercial mental health apps store your rawest anxieties on central cloud clusters. Thrivefold runs completely on your own device: somatic breath regulation, cognitive distortion tracking, and structured preparation for your next therapy appointment.
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
              href="#tracker"
              className="squircle-button inline-flex min-h-14 items-center justify-center gap-2 bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--ink)] border border-[var(--border-strong)] px-6 text-base font-medium transition-colors"
            >
              <span>Try Interactive Demo</span>
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

        {/* Right Tactile Showcase Cards (Inspired by Setu phone card layering) */}
        <div className="relative mx-auto w-full max-w-[500px]" aria-hidden="true">
          {/* Ambient Glow */}
          <div className="absolute inset-4 -z-10 rounded-full bg-[radial-gradient(circle,rgba(215,114,89,0.22),transparent_70%)] blur-2xl" />

          {/* Main Enclave Card */}
          <div className="squircle-card p-6 sm:p-8 bg-white border border-[var(--border)] text-left space-y-6">
            {/* Header Strip */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)]">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[var(--ink)]">Local Enclave Vault</span>
                  <span className="text-[11px] text-[var(--ink-muted)]">Encrypted · AES-256-GCM</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[var(--sage-subtle)] text-[var(--sage-strong)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage-strong)] animate-pulse" />
                Active
              </span>
            </div>

            {/* Emotional Shift Module */}
            <div className="squircle-inner p-4 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[var(--ink)]">Cognitive Distortion Log</span>
                <span className="text-[11px] text-[var(--terracotta)] font-medium">Catastrophizing</span>
              </div>
              <p className="font-serif italic text-sm text-[var(--ink)] leading-snug">
                &ldquo;If this team review goes poorly, my reputation is completely ruined.&rdquo;
              </p>
              <div className="pt-2 text-xs text-[var(--sage-strong)] font-medium border-t border-[rgba(25,25,24,0.06)] flex items-start gap-1.5">
                <span className="shrink-0 font-bold">↳ Reframe:</span>
                <span>An uncomfortable meeting is feedback, not an existential verdict. Professional trust builds over years.</span>
              </div>
            </div>

            {/* Somatic Vagal Regulation Bar */}
            <div className="p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                  Somatic Vagal Tone
                </span>
                <span className="text-[11px] font-medium text-[var(--ink-muted)]">4-7-8 Breathing</span>
              </div>
              <div className="w-full bg-[var(--surface2)] h-2 rounded-full overflow-hidden">
                <div className="bg-[var(--terracotta)] h-full rounded-full w-[78%] transition-all duration-500" />
              </div>
              <div className="flex justify-between text-[11px] text-[var(--ink-secondary)]">
                <span>Parasympathetic Recovery</span>
                <span className="font-semibold text-[var(--ink)]">Stabilized (64 bpm)</span>
              </div>
            </div>

            {/* Clinical Brief Preview */}
            <div className="flex items-center justify-between text-xs pt-1 text-[var(--ink-secondary)]">
              <span>Appointment: Thursday 10:00 AM</span>
              <span className="font-semibold text-[var(--terracotta)]">Export Prepared (PDF)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
