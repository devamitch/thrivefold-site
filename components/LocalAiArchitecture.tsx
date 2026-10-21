import { Cpu, ShieldCheck, Lock, Database, RefreshCw, Zap } from 'lucide-react'

export function LocalAiArchitecture() {
  const tiers = [
    {
      title: 'Local ONNX & Neural Classifiers',
      icon: Cpu,
      description: 'Sentiment validation, cycle prediction, and recovery algorithms execute in native C++ via ONNX Runtime on the device Neural Engine (NPU / GPU). No raw telemetry ever touches external inference servers.',
    },
    {
      title: 'MMKV Hardware-Encrypted Vault',
      icon: Lock,
      description: 'Health records, cycle logs, and journal cards are serialized into encrypted MMKV binary storage using platform secure enclaves (iOS Keychain / Android Keystore AES-256-GCM).',
    },
    {
      title: 'Deterministic Policy Engine',
      icon: ShieldCheck,
      description: 'Strict 18+ adult age verification and a 7-day under-25 restricted trial isolate new accounts. Prohibits unstructured chat, contact sharing, and unsolicited messaging by construction.',
    },
    {
      title: 'Zero-Knowledge Relay Sync',
      icon: RefreshCw,
      description: 'When exchanging postal letters, only end-to-end encrypted packet hashes travel across relays. The sync server cannot read letter contents, sender identities, or health telemetry.',
    },
  ]

  return (
    <section className="w-full py-16 sm:py-24 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--sage)] font-semibold">
            Zero Surveillance Sovereignty
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mt-2 mb-4">
            How On-Device Sovereignty Works
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            Most health platforms monetize sensitive cycle, endocrine, and mental wellness data. Thrivefold is built with a strict mathematical privacy boundary: your phone is the entire datacenter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t, idx) => {
            const Icon = t.icon
            return (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] thrive-card flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--ink)] mb-4">
                    <Icon className="w-5 h-5 text-[var(--rose)]" />
                  </div>
                  <h3 className="font-bold text-base text-[var(--ink)] mb-2">{t.title}</h3>
                  <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">{t.description}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[var(--border)] text-[10px] font-mono text-[var(--ink-muted)]">
                  Tier 0{idx + 1} Boundary Verified
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
