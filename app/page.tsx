import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import { SiteHeader } from '@/components/SiteHeader'
import { HeroSection } from '@/components/HeroSection'
import { InteractiveTherapyTracker } from '@/components/InteractiveTherapyTracker'
import { SomaticBreathworkPacer } from '@/components/SomaticBreathworkPacer'
import { ClinicalPillarsBento } from '@/components/ClinicalPillarsBento'
import { ProgressAnalyticsDashboard } from '@/components/ProgressAnalyticsDashboard'
import { ZeroKnowledgeArchitecture } from '@/components/ZeroKnowledgeArchitecture'
import { BetaEarlyAccess } from '@/components/BetaEarlyAccess'
import { PrivacyAndTermsAccordion } from '@/components/PrivacyAndTermsAccordion'
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
        <InteractiveTherapyTracker />
        <SomaticBreathworkPacer />
        <ClinicalPillarsBento />
        <ProgressAnalyticsDashboard />
        <ZeroKnowledgeArchitecture />
        <BetaEarlyAccess />
        <PrivacyAndTermsAccordion />
      </main>
      <SiteFooter />
    </>
  )
}
