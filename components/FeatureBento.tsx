import { Activity, CalendarCheck, Dumbbell, Flame, Heart, Lock, Salad, ShieldCheck, Sparkles, Users } from 'lucide-react'

const SPACES = [
  {
    name: 'Women’s Health',
    text: 'Cycle phases (follicular, ovulatory, luteal), bleeding logging, symptom tracking, and vitality.',
    color: 'text-[var(--terracotta-strong)]',
    bg: 'bg-[var(--terracotta-subtle)]',
  },
  {
    name: 'Men’s Health',
    text: 'Bodyweight strength, posture resets, recovery pacing, and habit streaks.',
    color: 'text-[var(--sage-strong)]',
    bg: 'bg-[var(--sage-subtle)]',
  },
  {
    name: 'LGBTQ+ Sanctuary',
    text: 'Medication reminders, appointment notes, mindful reflections, and affirming care.',
    color: 'text-[var(--ink)]',
    bg: 'bg-[var(--surface3)]/50',
  },
]

export function FeatureBento() {
  return (
    <section id="features" className="scroll-mt-24">
      {/* Section Header */}
      <div className="mx-auto max-w-[760px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Comprehensive Capabilities
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Everyday health tools, <span className="italic text-[var(--terracotta)]">grounded in privacy.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          From on-device computer vision coaching to Health Connect gamification and dedicated health spaces — Thrivefold handles everything with zero cloud telemetry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Three Health Spaces */}
        <div className="md:col-span-7 squircle-card p-7 sm:p-9 flex flex-col justify-between text-left bg-[var(--surface)]">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-6">
              <Heart className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
              Three Dedicated Health Spaces
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
              Everyone’s wellness journey is unique. Choose the dedicated space that resonates with your biological rhythms and goals, and switch seamlessly anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SPACES.map((s) => (
              <div key={s.name} className="squircle-inner p-3.5 flex flex-col justify-between">
                <span className={`block font-semibold text-xs mb-1 ${s.color}`}>{s.name}</span>
                <span className="text-[12px] text-[var(--ink-secondary)] leading-snug">{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Health Connect & Sensor Integration */}
        <div className="md:col-span-5 squircle-card p-7 sm:p-9 text-left bg-[var(--surface)] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)] mb-6">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)]">
                Health Connect Sync
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
              Reads your daily steps, sleep stages, and workout sessions directly through Health Connect. Used strictly on-device to power gamified routines without any remote cloud backend.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-[var(--border)]">
            <a
              href="#health-connect"
              className="text-xs font-semibold text-[var(--sage-strong)] hover:underline underline-offset-2 flex items-center gap-1.5"
            >
              <span>Read the Health Connect declaration &rarr;</span>
            </a>
          </div>
        </div>

        {/* Card 3: On-Device Pose Coach */}
        <div className="md:col-span-6 squircle-card p-7 sm:p-9 text-left bg-[var(--surface)]">
          <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-6">
            <Activity className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
            On-Device Pose Coaching
          </h3>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-4">
            Computer vision analyzes 33 skeletal body landmarks during workouts to guide alignment, cadence, and form. All frames process in volatile device memory — zero cloud video or recording.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] text-xs text-[var(--ink-secondary)] font-medium">
            <span>Volatile RAM Only · Zero Video Storage</span>
          </div>
        </div>

        {/* Card 4: Flow Quests Arcade */}
        <div className="md:col-span-6 squircle-card p-7 sm:p-9 text-left bg-[var(--surface)]">
          <div className="w-10 h-10 rounded-2xl bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)] mb-6">
            <Flame className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">
            Flow Quests Arcade
          </h3>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-4">
            Bite-sized daily actions that transform consistency into fun. Connect your daily step counts and workout completions to earn experience points (XP), unlock badges, and sustain motivation.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] text-xs text-[var(--ink-secondary)] font-medium">
            <span>Real-Time Self-Care Motivation</span>
          </div>
        </div>

        {/* Card 5: Daily Check-Ins & Vitality Score */}
        <div className="md:col-span-4 squircle-card p-7 sm:p-8 text-left bg-[var(--surface)]">
          <div className="w-10 h-10 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)] mb-6">
            <CalendarCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-2.5">
            1-Minute Vitality Check-In
          </h3>
          <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
            Record mood, energy, hydration, and intentions each morning to compute a personal Vitality Index without clinical jargon.
          </p>
        </div>

        {/* Card 6: Nutrition & Meal Logging */}
        <div className="md:col-span-4 squircle-card p-7 sm:p-8 text-left bg-[var(--surface)]">
          <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-6">
            <Salad className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-2.5">
            Mindful Meal Logging
          </h3>
          <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
            Log meals in a few gentle taps and observe how nutritional rhythms align with your daily energy, workout stamina, and sleep quality.
          </p>
        </div>

        {/* Card 7: Sovereign Hardware Keystore */}
        <div className="md:col-span-4 squircle-card p-7 sm:p-8 text-left bg-[var(--surface)]">
          <div className="w-10 h-10 rounded-2xl bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)] mb-6">
            <Lock className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-2.5">
            Hardware Enclave Vault
          </h3>
          <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
            Protected by device Keystore encryption. Export your health records anytime in standardized HL7 FHIR or wipe everything in 1 tap.
          </p>
        </div>
      </div>
    </section>
  )
}
