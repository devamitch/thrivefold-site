import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  AlertCircle,
} from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { EcosystemDirectorySection } from '@/components/EcosystemDirectorySection'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Join Android Beta Testing · Thrivefold',
  description:
    'Install Thrivefold from Google Play in three simple steps. Join our closed testing community for mindful fitness and on-device pose tracking.',
  alternates: { canonical: `${siteConfig.url}/beta/` },
}

const STEPS = [
  {
    step: '1',
    title: 'Join the Google Testers Group',
    description:
      'Google requires all closed testing participants to belong to an authorized Google Group. Joining with your Play Store Gmail pre-approves you for Thrivefold and all AnvayKosh ecosystem apps.',
    hint: 'Important: Use the exact same Gmail address that is logged into your phone’s Google Play Store.',
    action: 'Join Google Group',
    href: siteConfig.googleGroupUrl,
    icon: Users,
  },
  {
    step: '2',
    title: 'Accept the Google Play Invite',
    description:
      'Open the official Google Play opt-in page and tap “Become a tester”. You will see a green confirmation badge once activated.',
    hint: 'If it says “not invited”, ensure you completed Step 1 with the same Gmail account.',
    action: 'Accept Invite on Google Play',
    href: siteConfig.playStoreBetaUrl,
    icon: CheckCircle2,
  },
  {
    step: '3',
    title: 'Install Thrivefold',
    description:
      'Open the Google Play Store on your Android device and tap “Install”. Daily updates and routine engine patches will stream automatically.',
    hint: 'Seeing “Item not found”? Wait 2 minutes for Google’s token to propagate, then open again.',
    action: 'Open in Google Play Store',
    href: siteConfig.playStoreUrl,
    icon: Smartphone,
  },
]

const TROUBLESHOOTING = [
  {
    title: 'Play Store shows “Item not found” or “We are sorry”',
    body: 'This happens if your Play Store app is signed in with a different Gmail than the one you used to join the Google Group. Open the Play Store, tap your avatar at top right, switch to the Gmail you used in Step 1, and retry Step 3.',
  },
  {
    title: 'Chrome opened the invite in a different account',
    body: 'If Chrome has a work or secondary account active, the testing invite opens in that account. Copy the link in Step 2, paste it into Chrome, tap your profile avatar on the Google page, and switch to your primary Play Store Gmail.',
  },
  {
    title: 'Access propagation delay',
    body: 'Google Play’s closed-track authorization can take 5 to 15 minutes to register across worldwide regional edge servers. If Step 3 is not ready immediately, wait a few minutes, close the Play Store app, and tap Step 3 again.',
  },
]

export default function BetaPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[960px] space-y-12">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--ink-secondary)] hover:text-[var(--terracotta)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Thrivefold Home</span>
          </Link>

          {/* Header */}
          <div className="text-left space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Google Play Closed Beta</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] leading-tight">
              Three steps. One Gmail. <br />
              <span className="italic text-[var(--terracotta)]">Install Thrivefold Beta.</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
              Thrivefold is in closed testing on Google Play. Follow these three steps on your Android device using the Gmail associated with your Play Store account.
            </p>
          </div>

          {/* Quick Direct Actions Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle,#e7e5e4)] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
                Direct Google Play Links
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--ink)]">
                Ready to install right now?
              </h2>
              <p className="text-xs text-[var(--ink-secondary)]">
                Package ID: <code className="font-mono text-[var(--ink)] font-semibold">{siteConfig.appPackage}</code>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-900 hover:bg-black text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Smartphone className="w-4 h-4" />
                <span>Google Play Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.playStoreBetaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[var(--terracotta)] hover:bg-[#b05a3c] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Join Beta (Opt-In)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* The 3 Steps Cards */}
          <div className="space-y-4">
            {STEPS.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.step}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-[var(--border-subtle,#e7e5e4)] shadow-xs hover:border-[var(--terracotta)] transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="w-9 h-9 rounded-2xl bg-[var(--terracotta)] text-white font-bold text-sm flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <div className="space-y-1.5 max-w-xl text-left">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--ink)]">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                          {step.description}
                        </p>
                        <p className="text-xs text-[var(--ink-muted)] pt-1">
                          💡 {step.hint}
                        </p>
                      </div>
                    </div>

                    <div className="sm:shrink-0 pt-2 sm:pt-0">
                      <a
                        href={step.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-semibold shadow-xs transition-all"
                      >
                        <span>{step.action}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Troubleshooting Section */}
          <div className="pt-8 border-t border-[var(--border-subtle,#e7e5e4)]">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <h2 className="font-serif text-xl font-bold text-[var(--ink)]">
                Troubleshooting Common Play Store Issues
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {TROUBLESHOOTING.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[var(--border-subtle,#e7e5e4)] space-y-2 text-left"
                >
                  <h4 className="text-xs font-bold text-[var(--ink)]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-App Ecosystem Directory */}
        <div className="mt-20">
          <EcosystemDirectorySection />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

