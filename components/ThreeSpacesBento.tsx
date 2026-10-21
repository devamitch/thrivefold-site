import Link from 'next/link'
import { Heart, Activity, Compass, Shield, ArrowRight, Sparkles, Moon, Sun, Lock } from 'lucide-react'

export function ThreeSpacesBento() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--rose)] font-semibold">
            Architectural Separation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight mt-2 mb-4">
            Three Dedicated Sovereign Spaces
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            One app, three deeply specialized user experiences — each calibrated to its own physiological rhythms, medical markers, and privacy safeguards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experience A: Women's Health */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FDF2EE] border border-[#E07A5F]/30 flex items-center justify-center text-[#E07A5F] mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#9B2226] font-semibold block mb-2">
                Experience A
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">
                Women’s Health & Cyclical Rhythms
              </h3>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-6">
                Menstrual, follicular, and luteal phase telemetry combined with basal body temperature (BBT), pelvic floor exercise cadence, and phase-specific nutrition plans.
              </p>
              <ul className="space-y-2.5 text-xs text-[var(--ink-secondary)] mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]" />
                  <span>Cycle & Ovulation prediction without cloud leaks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]" />
                  <span>Follicular vs. Luteal phase dietary guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]" />
                  <span>Continuous HarmonyBloom audio mindfulness</span>
                </li>
              </ul>
            </div>
            <Link
              href="/women-health"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#E07A5F] hover:text-[#9B2226] transition-colors pt-4 border-t border-[var(--border)]"
            >
              <span>Explore Women’s Health Space</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Experience B: Men's Health */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5EE] border border-[#52B788]/30 flex items-center justify-center text-[#52B788] mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold block mb-2">
                Experience B
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">
                Men’s Health & Hormonal Fortitude
              </h3>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-6">
                Endocrine support habits, morning sunlight exposure timer, cold immersion recovery telemetry, VO2 max progression, and stoic mental grounding chips.
              </p>
              <ul className="space-y-2.5 text-xs text-[var(--ink-secondary)] mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                  <span>Circadian light cadence & sleep telemetry</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                  <span>Strength recovery & prostate wellness checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                  <span>Stoic reflections without guilt-driven gamification</span>
                </li>
              </ul>
            </div>
            <Link
              href="/men-health"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#52B788] hover:text-[#1B4332] transition-colors pt-4 border-t border-[var(--border)]"
            >
              <span>Explore Men’s Health Space</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Experience C: Pride & LGBTQ+ Wellbeing */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] thrive-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F3E8FF] border border-[#7209B7]/30 flex items-center justify-center text-[#7209B7] mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#4A0E4E] font-semibold block mb-2">
                Experience C
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">
                Pride & Affirming Care Haven
              </h3>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-6">
                Dedicated HRT dosage schedules and injection site rotation maps, post-op healing progress notes, dysphoria grounding tools, and instant discreet panic lock.
              </p>
              <ul className="space-y-2.5 text-xs text-[var(--ink-secondary)] mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7209B7]" />
                  <span>HRT dose alarms & injection site rotation map</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7209B7]" />
                  <span>Post-operative healing and surgical recovery logs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7209B7]" />
                  <span>Discreet alias masking & one-tap emergency panic lock</span>
                </li>
              </ul>
            </div>
            <Link
              href="/pride-wellbeing"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#7209B7] hover:text-[#4A0E4E] transition-colors pt-4 border-t border-[var(--border)]"
            >
              <span>Explore Pride Wellbeing Space</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
