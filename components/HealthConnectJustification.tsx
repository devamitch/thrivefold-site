import { Activity, Camera, CheckCircle2, Database, EyeOff, Lock, Moon, ShieldCheck, Zap } from 'lucide-react'
import Link from 'next/link'

const HEALTH_CONNECT_METRICS = [
  {
    icon: Activity,
    name: 'Activity & Step Count',
    permission: 'android.permission.health.READ_STEPS',
    description:
      'Reads daily step counts and active movement strictly on-device to power mindful movement goals, daily vitality indices, and consistency streaks.',
    processing: 'Processed locally in volatile memory; never sent to any remote server.',
  },
  {
    icon: Moon,
    name: 'Sleep & Recovery Cycles',
    permission: 'android.permission.health.READ_SLEEP',
    description:
      'Reads sleep duration and rest quality metrics to provide tailored, gentle recovery recommendations (e.g., suggesting gentle mobility when sleep is low).',
    processing: 'Evaluated locally by on-device rule heuristics; never shared or monetized.',
  },
  {
    icon: Zap,
    name: 'Fitness & Workout Matrices',
    permission: 'android.permission.health.READ_EXERCISE',
    description:
      'Reads exercise sessions and active minutes to record workout completions and unlock experience points (XP) in the gamified Flow Quests Arcade.',
    processing: 'Persisted only inside your phone’s encrypted local storage enclave.',
  },
  {
    icon: Camera,
    name: 'Camera Sensor (Pose Coach)',
    permission: 'android.permission.CAMERA',
    description:
      'Used exclusively during active workout sessions for real-time 33-point skeletal landmark detection and biomechanical posture alignment coaching.',
    processing: 'Zero cloud video. Frames are analyzed in volatile RAM and instantly discarded.',
  },
]

export function HealthConnectJustification() {
  return (
    <section id="health-connect" className="scroll-mt-24">
      {/* Section Header */}
      <div className="mx-auto max-w-[820px] text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--sage-subtle)] text-[var(--sage-strong)] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
          <ShieldCheck className="w-4 h-4" aria-hidden="true" />
          <span>Health Connect &amp; Sensor Compliance</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Strictly on-device health data. <span className="italic text-[var(--terracotta)]">Zero cloud persistence.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Thrivefold complies fully with Google Play’s Health Connect and Health Apps Policies. Here is exactly why we request access and how your data is protected.
        </p>
      </div>

      {/* Official Justification Statement Banner - Borderless, Clean Squircle */}
      <div className="squircle-card p-6 sm:p-10 mb-8 bg-[var(--surface)] text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] shrink-0">
              <Lock className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
                Official Declaration
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-medium text-[var(--ink)]">
                Health Connect &amp; Device Sensor Policy Statement
              </h3>
            </div>
          </div>
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[var(--sage-subtle)] text-[var(--sage-strong)] shrink-0">
            Google Play Compliant
          </span>
        </div>

        {/* The Exact User-Required Statement in warm tonal box */}
        <blockquote className="my-6 p-6 sm:p-8 rounded-3xl bg-[var(--surface2)] text-base sm:text-lg text-[var(--ink)] leading-relaxed font-serif italic">
          “Thrivefold utilizes Health Connect and device sensor permissions strictly on-device to read user activity, step count, sleep, and fitness matrices. This data is processed locally within gamified wellbeing routines to provide real-time self-care motivation. No raw health metrics or personal health data are sold, shared, or persisted to remote backend databases.”
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 text-xs sm:text-sm text-[var(--ink-secondary)]">
          <div className="squircle-inner p-4 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[var(--sage-strong)] shrink-0 mt-0.5" />
            <span><strong>No Remote Health DB:</strong> No backend health databases or cloud syncing of biometric logs.</span>
          </div>
          <div className="squircle-inner p-4 flex items-start gap-3">
            <EyeOff className="w-4 h-4 text-[var(--sage-strong)] shrink-0 mt-0.5" />
            <span><strong>Zero Ad Trackers:</strong> No third-party data brokers, ad networks, or commercial analytics.</span>
          </div>
          <div className="squircle-inner p-4 flex items-start gap-3">
            <Database className="w-4 h-4 text-[var(--sage-strong)] shrink-0 mt-0.5" />
            <span><strong>Hardware Encryption:</strong> All local records encrypted with hardware Keystore keys.</span>
          </div>
        </div>
      </div>

      {/* Permission Detail Cards - Flat Borderless */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
        {HEALTH_CONNECT_METRICS.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.name} className="squircle-card p-6 sm:p-8 flex flex-col justify-between bg-[var(--surface)]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)] shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <code className="text-[10px] sm:text-[11px] font-mono px-3 py-1 rounded-full bg-[var(--surface2)] text-[var(--ink-secondary)] break-all max-w-full">
                    {metric.permission}
                  </code>
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-medium text-[var(--ink)] mb-2">{metric.name}</h4>
                <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                  {metric.description}
                </p>
              </div>
              <div className="pt-4 text-xs text-[var(--sage-strong)] font-medium flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{metric.processing}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Step 3: Privacy Policy & Final Review Callout */}
      <div className="rounded-[32px] bg-[var(--surface2)] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
        <div className="space-y-1.5 max-w-[620px]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--terracotta-strong)]">
            Step 3: Privacy Policy &amp; Final Review
          </span>
          <h4 className="font-serif text-base sm:text-xl font-medium text-[var(--ink)]">
            Review the complete Privacy Policy and verified data safety disclosures.
          </h4>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
            Our public policy details in full transparency how Health Connect, sensors, and camera frames are handled, including user export (HL7 FHIR) and 1-tap local data deletion.
          </p>
        </div>
        <Link
          href="/privacy/"
          className="squircle-button shrink-0 inline-flex items-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-colors"
        >
          <span>Open Privacy Policy</span>
        </Link>
      </div>
    </section>
  )
}
