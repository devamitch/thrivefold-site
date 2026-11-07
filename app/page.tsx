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
import { EcosystemDirectorySection } from '@/components/EcosystemDirectorySection'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Thrivefold: Private Health, Pose Tracking & Vitality Companion',
  description:
    'On-device camera pose coaching, Health Connect sync, daily check-ins, and hardware-encrypted local health databases. Zero cloud database dependencies.',
  alternates: { canonical: siteConfig.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Thrivefold: Private Health, Pose Tracking & Vitality Companion',
    description:
      'On-device camera pose coaching, Health Connect sync, daily check-ins, and hardware-encrypted local health databases.',
    url: siteConfig.url,
    siteName: 'Thrivefold',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thrivefold: Private Health, Pose Tracking & Vitality Companion',
    description:
      'On-device camera pose coaching, Health Connect sync, daily check-ins, and hardware-encrypted local health databases.',
  },
}

export default function HomePage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Thrivefold',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Android 8.0+',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Thrivefold is a private personal health and wellbeing application for Android featuring on-device camera pose guidance, Health Connect integration, and hardware-encrypted local databases.',
        author: {
          '@type': 'Person',
          name: siteConfig.author,
          url: siteConfig.authorUrl,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does Thrivefold utilize Health Connect and device sensor permissions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Thrivefold utilizes Health Connect and device sensor permissions strictly on-device to read user activity, step count, sleep, and fitness matrices. This data is processed locally within gamified wellbeing routines to provide real-time self-care motivation. No raw health metrics or personal health data are sold, shared, or persisted to remote backend databases.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the on-device camera pose coach work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'During guided movement workouts, the camera coach observes body alignment using 33 skeletal landmarks in real time to guide your cadence and posture. All computer vision models run locally on your phone using volatile device RAM. Camera frames are never recorded, saved to storage, or transmitted over any network.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where is my health data stored?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Your check-ins, cycle data, workout logs, sleep metrics, and personal notes are stored locally on your device and encrypted using hardware Keystore AES-256 keys. We do not operate remote databases that store your biometric logs. You can export everything in HL7 FHIR or wipe all local data in one tap from settings.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are any health metrics sold, shared, or used for advertising?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Never. Thrivefold contains zero third-party advertising trackers, zero telemetry SDKs, and zero commercial data broker partnerships. We never sell, rent, or monetize your health information under any circumstances.',
            },
          },
        ],
      },
    ],
  }

  return (
    <SmoothScrollProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
        {/* Hero Section with Live Screen Frame */}
        <HeroSection />

        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-20 px-4 pb-24 sm:gap-28 sm:px-8 lg:px-10">
          {/* Authentic Wide Feature Graphic Banner */}
          <FeatureGraphicBanner />

          {/* Health Connect & Device Sensor Justification */}
          <HealthConnectJustification />

          {/* Dedicated AnvayKosh Ecosystem All Apps Beta & Download Hub */}
          <EcosystemDirectorySection />

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
