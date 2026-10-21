import { ShieldCheck, Lock, WifiOff, Key, Database, Cpu } from 'lucide-react'

export function HardwareSecuritySpecs() {
  const comparisons = [
    {
      feature: 'Data Storage Location',
      thrivefold: 'Strictly on your physical device',
      commercial: 'Centralized AWS/GCP cloud databases',
    },
    {
      feature: 'Account & Identity',
      thrivefold: 'Zero accounts · Biometric Face ID / PIN',
      commercial: 'Email, phone, social login, card numbers',
    },
    {
      feature: 'Ad Pixels & Analytics',
      thrivefold: '0 tracking pixels · 0 telemetry packets',
      commercial: 'Meta Pixel, TikTok SDK, Google Analytics',
    },
    {
      feature: 'Offline Operation',
      thrivefold: '100% functional in Airplane Mode',
      commercial: 'Requires active internet connection',
    },
    {
      feature: 'Cryptography Keys',
      thrivefold: 'Stored in Hardware Secure Enclave',
      commercial: 'Managed on remote corporate servers',
    },
  ]

  return (
    <section id="security" className="scroll-mt-24">
      {/* Header */}
      <div className="mx-auto max-w-[720px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Hardware Security
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Your emotional privacy is <span className="italic text-[var(--terracotta)]">non-negotiable.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Most mental wellness apps monetize user vulnerabilities or leak private reflections during cloud data breaches. Thrivefold is built on hardware sovereignty: your thoughts never leave your phone.
        </p>
      </div>

      <div className="space-y-10">
        {/* Comparison Table Card */}
        <div className="squircle-card p-6 sm:p-10 bg-white max-w-[1040px] mx-auto text-left overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-12 pb-4 border-b border-[var(--border)] text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              <div className="col-span-5">Privacy Architecture</div>
              <div className="col-span-4 text-[var(--terracotta)]">Thrivefold Vault</div>
              <div className="col-span-3 text-[var(--ink-secondary)]">Commercial Mental Apps</div>
            </div>

            <div className="divide-y divide-[var(--border)] text-xs sm:text-sm">
              {comparisons.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 py-4 items-center">
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
          <div className="squircle-card p-6 bg-white text-left">
            <div className="w-9 h-9 rounded-full bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] mb-4">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-medium text-[var(--ink)] mb-1.5">
              Secure Enclave Keystore
            </h3>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Cryptographic keys are generated inside the iOS Secure Enclave or Android Keystore chip. Even a compromised OS cannot extract your encryption keys without biometric authorization.
            </p>
          </div>

          <div className="squircle-card p-6 bg-white text-left">
            <div className="w-9 h-9 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)] mb-4">
              <Database className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-medium text-[var(--ink)] mb-1.5">
              MMKV High-Speed Binary
            </h3>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Eliminates SQLite overhead and remote database sync. Direct binary memory mapping allows instant launch, zero lag, and complete offline persistence.
            </p>
          </div>

          <div className="squircle-card p-6 bg-white text-left">
            <div className="w-9 h-9 rounded-full bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)] mb-4">
              <WifiOff className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-medium text-[var(--ink)] mb-1.5">
              Zero Telemetry Footprint
            </h3>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Inspect our network traffic: zero HTTP POST requests sent, no advertising SDKs loaded, and zero telemetry pings. What happens in Thrivefold stays strictly on your silicon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
