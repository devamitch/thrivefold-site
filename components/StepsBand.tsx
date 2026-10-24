import { Sparkles, Activity, Mail, ShieldCheck } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    title: 'Choose Sanctuary',
    description: 'Select between Women’s Health, Men’s Health, or Pride & LGBTQ+ Wellbeing. Each sanctuary boots into an isolated colorway and personalized biometric trackers.',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'Log On-Device Telemetry',
    description: 'Check in with cycle phases, workout recovery, or posture pacing via Google MediaPipe. Camera frames process in volatile RAM—zero images or video ever leave your phone.',
    icon: Activity,
  },
  {
    step: '03',
    title: 'Exchange Slow Letters',
    description: 'Construct letters exclusively using curated sentiment cards and collectible stamps. Letters travel across physical geographic distances with a peaceful 4 to 72 hour transit delay.',
    icon: Mail,
  },
  {
    step: '04',
    title: 'Own Your Vault',
    description: 'All reflections, telemetry, and letters are stored in high-speed MMKV partitions encrypted with AES-256 keys. Export full JSON or execute a one-tap wipe at any time.',
    icon: ShieldCheck,
  },
]

export function StepsBand() {
  return (
    <section id="flow" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Sovereign Progression
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          A calm, intentional rhythm for <span className="italic text-[var(--terracotta)]">mindful living.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          From daily physiological check-ins to verified activity and fitness circles, Thrivefold protects your attention, your boundaries, and your private data.
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
