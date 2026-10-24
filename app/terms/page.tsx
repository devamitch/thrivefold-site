import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Scale, AlertTriangle, ShieldAlert, Heart, FileCheck, CheckCircle2 } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Terms of Service — Thrivefold Sovereign Health Sanctuary',
  description: 'Terms of Service, community standards, age assurance covenants, and non-emergency medical disclaimers for the Thrivefold health and wellness ecosystem.',
}

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-28 pb-20 px-4 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[880px]">
          {/* Breadcrumb / Back Link */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[var(--ink-secondary)] hover:text-[var(--terracotta)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Sanctuary</span>
          </Link>

          {/* Header Card */}
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-8 sm:p-12 shadow-[var(--shadow-card)] mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface2)] px-3 py-1.5 text-xs font-semibold text-[var(--terracotta)] mb-4">
              <Scale className="w-4 h-4 text-[var(--terracotta)]" />
              <span>Terms of Service & Sanctuary Covenant</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] mb-4">
              Humane Software Built on Trust, Accountability, and Safety.
            </h1>

            <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
              These Terms govern your use of the Thrivefold mobile applications, web services, and verified activity circles. By accessing Thrivefold, you enter a mutual covenant of personal safety, respectful peer participation, and local data sovereignty.
            </p>

            <div className="mt-6 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
              <span>Last Revised: October 2026 · Release 1.0</span>
              <span className="inline-flex items-center gap-1.5 text-[var(--terracotta)] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Human Rights & Safety First
              </span>
            </div>
          </div>

          {/* Emergency Distress Alert Box */}
          <div className="rounded-[24px] border-2 border-[var(--terracotta)]/40 bg-[#FFF7F4] p-6 sm:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--terracotta)] text-white">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-2 text-sm sm:text-base leading-relaxed text-[var(--ink)]">
                <h2 className="font-serif text-lg font-bold text-[#883506]">
                  Critical Medical & Crisis Services Notice (Non-Emergency Platform)
                </h2>
                <p className="text-[var(--ink-secondary)]">
                  <strong>Thrivefold is NOT an emergency response platform, medical provider, suicide prevention hotline, or licensed psychiatric clinic.</strong>
                </p>
                <p className="text-[var(--ink-secondary)]">
                  If you are contemplating self-harm, suicide, or experiencing acute medical distress, please contact emergency responders immediately:
                </p>
                <div className="flex flex-wrap gap-3 pt-2 text-xs sm:text-sm font-semibold">
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-[var(--terracotta)]/30 text-[#883506]">
                    USA & Canada: Call or text 988
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-[var(--terracotta)]/30 text-[#883506]">
                    UK: Call 111 or 999
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-[var(--terracotta)]/30 text-[#883506]">
                    International: Contact local emergency services
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-8 text-[15px] sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            {/* Section 1 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  1
                </span>
                <h2>Strict 18+ Age Assurance & Safety Shield</h2>
              </div>
              <p className="mb-3">
                Thrivefold is an intentional sanctuary engineered exclusively for adults aged 18 and older.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Mandatory 18+ Verification:</strong> You represent and warrant that you are at least 18 years of age. Minor access is strictly forbidden.
                </li>
                <li>
                  <strong>Restricted Trial for Under-25 Cohorts:</strong> Users aged 18 to 24 undergo a mandatory 7-day protective trial period with complete isolation from public member discovery directories.
                </li>
                <li>
                  <strong>Zero-Tolerance Exploitation Policy:</strong> Any attempt to solicit minors, harvest personal addresses, or engage in predatory behavior results in immediate account termination, device bans, and reporting to relevant law enforcement authorities.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  2
                </span>
                <h2>Activity Circles &amp; Community Guidelines</h2>
              </div>
              <p className="mb-3">
                Thrivefold fosters intentional health, fitness, and recovery connections through verified activity circles:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Progression Gated:</strong> Participation in activity circles (Gym pals, therapy groups, meditation circles, sports hubs) requires Level 3+ verified progression.
                </li>
                <li>
                  <strong>No Commercial Solicitation or Spam:</strong> You may not use Thrivefold activity circles to promote products, solicit investments, share external URLs, or distribute unwanted promotional content.
                </li>
                <li>
                  <strong>Respectful Peer Engagement:</strong> Thrivefold exists to promote health, mutual encouragement, and wellbeing. Harassment, discrimination, or abusive conduct results in immediate account and device revocation.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  3
                </span>
                <h2>Nature of Health Tracking & Educational Tools</h2>
              </div>
              <p className="mb-3">
                Thrivefold offers self-regulation workbooks across three dedicated pillars:
              </p>
              <p className="mb-3">
                1. <strong>Women&apos;s Health:</strong> Cycle tracking, follicular/luteal nutrition guidance, and pelvic floor pacing are educational references, not certified contraception or obstetric diagnosis.
              </p>
              <p className="mb-3">
                2. <strong>Men&apos;s Health:</strong> Stamina tracking, cold therapy timers, and recovery telemetry are fitness self-monitoring aids, not endocrinology treatment.
              </p>
              <p>
                3. <strong>Pride & Wellbeing:</strong> HRT dose schedules and injection rotation reminders are personal logbooks, not medical prescribing services. Always consult your endocrinologist or primary care physician.
              </p>
            </section>

            {/* Section 4 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  4
                </span>
                <h2>User Sovereignty & Data Rights</h2>
              </div>
              <p className="mb-3">
                You retain 100% intellectual property ownership over your personal reflections, journal entries, and self-care logs. Because Thrivefold operates on-device, we claim zero license, title, or interest in your local records.
              </p>
              <p>
                You may export your data or execute a total, irreversible purge at any moment directly from the application settings without needing customer service approval.
              </p>
            </section>

            {/* Section 5 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  5
                </span>
                <h2>Limitation of Liability</h2>
              </div>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, THRIVEFOLD AND AMIT DEV LABS ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APPLICATION, HEALTH INSIGHTS, COMPUTER VISION TELEMETRY, OR ACTIVITY CIRCLE INTERACTIONS.
              </p>
            </section>

            {/* Section 6 */}
            <section className="rounded-[24px] border border-[var(--border)] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lg font-serif font-semibold text-[var(--ink)] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--terracotta)] text-sm font-sans">
                  6
                </span>
                <h2>Governing Law & Legal Contact</h2>
              </div>
              <p className="mb-3">
                These Terms shall be governed by and construed in accordance with the laws of Karnataka, India, without regard to conflict of law principles.
              </p>
              <p className="font-mono text-xs sm:text-sm bg-[var(--surface2)] p-4 rounded-xl text-[var(--ink)]">
                Amit Dev Labs · Legal & Terms Compliance<br />
                Email: amit@devamit.co.in<br />
                Address: Bengaluru, Karnataka, India<br />
                Website: https://devamit.co.in
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
