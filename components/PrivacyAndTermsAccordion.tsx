'use client'

import { useState } from 'react'
import { ShieldCheck, FileText, ChevronDown, Lock, CheckCircle2 } from 'lucide-react'

export function PrivacyAndTermsAccordion() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy')

  return (
    <section id="privacy" className="py-20 sm:py-28 bg-[var(--surface2)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--sage)] mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Sovereign Legal Commitments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight mb-3">
            Zero-Knowledge Privacy & Terms
          </h2>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] font-light">
            Everything you need to know about our data architecture, medical boundaries, and hardware encryption guarantees.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 rounded-2xl bg-[var(--surface)] border border-[var(--border)] mt-8 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('privacy')}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all interactive-btn flex items-center gap-2 ${
                activeTab === 'privacy'
                  ? 'bg-[var(--ink)] text-[var(--bg)] shadow-xs'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--sage)]" />
              <span>Zero-Knowledge Privacy Policy</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('terms')}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all interactive-btn flex items-center gap-2 ${
                activeTab === 'terms'
                  ? 'bg-[var(--ink)] text-[var(--bg)] shadow-xs'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[var(--clay)]" />
              <span>Terms & Medical Scope</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-sm thrive-card text-xs sm:text-sm leading-relaxed text-[var(--ink-secondary)] space-y-6">
          {activeTab === 'privacy' ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                <span className="font-serif text-lg font-bold text-[var(--ink)]">
                  Privacy Policy & Cryptographic Guarantees
                </span>
                <span className="text-[10px] font-mono text-[var(--ink-muted)]">
                  Effective October 2026 · Immutable Standard
                </span>
              </div>

              <div>
                <h4 className="font-bold text-[var(--ink)] text-sm mb-1">1. Absolute Zero-Surveillance Architecture</h4>
                <p>
                  Thrivefold operates as a local sovereign executable. We do not operate a centralized user database, we do not require account registration, and we do not collect your personal mental health reflections, somatic scores, CBT distortion logs, or mood timestamps. Your physical mobile device is the only computer that ever holds your records.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[var(--ink)] text-sm mb-1">2. Hardware-Enforced MMKV & Keystore Encryption</h4>
                <p>
                  All session data is written into an encrypted MMKV binary database stored locally on your device. Cryptographic encryption keys are generated via AES-256-GCM and kept strictly inside the iOS Secure Enclave or Android Keystore. Data is inaccessible to other apps, web browsers, or unauthorized users without biometric validation (Face ID / Fingerprint).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[var(--ink)] text-sm mb-1">3. Zero Advertising SDKs, Pixels, or Data Brokers</h4>
                <p>
                  Thrivefold contains no Facebook SDKs, Google Firebase Analytics, Adjust, AppsFlyer, or third-party behavioral trackers. We never sell, lease, or monetize your emotional history to insurance providers, corporate advertisers, or pharmaceutical groups.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[var(--ink)] text-sm mb-1">4. Permanent Data Destruction</h4>
                <p>
                  Because all records reside on your local storage, deleting the application permanently and irrevocably purges all encrypted databases and cryptographic keys from your hardware. For technical architectural inquiries, contact lead systems architect Amit Chakraborty at <a href="mailto:amit@devamit.co.in" className="underline text-[var(--ink)] font-medium">amit@devamit.co.in</a>.
                </p>
              </div>
            </div>
          ) : (
            <div id="terms" className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                <span className="font-serif text-lg font-bold text-[var(--ink)]">
                  Terms of Service & Clinical Boundaries
                </span>
                <span className="text-[10px] font-mono text-[var(--ink-muted)]">
                  Effective October 2026 · Standard Terms
                </span>
              </div>

              <div>
                <h4 className="font-bold text-[var(--ink)] text-sm mb-1">1. Clinical Scope & Non-Medical Disclaimer</h4>
                <p>
                  Thrivefold is a personal self-care, reflection, and psychological progress companion. It is not a licensed healthcare provider, diagnostic service, or emergency psychiatric intervention system. Content generated through local on-device heuristics does not constitute clinical medical advice or individualized diagnosis.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[var(--ink)] text-sm mb-1">2. Emergency Crisis Protocol</h4>
                <p>
                  If you are experiencing acute psychological crisis, suicidal thoughts, or a medical emergency, you must immediately contact professional emergency responders (such as dialing or texting <strong>988</strong> in the US & Canada, <strong>112</strong> in Europe, or visiting the nearest hospital emergency room).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[var(--ink)] text-sm mb-1">3. User Responsibility & Local Backups</h4>
                <p>
                  Because Thrivefold intentionally avoids cloud centralization for your security, you are solely responsible for managing physical backups of your device. Amit Dev Labs does not hold emergency master keys and cannot recover data from a physically lost or wiped handset.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[var(--ink)] text-sm mb-1">4. License & Ethical Use</h4>
                <p>
                  Thrivefold is provided &ldquo;as is&rdquo; without express warranties. Reverse-engineering local encryption routines or utilizing the software for commercial surveillance is strictly prohibited.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
