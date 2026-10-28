import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Database, EyeOff, Lock, ShieldCheck, Trash2, Download, AlertCircle } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy — Health Connect & Data Safety | Thrivefold',
  description:
    'Thrivefold utilizes Health Connect and device sensor permissions strictly on-device to read user activity, step count, sleep, and fitness matrices. No raw health metrics are sold, shared, or persisted to remote backend databases.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
}

const HEALTH_CONNECT_DECLARATIONS = [
  {
    permission: 'android.permission.health.READ_STEPS',
    label: 'Step Count & Movement',
    purpose:
      'Reads daily steps to calculate real-time vitality scores, movement streaks, and unlock progress milestones in the Flow Quests Arcade.',
    storage: 'Processed strictly locally in device volatile RAM & encrypted SQLite enclave.',
  },
  {
    permission: 'android.permission.health.READ_SLEEP',
    label: 'Sleep Duration & Stages',
    purpose:
      'Reads restful sleep duration to suggest tailored daily routines (e.g. recommending gentle mobility flows when recovery is low).',
    storage: 'Processed strictly on-device; never uploaded to any remote server.',
  },
  {
    permission: 'android.permission.health.READ_EXERCISE',
    label: 'Exercise & Workout History',
    purpose:
      'Reads exercise sessions and active minutes to record consistency in your holistic calendar and grant XP rewards.',
    storage: 'Encrypted locally via Android Keystore hardware keys.',
  },
  {
    permission: 'android.permission.CAMERA',
    label: 'On-Device Camera (Pose Coach)',
    purpose:
      'Detects 33 skeletal body landmarks during active guided workouts to provide real-time biomechanical posture and cadence feedback.',
    storage: '100% volatile memory. Zero frames or video streams are ever saved to disk or transmitted.',
  },
  {
    permission: 'android.permission.ACTIVITY_RECOGNITION',
    label: 'Device Motion Sensors & Pedometer',
    purpose:
      'Provides fallback step counting when the user is offline or when Health Connect is unavailable on older Android versions.',
    storage: 'Stored strictly on your physical phone.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-28 pb-20 px-4 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[880px]">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--ink-secondary)] hover:text-[var(--terracotta)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Thrivefold Home</span>
          </Link>

          {/* Header Card - Zero Borders */}
          <div className="rounded-[36px] bg-[var(--surface)] p-8 sm:p-12 mb-10 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--sage-subtle)] text-[var(--sage-strong)] text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Step 3: Privacy Policy &amp; Final Review</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] mb-4">
              Privacy Policy &amp; Health Data Safety
            </h1>
            <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
              This Privacy Policy explains how Thrivefold handles Health Connect data, device sensor permissions, camera landmark processing, and user records. Our sovereign architecture guarantees that your health data stays on your device.
            </p>
            <div className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
              <span><strong>Effective Date:</strong> 28 October 2026</span>
              <span><strong>Canonical URL:</strong> <a href="https://thrivefold.devamit.co.in/privacy" className="text-[var(--terracotta)] underline">https://thrivefold.devamit.co.in/privacy</a></span>
            </div>
          </div>

          <div className="space-y-8 text-[15px] sm:text-base text-[var(--ink-secondary)] leading-relaxed text-left">
            {/* Core Declaration Box - Clean Borderless Squircle */}
            <section id="health-connect-declaration" className="scroll-mt-24 rounded-[32px] bg-[var(--surface)] p-7 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
                    Google Play Health Connect &amp; Permissions Declaration
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)]">
                    Official Permission Justification
                  </h2>
                </div>
              </div>

              {/* The Exact User-Required Text in Soft Surface Pill */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface2)] my-5">
                <p className="text-base sm:text-lg font-serif italic text-[var(--ink)] leading-relaxed">
                  “Thrivefold utilizes Health Connect and device sensor permissions strictly on-device to read user activity, step count, sleep, and fitness matrices. This data is processed locally within gamified wellbeing routines to provide real-time self-care motivation. No raw health metrics or personal health data are sold, shared, or persisted to remote backend databases.”
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm">
                <div className="squircle-inner p-4 flex items-start gap-2.5 text-[var(--ink)] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[var(--sage-strong)] shrink-0 mt-0.5" />
                  <span>Processed 100% on-device</span>
                </div>
                <div className="squircle-inner p-4 flex items-start gap-2.5 text-[var(--ink)] font-medium">
                  <EyeOff className="w-4 h-4 text-[var(--sage-strong)] shrink-0 mt-0.5" />
                  <span>Zero advertising or data sales</span>
                </div>
                <div className="squircle-inner p-4 flex items-start gap-2.5 text-[var(--ink)] font-medium">
                  <Database className="w-4 h-4 text-[var(--sage-strong)] shrink-0 mt-0.5" />
                  <span>No remote health databases</span>
                </div>
              </div>
            </section>

            {/* Health Connect Specific Permissions Table */}
            <section id="permissions-breakdown" className="scroll-mt-24 rounded-[32px] bg-[var(--surface)] p-7 sm:p-9">
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-3">
                1. Permissions &amp; Data Types Requested
              </h2>
              <p className="mb-6 text-sm text-[var(--ink-secondary)]">
                In strict adherence to the Google Play Health Apps Policy, Thrivefold requests access exclusively to health and sensor data required to deliver core self-care routines:
              </p>

              <div className="space-y-3.5">
                {HEALTH_CONNECT_DECLARATIONS.map((item) => (
                  <div key={item.permission} className="p-5 rounded-2xl bg-[var(--surface2)] space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-semibold text-sm sm:text-base text-[var(--ink)]">{item.label}</span>
                      <code className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white text-[var(--ink-muted)]">
                        {item.permission}
                      </code>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--ink-secondary)]">{item.purpose}</p>
                    <p className="text-xs font-medium text-[var(--sage-strong)] flex items-center gap-1.5 pt-1">
                      <Lock className="w-3.5 h-3.5" />
                      <span>{item.storage}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Camera Pose Coach Security */}
            <section id="camera-coach" className="scroll-mt-24 rounded-[32px] bg-[var(--surface)] p-7 sm:p-9">
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-3">
                2. On-Device Camera Pose Coach &amp; Biomechanics
              </h2>
              <p className="mb-3">
                Thrivefold includes an on-device camera coach for guided workouts, posture resets, and breathing flows.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[var(--ink-secondary)]">
                <li>
                  <strong>Volatile Memory Only:</strong> Camera frames are fed directly into local MLKit / MediaPipe skeletal landmark models in volatile RAM.
                </li>
                <li>
                  <strong>Zero Video Recording:</strong> Camera video is never encoded into video files, never saved to phone storage, and never uploaded to any remote server or cloud service.
                </li>
                <li>
                  <strong>Optional Permission:</strong> Camera access is completely optional. You can enjoy all daily check-ins, cycle tracking, and bodyweight workout libraries without enabling the camera.
                </li>
              </ul>
            </section>

            {/* What We Store & Where */}
            <section id="local-storage" className="scroll-mt-24 rounded-[32px] bg-[var(--surface)] p-7 sm:p-9">
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-3">
                3. What Stays on Your Device &amp; How It Is Encrypted
              </h2>
              <p className="mb-3">
                Thrivefold is an offline-first application participating in the AnvayKosh ecosystem. The following records stay strictly inside your physical phone’s local enclave:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[var(--ink-secondary)]">
                <li>Daily Vitality check-ins, mood reflections, hydration counts, and intentions.</li>
                <li>Menstrual cycle bleeding logs, symptoms, and phase notes.</li>
                <li>Workout histories, repetition counts, and Flow Quest XP progression.</li>
                <li>Personal care notes and medication reminder times.</li>
              </ul>
              <p className="mt-4 text-sm sm:text-base">
                All records are encrypted using hardware-backed cryptographic keys managed by Android Keystore / iOS Keychain (AES-256-GCM). Data cannot be decrypted or inspected by third-party apps.
              </p>
            </section>

            {/* What We Never Do */}
            <section id="prohibitions" className="scroll-mt-24 rounded-[32px] bg-[var(--surface)] p-7 sm:p-9">
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-3">
                4. What We Do NOT Do (Zero Telemetry Guarantee)
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>No Selling or Monetization:</strong> We do not sell, rent, license, or disclose your health, activity, or personal information to data brokers, insurance providers, employers, or marketing entities.
                </p>
                <p>
                  <strong>No Third-Party Advertising:</strong> Thrivefold contains zero third-party ads, banner networks, or behavioral tracking SDKs.
                </p>
                <p>
                  <strong>No Remote Biometric Database:</strong> We do not operate remote servers or centralized cloud databases that store your raw step counts, sleep stages, or health records.
                </p>
                <p>
                  <strong>No Cookies on Website:</strong> This website (<a href="https://thrivefold.devamit.co.in" className="text-[var(--terracotta)] underline">thrivefold.devamit.co.in</a>) does not set tracking cookies or run tracking analytics scripts.
                </p>
              </div>
            </section>

            {/* Export and Deletion Rights */}
            <section id="user-rights" className="scroll-mt-24 rounded-[32px] bg-[var(--surface)] p-7 sm:p-9">
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-3">
                5. User Rights: Export, Revocation &amp; Deletion
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-[var(--terracotta-strong)] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--ink)] text-base">Standardized HL7 FHIR Export</h3>
                    <p className="text-sm text-[var(--ink-secondary)]">
                      You can export your complete health records at any time in standardized HL7 FHIR or JSON format directly from the app to share with your personal healthcare provider.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Trash2 className="w-5 h-5 text-[var(--terracotta-strong)] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--ink)] text-base">1-Tap Complete Local Wipe</h3>
                    <p className="text-sm text-[var(--ink-secondary)]">
                      You can permanently delete all local records, check-ins, and logs directly from <em>Settings &gt; Storage &gt; Delete All Data</em>. This action immediately wipes local encryption keys and data without requiring contact with our servers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[var(--terracotta-strong)] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--ink)] text-base">Revoking Health Connect Permissions</h3>
                    <p className="text-sm text-[var(--ink-secondary)]">
                      You can modify or revoke Health Connect permissions at any time via <em>Android Settings &gt; Privacy &gt; Health Connect &gt; App Permissions &gt; Thrivefold</em>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Medical Disclaimer */}
            <section id="medical-disclaimer" className="scroll-mt-24 rounded-[32px] bg-[var(--terracotta-subtle)] p-7 sm:p-9">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-[var(--terracotta-strong)]" />
                <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--terracotta-strong)]">
                  6. Health &amp; Fitness Notice
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
                Thrivefold is a general fitness, ergonomic movement, and mindful wellbeing application intended to encourage healthy physical activity and posture habits. Thrivefold is NOT a medical device and does NOT diagnose, treat, cure, or prevent any injury, cardiovascular condition, musculoskeletal disorder, or disease. Always consult a qualified physician or healthcare provider before beginning any new exercise routine.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[var(--ink)] font-semibold">
                In a crisis: Call or text 988 (US and Canada), call 999 or 111 (UK), 112 (India/EU), or contact your local emergency services immediately.
              </p>
            </section>

            {/* Contact Details */}
            <section id="contact" className="scroll-mt-24 rounded-[32px] bg-[var(--surface)] p-7 sm:p-9">
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[var(--ink)] mb-3">
                7. Developer Contact &amp; Governance
              </h2>
              <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
                If you have questions, feedback, or requests concerning this Privacy Policy or your data rights, please contact our team directly:
              </p>
              <div className="mt-4 p-5 rounded-2xl bg-[var(--surface2)] text-xs sm:text-sm space-y-1 text-[var(--ink)]">
                <p><strong>Entity:</strong> Amit Dev Labs</p>
                <p><strong>Lead Developer:</strong> Amit Chakraborty</p>
                <p><strong>Contact Email:</strong> <a href={`mailto:${siteConfig.contactEmail}`} className="text-[var(--terracotta)] underline">{siteConfig.contactEmail}</a></p>
                <p><strong>Location:</strong> Bengaluru, Karnataka, India</p>
                <p><strong>Public URL:</strong> <a href="https://thrivefold.devamit.co.in/privacy" className="text-[var(--terracotta)] underline">https://thrivefold.devamit.co.in/privacy</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
