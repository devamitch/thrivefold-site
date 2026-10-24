import { Download, Lock, Trash2 } from 'lucide-react'

const POINTS = [
  {
    icon: Lock,
    title: 'Encrypted on your phone',
    text: 'Your check-ins, cycle data, workouts and meal logs are stored on your device and encrypted there.',
  },
  {
    icon: Download,
    title: 'Export as HL7 FHIR',
    text: 'Export your records in the HL7 FHIR format if you want to share them with a clinician or another app.',
  },
  {
    icon: Trash2,
    title: 'Delete from settings',
    text: 'Remove everything Thrivefold has stored on your phone from the settings screen, without contacting us.',
  },
]

export function HardwareSecuritySpecs() {
  return (
    <section id="privacy" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Privacy
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Your health data <span className="italic text-[var(--terracotta)]">is yours.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Thrivefold has no ads, and we don’t sell your data. The full details are in our{' '}
          <a href="/privacy/" className="text-[var(--ink)] underline underline-offset-2">privacy policy</a>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1040px] mx-auto">
        {POINTS.map((p) => {
          const Icon = p.icon
          return (
            <div key={p.title} className="squircle-card p-6 sm:p-7 text-left">
              <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-4">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2">{p.title}</h3>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">{p.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
