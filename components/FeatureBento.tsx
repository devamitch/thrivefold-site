import { Brain, Heart, FileText, Shield, ArrowUpRight } from 'lucide-react'

export function FeatureBento() {
  return (
    <section id="features" className="scroll-mt-24">
      {/* Section Header */}
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Therapeutic Architecture
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Everything your mind needs to heal, <span className="italic text-[var(--terracotta)]">grounded in science.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Most mental wellness apps treat symptoms with generic meditation tracks. Thrivefold bridges somatic physiology with clinical cognitive reframing so your mind and body stabilize together.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Cognitive Deconstruction (7 cols) */}
        <div className="md:col-span-7 squircle-card p-7 sm:p-9 bg-white flex flex-col justify-between text-left">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-6">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
              Cognitive Distortion Deconstruction
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
              Identify cognitive traps without shame—such as catastrophizing, emotional reasoning, or all-or-nothing thinking. Unpack why your mind reacted, and practice structured, rational reframes guided by cognitive behavioral principles.
            </p>
          </div>

          <div className="squircle-inner p-4 space-y-2 border border-[var(--border)]">
            <div className="flex justify-between items-center text-xs font-semibold text-[var(--ink-secondary)]">
              <span>Distortion Detected</span>
              <span className="text-[var(--terracotta)]">All-or-Nothing Dichotomy</span>
            </div>
            <p className="text-xs text-[var(--ink)] font-serif italic">
              &ldquo;I didn&apos;t complete every single item today, so the entire day was a total failure.&rdquo;
            </p>
            <p className="text-xs text-[var(--sage-strong)] font-medium pt-1">
              ✓ Reframe: Productivity isn&apos;t binary. Significant progress was made on priority tasks, and rest is part of sustained performance.
            </p>
          </div>
        </div>

        {/* Card 2: Somatic Nervous System Pacer (5 cols) */}
        <div className="md:col-span-5 squircle-card p-7 sm:p-9 bg-white flex flex-col justify-between text-left">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)] mb-6">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
              Somatic Vagal Regulation
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
              When your nervous system is trapped in sympathetic fight-or-flight, cognitive reframing cannot break through. Regulate heart rate variability and stimulate the vagus nerve with guided 4-7-8 and physiological sigh pacers.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-between text-xs">
            <div>
              <span className="block font-semibold text-[var(--ink)]">4-7-8 Parasympathetic Pacer</span>
              <span className="text-[11px] text-[var(--ink-muted)]">Decreases cortisol in &lt; 90 seconds</span>
            </div>
            <a
              href="#pacer"
              className="squircle-button px-3.5 py-1.5 bg-[var(--terracotta)] text-white text-[11px] font-semibold flex items-center gap-1 shadow-xs"
            >
              <span>Try Pacer</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Card 3: Clinical Session Continuity (5 cols) */}
        <div className="md:col-span-5 squircle-card p-7 sm:p-9 bg-white flex flex-col justify-between text-left">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)] mb-6">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
              Therapy Session Prep
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
              Most clients forget emotional spikes that occurred between weekly sessions. Thrivefold synthesizes your week into a structured, therapist-ready clinical agenda formatted for CBT, ACT, or psychodynamic modalities.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[var(--surface2)] text-xs text-[var(--ink)] flex items-center justify-between font-medium">
            <span>Weekly Agenda Generated</span>
            <span className="text-[var(--terracotta)] font-semibold">Ready for Print / PDF</span>
          </div>
        </div>

        {/* Card 4: Hardware Enclave Sovereignty (7 cols) */}
        <div className="md:col-span-7 squircle-card p-7 sm:p-9 bg-white flex flex-col justify-between text-left">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-6">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
              Zero Cloud Detour · Hardware Vault
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
              No remote servers. No tracking pixels. No risk of corporate data breaches. All therapy notes, journals, and biometric logs are stored locally using high-speed MMKV binary databases encrypted with AES-256-GCM keys held strictly in your device&apos;s Secure Enclave.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--border)] text-center text-xs">
            <div className="p-2.5 rounded-xl bg-[var(--bg)]">
              <span className="block font-semibold text-[var(--ink)]">0 Bytes</span>
              <span className="text-[11px] text-[var(--ink-muted)]">Sent to Cloud</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[var(--bg)]">
              <span className="block font-semibold text-[var(--ink)]">AES-256</span>
              <span className="text-[11px] text-[var(--ink-muted)]">Hardware Keystore</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[var(--bg)]">
              <span className="block font-semibold text-[var(--ink)]">Face ID</span>
              <span className="text-[11px] text-[var(--ink-muted)]">Biometric Lock</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
