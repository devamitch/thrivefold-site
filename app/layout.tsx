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
  themeColor: '#FAF7F2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s · Thrivefold',
  },
  description: siteConfig.description,
  applicationName: 'Thrivefold',
  authors: [{ name: siteConfig.author, url: siteConfig.authorUrl }],
  creator: siteConfig.author,
  publisher: 'Amit Dev Labs',
  keywords: [
    'Thrivefold',
    'private health app',
    'cycle tracking',
    'women’s health',
    'men’s health',
    'LGBTQ+ wellbeing',
    'daily check-in',
    'guided workouts',
    'meal logging',
    'support groups',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Thrivefold',
    images: [{ url: '/icon-512.png', width: 1024, height: 1024, alt: 'Thrivefold logo' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/icon-512.png'],
  },
  robots: {
    index: true,
    follow: true,
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
        operatingSystem: 'iOS, Android',
        description: siteConfig.description,
        url: siteConfig.url,
        author: {
          '@type': 'Person',
          name: siteConfig.author,
          url: siteConfig.authorUrl,
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://thrivefold.devamit.co.in/#organization',
        name: 'Amit Dev Labs',
        url: 'https://devamit.co.in',
        logo: 'https://thrivefold.devamit.co.in/logo.png',
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
        <meta name="apple-mobile-web-app-title" content="Thrivefold" />
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
