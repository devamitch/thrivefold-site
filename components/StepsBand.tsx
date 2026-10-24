import { CalendarCheck, Compass, Dumbbell, Users } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    title: 'Pick your space',
    description: 'Choose women’s health, men’s health or LGBTQ+ wellbeing. You can switch later.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Check in each day',
    description: 'Note your mood, sleep and energy in under a minute, and take on a small daily quest.',
    icon: CalendarCheck,
  },
  {
    step: '03',
    title: 'Train and eat well',
    description: 'Follow guided workouts with the camera coach and log meals as you go.',
    icon: Dumbbell,
  },
  {
    step: '04',
    title: 'Join a circle',
    description: 'As your routine builds, private groups for training, meditation, sports and support open up.',
    icon: Users,
  },
]

export function StepsBand() {
  return (
    <section id="how" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          How it works
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Small steps, <span className="italic text-[var(--terracotta)]">every day.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((s) => {
          const Icon = s.icon
          return (
            <div key={s.step} className="squircle-card p-6 sm:p-7 text-left">
              <div className="flex items-center justify-between mb-5">
                <span className="font-serif text-2xl font-semibold text-[var(--terracotta)]">{s.step}</span>
                <div className="w-9 h-9 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)]">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2.5">{s.title}</h3>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">{s.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
