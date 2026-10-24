import { Activity, CalendarCheck, Heart, Lock, Salad, Users } from 'lucide-react'

const SPACES = [
  {
    name: 'Women’s health',
    text: 'Cycle tracking, symptoms, energy and sleep across your phases.',
    color: 'text-[var(--terracotta-strong)]',
  },
  {
    name: 'Men’s health',
    text: 'Strength, recovery, sleep and habits that support them.',
    color: 'text-[var(--sage-strong)]',
  },
  {
    name: 'LGBTQ+ wellbeing',
    text: 'Medication reminders, personal notes and an affirming space.',
    color: 'text-[var(--ink)]',
  },
]

export function FeatureBento() {
  return (
    <section id="features" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Features
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Everyday health tools, <span className="italic text-[var(--terracotta)]">in one app.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Pick the space that fits you, then use the parts you need. You can change spaces at any time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7 squircle-card p-7 sm:p-9 flex flex-col justify-between text-left">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-6">
              <Heart className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">Three health spaces</h3>
            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
              Each space has its own trackers and guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SPACES.map((s) => (
              <div key={s.name} className="squircle-inner p-3.5">
                <span className={`block font-semibold text-xs ${s.color}`}>{s.name}</span>
                <span className="text-[12px] text-[var(--ink-secondary)]">{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 squircle-card p-7 sm:p-9 text-left">
          <div className="w-10 h-10 rounded-2xl bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)] mb-6">
            <CalendarCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">Check-ins and quests</h3>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            A short daily check-in for mood, sleep and energy, plus small quests that help you build a routine
            one day at a time.
          </p>
        </div>

        <div className="md:col-span-5 squircle-card p-7 sm:p-9 text-left">
          <div className="w-10 h-10 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)] mb-6">
            <Activity className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">Guided workouts</h3>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            Follow a workout while the camera coach gives feedback on your form. It runs on your phone,
            and the camera video is not uploaded.
          </p>
        </div>

        <div className="md:col-span-7 squircle-card p-7 sm:p-9 text-left">
          <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-6">
            <Salad className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">Meal logging</h3>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            Log what you eat in a few taps and see how meals line up with your energy, sleep and training.
          </p>
        </div>

        <div id="circles" className="md:col-span-7 squircle-card p-7 sm:p-9 text-left scroll-mt-24">
          <div className="w-10 h-10 rounded-2xl bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)] mb-6">
            <Users className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">Circles</h3>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            Private groups for training, meditation, sports and support that open up as you build a routine.
          </p>
        </div>

        <div className="md:col-span-5 squircle-card p-7 sm:p-9 text-left">
          <div className="w-10 h-10 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)] mb-6">
            <Lock className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-3">Your records</h3>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            Encrypted on your phone. Export them as HL7 FHIR to share with a clinician, or delete them from
            settings.
          </p>
        </div>
      </div>
    </section>
  )
}
