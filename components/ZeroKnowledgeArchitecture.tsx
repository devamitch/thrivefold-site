import { ShieldCheck, Lock, Cpu, Database, AlertCircle, PhoneCall, Check, X } from 'lucide-react'

export function ZeroKnowledgeArchitecture() {
  const comparisons = [
    {
      feature: 'Therapy & Journal Storage',
      commercial: 'Central cloud database (AWS/Firebase) accessible to company staff',
      thrivefold: '100% On-Device MMKV vault encrypted with AES-256-GCM',
    },
    {
      feature: 'Ad Pixels & Analytics Trackers',
      commercial: 'Facebook Pixel, Adjust, AppsFlyer, Google Analytics embedded',
      thrivefold: 'Zero third-party trackers, zero advertising SDKs, zero pixels',
    },
    {
      feature: 'AI Analysis & Reframing',
      commercial: 'Transmits unencrypted notes to third-party cloud LLM APIs',
      thrivefold: 'Runs entirely on local neural engine via ONNX Runtime & CoreML',
    },
    {
      feature: 'Biometric Access Control',
      commercial: 'Simple email/password login or third-party social OAuth',
      thrivefold: 'Hardware-enforced Face ID / Fingerprint Secure Enclave lock',
    },
    {
      feature: 'Data Deletion Guarantee',
      commercial: 'Ghost records retained on cloud backups for marketing/training',
      thrivefold: 'Uninstalling app irreversibly wipes all keys and database rows',
    },
  ]

  return (
    <section id="architecture" className="py-20 sm:py-28 bg-[var(--surface2)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--sage)] mb-4 shadow-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>Architecture & Zero-Surveillance Engineering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mb-4">
            Privacy Enforced by Cryptography, Not Promises
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed font-light">
            Your deepest vulnerabilities, therapy reflections, and somatic states belong to you alone. We engineered Thrivefold so that even our lead developers cannot access your journal entries or emotional logs.
          </p>
        </div>

        {/* Side-by-Side Architectural Contrast Table */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-sm thrive-card mb-12">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--ink)] mb-6 text-center">
            How Thrivefold Compares to Traditional Mental Health Apps
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 font-mono uppercase text-[10px] sm:text-xs text-[var(--ink-muted)] w-1/3">
                    Architectural Dimension
                  </th>
                  <th className="pb-4 font-mono uppercase text-[10px] sm:text-xs text-[var(--clay)] w-1/3">
                    Commercial Health Apps
                  </th>
                  <th className="pb-4 font-mono uppercase text-[10px] sm:text-xs text-[var(--sage)] w-1/3">
                    Thrivefold Sovereign OS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {comparisons.map((c, i) => (
                  <tr key={i} className="hover:bg-[var(--surface2)]/40 transition-colors">
                    <td className="py-4 pr-4 font-medium text-[var(--ink)]">
                      {c.feature}
                    </td>
                    <td className="py-4 pr-4 text-[var(--ink-secondary)]">
                      <div className="flex items-start gap-1.5">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{c.commercial}</span>
                      </div>
                    </td>
                    <td className="py-4 text-[var(--ink)] font-medium">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-[var(--sage)] shrink-0 mt-0.5" />
                        <span>{c.thrivefold}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security & Emergency Crisis Disclosure Banner */}
        <div id="security" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Medical Disclaimer Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)]">
                <AlertCircle className="w-5 h-5 text-[var(--clay)]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[var(--ink)]">Clinical Scope & Boundaries</h4>
                <span className="text-[10px] font-mono text-[var(--ink-muted)]">Transparent Boundaries</span>
              </div>
            </div>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed mb-4">
              Thrivefold is a self-directed emotional reflection and psychological tracking tool designed to augment, not replace, licensed clinical psychiatric care or psychotherapy. It does not provide medical diagnoses or prescribe medications.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--ink-muted)]">
              <ShieldCheck className="w-4 h-4 text-[var(--sage)]" />
              <span>Compliant with ethical wellness software standards</span>
            </div>
          </div>

          {/* Crisis Hotline Integration Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--sage-container)] flex items-center justify-center text-[var(--sage)]">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[var(--ink)]">Immediate Crisis Support (24/7)</h4>
                <span className="text-[10px] font-mono text-[var(--sage)] font-bold">Free · Confidential · Live</span>
              </div>
            </div>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed mb-4">
              If you or a loved one are experiencing acute psychological distress, self-harm thoughts, or a medical emergency, immediate professional human help is available right now:
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="tel:988"
                className="px-4 py-2 rounded-xl bg-[var(--surface2)] border border-[var(--border)] font-bold text-[var(--ink)] hover:border-[var(--sage)] hover:text-[var(--sage)] transition-all flex items-center gap-1.5"
              >
                <span>Call or Text 988</span>
                <span className="text-[10px] font-normal text-[var(--ink-muted)]">(USA & Canada)</span>
              </a>
              <a
                href="https://findahelpline.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[var(--surface2)] border border-[var(--border)] font-bold text-[var(--ink)] hover:border-[var(--sage)] hover:text-[var(--sage)] transition-all flex items-center gap-1.5"
              >
                <span>Find A Helpline (Global)</span>
                <span className="text-[10px] font-normal text-[var(--ink-muted)]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
