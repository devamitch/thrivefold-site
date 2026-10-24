import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/site'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0D1514',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Thrivefold — Sovereign Health Sanctuary, Tripartite Wellness & Slow Correspondence',
    template: '%s · Thrivefold',
  },
  description: siteConfig.description,
  applicationName: 'Thrivefold',
  authors: [{ name: siteConfig.author, url: siteConfig.authorUrl }],
  creator: siteConfig.author,
  publisher: 'Amit Dev Labs',
  keywords: [
    'Thrivefold',
    'Sovereign Health',
    'Womens Health Cycle',
    'Mens Health Stamina',
    'Pride LGBTQ Wellbeing',
    'Slow Correspondence',
    'Postal Letters',
    'Chip-only Letter Composer',
    'MediaPipe Pose Telemetry',
    'On-Device AI',
    'Offline Health Vault',
    'MMKV Encryption',
    'Zero Knowledge Privacy',
    'Amit Dev Labs',
    'devamitch',
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Thrivefold — Sovereign Health Sanctuary, Tripartite Wellness & Slow Correspondence',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Thrivefold',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Thrivefold Master Emblem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thrivefold — Sovereign Health Sanctuary & Slow Correspondence',
    description: siteConfig.description,
    creator: '@devamitch',
    images: ['/icon-512.png'],
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://thrivefold.devamit.co.in/#software',
        name: 'Thrivefold',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'iOS, Android, Web',
        description: siteConfig.description,
        url: siteConfig.url,
        author: {
          '@type': 'Person',
          name: siteConfig.author,
          url: siteConfig.authorUrl,
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://thrivefold.devamit.co.in/#organization',
        name: 'Amit Dev Labs',
        url: 'https://devamit.co.in',
        logo: 'https://thrivefold.devamit.co.in/icon-512.png',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://thrivefold.devamit.co.in/#website',
        url: siteConfig.url,
        name: 'Thrivefold',
        publisher: {
          '@id': 'https://thrivefold.devamit.co.in/#organization',
        },
      },
    ],
  }

  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <head>
        {/* Explicit Googlebot & Browser Favicon Hierarchy without SVG */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="Thrivefold" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Discovery Links for Agents and Crawlers */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context" />
        <link rel="alternate" type="text/plain" href="/agents.txt" title="Agent Instructions" />

        {/* Structured JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
