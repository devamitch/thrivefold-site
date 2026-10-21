'use client'

import { useState } from 'react'
import { TrendingUp, BarChart3, Calendar, ShieldCheck, ArrowUpRight, CheckCircle2, HeartPulse, Brain, Moon, Sun } from 'lucide-react'

export function ProgressAnalyticsDashboard() {
  const [activeDay, setActiveDay] = useState<number>(3) // Thursday (index 3)

  const weeklyData = [
    { day: 'Mon', equilibrium: 65, stress: 55, sleep: 7.2, note: 'Nominal baseline. Early morning sunlight walk completed.' },
    { day: 'Tue', equilibrium: 72, stress: 45, sleep: 7.8, note: 'Flow state in deep work. 0 cognitive distortions flagged.' },
    { day: 'Wed', equilibrium: 58, stress: 70, sleep: 6.1, note: 'Late night sleep deficit triggered mid-day catastrophizing.' },
    { day: 'Thu', equilibrium: 84, stress: 35, sleep: 8.1, note: 'Breakthrough therapy session. High vagal tone recovery.' },
    { day: 'Fri', equilibrium: 78, stress: 40, sleep: 7.5, note: 'Firm boundary maintained with work commitments.' },
    { day: 'Sat', equilibrium: 90, stress: 20, sleep: 8.4, note: 'Somatic nature reset. Parasympathetic dominant all day.' },
    { day: 'Sun', equilibrium: 86, stress: 25, sleep: 8.0, note: 'Reflective journaling and week preparation.' },
  ]

  const currentDay = weeklyData[activeDay]

  return (
    <section id="progress" className="py-20 sm:py-28 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--sage)] mb-4 shadow-xs">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Weekly Clinical Telemetry & Recovery Analytics</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mb-4">
            See Your Healing in Concrete Data
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed font-light">
            Mental health progress is often invisible until you inspect longitudinal correlations. Discover how your sleep, somatic resets, and cognitive reframings compound into emotional fortitude.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[var(--surface2)] border border-[var(--border)] shadow-sm thrive-card">
          {/* Top Bar with Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-8 border-b border-[var(--border)]">
            <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <span className="text-[11px] font-mono text-[var(--ink-muted)] block mb-1">Recovery Velocity</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--sage)]">+18.4%</span>
              <span className="text-[10px] text-[var(--ink-secondary)] block mt-0.5">Faster return to baseline</span>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <span className="text-[11px] font-mono text-[var(--ink-muted)] block mb-1">Cognitive Reframes</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)]">14 / 16</span>
              <span className="text-[10px] text-[var(--ink-secondary)] block mt-0.5">87.5% distortion resolution</span>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <span className="text-[11px] font-mono text-[var(--ink-muted)] block mb-1">Therapy Session Prep</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--lavender)]">3 Notes</span>
              <span className="text-[10px] text-[var(--ink-secondary)] block mt-0.5">Flagged for next appointment</span>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <span className="text-[11px] font-mono text-[var(--ink-muted)] block mb-1">Habit Consistency</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--clay)]">24 Days</span>
              <span className="text-[10px] text-[var(--ink-secondary)] block mt-0.5">Unbroken check-in streak</span>
            </div>
          </div>

          {/* Interactive Chart Container */}
          <div className="pt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[var(--ink)]">
                  7-Day Emotional Equilibrium vs. Cognitive Load
                </h3>
                <p className="text-xs text-[var(--ink-secondary)] mt-0.5">
                  Tap any day below to inspect physiological and cognitive correlation details.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[var(--sage)]" />
                  <span className="text-[var(--ink-secondary)]">Equilibrium Index</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[var(--clay)]" />
                  <span className="text-[var(--ink-secondary)]">Perceived Stress</span>
                </div>
              </div>
            </div>

            {/* SVG Visual Graph Representation */}
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] relative overflow-hidden">
              <div className="h-44 sm:h-52 w-full flex items-end justify-between gap-2 sm:gap-4 pt-6">
                {weeklyData.map((d, index) => {
                  const isSelected = activeDay === index
                  return (
                    <button
                      type="button"
                      key={d.day}
                      onClick={() => setActiveDay(index)}
                      className={`flex-1 flex flex-col items-center justify-end h-full group transition-all interactive-btn p-2 rounded-xl ${
                        isSelected ? 'bg-[var(--surface2)] shadow-xs border border-[var(--border-strong)]' : 'hover:bg-[var(--surface2)]/50'
                      }`}
                    >
                      {/* Bar Group */}
                      <div className="w-full flex items-end justify-center gap-1.5 h-32 mb-2">
                        {/* Equilibrium Bar */}
                        <div
                          className="w-3 sm:w-4 rounded-t-lg transition-all duration-300"
                          style={{
                            height: `${d.equilibrium}%`,
                            backgroundColor: isSelected ? 'var(--sage)' : 'var(--sage-light)',
                            opacity: isSelected ? 1 : 0.7,
                          }}
                        />
                        {/* Stress Bar */}
                        <div
                          className="w-3 sm:w-4 rounded-t-lg transition-all duration-300"
                          style={{
                            height: `${d.stress}%`,
                            backgroundColor: isSelected ? 'var(--clay)' : 'rgba(217, 119, 87, 0.4)',
                            opacity: isSelected ? 1 : 0.6,
                          }}
                        />
                      </div>
                      <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[var(--ink)]' : 'text-[var(--ink-muted)]'}`}>
                        {d.day}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Day Inspector Card */}
              <div className="mt-6 p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[var(--ink)]">{currentDay.day} Telemetry Breakdown</span>
                    <span className="text-[11px] font-mono text-[var(--sage)] bg-[var(--sage-container)] px-2 py-0.5 rounded">
                      Equilibrium: {currentDay.equilibrium}/100
                    </span>
                    <span className="text-[11px] font-mono text-[var(--clay)] bg-[var(--clay-container)] px-2 py-0.5 rounded">
                      Stress: {currentDay.stress}/100
                    </span>
                  </div>
                  <p className="text-xs text-[var(--ink-secondary)] italic leading-relaxed">
                    &ldquo;{currentDay.note}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-[var(--ink-muted)] shrink-0">
                  <div className="flex items-center gap-1">
                    <Moon className="w-3.5 h-3.5 text-[var(--lavender)]" />
                    <span>{currentDay.sleep}h Sleep</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--sage)]" />
                    <span>Verified Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
