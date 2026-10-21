'use client'

import { useState } from 'react'
import { Sparkles, Brain, HeartPulse, Activity, CheckCircle2, RotateCcw, ShieldCheck, ChevronRight, Zap } from 'lucide-react'

interface LoggedSession {
  id: string
  time: string
  mood: string
  moodEmoji: string
  somatic: string
  cognitiveLoad: number
  trigger: string
  reframe: string
  distortion: string
  prescription: string
}

export function InteractiveTherapyTracker() {
  const [selectedMood, setSelectedMood] = useState<{ id: string; label: string; emoji: string; category: string }>({
    id: 'anxious',
    label: 'Anxious & Hypervigilant',
    emoji: '⚡',
    category: 'elevated',
  })

  const [selectedSomatic, setSelectedSomatic] = useState('Constriction in chest or shallow breathing')
  const [cognitiveLoad, setCognitiveLoad] = useState(7)
  const [triggerNote, setTriggerNote] = useState('Catastrophizing an upcoming performance review at work')
  const [isSynthesizing, setIsSynthesizing] = useState(false)
  const [activeInsight, setActiveInsight] = useState<LoggedSession | null>({
    id: 'sample-1',
    time: 'Today · 3:15 PM',
    mood: 'Anxious & Hypervigilant',
    moodEmoji: '⚡',
    somatic: 'Constriction in chest or shallow breathing',
    cognitiveLoad: 7,
    trigger: 'Catastrophizing an upcoming performance review at work',
    distortion: 'Catastrophizing & Fortune-Telling (Overestimating catastrophe probability)',
    reframe: 'My nervous system is treating an anticipated conversation like physical danger. The review is simply an exchange of words; whatever feedback emerges, I have the agency, time, and track record to address it incrementally.',
    prescription: 'Physiological Sigh (2 rapid nasal inhales followed by 1 prolonged oral exhalation) × 5 repetitions to lower heart rate.',
  })

  const [history, setHistory] = useState<LoggedSession[]>([
    {
      id: 'history-1',
      time: 'Yesterday · 8:30 PM',
      mood: 'Melancholic & Heavy',
      moodEmoji: '🌧️',
      somatic: 'Lethargy in limbs, eye fatigue',
      cognitiveLoad: 5,
      trigger: 'Boundary guilt with family expectations',
      distortion: 'Emotional Reasoning ("I feel guilty, therefore I must be selfish")',
      reframe: 'Discomfort is the price of personal integrity. Boundaries protect relationships from breeding resentment.',
      prescription: 'Warm somatic self-hug and 4-7-8 breathing sequence before sleep.',
    },
    {
      id: 'history-2',
      time: '2 days ago · 9:10 AM',
      mood: 'Quiet Clarity & Flow',
      moodEmoji: '💎',
      somatic: 'Open posture, steady relaxed heart rate',
      cognitiveLoad: 3,
      trigger: 'Morning journaling and 20-minute sunlight walk',
      distortion: 'None detected · Adaptive cognitive equilibrium',
      reframe: 'Notice how spacious thinking feels when cortisol is in natural morning calibration. Anchor this sensory memory.',
      prescription: 'Hold this calm baseline as a reference state for the day.',
    },
  ])

  const moods = [
    { id: 'anxious', label: 'Anxious & Hypervigilant', emoji: '⚡', category: 'elevated' },
    { id: 'grounded', label: 'Grounded & Present', emoji: '🌿', category: 'calm' },
    { id: 'melancholic', label: 'Melancholic & Heavy', emoji: '🌧️', category: 'low' },
    { id: 'overstimulated', label: 'Overstimulated & Rushed', emoji: '🌪️', category: 'elevated' },
    { id: 'clarity', label: 'Quiet Clarity & Flow', emoji: '💎', category: 'calm' },
    { id: 'restless', label: 'Restless & Yearning', emoji: '🌊', category: 'medium' },
  ]

  const somatics = [
    'Constriction in chest or shallow breathing',
    'Tightness in solar plexus or gut butterflies',
    'Jaw clenching, neck and shoulder stiffness',
    'Deep diaphragmatic breath, relaxed pulse',
    'Fidgety restless limbs or pacing impulse',
    'Warm, grounded spinal and pelvic stability',
  ]

  const triggerChips = [
    'Catastrophizing an upcoming review or meeting',
    'Guilt after asserting an emotional boundary',
    'Impostor syndrome during high-stakes tasks',
    'Post-therapy session insight integration',
    'Late-night spiral of comparison and doubt',
    'Gratitude for unexpected peaceful stillness',
  ]

  const handleSynthesize = () => {
    setIsSynthesizing(true)
    setTimeout(() => {
      let distortion = 'Catastrophizing & Anticipatory Worry'
      let reframe = 'My mind is generating worst-case scenarios as an ancient defense mechanism. I can acknowledge the alert without believing the narrative.'
      let prescription = 'Vagus nerve stimulation: 30 seconds of humming during exhalations.'

      if (selectedMood.id === 'melancholic') {
        distortion = 'All-or-Nothing Thinking & Emotional Filtering'
        reframe = 'Low energy today does not define my trajectory. Rest is a biological requirement, not a character flaw.'
        prescription = 'Gentle somatic bilateral tapping on collarbones while breathing at a 4-second pace.'
      } else if (selectedMood.id === 'grounded' || selectedMood.id === 'clarity') {
        distortion = 'Cognitive Equilibrium Achieved'
        reframe = 'Take 10 seconds to consciously savor this somatic ease. Anchoring positive states creates neural plasticity for resilience.'
        prescription = 'Slow rhythmic diaphragmatic breath to deepen parasympathetic memory.'
      } else if (selectedMood.id === 'overstimulated') {
        distortion = 'Overextension & Sensory Saturation'
        reframe = 'I do not need to process every input at once. Stepping back into silence is an act of neurological self-defense.'
        prescription = 'Sensory deprivation break: Close eyes, cup hands over eye sockets in complete darkness for 60 seconds.'
      }

      const newSession: LoggedSession = {
        id: `sess-${Date.now()}`,
        time: 'Just now',
        mood: selectedMood.label,
        moodEmoji: selectedMood.emoji,
        somatic: selectedSomatic,
        cognitiveLoad,
        trigger: triggerNote,
        distortion,
        reframe,
        prescription,
      }

      setActiveInsight(newSession)
      setHistory([newSession, ...history.slice(0, 3)])
      setIsSynthesizing(false)
    }, 600)
  }

  return (
    <section id="tracker" className="py-20 sm:py-28 bg-[var(--surface2)] border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--sage)] mb-4 shadow-xs">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive On-Device Clinical Simulator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mb-4">
            Test the Sovereign Therapy Tracker
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed font-light">
            Experience how Thrivefold transforms spontaneous emotional turbulence into structured clinical clarity. Choose your emotional state, somatic baseline, and cognitive trigger below.
          </p>
        </div>

        {/* Two-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Input Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-sm thrive-card space-y-6">
            {/* Step 1: Mood Valence */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[10px] font-bold text-[var(--ink)]">1</span>
                  Emotional Valence / Mood State
                </span>
                <span className="text-xs font-medium text-[var(--sage)]">Single Tap</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {moods.map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setSelectedMood(m)}
                    className={`p-3 rounded-2xl text-left border transition-all interactive-btn flex flex-col justify-between h-20 ${
                      selectedMood.id === m.id
                        ? 'border-[var(--ink)] bg-[var(--surface2)] shadow-xs font-semibold'
                        : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] text-[var(--ink-secondary)]'
                    }`}
                  >
                    <span className="text-xl">{m.emoji}</span>
                    <span className="text-xs leading-snug line-clamp-1">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Somatic Body Check */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[10px] font-bold text-[var(--ink)]">2</span>
                  Somatic Physical Sensation
                </span>
                <span className="text-xs font-mono text-[var(--ink-muted)]">Nervous System Feedback</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {somatics.map((s, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setSelectedSomatic(s)}
                    className={`p-3 rounded-xl text-left text-xs border transition-all interactive-btn ${
                      selectedSomatic === s
                        ? 'border-[var(--sage)] bg-[var(--sage-container)] text-[var(--ink)] font-semibold'
                        : 'border-[var(--border)] bg-[var(--surface2)] text-[var(--ink-secondary)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Cognitive Load Gauge */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[10px] font-bold text-[var(--ink)]">3</span>
                  Perceived Cognitive Load / Stress
                </span>
                <span className="text-xs font-mono font-bold text-[var(--ink)] px-2 py-0.5 rounded bg-[var(--surface2)]">
                  {cognitiveLoad} / 10 · {cognitiveLoad <= 3 ? 'Restorative Sanctuary' : cognitiveLoad <= 6 ? 'Functional Balance' : cognitiveLoad <= 8 ? 'High Tension' : 'Burnout Risk'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={cognitiveLoad}
                onChange={(e) => setCognitiveLoad(Number(e.target.value))}
                className="w-full accent-[var(--sage)] cursor-pointer h-2 bg-[var(--surface2)] rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-[var(--ink-muted)] mt-1">
                <span>1 · Calm / Rest</span>
                <span>5 · Nominal Flow</span>
                <span>10 · Acute Overwhelm</span>
              </div>
            </div>

            {/* Step 4: Cognitive Trigger / Thought */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[10px] font-bold text-[var(--ink)]">4</span>
                  Active Thought or Therapy Focus
                </span>
                <span className="text-xs font-mono text-[var(--ink-muted)]">Encrypted Locally</span>
              </div>
              <input
                type="text"
                value={triggerNote}
                onChange={(e) => setTriggerNote(e.target.value)}
                placeholder="What is triggering this state?"
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface2)] text-xs text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--ink)] transition-colors mb-2.5"
              />
              <div className="flex flex-wrap gap-1.5">
                {triggerChips.map((chip, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setTriggerNote(chip)}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[var(--border-strong)] transition-all text-left"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="button"
              onClick={handleSynthesize}
              disabled={isSynthesizing}
              className="w-full py-3.5 rounded-2xl bg-[var(--ink)] text-[var(--bg)] font-semibold text-xs uppercase tracking-wider hover:bg-[var(--sage)] transition-all flex items-center justify-center gap-2 interactive-btn shadow-sm"
            >
              {isSynthesizing ? (
                <>
                  <Zap className="w-4 h-4 animate-spin text-[var(--sage-light)]" />
                  <span>Synthesizing On-Device Neural Reframe...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[var(--sage-light)]" />
                  <span>Log Entry & Synthesize On-Device Reframe</span>
                </>
              )}
            </button>
          </div>

          {/* Right Column: Live Output & Recent Progress History (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Active Synthesized Insight Card */}
            {activeInsight && (
              <div className="p-6 sm:p-7 rounded-3xl bg-[var(--surface)] border border-[var(--border-strong)] shadow-md thrive-card relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{activeInsight.moodEmoji}</span>
                    <div>
                      <span className="text-xs font-bold text-[var(--ink)] block">{activeInsight.mood}</span>
                      <span className="text-[10px] font-mono text-[var(--ink-muted)]">{activeInsight.time}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono text-[var(--sage)] bg-[var(--sage-container)] px-2.5 py-1 rounded-full border border-[var(--sage)]/20">
                    <ShieldCheck className="w-3 h-3" />
                    <span>On-Device Reframe</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs leading-relaxed">
                  <div className="p-3.5 rounded-2xl bg-[var(--surface2)] border border-[var(--border)]">
                    <span className="font-mono text-[10px] uppercase text-[var(--clay)] font-bold block mb-1">
                      CBT Distortion Detected
                    </span>
                    <p className="text-[var(--ink)] font-medium">{activeInsight.distortion}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[var(--surface2)] border border-[var(--border)]">
                    <span className="font-mono text-[10px] uppercase text-[var(--sage)] font-bold block mb-1">
                      Cognitive Reframe Statement
                    </span>
                    <p className="text-[var(--ink-secondary)] italic">{activeInsight.reframe}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[var(--surface2)] border border-[var(--border)]">
                    <span className="font-mono text-[10px] uppercase text-[var(--lavender)] font-bold block mb-1">
                      Somatic Nervous System Action
                    </span>
                    <p className="text-[var(--ink-secondary)]">{activeInsight.prescription}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Live Progress Timeline */}
            <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
              <h3 className="font-serif font-bold text-base text-[var(--ink)] mb-4 flex items-center justify-between">
                <span>Recent Progress Telemetry</span>
                <span className="text-[11px] font-mono text-[var(--ink-muted)] font-normal">Encrypted Log</span>
              </h3>
              <div className="space-y-3">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-[var(--surface2)] border border-[var(--border)] text-xs flex items-start gap-3"
                  >
                    <span className="text-lg shrink-0 mt-0.5">{item.moodEmoji}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[var(--ink)]">{item.mood}</span>
                        <span className="text-[10px] font-mono text-[var(--ink-muted)]">{item.time}</span>
                      </div>
                      <p className="text-[11px] text-[var(--ink-secondary)] line-clamp-1 mt-0.5">{item.trigger}</p>
                      <span className="text-[10px] text-[var(--sage)] font-medium block mt-1">
                        ✓ {item.distortion.split('&')[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
