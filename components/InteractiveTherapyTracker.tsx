'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw, Check, Sparkles, Brain, Heart, FileText, ChevronRight, Lock } from 'lucide-react'

type EmotionState = {
  id: string
  label: string
  tone: string
  color: string
  bg: string
  somaticTip: string
  defaultDistortion: string
  reframe: string
}

const EMOTION_STATES: EmotionState[] = [
  {
    id: 'anxious',
    label: 'Anxious & Overwhelmed',
    tone: 'Sympathetic Hyperarousal',
    color: '#D77259',
    bg: 'rgba(215, 114, 89, 0.12)',
    somaticTip: 'Prolonged exhalation activates the parasympathetic vagal brake, reducing heart rate and physical tightness in the chest.',
    defaultDistortion: 'Catastrophizing ("Everything is falling apart and I will never recover.")',
    reframe: 'Discomfort is acute, but my capacity to navigate complexity is proven. I will address this one small step at a time.',
  },
  {
    id: 'restless',
    label: 'Restless & Racing Thoughts',
    tone: 'Motor Nervous Activation',
    color: '#B04F38',
    bg: 'rgba(176, 79, 56, 0.12)',
    somaticTip: 'Ground your feet flat on the floor. Name 3 physical textures in your immediate room before evaluating any pending decision.',
    defaultDistortion: 'Fortune Telling ("If I stop working right this second, a catastrophe will happen.")',
    reframe: 'Slowing down preserves judgment. Rest is not negligence; it is required maintenance for high-quality decisions.',
  },
  {
    id: 'foggy',
    label: 'Depleted & Emotionally Foggy',
    tone: 'Hypoarousal / Freeze State',
    color: '#6B6951',
    bg: 'rgba(107, 105, 81, 0.12)',
    somaticTip: 'Drink a glass of cold water. Take three gentle diaphragmatic breaths with soft shoulder rolls.',
    defaultDistortion: 'Emotional Reasoning ("Because I feel exhausted, it means I am failing at my responsibilities.")',
    reframe: 'Fatigue is biological data, not an evaluation of my self-worth. Today asks for gentleness and priority triage.',
  },
  {
    id: 'grounded',
    label: 'Grounded & Centered',
    tone: 'Vagal Equilibrium',
    color: '#4E7A4C',
    bg: 'rgba(125, 156, 123, 0.16)',
    somaticTip: 'Anchor this steady baseline in your somatic memory. Notice how your breathing feels relaxed and unconstrained.',
    defaultDistortion: 'Hyper-Vigilance ("This calm won\'t last, so I must stay on high alert.")',
    reframe: 'Equilibrium is safe to enjoy. I can allow myself to be at peace without anticipating distress.',
  },
]

export function InteractiveTherapyTracker() {
  const [activeTab, setActiveTab] = useState<'tracker' | 'pacer' | 'brief'>('tracker')
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionState>(EMOTION_STATES[0])

  // Pacer State
  const [pacerActive, setPacerActive] = useState(false)
  const [pacerPhase, setPacerPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale')
  const [secondsLeft, setSecondsLeft] = useState(4)
  const [cyclesCompleted, setCyclesCompleted] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (pacerActive) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev > 1) {
            return prev - 1
          } else {
            if (pacerPhase === 'inhale') {
              setPacerPhase('hold')
              return 7
            } else if (pacerPhase === 'hold') {
              setPacerPhase('exhale')
              return 8
            } else {
              setPacerPhase('inhale')
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
  }, [pacerActive, pacerPhase])

  const resetPacer = () => {
    setPacerActive(false)
    setPacerPhase('inhale')
    setSecondsLeft(4)
    setCyclesCompleted(0)
  }

  const pacerPhaseMeta = {
    inhale: {
      title: 'Inhale through nose',
      duration: '4 seconds',
      scale: 'scale-110',
      color: 'var(--terracotta)',
    },
    hold: {
      title: 'Suspend breath gently',
      duration: '7 seconds',
      scale: 'scale-115',
      color: 'var(--sage-strong)',
    },
    exhale: {
      title: 'Slow exhale through mouth',
      duration: '8 seconds',
      scale: 'scale-90',
      color: 'var(--ink-secondary)',
    },
  }

  const currentPhase = pacerPhaseMeta[pacerPhase]

  return (
    <section id="tracker" className="scroll-mt-24">
      {/* Header */}
      <div className="mx-auto max-w-[720px] text-center mb-10 sm:mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--terracotta)] block mb-3">
          Interactive Experience
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Experience the sanctuary, <span className="italic text-[var(--terracotta)]">right in your browser.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Test Thrivefold’s real on-device workflows: log an emotional spike, activate the vagal breathing pacer, and inspect your structured session summary.
        </p>
      </div>

      {/* Main Interactive Instrument Card */}
      <div className="squircle-card p-6 sm:p-10 bg-white max-w-[1040px] mx-auto text-left shadow-lg">
        {/* Navigation Tabs Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--border)]">
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[var(--surface2)]">
            <button
              type="button"
              onClick={() => setActiveTab('tracker')}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'tracker'
                  ? 'bg-white text-[var(--ink)] shadow-xs'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
              }`}
            >
              1. Emotional Spectrum
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pacer')}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'pacer'
                  ? 'bg-white text-[var(--ink)] shadow-xs'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
              }`}
            >
              2. 4-7-8 Somatic Pacer
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('brief')}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'brief'
                  ? 'bg-white text-[var(--ink)] shadow-xs'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
              }`}
            >
              3. Clinical Session Brief
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
            <Lock className="w-3.5 h-3.5 text-[var(--sage-strong)]" />
            <span>Encrypted locally in RAM</span>
          </div>
        </div>

        {/* Tab 1: Emotional Spectrum & Distortion Reframe */}
        {activeTab === 'tracker' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
                Select Current Emotional State
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {EMOTION_STATES.map((state) => {
                  const isSelected = selectedEmotion.id === state.id
                  return (
                    <button
                      key={state.id}
                      type="button"
                      onClick={() => setSelectedEmotion(state)}
                      className={`squircle-button p-4 text-left border transition-all ${
                        isSelected
                          ? 'border-[var(--terracotta)] bg-[var(--terracotta-subtle)] shadow-xs'
                          : 'border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--surface2)]'
                      }`}
                    >
                      <span className="block text-sm font-semibold text-[var(--ink)] mb-1">
                        {state.label}
                      </span>
                      <span className="text-[11px] text-[var(--ink-muted)] block">
                        {state.tone}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Cognitive Deconstruction View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Left: Somatic & Distortion */}
              <div className="squircle-inner p-5 space-y-4 border border-[var(--border)]">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--terracotta)] block mb-1">
                    Somatic Stabilization
                  </span>
                  <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                    {selectedEmotion.somaticTip}
                  </p>
                </div>

                <div className="pt-3 border-t border-[rgba(25,25,24,0.06)]">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-muted)] block mb-1">
                    Automatic Cognitive Distortion
                  </span>
                  <p className="font-serif italic text-sm text-[var(--ink)] leading-snug">
                    {selectedEmotion.defaultDistortion}
                  </p>
                </div>
              </div>

              {/* Right: Balanced Reframe */}
              <div className="p-5 rounded-2xl bg-[var(--sage-subtle)] border border-[rgba(125,156,123,0.25)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[var(--sage-strong)]">
                    <Check className="w-4 h-4" />
                    <span>On-Device Rational Reframe</span>
                  </div>
                  <p className="text-sm text-[var(--ink)] leading-relaxed font-medium">
                    {selectedEmotion.reframe}
                  </p>
                </div>

                <div className="pt-4 flex justify-between items-center text-[11px] text-[var(--ink-muted)] border-t border-[rgba(125,156,123,0.2)]">
                  <span>Logged to Local Secure Enclave</span>
                  <button
                    type="button"
                    onClick={() => setActiveTab('pacer')}
                    className="text-[var(--terracotta-strong)] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Proceed to Breathwork</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 4-7-8 Somatic Breathing Pacer */}
        {activeTab === 'pacer' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--terracotta)] block">
                  Vagus Nerve Stimulation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)]">
                  Dr. Andrew Weil 4-7-8 Parasympathetic Pacer
                </h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                  Before addressing anxious thoughts, the physiological brake must engage. 4 seconds inhale through the nose, 7 seconds comfortable pause, and 8 seconds slow exhalation to immediately stimulate the vagus nerve and slow cardiac tachycardia.
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setPacerActive(!pacerActive)}
                    className="squircle-button px-6 py-3 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white text-xs font-semibold flex items-center gap-2 shadow-xs"
                  >
                    {pacerActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{pacerActive ? 'Pause Sequence' : 'Start 4-7-8 Sequence'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetPacer}
                    className="p-3 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--surface2)] transition-colors"
                    title="Reset Pacer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <span className="text-xs text-[var(--ink-muted)]">
                    Completed Cycles: <strong>{cyclesCompleted}</strong>
                  </span>
                </div>
              </div>

              {/* Concentric Circle Instrument */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center py-6">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[var(--border)]" />
                  <div
                    className={`w-52 h-52 rounded-full border-2 flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-out bg-[var(--bg)] shadow-xs ${
                      pacerActive ? currentPhase.scale : 'scale-100'
                    }`}
                    style={{ borderColor: currentPhase.color }}
                  >
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--ink-muted)] mb-1">
                      {pacerActive ? pacerPhase.toUpperCase() : 'READY'}
                    </span>
                    <div
                      className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight transition-colors my-1"
                      style={{ color: currentPhase.color }}
                    >
                      {pacerActive ? `${secondsLeft}s` : '4·7·8'}
                    </div>
                    <span className="text-xs font-medium text-[var(--ink-secondary)] text-center">
                      {pacerActive ? currentPhase.title : 'Tap Start to begin'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Clinical Session Brief Export */}
        {activeTab === 'brief' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
              <div>
                <h3 className="font-serif text-2xl font-medium text-[var(--ink)]">
                  Weekly Clinical Preparation Brief
                </h3>
                <p className="text-xs text-[var(--ink-muted)]">
                  Exportable summary formatted for your licensed psychologist or psychiatrist.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface2)] text-xs font-semibold text-[var(--ink)]">
                <FileText className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                <span>Ready to Print / PDF</span>
              </div>
            </div>

            <div className="squircle-inner p-6 space-y-5 border border-[var(--border)] font-sans text-xs">
              <div className="flex justify-between items-center text-[var(--ink-muted)] pb-3 border-b border-[rgba(25,25,24,0.06)]">
                <span>CLIENT RECITATION ARCHIVE · LOCAL HARDWARE ENCLAVE</span>
                <span>PROTECTED HEALTH PRIVACY</span>
              </div>

              <div className="space-y-1">
                <span className="font-semibold text-[var(--ink)] text-sm">Primary Emotional Spikes This Week</span>
                <p className="text-[var(--ink-secondary)]">
                  • 2 instances of acute presentation anxiety (catastrophizing regarding career stability).
                </p>
                <p className="text-[var(--ink-secondary)]">
                  • Somatic regulation via 4-7-8 breathing returned heart rate to baseline within 3 cycles.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-semibold text-[var(--ink)] text-sm">Target Discussion Questions for Therapy</span>
                <p className="text-[var(--ink-secondary)]">
                  1. Explore the origin of assuming professional catastrophic failure when initial feedback is delayed.
                </p>
                <p className="text-[var(--ink-secondary)]">
                  2. Review somatic grounding exercises when physical chest tightness precedes the conscious thought.
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(25,25,24,0.06)] flex items-center justify-between text-[11px] text-[var(--ink-muted)]">
                <span>Data stored exclusively on device MMKV · Zero cloud transmission</span>
                <span>Authorized via Biometric Face ID</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
