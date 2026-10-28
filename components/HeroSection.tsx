import { ArrowRight, Check, ShieldCheck, Zap, Lock, Sparkles } from 'lucide-react'

const PROMISES = [
  'Health Connect on-device sync',
  'On-device camera pose coaching',
  'Hardware Keystore encryption',
  'Zero cloud health database',
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-32 lg:px-10">
      {/* Subtle warm terracotta glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_60%_at_70%_18%,rgba(215,114,89,0.12),transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="max-w-[640px] text-left">
          {/* Badge */}
          <a
            href="#health-connect"
            className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-[var(--surface)] py-1.5 pl-1.5 pr-4 text-xs sm:text-[13px] font-medium text-[var(--ink-secondary)] shadow-xs transition-colors hover:bg-[var(--surface2)]"
          >
            <span className="rounded-full bg-[var(--sage-strong)] px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
              Health Connect
            </span>
            <span>Strictly on-device fitness &amp; wellbeing</span>
            <ArrowRight className="h-3.5 w-3.5 text-[var(--terracotta)]" aria-hidden="true" />
          </a>

          {/* Heading */}
          <h1 className="text-balance font-serif text-[clamp(2.3rem,5.8vw,4.6rem)] font-medium leading-[1.06] tracking-[-0.04em] text-[var(--ink)]">
            Mindful fitness. <br />
            <span className="italic text-[var(--terracotta)]">Sovereign privacy.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[560px] text-base leading-relaxed text-[var(--ink-secondary)] sm:text-lg">
            Thrivefold is your calm companion for bodyweight biomechanics, on-device pose coaching, and holistic vitality. Utilizing Android Health Connect strictly on-device, your steps, sleep, and workouts stay encrypted on your phone with zero cloud databases.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#beta"
              className="squircle-button inline-flex min-h-12 sm:min-h-14 items-center justify-center gap-2 bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white px-7 text-sm sm:text-base font-semibold transition-transform"
            >
              <span>Join the Beta</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#screens"
              className="squircle-button inline-flex min-h-12 sm:min-h-14 items-center justify-center gap-2 bg-[var(--surface2)] text-[var(--ink)] px-6 text-sm sm:text-base font-medium transition-colors hover:bg-white"
            >
              Explore App Screens
            </a>
          </div>

          {/* Feature Promises */}
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {PROMISES.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--ink-secondary)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--terracotta-subtle)] shrink-0">
                  <Check className="h-3 w-3 text-[var(--terracotta-strong)]" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Real Mobile Device Showcase with Authentic App Screenshot */}
        <div className="relative mx-auto flex items-center justify-center w-full max-w-[380px] sm:max-w-[420px] px-2">
          {/* Background Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--terracotta-subtle)] to-[var(--sage-subtle)] rounded-full blur-3xl opacity-60 -z-10" />

          {/* Floating Badge 1 - Left (only on xl screens to avoid viewport overflow) */}
          <div className="hidden xl:flex absolute -left-10 top-16 z-20 items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
            <div className="w-8 h-8 rounded-xl bg-[var(--sage-subtle)] flex items-center justify-center text-[var(--sage-strong)]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-semibold text-[var(--ink)]">Zero Cloud DB</span>
              <span className="block text-[10px] text-[var(--ink-muted)]">Encrypted Keystore</span>
            </div>
          </div>

          {/* Floating Badge 2 - Right (only on xl screens to avoid viewport overflow) */}
          <div className="hidden xl:flex absolute -right-10 bottom-20 z-20 items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
            <div className="w-8 h-8 rounded-xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta-strong)]">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-semibold text-[var(--ink)]">Pose Coach</span>
              <span className="block text-[10px] text-[var(--ink-muted)]">33 Landmarks / RAM</span>
            </div>
          </div>

          {/* Phone Frame */}
          <div className="relative w-full max-w-[280px] sm:max-w-[310px] rounded-[42px] p-2.5 sm:p-3 bg-[var(--ink)] shadow-2xl ring-1 ring-black/20">
            {/* Speaker & Sensor Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-3.5 rounded-full bg-black z-20" />
            
            <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/19.5]">
              <img
                src="/screenshots/01_wellbeing.png"
                alt="Thrivefold Daily Wellbeing and Vitality screen"
                width={1080}
                height={1920}
                priority="true"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Inner Glare Border */}
            <div className="pointer-events-none absolute inset-0 rounded-[42px] ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
