import { ShieldCheck, Lock, WifiOff, Key, Database, Cpu, Heart, Mail, EyeOff } from 'lucide-react'

export function HardwareSecuritySpecs() {
  const comparisons = [
    {
      feature: 'Reproductive & Hormonal Data',
      thrivefold: '100% local on physical device flash',
      commercial: 'Uploaded to cloud; sold to data brokers & insurers',
    },
    {
      feature: 'Pen-Pal Messaging Safety',
      thrivefold: 'Curated sentiment chips · 0 toxic chat',
      commercial: 'Unfiltered text, unsolicited images, stalking risk',
    },
    {
      feature: 'Biometric Pose & Telemetry',
      thrivefold: 'Google MediaPipe in volatile RAM only',
      commercial: 'Video/audio streams sent to remote AI inference servers',
    },
    {
      feature: 'Identity & Age Assurance',
      thrivefold: '18+ cryptographic token (0 ID images saved)',
      commercial: 'Permanent profile databases, cookies, phone tracking',
    },
    {
      feature: 'Data Sovereignty & Purge',
      thrivefold: 'Instant 1-tap wipe + full JSON export',
      commercial: '90-day retention limbo with retained backup copies',
    },
  ]

  return (
    <section id="security" className="scroll-mt-24">
      {/* Header */}
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Hardware Security Covenant
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Your intimate health is <span className="italic text-[var(--terracotta)]">non-negotiable.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Commercial health and period-tracking apps monetize user vulnerabilities or leak intimate reproductive data during breaches. Thrivefold is built on hardware sovereignty: your biology and letters never leave your phone.
        </p>
      </div>

      <div className="space-y-10">
        {/* Comparison Table Card */}
        <div className="squircle-card p-6 sm:p-10 bg-white max-w-[1040px] mx-auto text-left overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-12 pb-3 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] px-3 border-b border-[var(--border)]">
              <div className="col-span-5">Privacy Architecture</div>
              <div className="col-span-4 text-[var(--terracotta)] font-bold">Thrivefold Sovereign Vault</div>
              <div className="col-span-3 text-[var(--ink-secondary)]">Commercial Wellness Apps</div>
            </div>

            <div className="space-y-1 text-xs sm:text-sm pt-2">
              {comparisons.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 py-3.5 px-3 items-center rounded-2xl transition-colors hover:bg-[var(--surface2)]/50">
                  <div className="col-span-5 font-medium text-[var(--ink)] pr-4">
                    {row.feature}
                  </div>
                  <div className="col-span-4 font-semibold text-[var(--sage-strong)] pr-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>{row.thrivefold}</span>
                  </div>
                  <div className="col-span-3 text-[var(--ink-muted)]">
                    {row.commercial}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Hardware Specs Pill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1040px] mx-auto">
          <div className="squircle-card p-6 sm:p-7 bg-white text-left">
            <div className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2">
              Secure Enclave Keystore
            </h3>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
              AES-256 keys are minted directly inside the iOS Secure Enclave or Android Hardware Keystore. Even physical access cannot extract your keys without biometric Face ID/Fingerprint authorization.
            </p>
          </div>

          <div className="squircle-card p-6 sm:p-7 bg-white text-left">
            <div className="w-10 h-10 rounded-2xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)] mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2">
              MMKV Binary Local Vault
            </h3>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
              Eliminates SQLite overhead and remote database leakage. Direct binary memory mapping ensures instant app boot, zero network latency, and complete functional independence offline.
            </p>
          </div>

          <div className="squircle-card p-6 sm:p-7 bg-white text-left">
            <div className="w-10 h-10 rounded-2xl bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)] mb-4">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2">
              Zero Telemetry Footprint
            </h3>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
              Verify our network traffic: 0 tracking pixels, 0 advertising SDKs, and 0 third-party analytics. What happens inside your sanctuary stays strictly confined to your silicon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
