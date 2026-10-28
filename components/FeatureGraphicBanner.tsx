import { Activity, Calendar, Heart, Sparkles } from 'lucide-react'

const PILLARS = [
  {
    icon: Heart,
    title: 'Daily Check-ins',
    desc: 'Mood, energy, hydration & sleep vitality',
  },
  {
    icon: Activity,
    title: 'Guided Movement',
    desc: 'On-device camera coach & pose feedback',
  },
  {
    icon: Calendar,
    title: 'Cycle & Calendar',
    desc: 'Hormonal awareness & holistic timeline',
  },
  {
    icon: Sparkles,
    title: 'Mindful Living',
    desc: 'Breathwork, Pranayama & habit quests',
  },
]

export function FeatureGraphicBanner() {
  return (
    <section className="relative overflow-hidden my-2 sm:my-4">
      <div className="squircle-card overflow-hidden p-0 bg-[var(--surface)] border border-[var(--border)] shadow-xl">
        {/* The Authentic 1024x500 Feature Graphic Banner */}
        <div className="relative w-full aspect-[2.05/1] overflow-hidden bg-[#EAE4DC]">
          <img
            src="/screenshots/feature_banner_wide.jpg"
            alt="Thrivefold: Your wellbeing, all in one place. Ancient wisdom, modern tools, a healthier you."
            width={1024}
            height={500}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient vignette at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
        </div>

        {/* 4 Pillars Strip under the graphic */}
        <div className="p-5 sm:p-8 bg-[var(--surface)] text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon
            return (
              <div key={p.title} className={`flex items-start gap-3 ${idx > 0 ? 'pt-3 sm:pt-0 sm:pl-4' : ''}`}>
                <div className="w-8 h-8 rounded-xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[var(--ink)] leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[var(--ink-secondary)] leading-snug mt-0.5">
                    {p.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
