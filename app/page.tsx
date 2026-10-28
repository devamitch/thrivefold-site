import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import { SiteHeader } from '@/components/SiteHeader'
import { HeroSection } from '@/components/HeroSection'
import { FeatureGraphicBanner } from '@/components/FeatureGraphicBanner'
import { HealthConnectJustification } from '@/components/HealthConnectJustification'
import { ScreensGallery } from '@/components/ScreensGallery'
import { FeatureBento } from '@/components/FeatureBento'
import { SanctuaryAppShowcase } from '@/components/SanctuaryAppShowcase'
import { PermissionSafetyMatrix } from '@/components/PermissionSafetyMatrix'
import { StepsBand } from '@/components/StepsBand'
import { HardwareSecuritySpecs } from '@/components/HardwareSecuritySpecs'
import { PrivacyTermsCovenantBand } from '@/components/PrivacyTermsCovenantBand'
import { FaqSection } from '@/components/FaqSection'
import { BetaSignupSection } from '@/components/BetaSignupSection'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
}

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
        {/* Hero Section with Live Screen Frame */}
        <HeroSection />

        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-20 px-4 pb-24 sm:gap-28 sm:px-8 lg:px-10">
          {/* Authentic Wide Feature Graphic Banner */}
          <FeatureGraphicBanner />

          {/* Health Connect & Device Sensor Justification */}
          <HealthConnectJustification />

          {/* Authentic Phone Screenshots Gallery */}
          <ScreensGallery />

          {/* Capabilities Bento */}
          <FeatureBento />

          {/* Deep Interactive App Showcase */}
          <SanctuaryAppShowcase />

          {/* Permission & Data Safety Matrix */}
          <PermissionSafetyMatrix />

          {/* How It Works Steps */}
          <StepsBand />

          {/* Hardware Security Specs */}
          <HardwareSecuritySpecs />

          {/* Legal Covenant Band */}
          <PrivacyTermsCovenantBand />

          {/* FAQ Section */}
          <FaqSection />

          {/* Beta Testing Access */}
          <BetaSignupSection />
        </div>
      </main>
      <SiteFooter />
    </SmoothScrollProvider>
  )
}
