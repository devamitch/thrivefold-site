import { Database, Download, KeyRound, Lock, ShieldCheck, Trash2, WifiOff } from 'lucide-react'

const POINTS = [
  {
    icon: Lock,
    title: 'Hardware Keystore Encryption',
    text: 'All check-ins, cycle logs, workout histories, and notes are encrypted on your phone using hardware-backed AES-256 keys.',
  },
  {
    icon: Database,
    title: 'Zero Remote Health Database',
    text: 'We do not operate a cloud database that stores your personal health metrics, raw step counts, sleep data, or biometric logs.',
  },
  {
    icon: WifiOff,
    title: '100% Offline-First',
    text: 'Thrivefold functions completely in Airplane Mode. Workouts, pose coaching, and check-ins never depend on an active internet connection.',
  },
  {
    icon: ShieldCheck,
    title: 'Volatile RAM Computer Vision',
    text: 'The on-device camera coach processes skeletal landmark coordinates purely in volatile memory. No video or frames are saved or transmitted.',
  },
  {
    icon: Download,
    title: 'Export as HL7 FHIR & JSON',
    text: 'Export your complete health record in standardized HL7 FHIR format at any time to share directly with your personal physician.',
  },
  {
    icon: Trash2,
    title: '1-Tap Complete Local Wipe',
    text: 'Purge all data stored on your phone directly from the settings screen at any time, instantly and without contacting us.',
  },
]

export function HardwareSecuritySpecs() {
  return (
    <section id="privacy" className="scroll-mt-24">
      {/* Section Header */}
      <div className="mx-auto max-w-[760px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Sovereign Security
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Your health data <span className="italic text-[var(--terracotta)]">belongs to you.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          No ad trackers, no third-party data broker sales, and no surveillance. Built on transparent sovereign principles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto text-left">
        {POINTS.map((p) => {
          const Icon = p.icon
          return (
            <div key={p.title} className="squircle-card p-7 sm:p-8 flex flex-col justify-between bg-[var(--surface)]">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2.5">{p.title}</h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">{p.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
