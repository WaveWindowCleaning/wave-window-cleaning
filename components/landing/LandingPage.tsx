'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Phone, Star, CheckCircle2, MapPin, Sparkles,
} from 'lucide-react'
import LandingQuoteForm from './LandingQuoteForm'

export interface OfferConfig {
  variant: 'A' | 'B'
  /** Small eyebrow label above the headline */
  eyebrow: string
  /** Big offer line 1 (e.g. "FREE Screen Cleaning") */
  offerHeadline: string
  /** Big offer line 2 / qualifier */
  offerSub: string
  /** Compact offer label used on badges + form success ("FREE Screen Cleaning") */
  offerShort: string
  /** One-line value explanation shown under the offer banner */
  offerExplainer: string
}

const PHONE_DISPLAY = '(435) 229-5674'
const PHONE_HREF = 'tel:+14352295674'

const reviews = [
  { text: 'Very polite, diligent, and very professional \u2014 which is hard to find these days.', name: 'Steve C.' },
  { text: 'Meticulous. He even got a window clean we never could ourselves. We\u2019ll use him from now on!', name: 'Jan' },
  { text: 'By far the best! Professional, punctual, and pays attention to detail.', name: 'Connie W.' },
]

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function LandingPage({ offer }: { offer: OfferConfig }) {
  return (
    <main className="bg-white text-charcoal">
      {/* ── Sticky header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Wave Window Cleaning"
            width={150}
            height={46}
            className="h-9 w-auto brightness-200"
            priority
          />
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-white text-brand-navy font-bold text-sm px-4 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* ── Hero + form (the whole pitch, above the fold) ─────────────── */}
      <section className="relative bg-navy-gradient overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-12 lg:py-16">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <Stars size={12} />
              <span className="text-white/90 text-xs font-semibold">5.0 on Google · St. George</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.07] tracking-tight">
              Spotless Windows,{' '}
              <span className="text-brand-accent">Zero Hassle.</span>
            </h1>

            <p className="mt-4 text-lg text-white/75 leading-relaxed max-w-md">
              Hi, I&apos;m Teancum. I treat every home like my own and back every job with a
              100% satisfaction guarantee.
            </p>

            {/* Offer badge */}
            <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3.5 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
                <Sparkles size={19} className="text-white" />
              </div>
              <div>
                <p className="text-brand-navy font-black text-base leading-none">{offer.offerHeadline}</p>
                <p className="text-muted text-sm mt-1">{offer.offerSub}</p>
              </div>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
              {['Licensed & Insured', 'Locally Owned', '5.0 Google Rating'].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 text-white/80 text-sm font-medium">
                  <CheckCircle2 size={15} className="text-brand-accent" /> {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Form card — the frictionless conversion point */}
          <motion.div
            id="quote"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="scroll-mt-20"
          >
            <div className="text-center mb-3">
              <h2 className="text-2xl font-black text-white">Get Your Fast Free Quote</h2>
              <p className="text-white/70 text-sm mt-1">Takes 20 seconds — I&apos;ll text you right back.</p>
            </div>
            <LandingQuoteForm variant={offer.variant} offer={offer.offerShort} />
          </motion.div>
        </div>
      </section>

      {/* ── Reviews ───────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex justify-center mb-2"><Stars size={20} /></div>
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal tracking-tight">
              Trusted by Your Neighbors
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-surface border border-gray-100 rounded-2xl p-5 flex flex-col"
              >
                <Stars size={14} />
                <p className="mt-3 text-charcoal text-[15px] leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-3 font-bold text-charcoal text-sm">{r.name} <span className="font-normal text-muted">· St. George</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-charcoal tracking-tight">
            Ready for windows you can see right through?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold px-7 py-4 rounded-full hover:bg-brand-navy-dark transition-all shadow-lg hover:-translate-y-0.5"
            >
              Get My Fast Free Quote
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy font-bold px-7 py-4 rounded-full hover:bg-brand-navy/5 transition-all"
            >
              <Phone size={18} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="bg-brand-navy-dark text-white/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 text-center">
          <Image
            src="/logo.png"
            alt="Wave Window Cleaning"
            width={150}
            height={46}
            className="h-10 w-auto brightness-200 mx-auto mb-4"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-white font-semibold hover:text-brand-accent transition-colors">
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>
            <a href="mailto:teancum@cleanwavewindows.com" className="flex items-center gap-2 hover:text-white transition-colors">
              teancum@cleanwavewindows.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={15} /> St. George, Utah
            </span>
          </div>
          <p className="mt-5 text-xs text-white/35">
            © {new Date().getFullYear()} Wave Window Cleaning · Licensed &amp; insured · Serving St. George,
            Santa Clara, Washington, Ivins, Bloomington &amp; Green Springs.
          </p>
        </div>
      </footer>
    </main>
  )
}
