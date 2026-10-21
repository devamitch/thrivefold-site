import { HeartPulse, Brain, Compass, TrendingUp, ShieldCheck, Lock, Sparkles, CheckCircle2 } from 'lucide-react'

export function ClinicalPillarsBento() {
  return (
    <section id="pillars" className="py-20 sm:py-28 bg-[var(--surface2)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--sage)] mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>Four Integrated Therapeutic Pillars</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mb-4">
            Engineered for Real Human Transformation
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed font-light">
            Generic mood apps ask you how you feel with a single smiley face and do nothing with the answer. Thrivefold synthesizes somatics, cognitive science, session preparation, and longitudinal recovery velocity.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Pillar 1: Somatics */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-sm thrive-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--sage-container)] flex items-center justify-center text-[var(--sage)]">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[var(--sage)] uppercase tracking-wider bg-[var(--surface2)] px-3 py-1 rounded-full border border-[var(--border)]">
                  Pillar 01 · Physiology
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">
                Somatic Nervous System Calibration
              </h3>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-6 font-light">
                Your body records trauma and acute stress long before the conscious mind formulates thoughts. Map tension across 6 anatomical zones (jaw, shoulders, diaphragm, pelvic floor) and deploy instant somatic resets like bilateral tapping and vagus nerve hums.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-2 text-xs">
              <div className="flex items-center justify-between text-[var(--ink-secondary)]">
                <span>Vagal Tone Indicator:</span>
                <strong className="text-[var(--sage)]">Parasympathetic Dominant</strong>
              </div>
              <div className="flex items-center justify-between text-[var(--ink-secondary)]">
                <span>Diaphragmatic Depth:</span>
                <strong className="text-[var(--ink)]">4-Second Smooth Inhale</strong>
              </div>
            </div>
          </div>

          {/* Pillar 2: CBT Deconstruction */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-sm thrive-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--lavender-container)] flex items-center justify-center text-[var(--lavender)]">
                  <Brain className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[var(--lavender)] uppercase tracking-wider bg-[var(--surface2)] px-3 py-1 rounded-full border border-[var(--border)]">
                  Pillar 02 · Cognition
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">
                CBT & ACT Cognitive Deconstruction
              </h3>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-6 font-light">
                Stop accepting distorted automatic thoughts as absolute truth. Thrivefold runs deterministic on-device heuristics to highlight catastrophic spirals, black-and-white framing, and mind-reading — replacing them with balanced, evidence-based statements.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-2 text-xs">
              <div className="flex items-center justify-between text-[var(--ink-secondary)]">
                <span>Distortions Cataloged:</span>
                <strong className="text-[var(--ink)]">12 Clinical Typologies</strong>
              </div>
              <div className="flex items-center justify-between text-[var(--ink-secondary)]">
                <span>On-Device Reframe Latency:</span>
                <strong className="text-[var(--lavender)]">&lt; 18ms (Offline)</strong>
              </div>
            </div>
          </div>

          {/* Pillar 3: Clinical Session Vault */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-sm thrive-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--clay-container)] flex items-center justify-center text-[var(--clay)]">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[var(--clay)] uppercase tracking-wider bg-[var(--surface2)] px-3 py-1 rounded-full border border-[var(--border)]">
                  Pillar 03 · Continuity
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">
                Therapy Session Preparation & Continuity Vault
              </h3>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-6 font-light">
                Never sit down in front of your therapist wondering what to talk about. Throughout your week, tag breakthrough moments, emotional triggers, and therapeutic homework directly into an encrypted, biometrically locked clinical agenda.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-2 text-xs">
              <div className="flex items-center justify-between text-[var(--ink-secondary)]">
                <span>Therapist Brief Export:</span>
                <strong className="text-[var(--ink)]">Client-Side PDF & Markdown</strong>
              </div>
              <div className="flex items-center justify-between text-[var(--ink-secondary)]">
                <span>Biometric Lockdown:</span>
                <strong className="text-[var(--clay)]">Face ID / Fingerprint Keystore</strong>
              </div>
            </div>
          </div>

          {/* Pillar 4: Longitudinal Telemetry */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-sm thrive-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[var(--ink)] uppercase tracking-wider bg-[var(--surface2)] px-3 py-1 rounded-full border border-[var(--border)]">
                  Pillar 04 · Analytics
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">
                Emotional Recovery Velocity & Momentum
              </h3>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-6 font-light">
                Progress in mental health isn’t about never feeling anxious — it is about how rapidly your nervous system recovers from dysregulation. Track your emotional bounce-back velocity, sleep correlations, and behavioral habit momentum over months and years.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] space-y-2 text-xs">
              <div className="flex items-center justify-between text-[var(--ink-secondary)]">
                <span>Weekly Recovery Velocity:</span>
                <strong className="text-[var(--sage)]">+18% Faster Homeostasis</strong>
              </div>
              <div className="flex items-center justify-between text-[var(--ink-secondary)]">
                <span>Telemetry Persistence:</span>
                <strong className="text-[var(--ink)]">100% MMKV Hardware Disk</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
