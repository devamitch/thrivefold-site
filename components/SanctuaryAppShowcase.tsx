'use client'

import { useState } from 'react'
import { ArrowUpRight, Activity, Calendar, Dumbbell, Flame, Heart, Sparkles, Lock, ShieldCheck } from 'lucide-react'

interface ShowcaseTab {
  id: string
  label: string
  icon: typeof Calendar
  badge: string
  title: string
  body: string
  image: string
  features: string[]
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'pose',
    label: 'Pose Coach',
    icon: Activity,
    badge: 'On-Device Computer Vision',
    title: 'Real-time form feedback with zero cloud video.',
    body: 'Guided workouts leverage on-device computer vision to detect 33 skeletal landmarks, analyze posture alignment, and count repetitions. Camera frames are evaluated solely in volatile device memory and never recorded, saved, or uploaded.',
    image: '/screenshots/04_pose_tracking.png',
    features: [
      '33-point skeletal landmark detection',
      'Instant biomechanical posture correction',
      'Repetition cadence and pacing chimes',
      '100% volatile memory processing (zero cloud video)',
    ],
  },
  {
    id: 'training',
    label: 'Training Hub',
    icon: Dumbbell,
    badge: 'Bodyweight Biomechanics',
    title: 'Mindful bodyweight routines & posture resets.',
    body: 'Thrivefold provides calibrated bodyweight workouts designed for sustainable vitality. Choose between home routines, steady mobility flows, and low-impact resets accompanied by soothing audio chimes.',
    image: '/screenshots/03_training.png',
    features: [
      'Progressive bodyweight flows for all fitness levels',
      'Ergonomic spine and joint posture resets',
      'Gentle sound chimes and breath pacing guides',
      'Full offline functionality in Airplane Mode',
    ],
  },
  {
    id: 'womens',
    label: 'Women’s Health',
    icon: Sparkles,
    badge: 'Cycle Intelligence',
    title: 'Track your cycle alongside daily vitality.',
    body: 'Log your menstrual cycle, bleeding intensity, symptoms, and energy patterns. The app visualizes your rhythm across follicular, ovulatory, and luteal phases, offering gentle activity suggestions matched to your energy.',
    image: '/screenshots/02_cycle.png',
    features: [
      'Phase-aware rhythm strip (follicular, ovulatory, luteal)',
      'Energy and symptom correlation logging',
      'Gentle recovery suggestions matched to current phase',
      'Hardware Keystore encrypted on your phone',
    ],
  },
  {
    id: 'quests',
    label: 'Quests Arcade',
    icon: Flame,
    badge: 'Gamified Wellbeing',
    title: 'Self-care routines that reward consistency.',
    body: 'Transform healthy habits into an engaging daily quest. Connecting with Health Connect allows your real-world steps and workouts to unlock experience points (XP), streak bonuses, and celebratory milestone badges.',
    image: '/screenshots/04_quests_arcade.png',
    features: [
      'Bite-sized daily mindful habits and check-ins',
      'Health Connect step and workout integration',
      'Milestone XP progression and streak tracking',
      'Zero commercial advertising or predatory loops',
    ],
  },
  {
    id: 'wellbeing',
    label: 'Vitality Check-In',
    icon: Heart,
    badge: 'Daily Reflection',
    title: 'Start each morning with mindful intention.',
    body: 'A 60-second morning check-in to record your emotional mood, physical readiness, and hydration goals. Thrivefold synthesizes your input with Health Connect sleep metrics to calculate your daily Vitality Index.',
    image: '/screenshots/01_wellbeing.png',
    features: [
      'Fast 1-minute daily reflection flow',
      'Energy, emotional mood, and hydration tracking',
      'Health Connect sleep sync for recovery insights',
      'Zero remote telemetry or cloud databases',
    ],
  },
  {
    id: 'calendar',
    label: 'Agenda & Rhythm',
    icon: Calendar,
    badge: 'Holistic Timeline',
    title: 'Visualize your journey over weeks and months.',
    body: 'Keep track of scheduled training sessions, past reflections, and streak consistency. Export your complete health log anytime in the standardized HL7 FHIR format to share with your trusted physician.',
    image: '/screenshots/06_calendar.png',
    features: [
      'Visual timeline of workouts and daily check-ins',
      'Streak consistency and habit analytics',
      'Standardized HL7 FHIR health export',
      'One-tap local data deletion from settings',
    ],
  },
]

export function SanctuaryAppShowcase() {
  const [activeTabId, setActiveTabId] = useState(SHOWCASE_TABS[0].id)
  const active = SHOWCASE_TABS.find((t) => t.id === activeTabId) ?? SHOWCASE_TABS[0]

  return (
    <section id="inside" className="scroll-mt-24">
      {/* Section Header */}
      <div className="mb-8 grid gap-6 sm:mb-12 sm:grid-cols-[1fr_auto] sm:items-end text-left">
        <div>
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--terracotta)] block">
            Inside Thrivefold
          </span>
          <h2 className="max-w-[700px] font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.06] tracking-[-0.04em] text-[var(--ink)]">
            Explore the spaces.
          </h2>
        </div>
        <p className="max-w-[420px] text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-right sm:text-base">
          Authentic screens from every module. Health metrics are processed strictly on your device.
        </p>
      </div>

      {/* Tabs - mobile swipeable */}
      <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div
          className="inline-flex p-1.5 rounded-full bg-[var(--surface2)] gap-1 shrink-0"
          role="tablist"
        >
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
                className={`squircle-button inline-flex shrink-0 items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                  isSelected ? 'bg-white text-[var(--ink)] shadow-xs' : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Card Content with Real Screenshot */}
      <div className="squircle-card overflow-hidden grid lg:grid-cols-[1fr_1.1fr] bg-[var(--surface)] text-left">
        {/* Real Screenshot Preview */}
        <div className="bg-[var(--surface2)] p-4 sm:p-10 flex items-center justify-center min-h-[360px] sm:min-h-[460px]">
          <div className="relative w-full max-w-[240px] sm:max-w-[290px] rounded-[38px] p-2 sm:p-2.5 bg-[var(--ink)] shadow-2xl ring-1 ring-black/10">
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-3.5 rounded-full bg-black z-20" />
            <div className="relative rounded-[30px] overflow-hidden bg-black aspect-[9/19.5]">
              <img
                src={active.image}
                alt={`${active.title} interface capture`}
                width={1080}
                height={1920}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text and Capabilities */}
        <div className="flex flex-col justify-center p-6 sm:p-12 lg:p-14 space-y-5 sm:space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
              {active.badge}
            </span>
          </div>

          <div>
            <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-medium leading-[1.12] tracking-[-0.03em] text-[var(--ink)]">
              {active.title}
            </h3>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-[var(--ink-secondary)]">
              {active.body}
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] block">
              Architectural Highlights
            </span>
            <div className="space-y-2">
              {active.features.map((feat) => (
                <div key={feat} className="squircle-inner p-2.5 sm:p-3 flex items-center gap-2.5 text-xs sm:text-sm text-[var(--ink)] font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--sage-strong)] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <a
              href="#beta"
              className="squircle-button inline-flex items-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Join Internal Testing</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#permissions"
              className="text-xs sm:text-sm font-medium text-[var(--ink-secondary)] hover:text-[var(--ink)] underline underline-offset-4"
            >
              Read Permission Safety Matrix
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
