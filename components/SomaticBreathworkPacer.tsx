'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw, HeartPulse, ShieldCheck, Wind } from 'lucide-react'

export function SomaticBreathworkPacer() {
  const [isActive, setIsActive] = useState(false)
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale')
  const [secondsLeft, setSecondsLeft] = useState(4)
  const [cyclesCompleted, setCyclesCompleted] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev > 1) {
            return prev - 1
          } else {
            // Transition phases
            if (phase === 'inhale') {
              setPhase('hold')
              return 7
            } else if (phase === 'hold') {
              setPhase('exhale')
              return 8
            } else {
              setPhase('inhale')
              setCyclesCompleted((c) => c + 1)
              return 4
            }
          }
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, phase])

  const handleReset = () => {
    setIsActive(false)
    setPhase('inhale')
    setSecondsLeft(4)
    setCyclesCompleted(0)
  }

  const phaseDetails = {
    inhale: {
      title: 'Inhale Quietly Through Nose',
      duration: '4 Seconds',
      description: 'Expand diaphragm. Direct oxygen into lower abdomen to release solar plexus tension.',
      color: 'var(--sage)',
      bg: 'var(--sage-container)',
      scale: 'scale-115',
    },
    hold: {
      title: 'Hold & Savor Stillness',
      duration: '7 Seconds',
      description: 'Suspend breath without strain. Stabilize oxygen-to-carbon-dioxide ratio.',
      color: 'var(--lavender)',
      bg: 'var(--lavender-container)',
      scale: 'scale-120',
    },
    exhale: {
      title: 'Exhale Completely Through Mouth',
      duration: '8 Seconds',
      description: 'Make a soft whoosh sound. Triggers vagus nerve and downregulates amygdala.',
      color: 'var(--clay)',
      bg: 'var(--clay-container)',
      scale: 'scale-95',
    },
  }

  const current = phaseDetails[phase]

  return (
    <section id="breathwork" className="py-20 sm:py-28 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--sage)] shadow-xs">
              <Wind className="w-3.5 h-3.5" />
              <span>Somatic Pacer · Dr. Andrew Weil 4-7-8 Calibration</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
              Regulate Your Nervous System in Real Time
            </h2>

            <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed font-light">
              Cognitive reframing succeeds only when the physiological nervous system feels safe. Thrivefold pairs mental therapy notes with guided somatic pacing to interrupt acute panic, reduce blood pressure, and restore heart rate variability (HRV) baseline.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)]">
                <span className="font-bold text-sm text-[var(--ink)] block mb-1">Vagal Nerve Tone</span>
                <span className="text-xs text-[var(--ink-secondary)]">
                  Long exhalations (8s) activate the parasympathetic brake, signaling safety to the heart.
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--surface2)] border border-[var(--border)]">
                <span className="font-bold text-sm text-[var(--ink)] block mb-1">Amygdala Cooldown</span>
                <span className="text-xs text-[var(--ink-secondary)]">
                  4 cycles of 4-7-8 breathing reduce salivary cortisol by up to 23% in clinical trials.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsActive(!isActive)}
                className="px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--bg)] font-semibold text-xs uppercase tracking-wider hover:bg-[var(--sage)] transition-all flex items-center gap-2 interactive-btn shadow-xs"
              >
                {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isActive ? 'Pause Pacer' : 'Start 4-7-8 Breathing'}</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="p-3 rounded-full border border-[var(--border)] bg-[var(--surface2)] text-[var(--ink)] hover:border-[var(--border-strong)] transition-all interactive-btn"
                title="Reset Pacer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-[var(--ink-muted)]">
                Cycles Completed: <strong className="text-[var(--ink)]">{cyclesCompleted}</strong>
              </span>
            </div>
          </div>

          {/* Right Visual Interactive Ring (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Expanding Animated Ring */}
              <div
                className={`w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 flex items-center justify-center p-8 transition-transform duration-1000 ease-out shadow-xs ${
                  isActive ? current.scale : 'scale-100'
                }`}
                style={{
                  borderColor: current.color,
                  backgroundColor: current.bg,
                }}
              >
                <div className="text-center space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--ink-muted)] block">
                    {isActive ? phase.toUpperCase() : 'READY'}
                  </span>
                  <div
                    className="font-serif text-5xl sm:text-6xl font-bold tracking-tight transition-colors duration-500"
                    style={{ color: current.color }}
                  >
                    {isActive ? `${secondsLeft}s` : '4-7-8'}
                  </div>
                  <span className="text-xs font-semibold text-[var(--ink)] block max-w-[160px] mx-auto leading-tight">
                    {isActive ? current.title : 'Tap Start to Regulate'}
                  </span>
                </div>
              </div>
            </div>

            {/* Micro instruction pill */}
            <div className="mt-6 text-center max-w-sm">
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
