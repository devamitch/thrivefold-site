'use client'

import { useState } from 'react'
import {
  Sparkles,
  Heart,
  Activity,
  Users,
  ShieldCheck,
  Lock,
  ArrowUpRight,
  Check,
  Compass,
  Calendar,
  Zap,
  Clock,
  Send,
  EyeOff,
} from 'lucide-react'

interface ShowcaseTab {
  id: string
  label: string
  icon: typeof Sparkles
  tag: string
  title: string
  body: string
  colorBadgeBg: string
  colorBadgeText: string
  screen: {
    header: string
    badge: string
    accentColor: string
    accentBg: string
    topContext: string
    mainHeading: string
    mainText: string
    secondaryHeading: string
    secondaryText: string
    footerLabel: string
    securityBadge: string
  }
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'womens',
    label: "Women's Health",
    icon: Calendar,
    tag: 'Cycle & Hormonal Rhythm',
    title: 'Harmonize with your natural biological seasons.',
    body: 'Track follicular and luteal phases, basal body temperature, and pelvic floor vitality. Thrivefold tailors micronutrient recommendations to your hormonal cycle without ever transmitting reproductive health data to remote servers, insurers, or data brokers.',
    colorBadgeBg: 'bg-[#FFF8F5]',
    colorBadgeText: 'text-[#9B2226]',
    screen: {
      header: 'Cycle Sanctuary · Local-First',
      badge: 'Luteal Phase · Day 21',
      accentColor: '#9B2226',
      accentBg: 'bg-[#FFF8F5]',
      topContext: 'Phase Guidance: Progesterone Peak',
      mainHeading: 'Follicular & Luteal Nutrition',
      mainText: 'Complex root vegetables, pumpkin seeds, and magnesium recommended today to support progesterone synthesis and evening sleep quality.',
      secondaryHeading: 'Somatic Recovery Protocol',
      secondaryText: 'Gentle pelvic floor release & 15-minute restorative lumbar breathing pacing.',
      footerLabel: 'Basal Temp: 98.2°F · Steady',
      securityBadge: 'Hardware Enclave Encrypted',
    },
  },
  {
    id: 'mens',
    label: "Men's Health",
    icon: Zap,
    tag: 'Vigor, Stamina & Recovery',
    title: 'Build physical fortitude with stoic clarity.',
    body: 'Monitor circadian morning sun exposure, cold immersion recovery, and cardiovascular stamina. Anchor your daily focus with non-judgmental stoic reflection chips and prostate wellness reminders kept strictly on your local hardware.',
    colorBadgeBg: 'bg-[#F4F9F5]',
    colorBadgeText: 'text-[#2D6A4F]',
    screen: {
      header: 'Vigor Telemetry · On-Device',
      badge: 'Circadian Sun · 14-Day Streak',
      accentColor: '#2D6A4F',
      accentBg: 'bg-[#F4F9F5]',
      topContext: 'Morning Protocol Complete',
      mainHeading: 'Circadian & Cold Recovery',
      mainText: '15 min direct outdoor sunlight logged + 3 min cold recovery immersion. Parasympathetic HRV normalized to 72 ms.',
      secondaryHeading: 'Stoic Anchor Chip',
      secondaryText: '“You have power over your mind—not outside events. Realize this, and you will find strength.” — Marcus Aurelius',
      footerLabel: 'VO2 Max Progression: +2.4%',
      securityBadge: 'MMKV Binary · Zero Cloud Pings',
    },
  },
  {
    id: 'pride',
    label: 'Pride & Affirming',
    icon: Heart,
    tag: 'Affirming Care & Safe Haven',
    title: 'A safe, affirming haven for identity and care.',
    body: 'Manage hormone replacement therapy (HRT) schedules, track subcutaneous injection site rotations, and navigate gender-affirming milestones. Protected with a one-touch biometric panic lock and zero-identifying health terminology.',
    colorBadgeBg: 'bg-[#F7F3FA]',
    colorBadgeText: 'text-[#7209B7]',
    screen: {
      header: 'Affirming Sanctuary · Identity Shield',
      badge: 'HRT Schedule Active',
      accentColor: '#7209B7',
      accentBg: 'bg-[#F7F3FA]',
      topContext: 'Care Protocol: Bi-Weekly Rotation',
      mainHeading: 'Subcutaneous Site Tracker',
      mainText: 'Right Thigh logged for today. Next rotation: Left Deltoid in 7 days. Scar tissue minimization sequence balanced.',
      secondaryHeading: 'Affirming Grounding Reframe',
      secondaryText: '“You are whole, valued, and in sovereign ownership of your body, your rhythm, and your journey today.”',
      footerLabel: 'Next Milestone: 60 Days Affirmation',
      securityBadge: 'Biometric Panic Lock Armed',
    },
  },
  {
    id: 'circles',
    label: 'Activity Circles',
    icon: Users,
    tag: 'Progression-Gated (Level 3+)',
    title: 'Find trusted gym pals, meditation circles, and sports hubs.',
    body: 'Unlocked at Level 3+ milestones. Connect with vetted peers for morning gym circuits, guided meditation sessions, therapy groups, and local athletics—free from public directories, unvetted chats, or surveillance.',
    colorBadgeBg: 'bg-[#E8F5F3]',
    colorBadgeText: 'text-[#2A9D8F]',
    screen: {
      header: 'Activity Circles · Verified Peer Hubs',
      badge: 'Level 3+ Gated',
      accentColor: '#2A9D8F',
      accentBg: 'bg-[#E8F5F3]',
      topContext: 'Active Circles: 3 · Verified Peers nearby',
      mainHeading: 'Downtown Strength & Conditioning Hub',
      mainText: 'Scheduled: 6:30 AM Circuit Training · 4 members confirmed · Sanctuary code of conduct active',
      secondaryHeading: 'Peer Privacy Guard',
      secondaryText: 'Pseudonymous aliases only. Exact home locations, phone numbers, and private biometrics are never shared.',
      footerLabel: 'Next Session: Tomorrow 6:30 AM',
      securityBadge: 'Verified Adult · E2E Pseudonymous',
    },
  },
]

export function SanctuaryAppShowcase() {
  const [activeTabId, setActiveTabId] = useState('womens')
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
          Explore the four dedicated interface views powering Thrivefold’s three health sanctuaries and verified activity circles.
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
                  ? 'bg-white text-[var(--ink)]'
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
        <div className="bg-[var(--surface2)] p-6 sm:p-10 flex items-center justify-center min-h-[480px] lg:min-h-[540px]">
          <div className="w-full max-w-[420px] rounded-[32px] bg-white p-6 text-left space-y-4">
            {/* App Topbar */}
            <div className="flex items-center justify-between pb-2 text-xs text-[var(--ink-muted)]">
              <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                {active.screen.header}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${active.colorBadgeBg} ${active.colorBadgeText}`}>
                {active.screen.badge}
              </span>
            </div>

            {/* Content Cards */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-[var(--bg)]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--ink-muted)] block mb-1">
                  Active Sanctuary State
                </span>
                <span className="font-medium text-[var(--ink)]">
                  {active.screen.topContext}
                </span>
              </div>

              <div className={`p-4 rounded-2xl ${active.screen.accentBg} space-y-1.5`}>
                <span className="text-[10px] font-semibold uppercase tracking-wider block" style={{ color: active.screen.accentColor }}>
                  {active.screen.mainHeading}
                </span>
                <p className="font-serif italic text-xs sm:text-[13px] text-[var(--ink)] leading-snug">
                  &ldquo;{active.screen.mainText}&rdquo;
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--surface2)] space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--ink)] block flex items-center gap-1">
                  <Check className="w-3 h-3 text-[var(--sage-strong)]" />
                  {active.screen.secondaryHeading}
                </span>
                <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-normal">
                  {active.screen.secondaryText}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-[var(--ink-secondary)]">
                <span className="font-medium text-[var(--ink)]">{active.screen.footerLabel}</span>
                <span className="text-[var(--terracotta-strong)] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--sage-strong)]" />
                  {active.screen.securityBadge}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Editorial Narrative */}
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14 text-left">
          <span className={`inline-flex w-fit rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${active.colorBadgeBg} ${active.colorBadgeText}`}>
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
