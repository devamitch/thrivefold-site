import { Compass, Heart, Brain, FileCheck } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    title: 'Notice & Tap',
    description: 'When sudden anxiety, dread, or emotional reactivity strikes, open Thrivefold with a single biometric touch. No accounts to sign into.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Reset Somatically',
    description: '60–90 seconds of guided 4-7-8 breathing or physiological sigh pacing calms heart rate and signals safety to your nervous system.',
    icon: Heart,
  },
  {
    step: '03',
    title: 'Deconstruct & Reframe',
    description: 'Identify the automatic distortion (catastrophizing, emotional reasoning) without judgment, and craft a grounded, rational reframe.',
    icon: Brain,
  },
  {
    step: '04',
    title: 'Session Continuity',
    description: 'Walk into your weekly therapy appointment with structured breakthrough notes instead of struggling to remember from memory.',
    icon: FileCheck,
  },
]

export function StepsBand() {
  return (
    <section id="clinical" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Clinical Progression
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          A steady rhythm for your <span className="italic text-[var(--terracotta)]">everyday healing.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          From acute emotional overwhelm to clinical breakthroughs in your therapist’s office, Thrivefold keeps you grounded and organized.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.step}
              className="squircle-card p-6 sm:p-7 bg-white text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-2xl font-semibold text-[var(--terracotta)]">
                    {s.step}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2.5">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
