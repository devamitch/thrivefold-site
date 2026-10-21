import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import { SiteHeader } from '@/components/SiteHeader'
import { HeroSection } from '@/components/HeroSection'
import { FeatureBento } from '@/components/FeatureBento'
import { InteractiveTherapyTracker } from '@/components/InteractiveTherapyTracker'
import { StepsBand } from '@/components/StepsBand'
import { HardwareSecuritySpecs } from '@/components/HardwareSecuritySpecs'
import { FaqSection } from '@/components/FaqSection'
import { BetaSignupSection } from '@/components/BetaSignupSection'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
        <HeroSection />

        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-24 px-4 pb-24 sm:gap-32 sm:px-8 lg:px-10">
          <FeatureBento />

          <InteractiveTherapyTracker />

          <StepsBand />

          <HardwareSecuritySpecs />

          <FaqSection />

          <BetaSignupSection />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
