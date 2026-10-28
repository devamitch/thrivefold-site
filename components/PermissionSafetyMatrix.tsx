import { Check, ShieldAlert, ShieldCheck, X } from 'lucide-react'

const PERMISSION_ROWS = [
  {
    permission: 'Health Connect: Steps & Distance',
    scope: 'android.permission.health.READ_STEPS',
    purpose: 'Calculates daily vitality scores and movement streaks in gamified wellbeing routines.',
    storage: '100% On-Device (Hardware Keystore)',
    remoteBackup: false,
    thirdParty: false,
  },
  {
    permission: 'Health Connect: Sleep Sessions',
    scope: 'android.permission.health.READ_SLEEP',
    purpose: 'Informs recovery suggestions (e.g. gentle mobility instead of high-strain routines).',
    storage: '100% On-Device (Hardware Keystore)',
    remoteBackup: false,
    thirdParty: false,
  },
  {
    permission: 'Health Connect: Exercise & Workouts',
    scope: 'android.permission.health.READ_EXERCISE',
    purpose: 'Syncs completed workouts with Flow Quests Arcade to reward consistency with XP.',
    storage: '100% On-Device (Hardware Keystore)',
    remoteBackup: false,
    thirdParty: false,
  },
  {
    permission: 'Camera (Pose Coach)',
    scope: 'android.permission.CAMERA',
    purpose: 'Real-time 33-point skeletal landmark detection for workout form alignment feedback.',
    storage: 'Volatile RAM Only (0 frames saved)',
    remoteBackup: false,
    thirdParty: false,
  },
  {
    permission: 'Physical Activity & Pedometer',
    scope: 'android.permission.ACTIVITY_RECOGNITION',
    purpose: 'Fallback step tracking when offline or when Health Connect is not configured.',
    storage: '100% On-Device (Local SQLite)',
    remoteBackup: false,
    thirdParty: false,
  },
  {
    permission: 'Anvay Vault Enclave',
    scope: 'Internal Android Keystore / AES-GCM',
    purpose: 'Protects personal profile notes, cycle logs, and quest progression locally.',
    storage: 'Hardware-backed Keystore',
    remoteBackup: false,
    thirdParty: false,
  },
]

export function PermissionSafetyMatrix() {
  return (
    <section id="permissions" className="scroll-mt-24">
      <div className="mx-auto max-w-[820px] text-center mb-10 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--terracotta)] block mb-3">
          Zero Telemetry · Full Transparency
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Permission & Data Safety <span className="italic text-[var(--terracotta)]">Matrix.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          We believe privacy policies should be unambiguous. Every sensor and permission requested by Thrivefold is accounted for below.
        </p>
      </div>

      <div className="squircle-card overflow-hidden p-5 sm:p-8 text-left bg-[var(--surface)]">
        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-left text-xs sm:text-sm min-w-[560px]">
            <thead>
              <tr className="border-b border-[var(--border)] text-[var(--ink-muted)] text-[11px] uppercase tracking-wider">
                <th className="pb-3.5 pr-4 font-semibold">Permission / Data Scope</th>
                <th className="pb-3.5 px-4 font-semibold">User Purpose</th>
                <th className="pb-3.5 px-4 font-semibold">Where Stored</th>
                <th className="pb-3.5 px-3 text-center font-semibold">Remote DB</th>
                <th className="pb-3.5 pl-3 text-center font-semibold">Sold/Shared</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {PERMISSION_ROWS.map((row) => (
                <tr key={row.permission} className="hover:bg-[var(--surface2)]/40 transition-colors">
                  <td className="py-4 pr-4">
                    <span className="font-semibold text-[var(--ink)] block">{row.permission}</span>
                    <code className="text-[10px] font-mono text-[var(--ink-muted)] block mt-0.5 break-all">
                      {row.scope}
                    </code>
                  </td>
                  <td className="py-4 px-4 text-[var(--ink-secondary)] max-w-xs leading-relaxed">
                    {row.purpose}
                  </td>
                  <td className="py-4 px-4 font-medium text-[var(--sage-strong)]">
                    {row.storage}
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--sage-subtle)] text-[var(--sage-strong)]">
                      <X className="w-3.5 h-3.5" aria-label="Never stored remotely" />
                    </span>
                  </td>
                  <td className="py-4 pl-3 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--sage-subtle)] text-[var(--sage-strong)]">
                      <X className="w-3.5 h-3.5" aria-label="Never sold or shared" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <p>
            * You can revoke any permission at any time in Android Settings &gt; Apps &gt; Thrivefold &gt; Permissions.
          </p>
          <a
            href="/privacy/"
            className="text-[var(--terracotta)] font-semibold hover:underline underline-offset-2 shrink-0"
          >
            Review Step 3 Privacy Policy &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
