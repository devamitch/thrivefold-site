import { ArrowRight, Check, Heart, Brain, Lock, ShieldCheck, Smile, Activity } from 'lucide-react'

const PROMISES = [
  '100% On-Device Vault',
  'Zero Remote Telemetry',
  'Hardware Enclave Encrypted',
  'Clinical Therapy Ready',
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-10">
      {/* Setu & BlinkQuest Signature Soft Ambient Canvas Light */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(60%_60%_at_70%_18%,rgba(215,114,89,0.12),transparent_70%),radial-gradient(40%_40%_at_12%_10%,rgba(205,199,183,0.4),transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Left Narrative Column */}
        <div className="max-w-[620px] text-left">
          {/* Beta Pill Badge */}
          <a
            href="#beta"
            className="group mb-7 inline-flex items-center gap-2.5 rounded-full bg-[var(--surface)] py-1.5 pl-1.5 pr-4 text-[13px] font-medium text-[var(--ink-secondary)] transition-transform hover:scale-[1.01]"
          >
            <span className="rounded-full bg-[var(--terracotta)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
              Private Beta
            </span>
            <span>Now testing on iOS & Android</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 text-[var(--terracotta)]" aria-hidden="true" />
          </a>

          {/* Heading */}
          <h1 className="text-balance font-serif text-[clamp(2.75rem,7.2vw,5.6rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[var(--ink)]">
            A quiet sanctuary for your mind, <span className="italic text-[var(--terracotta)]">measured privately.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[540px] text-[17px] leading-relaxed text-[var(--ink-secondary)] sm:text-[19px]">
            Commercial mental wellness apps stream raw thoughts to remote advertising trackers. Thrivefold keeps your somatic signals, cognitive reframing, and therapy notes strictly inside your phone’s secure enclave.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#beta"
              className="squircle-button inline-flex min-h-14 items-center justify-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-7 text-base font-semibold"
            >
              <span>Request Early Access</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#experience"
              className="squircle-button inline-flex min-h-14 items-center justify-center gap-2 bg-[var(--surface2)] hover:bg-[#E2DCCE] text-[var(--ink)] px-6 text-base font-medium transition-colors"
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

        {/* Right Phone Device Canvas (Clean, Contained, Zero Border Clutter) */}
        <div className="relative mx-auto w-full max-w-[460px] sm:max-w-[480px] py-4" aria-hidden="true">
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute inset-[15%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(215,114,89,0.18),transparent_70%)] blur-2xl" />

          {/* Pristine Phone Container */}
          <div className="squircle-card p-4 sm:p-5 bg-white text-left space-y-4">
            {/* Phone Status Bar / Hardware Enclave Pill */}
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)]">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[var(--ink)]">Hardware Enclave</span>
                  <span className="text-[11px] text-[var(--ink-muted)]">AES-256-GCM · 0 Bytes Cloud</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[var(--sage-subtle)] text-[var(--sage-strong)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage-strong)] animate-pulse" />
                Local Only
              </span>
            </div>

            {/* Current Somatic State Card */}
            <div className="squircle-inner p-4 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                  Autonomic Vagus Rhythm
                </span>
                <span className="text-[11px] text-[var(--sage-strong)] font-semibold">Equilibrium</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-[var(--ink-secondary)]">
                  <span>Heart Rate Variability (HRV)</span>
                  <span className="font-bold text-[var(--ink)]">68 bpm</span>
                </div>
                <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                  <div className="bg-[var(--sage-strong)] h-full rounded-full w-[82%]" />
                </div>
              </div>
              <p className="text-[11px] text-[var(--ink-muted)] leading-relaxed pt-0.5">
                3 cycles of parasympathetic 4-7-8 breathing returned vagal tone to baseline.
              </p>
            </div>

            {/* Cognitive Deconstruction Module */}
            <div className="squircle-inner p-4 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                  Deconstructed Distortion
                </span>
                <span className="text-[11px] text-[var(--terracotta-strong)] font-semibold">Catastrophizing</span>
              </div>
              <p className="font-serif italic text-xs sm:text-[13px] text-[var(--ink)] leading-snug">
                &ldquo;If this team presentation falters, my standing across the entire company is ruined.&rdquo;
              </p>
              <div className="pt-2 text-[11px] sm:text-xs text-[var(--sage-strong)] font-medium flex items-start gap-1.5">
                <span className="shrink-0 font-bold">✓ Reframe:</span>
                <span>An uncomfortable meeting is feedback, not an existential verdict. Professional trust builds over years of consistent craft.</span>
              </div>
            </div>

            {/* Session Bridge Footer */}
            <div className="pt-1 flex items-center justify-between text-[11px] text-[var(--ink-muted)]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--sage-strong)]" />
                Biometrics Verified
              </span>
              <span className="text-[var(--terracotta-strong)] font-semibold">Export Ready for Dr. Vance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
