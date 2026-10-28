'use client'

import { useState } from 'react'
import { Activity, Calendar, Compass, Dumbbell, Flame, Heart, Shield, Sparkles } from 'lucide-react'

interface ScreenItem {
  id: string
  title: string
  subtitle: string
  category: string
  badge: string
  image: string
  icon: typeof Activity
  description: string
  highlights: string[]
}

const SCREENS: ScreenItem[] = [
  {
    id: 'wellbeing',
    title: 'Daily Vitality & Check-In',
    subtitle: 'Holistic 1-Minute Reflection',
    category: 'Daily Wellbeing',
    badge: 'Local First',
    image: '/screenshots/01_wellbeing.png',
    icon: Heart,
    description:
      'Log your daily energy, emotional mood, hydration, and mindful intention in under 60 seconds. The app computes a local Vitality Score to guide your day without clinical pressure.',
    highlights: [
      'Daily energy & mood logging',
      'Local Vitality Score computation',
      'Hydration and intention setting',
      'Zero remote tracking',
    ],
  },
  {
    id: 'pose-coach',
    title: 'On-Device Pose Coach',
    subtitle: 'Real-Time Biomechanical Form Guidance',
    category: 'Computer Vision',
    badge: 'Zero Cloud Video',
    image: '/screenshots/04_pose_tracking.png',
    icon: Activity,
    description:
      'Follow along with guided bodyweight routines while your phone’s camera observes alignment landmarks in real time. All processing happens in volatile RAM — zero video is ever saved or uploaded.',
    highlights: [
      '33-point skeletal landmark detection',
      'Real-time posture & cadence feedback',
      'Rep counting & pacing guides',
      '100% volatile memory processing',
    ],
  },
  {
    id: 'training',
    title: 'Mindful Training Hub',
    subtitle: 'Bodyweight Biomechanics & Mobility',
    category: 'Movement',
    badge: 'Adaptive Pace',
    image: '/screenshots/03_training.png',
    icon: Dumbbell,
    description:
      'Explore mindful bodyweight flows, core stability routines, posture resets, and gentle morning mobility. Each session offers gentle audio chimes and clear visual guides.',
    highlights: [
      'Calm bodyweight routines for all levels',
      'Mobility flows and posture resets',
      'Audio chimes and breathing cues',
      'Offline-ready in Airplane Mode',
    ],
  },
  {
    id: 'cycle',
    title: 'Cycle Intelligence',
    subtitle: 'Hormonal Awareness & Rhythm Strip',
    category: 'Women’s Health',
    badge: 'Private & Secure',
    image: '/screenshots/02_cycle.png',
    icon: Sparkles,
    description:
      'Track your menstrual cycle alongside symptoms, sleep, and physical energy. Receive gentle recommendations matched to follicular, ovulatory, and luteal phases.',
    highlights: [
      'Cycle phase tracking (follicular to luteal)',
      'Symptom & energy correlation',
      'Tailored mobility recommendations',
      'Encrypted on your phone',
    ],
  },
  {
    id: 'quests',
    title: 'Flow Quests Arcade',
    subtitle: 'Gamified Wellbeing Motivation',
    category: 'Gamification',
    badge: 'XP & Badges',
    image: '/screenshots/04_quests_arcade.png',
    icon: Flame,
    description:
      'Stay motivated with bite-sized daily quests that reward consistent mindful habits with experience points (XP). Health Connect steps and workouts unlock milestone badges.',
    highlights: [
      'Bite-sized daily self-care quests',
      'Streak bonuses and XP rewards',
      'Health Connect step integration',
      'Pure positive reinforcement',
    ],
  },
  {
    id: 'calendar',
    title: 'Holistic Calendar Agenda',
    subtitle: 'Milestone Tracking & Rhythm',
    category: 'Planning',
    badge: 'Timeline',
    image: '/screenshots/06_calendar.png',
    icon: Calendar,
    description:
      'Review your routine at a glance with a clean monthly and weekly agenda. Track consistency streaks, scheduled training sessions, and past reflection notes.',
    highlights: [
      'Visual rhythm strip of past sessions',
      'Consistency and streak tracking',
      'Scheduled workout reminders',
      'Exportable as HL7 FHIR anytime',
    ],
  },
]

export function ScreensGallery() {
  const [activeScreenId, setActiveScreenId] = useState(SCREENS[0].id)
  const currentScreen = SCREENS.find((s) => s.id === activeScreenId) ?? SCREENS[0]

  return (
    <section id="screens" className="scroll-mt-24">
      {/* Section Header */}
      <div className="mx-auto max-w-[820px] text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--terracotta)] block mb-3">
          Authentic App Experience
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[var(--ink)] leading-tight">
          Crafted for calm. <span className="italic text-[var(--terracotta)]">Built for sovereignty.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
          Every screen in Thrivefold is designed with natural warm tones, legible typography, and zero clutter. Explore real captures directly from the Android app.
        </p>
      </div>

      {/* Screen Selector Pills */}
      <div className="mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center justify-start sm:justify-center gap-2 shrink-0" role="tablist">
          {SCREENS.map((screen) => {
            const Icon = screen.icon
            const isSelected = screen.id === activeScreenId
            return (
              <button
                key={screen.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveScreenId(screen.id)}
                className={`squircle-button inline-flex shrink-0 items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-[var(--ink)] text-white shadow-sm'
                    : 'bg-[var(--surface2)] text-[var(--ink-secondary)] hover:bg-[var(--surface)] hover:text-[var(--ink)]'
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span>{screen.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Spotlight Showcase View */}
      <div className="squircle-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-5 sm:p-10 lg:p-12 text-left bg-[var(--surface)]">
        {/* Device Frame with Real Screenshot */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-[250px] sm:max-w-[300px] rounded-[42px] p-2.5 sm:p-3 bg-[var(--ink)] shadow-2xl ring-1 ring-black/10">
            {/* Phone Notch / Dynamic Island simulation */}
            <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-3.5 sm:h-4 rounded-full bg-black z-20" />
            <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/19.5]">
              <img
                src={currentScreen.image}
                alt={`${currentScreen.title} screen capture`}
                width={1080}
                height={1920}
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Ambient glare reflection */}
            <div className="pointer-events-none absolute inset-0 rounded-[42px] ring-1 ring-white/10" />
          </div>
        </div>

        {/* Screen Details & Description */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pl-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
              {currentScreen.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--sage-subtle)] text-[var(--sage-strong)]">
              {currentScreen.badge}
            </span>
          </div>

          <div>
            <h3 className="font-serif text-2xl sm:text-4xl font-medium tracking-tight text-[var(--ink)]">
              {currentScreen.title}
            </h3>
            <p className="mt-1 text-sm sm:text-base font-medium text-[var(--terracotta)]">
              {currentScreen.subtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            {currentScreen.description}
          </p>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              Key Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentScreen.highlights.map((item) => (
                <div
                  key={item}
                  className="squircle-inner p-3 flex items-center gap-2.5 text-xs sm:text-sm text-[var(--ink)] font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--terracotta)] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <a
              href="#beta"
              className="squircle-button inline-flex items-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-6 py-3 text-sm font-semibold transition-colors"
            >
              <span>Test in Android Beta</span>
            </a>
            <a
              href="#health-connect"
              className="text-sm font-medium text-[var(--ink-secondary)] hover:text-[var(--ink)] underline underline-offset-4"
            >
              View Data Safety
            </a>
          </div>
        </div>
      </div>

      {/* Grid of All Screens Quick Thumbnail Strip */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {SCREENS.map((s) => {
          const isSelected = s.id === activeScreenId
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveScreenId(s.id)}
              className={`rounded-2xl p-2.5 text-left transition-all group ${
                isSelected
                  ? 'bg-white ring-2 ring-[var(--terracotta)]'
                  : 'bg-[var(--surface2)]/60 hover:bg-white'
              }`}
            >
              <div className="aspect-[9/16] rounded-xl overflow-hidden bg-black mb-2 shadow-xs">
                <img
                  src={s.image}
                  alt={s.title}
                  width={300}
                  height={533}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="block text-[11px] font-semibold text-[var(--ink)] truncate">
                {s.title}
              </span>
              <span className="block text-[10px] text-[var(--ink-muted)] truncate">
                {s.category}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
