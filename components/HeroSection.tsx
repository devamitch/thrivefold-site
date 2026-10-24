import { ArrowRight, Check, Calendar, Lock, Users } from 'lucide-react'

const PROMISES = [
  'Records encrypted on your phone',
  'No ads',
  'Export as HL7 FHIR',
  'Delete everything from settings',
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10">
      {/* The one subtle gradient on the page. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_60%_at_70%_18%,rgba(215,114,89,0.10),transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="max-w-[640px] text-left">
          <a
            href="#beta"
            className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-[var(--surface)] py-1.5 pl-1.5 pr-4 text-[13px] font-medium text-[var(--ink-secondary)]"
          >
            <span className="rounded-full bg-[var(--terracotta)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
              Beta
            </span>
            <span>Testing now on iOS and Android</span>
            <ArrowRight className="h-3.5 w-3.5 text-[var(--terracotta)]" aria-hidden="true" />
          </a>

          <h1 className="text-balance font-serif text-[clamp(2.5rem,6.6vw,5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
            Look after your health. <span className="italic text-[var(--terracotta)]">Keep it private.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[17px] leading-relaxed text-[var(--ink-secondary)] sm:text-[19px]">
            Thrivefold helps you check in each day, track your cycle, train with a camera coach, log meals and
            stay consistent. It has dedicated spaces for women’s health, men’s health and LGBTQ+ wellbeing, and
            your records are encrypted on your phone.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#beta"
              className="squircle-button inline-flex min-h-14 items-center justify-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-7 text-base font-semibold"
            >
              <span>Join the beta</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="squircle-button inline-flex min-h-14 items-center justify-center gap-2 bg-[var(--surface2)] text-[var(--ink)] px-6 text-base font-medium transition-colors"
            >
              See what’s inside
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {PROMISES.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-[var(--ink-secondary)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--terracotta-subtle)]">
                  <Check className="h-3 w-3 text-[var(--terracotta-strong)]" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Illustrative app cards; decorative only. */}
        <div className="relative mx-auto h-[440px] sm:h-[500px] w-full max-w-[480px] px-2 sm:px-4" aria-hidden="true">
          <div className="absolute left-[2%] top-[46%] w-[56%] -rotate-[5deg] rounded-[26px] bg-white p-4 sm:p-5 text-left space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[var(--terracotta-strong)]" />
                Cycle
              </span>
              <span className="text-[10px] font-semibold text-[var(--terracotta-strong)] bg-[var(--terracotta-subtle)] px-2 py-0.5 rounded-full">
                Day 21
              </span>
            </div>
            <div className="w-full bg-[var(--surface2)] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[var(--terracotta)] h-full rounded-full w-[75%]" />
            </div>
            <p className="text-[11px] text-[var(--ink-muted)] leading-snug">Luteal phase. Energy and sleep notes saved.</p>
          </div>

          <div className="absolute right-[2%] top-[52%] w-[54%] rotate-[5deg] rounded-[26px] bg-white p-4 sm:p-5 text-left space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[var(--sage-strong)]" />
                Circles
              </span>
              <span className="text-[10px] font-semibold text-[var(--sage-strong)] bg-[var(--sage-subtle)] px-2 py-0.5 rounded-full">
                Unlocked
              </span>
            </div>
            <p className="text-[11px] text-[var(--ink-secondary)] leading-snug">Morning strength group · 4 members this week</p>
          </div>

          <div className="absolute left-1/2 top-0 z-10 w-[78%] -translate-x-1/2 rounded-[32px] bg-white p-5 sm:p-6 text-left space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[var(--ink)]">Today’s check-in</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--sage-subtle)] text-[var(--sage-strong)] flex items-center gap-1">
                <Lock className="w-3 h-3" />
                On this phone
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
              <div className="squircle-inner p-2.5">
                <span className="block font-semibold text-[var(--ink)]">Calm</span>
                <span className="text-[var(--ink-muted)]">Mood</span>
              </div>
              <div className="squircle-inner p-2.5">
                <span className="block font-semibold text-[var(--ink)]">7h 20m</span>
                <span className="text-[var(--ink-muted)]">Sleep</span>
              </div>
              <div className="squircle-inner p-2.5">
                <span className="block font-semibold text-[var(--ink)]">2 of 3</span>
                <span className="text-[var(--ink-muted)]">Quests</span>
              </div>
            </div>
            <p className="text-[12px] text-[var(--ink-secondary)] leading-snug">
              Next: 20-minute mobility workout with the camera coach.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
