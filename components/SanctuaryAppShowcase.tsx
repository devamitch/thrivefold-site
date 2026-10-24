'use client'

import { useState } from 'react'
import { ArrowUpRight, Calendar, Dumbbell, Heart, Users } from 'lucide-react'

interface ShowcaseTab {
  id: string
  label: string
  icon: typeof Calendar
  title: string
  body: string
  screen: {
    header: string
    badge: string
    items: { label: string; value: string }[]
    note: string
  }
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'womens',
    label: 'Women’s health',
    icon: Calendar,
    title: 'Track your cycle alongside the rest of your day.',
    body: 'Log your period, symptoms, energy and sleep, and see where you are in your cycle. It is a tracking aid, not contraception or a diagnosis.',
    screen: {
      header: 'Cycle',
      badge: 'Day 21 · Luteal',
      items: [
        { label: 'Symptoms', value: 'Mild cramps, low energy' },
        { label: 'Sleep', value: '7h 40m' },
        { label: 'Suggested', value: 'Gentle mobility, 20 min' },
      ],
      note: 'Next period expected in about 7 days.',
    },
  },
  {
    id: 'mens',
    label: 'Men’s health',
    icon: Dumbbell,
    title: 'Build strength and recover well.',
    body: 'Track training, recovery, sleep and the daily habits that support them. Short check-ins help you notice patterns over weeks, not just days.',
    screen: {
      header: 'Training',
      badge: 'Week 3',
      items: [
        { label: 'Workouts', value: '3 of 4 done' },
        { label: 'Recovery', value: 'Feeling rested' },
        { label: 'Sleep', value: '7h 10m average' },
      ],
      note: 'Rest day tomorrow.',
    },
  },
  {
    id: 'lgbtq',
    label: 'LGBTQ+ wellbeing',
    icon: Heart,
    title: 'An affirming space for your care.',
    body: 'Keep medication reminders, appointment notes and personal reflections in one private place.',
    screen: {
      header: 'My care',
      badge: 'Reminder set',
      items: [
        { label: 'Medication', value: 'Next dose on Friday' },
        { label: 'Appointment', value: 'Notes ready' },
        { label: 'Check-in', value: 'Feeling steady' },
      ],
      note: 'Your notes stay on your phone.',
    },
  },
  {
    id: 'circles',
    label: 'Circles',
    icon: Users,
    title: 'Find your people as your routine grows.',
    body: 'Circles are private groups for training, meditation, sports and support that open up as you build a routine.',
    screen: {
      header: 'Circles',
      badge: 'Unlocked',
      items: [
        { label: 'Morning strength', value: '4 members this week' },
        { label: 'Evening meditation', value: 'Next session Thursday' },
        { label: 'Weekend running', value: 'Open to join' },
      ],
      note: 'More circles open up as your routine builds.',
    },
  },
]

export function SanctuaryAppShowcase() {
  const [activeTabId, setActiveTabId] = useState(SHOWCASE_TABS[0].id)
  const active = SHOWCASE_TABS.find((t) => t.id === activeTabId) ?? SHOWCASE_TABS[0]

  return (
    <section id="inside" className="scroll-mt-24">
      <div className="mb-8 grid gap-6 sm:mb-12 sm:grid-cols-[1fr_auto] sm:items-end text-left">
        <div>
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--terracotta)] block">
            Inside the app
          </span>
          <h2 className="max-w-[700px] font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.06] tracking-[-0.04em] text-[var(--ink)]">
            A closer look.
          </h2>
        </div>
        <p className="max-w-[400px] text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-right sm:text-base">
          Example screens from each space. Your own data stays on your phone.
        </p>
      </div>

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
              className={`squircle-button inline-flex shrink-0 items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                isSelected ? 'bg-white text-[var(--ink)]' : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      <div className="squircle-card overflow-hidden grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-[var(--surface2)] p-6 sm:p-10 flex items-center justify-center min-h-[400px]">
          <div className="w-full max-w-[400px] rounded-[32px] bg-white p-6 text-left space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--ink)]">{active.screen.header}</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
                {active.screen.badge}
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              {active.screen.items.map((item) => (
                <div key={item.label} className="p-3.5 rounded-2xl bg-[var(--bg)] flex items-center justify-between gap-3">
                  <span className="text-[var(--ink-muted)]">{item.label}</span>
                  <span className="font-medium text-[var(--ink)] text-right">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[var(--ink-secondary)]">{active.screen.note}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14 text-left">
          <h3 className="font-serif text-2xl sm:text-4xl font-medium leading-[1.12] tracking-[-0.03em] text-[var(--ink)]">
            {active.title}
          </h3>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--ink-secondary)]">{active.body}</p>
          <div className="mt-8">
            <a
              href="#beta"
              className="squircle-button inline-flex items-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-6 py-3 text-sm font-semibold"
            >
              <span>Try it in the beta</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
