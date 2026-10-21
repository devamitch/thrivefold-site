'use client'

import { useState } from 'react'
import { Brain, Heart, Activity, FileCheck, ArrowUpRight, Lock, Check } from 'lucide-react'

const SHOWCASE_TABS = [
  {
    id: 'cognitive',
    label: 'Cognitive Reframe',
    icon: Brain,
    tag: 'Cognitive Behavioral Therapy',
    title: 'Transform automatic anxiety into grounded clarity.',
    body: 'When emotional distress spikes, your brain defaults to ancient survival heuristics: catastrophizing, mind-reading, and emotional reasoning. Thrivefold deconstructs the thought step-by-step on your phone—without uploading your vulnerability to any remote server.',
    screen: {
      header: 'Cognitive Shift · Enclave Vault',
      badge: 'CBT Protocol',
      content: {
        trigger: 'Presentation Q&A Feedback',
        distortion: 'Catastrophizing & Black/White Thinking',
        thought: '“They asked so many questions—I must have looked completely incompetent and lost all credibility.”',
        evidence: 'Questions demonstrate active engagement. In previous reviews, difficult questions led to project greenlights.',
        reframe: 'Inquiry is not condemnation. Intellectual scrutiny is how my colleagues collaborate, not an evaluation of my worth.',
        valenceShift: '+42% Emotional Equilibrium',
      },
    },
  },
  {
    id: 'somatic',
    label: 'Somatic Pacer',
    icon: Heart,
    tag: 'Polyvagal Regulation',
    title: 'Signal physical safety to your nervous system.',
    body: 'Anxiety is physical before it is cognitive. High heart rate variability and shallow thoracic breathing keep your amygdala on high alert. The on-device somatic pacer uses Dr. Andrew Weil’s 4-7-8 method and physiological sighs to re-engage your parasympathetic vagal brake.',
    screen: {
      header: 'Vagus Nerve Pacer · Offline',
      badge: '4-7-8 Parasympathetic',
      content: {
        trigger: 'Acute Cardiac Elevation Detected',
        distortion: 'Sympathetic Hypervigilance',
        thought: '“Chest tightness and shallow breath triggering spiral.”',
        evidence: '4s Inhale · 7s Rest · 8s Prolonged Oral Exhalation.',
        reframe: 'Vagal tone restored: Heart rate shifted from 94 bpm to 68 bpm. Physical tension released in trapezius and jaw.',
        valenceShift: 'Autonomic Baseline Recovered',
      },
    },
  },
  {
    id: 'telemetry',
    label: 'Emotional Telemetry',
    icon: Activity,
    tag: 'Circadian Mood Spectrum',
    title: 'Uncover hidden patterns across your week.',
    body: 'Track emotional valence, somatic energy, and sleep equilibrium with clean, intuitive micro-check-ins. Over weeks, Thrivefold reveals correlation between work contexts, physiological fatigue, and recurring cognitive traps.',
    screen: {
      header: 'Weekly Telemetry · On-Device',
      badge: '7-Day Longitudinal',
      content: {
        trigger: 'Mid-Week Work Cycle',
        distortion: 'Pattern Analysis',
        thought: '“Consistent fatigue spike on Thursday mornings preceding presentations.”',
        evidence: 'Correlates with sub-6-hour sleep cycles and delayed evening screen exposure.',
        reframe: 'Adjust Thursday morning routines: Schedule 15 minutes of somatic breathwork and light mobility before opening Slack.',
        valenceShift: 'Predictive Equilibrium Insight',
      },
    },
  },
  {
    id: 'clinical',
    label: 'Clinical Session Bridge',
    icon: FileCheck,
    tag: 'Therapist Collaboration',
    title: 'Make every 50-minute session count.',
    body: 'Clients often forget their most critical breakthroughs by the time their weekly therapy session arrives. Thrivefold compiles a concise, respectful summary of your week—highlighting triggers, reframes, and pending questions to discuss with your therapist.',
    screen: {
      header: 'Therapist Brief · Print & PDF',
      badge: 'Encrypted Export',
      content: {
        trigger: 'Weekly Therapy Agenda',
        distortion: 'Session Preparation',
        thought: '“3 major cognitive shifts logged this week.”',
        evidence: '1. Imposter syndrome trigger resolved. 2. Somatic chest tightness regulated. 3. Boundary setting with team.',
        reframe: 'Agenda item for Dr. Vance: Explore origin of perfectionism when handling ambiguous feedback.',
        valenceShift: 'Ready for Thursday 10:00 AM',
      },
    },
  },
]

export function SanctuaryAppShowcase() {
  const [activeTabId, setActiveTabId] = useState('cognitive')
  const active = SHOWCASE_TABS.find((t) => t.id === activeTabId) ?? SHOWCASE_TABS[0]

  return (
    <section id="experience" className="scroll-mt-24">
      {/* Header */}
      <div className="mb-8 grid gap-6 sm:mb-12 sm:grid-cols-[1fr_auto] sm:items-end text-left">
        <div>
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--terracotta)] block">
            Inside The Sanctuary
          </span>
          <h2 className="max-w-[700px] font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.06] tracking-[-0.04em] text-[var(--ink)]">
            A quiet companion. <span className="text-[var(--ink-secondary)]">Measured on your hardware.</span>
          </h2>
        </div>
        <p className="max-w-[400px] text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-right sm:text-base">
          Explore the real interface views powering Thrivefold’s cognitive reframing and somatic regulation.
        </p>
      </div>

      {/* Tabs as clean pill dock */}
      <div className="mb-8 inline-flex p-1.5 rounded-full bg-[var(--surface2)] gap-1 overflow-x-auto max-w-full" role="tablist">
        {SHOWCASE_TABS.map((tab) => {
          const Icon = tab.icon
          const isSelected = tab.id === activeTabId
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTabId(tab.id)}
              className={`squircle-button inline-flex shrink-0 items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                isSelected
                  ? 'bg-white text-[var(--ink)] shadow-xs'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Main Split Showcase Card */}
      <div className="squircle-card overflow-hidden bg-white grid lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: Device App Viewport */}
        <div className="bg-[var(--surface2)] p-6 sm:p-10 flex items-center justify-center min-h-[460px] lg:min-h-[520px]">
          <div className="w-full max-w-[420px] rounded-[32px] bg-white p-6 text-left space-y-4">
            {/* App Topbar */}
            <div className="flex items-center justify-between pb-2 text-xs text-[var(--ink-muted)]">
              <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                {active.screen.header}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
                {active.screen.badge}
              </span>
            </div>

            {/* Content Cards */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-[var(--bg)]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--ink-muted)] block mb-1">
                  Context & Trigger
                </span>
                <span className="font-medium text-[var(--ink)]">
                  {active.screen.content.trigger}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--surface2)] space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--terracotta)] block">
                  Automatic Thought
                </span>
                <p className="font-serif italic text-sm text-[var(--ink)] leading-snug">
                  {active.screen.content.thought}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--sage-subtle)] space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--sage-strong)] block flex items-center gap-1">
                  <Check className="w-3 h-3" /> Grounded Resolution
                </span>
                <p className="text-xs text-[var(--ink)] leading-relaxed font-medium">
                  {active.screen.content.reframe}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-[var(--ink-secondary)]">
                <span className="font-medium">{active.screen.content.valenceShift}</span>
                <span className="text-[var(--terracotta-strong)] font-semibold">Face ID Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Editorial Narrative */}
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14 text-left">
          <span className="inline-flex w-fit rounded-full bg-[var(--terracotta-subtle)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--terracotta-strong)]">
            {active.tag}
          </span>
          <h3 className="mt-5 font-serif text-2xl sm:text-4xl font-medium leading-[1.12] tracking-[-0.03em] text-[var(--ink)]">
            {active.title}
          </h3>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--ink-secondary)]">
            {active.body}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#beta"
              className="squircle-button inline-flex items-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-6 py-3 text-sm font-semibold"
            >
              <span>Experience in Beta</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
