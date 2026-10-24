import { Brain, Heart, FileText, Shield, ArrowUpRight, Mail, Sparkles, Activity, Lock } from 'lucide-react'

export function FeatureBento() {
  return (
    <section id="features" className="scroll-mt-24">
      {/* Section Header */}
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Sovereign Health Architecture
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Three dedicated sanctuaries, <span className="italic text-[var(--terracotta)]">grounded in private biology.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Generic wellness apps reduce complex human health into a one-size-fits-all feed. Thrivefold delivers isolated health sanctuaries paired with contemplative slow-correspondence postal letters.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Three Dedicated Sanctuaries (7 cols) */}
        <div className="md:col-span-7 squircle-card p-7 sm:p-9 bg-white flex flex-col justify-between text-left">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
              Tripartite Health Specialization
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
              Choose your dedicated journey with customized colorways, trackers, and telemetry:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
            <div className="squircle-inner p-3.5 bg-[#FFF8F5] border border-[#E07A5F]/20">
              <span className="block font-semibold text-xs text-[#9B2226]">Women&apos;s Health</span>
              <span className="text-[11px] text-[var(--ink-secondary)]">Cycle phases, follicular/luteal nutrition &amp; pelvic floor.</span>
            </div>
            <div className="squircle-inner p-3.5 bg-[#F4F9F5] border border-[#2D6A4F]/20">
              <span className="block font-semibold text-xs text-[#2D6A4F]">Men&apos;s Health</span>
              <span className="text-[11px] text-[var(--ink-secondary)]">Strength, stamina telemetry, cold recovery &amp; stoic focus.</span>
            </div>
            <div className="squircle-inner p-3.5 bg-[#F7F3FA] border border-[#7209B7]/20">
              <span className="block font-semibold text-xs text-[#7209B7]">Pride &amp; Affirming</span>
              <span className="text-[11px] text-[var(--ink-secondary)]">HRT reminders, injection site logging &amp; safe haven.</span>
            </div>
          </div>
        </div>

        {/* Card 2: Slow Postal Correspondence (5 cols) */}
        <div id="correspondence" className="md:col-span-5 squircle-card p-7 sm:p-9 bg-white flex flex-col justify-between text-left">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)] mb-6">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
              Slow Postal Correspondence
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
              No toxic instant messaging, no harassment, no pressure. Letters are built purely from sentiment cards and travel across real distances with intentional delays (4 to 72 hours).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg)] flex items-center justify-between text-xs">
            <div>
              <span className="block font-semibold text-[var(--ink)]">Distance-Delayed Transit</span>
              <span className="text-[11px] text-[var(--ink-muted)]">Stamp collection &amp; zero-toxic chip composer</span>
            </div>
            <a
              href="#experience"
              className="squircle-button px-3.5 py-1.5 bg-[var(--terracotta)] text-white text-[11px] font-semibold flex items-center gap-1"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Card 3: Somatic Pose & MediaPipe Telemetry (5 cols) */}
        <div id="telemetry" className="md:col-span-5 squircle-card p-7 sm:p-9 bg-white flex flex-col justify-between text-left">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)] mb-6">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
              On-Device Posture Telemetry
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
              Real-time somatic posture and breath guidance powered by Google MediaPipe running directly on your phone. Camera frames process in volatile RAM—zero images or video ever leave your device.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[var(--surface2)] text-xs text-[var(--ink)] flex items-center justify-between font-medium">
            <span>MediaPipe Pose Landmarker</span>
            <span className="text-[var(--terracotta)] font-semibold">100% In-Memory / No Cloud</span>
          </div>
        </div>

        {/* Card 4: Hardware Enclave Sovereignty (7 cols) */}
        <div id="security" className="md:col-span-7 squircle-card p-7 sm:p-9 bg-white flex flex-col justify-between text-left">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-6">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
              Zero Cloud Detour · Hardware Enclave
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
              No remote servers. No tracking pixels. No risk of corporate data brokers. All health logs, letters, and reflections are stored locally using high-speed MMKV partitions encrypted with AES-256 keys held in your device&apos;s Secure Keystore.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-3 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-[var(--bg)]">
              <span className="block font-semibold text-[var(--ink)]">0 Bytes</span>
              <span className="text-[11px] text-[var(--ink-muted)]">Sent to Ad Networks</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[var(--bg)]">
              <span className="block font-semibold text-[var(--ink)]">AES-256</span>
              <span className="text-[11px] text-[var(--ink-muted)]">Hardware Keystore</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[var(--bg)]">
              <span className="block font-semibold text-[var(--ink)]">One-Tap</span>
              <span className="text-[11px] text-[var(--ink-muted)]">Instant Sovereign Wipe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
