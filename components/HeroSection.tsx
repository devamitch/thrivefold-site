'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Sparkles, Heart, Activity, ArrowRight, CheckCircle2, Lock, Smartphone, Send } from 'lucide-react'

export function HeroSection() {
  const [activeSpace, setActiveSpace] = useState<'women' | 'men' | 'pride'>('women')

  const spaceDetails = {
    women: {
      name: "Women's Health",
      badge: 'Harmony & Hormonal Autonomy',
      themeClass: 'bg-[#FDF2EE] border-[#E07A5F]/30 text-[#9B2226]',
      accentBg: '#E07A5F',
      accentText: '#9B2226',
      title: 'Cyclical Wisdom & Phase Telemetry',
      description: 'Menstrual and ovulation rhythm tracking paired with follicular vs. luteal nutrition intelligence and basal temperature analysis — strictly isolated in an on-device encrypted vault.',
      bullets: [
        'Follicular & Luteal phase macronutrient planning',
        'Pelvic floor cadence reminders & BBT temperature log',
        'Direct HarmonyBloom mindfulness and audio resonance sync',
      ],
      link: '/women-health',
    },
    men: {
      name: "Men's Health",
      badge: 'Strength & Endocrine Grounding',
      themeClass: 'bg-[#E8F5EE] border-[#52B788]/30 text-[#1B4332]',
      accentBg: '#52B788',
      accentText: '#1B4332',
      title: 'Resilience, Recovery & Vitality',
      description: 'Testosterone support habits, circadian sun timing, VO2 max progression, and cold recovery tracking paired with non-judgmental stoic reflections.',
      bullets: [
        'Circadian light exposure & sleep architecture telemetry',
        'Strength output, VO2 max & physical recovery score',
        'Stoic reflection chips & non-judgmental accountability',
      ],
      link: '/men-health',
    },
    pride: {
      name: 'Pride & Wellbeing',
      badge: 'Identity-Affirming Sanctuary',
      themeClass: 'bg-[#F3E8FF] border-[#7209B7]/30 text-[#4A0E4E]',
      accentBg: '#7209B7',
      accentText: '#4A0E4E',
      title: 'Affirming Care & Milestone Haven',
      description: 'Hormone replacement therapy (HRT) schedule and dosage reminders, injection site rotation maps, post-op healing markers, and quick panic-lock privacy.',
      bullets: [
        'HRT dose alarms & subcutaneous injection rotation tracker',
        'Dysphoria grounding exercises & post-op milestone logs',
        'Instant discreet panic lock and alias identity masking',
      ],
      link: '/pride-wellbeing',
    },
  }

  const current = spaceDetails[activeSpace]

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Background Soft Ambient Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--surface3)] blur-[120px] pointer-events-none rounded-full opacity-60" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface2)] border border-[var(--border-strong)] text-[var(--ink-secondary)] text-xs font-mono font-medium tracking-wide uppercase mb-6">
          <span className="flex h-2 w-2 rounded-full bg-[var(--rose)] animate-pulse" />
          <span>Local-First · On-Device AI · Zero Surveillance</span>
        </div>

        {/* Brand Origami Petal Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative group p-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] thrive-card">
            <Image
              src="/favicon.svg"
              alt="Thrivefold Emblem"
              width={56}
              height={56}
              className="object-contain animate-float"
              priority
            />
          </div>
        </div>

        {/* Grand Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--ink)] leading-[1.1] mb-6">
          Sovereign Health with <br />
          <span className="italic font-normal text-[var(--rose)]">
            Slow, Contemplative
          </span>{' '}
          Connection
        </h1>

        {/* Serene Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed mb-10 font-light">
          Three dedicated spaces for Women, Men, and LGBTQ+ Wellbeing. All health telemetry, cycle logs, and AI classifiers execute on your device — connected through distance-delayed, chip-only postal letters.
        </p>

        {/* Interactive Space Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(['women', 'men', 'pride'] as const).map((space) => (
            <button
              key={space}
              onClick={() => setActiveSpace(space)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all border ${
                activeSpace === space
                  ? `${spaceDetails[space].themeClass} font-semibold shadow-none border-current`
                  : 'bg-[var(--surface)] border-[var(--border)] text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[var(--border-strong)]'
              }`}
            >
              {spaceDetails[space].name}
            </button>
          ))}
        </div>

        {/* Dynamic Space Preview Card */}
        <div className="mx-auto max-w-3xl rounded-3xl p-6 sm:p-8 thrive-card text-left mb-12">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${current.themeClass}`}>
              {current.badge}
            </span>
            <span className="text-xs font-mono text-[var(--ink-muted)] flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[var(--sage)]" />
              <span>MMKV Vault Encrypted</span>
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-3">
            {current.title}
          </h3>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {current.bullets.map((b, i) => (
              <div key={i} className="p-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)] text-xs text-[var(--ink)] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--sage)] shrink-0 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
            <Link
              href={current.link}
              className="text-xs font-semibold text-[var(--ink)] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore {current.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/slow-correspondence"
              className="text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] inline-flex items-center gap-1"
            >
              <span>View Slow Correspondence Specs</span>
              <Send className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/download"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            <span>Download for iOS & Android</span>
          </Link>
          <Link
            href="/beta"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] text-[var(--ink)] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[var(--rose)]" />
            <span>Request TestFlight / APK Access</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
