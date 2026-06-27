'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Star, ChevronRight, Zap, Sparkles, Lock, Gift, Sun } from 'lucide-react'

const biAnnualPerks = [
  { icon: CheckCircle, text: '$25 off every clean — $100 saved per year' },
  { icon: CheckCircle, text: 'Spring & fall scheduled cleanings' },
  { icon: CheckCircle, text: 'Tracks, sills & screens deep cleaned' },
  { icon: CheckCircle, text: 'Priority scheduling over one-time clients' },
  { icon: CheckCircle, text: '7-Day Weather Guarantee on every visit' },
]

const quarterlyPerks = [
  { icon: Sparkles, text: 'Unlimited free hard water removal' },
  { icon: CheckCircle, text: '$50 off every clean — $200 saved per year' },
  { icon: Zap,       text: '48-hr storm response after major dust storms' },
  { icon: CheckCircle, text: 'Tracks, sills & screens deep cleaned every visit' },
  { icon: Lock,      text: 'Rate locked in for 2 years — guaranteed' },
  { icon: Gift,      text: '$50 referral credit when a friend signs up' },
  { icon: Sun,       text: 'Designed around St. George\'s seasonal climate' },
]

export default function MaintenancePlans() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">Maintenance Plans</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            Consistently Clean Windows. Zero Effort.
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Plan clients get locked-in rates, priority booking, and perks
            one-time customers don&apos;t have access to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">

          {/* ── Bi-Annual ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface border border-gray-200 rounded-3xl p-7 flex flex-col"
          >
            <div className="mb-5">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-navy mb-1">2× per year</p>
              <h3 className="text-xl font-black text-charcoal">Bi-Annual Plan</h3>
              <p className="text-muted text-sm mt-1">A clean home every season.</p>
            </div>

            <ul className="space-y-3 flex-1">
              {biAnnualPerks.map((p) => (
                <li key={p.text} className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-brand-navy shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal">{p.text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/quote"
              className="mt-7 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-3.5 rounded-xl hover:bg-brand-navy-dark transition-colors group text-sm"
            >
              Get Started
              <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* ── Quarterly ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-brand-navy rounded-3xl p-7 flex flex-col shadow-xl shadow-brand-navy/25"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1.5 rounded-full shadow-md tracking-wide">
                <Star size={10} className="fill-yellow-900" />
                MOST POPULAR
              </span>
            </div>

            <div className="mb-5">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-1">4× per year</p>
              <h3 className="text-xl font-black text-white">Quarterly Plan</h3>
              <p className="text-white/60 text-sm mt-1">Our best value — built for St. George.</p>
            </div>

            <ul className="space-y-3 flex-1">
              {quarterlyPerks.map((p) => (
                <li key={p.text} className="flex items-start gap-2.5">
                  <p.icon size={15} className="text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/85">{p.text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/quote"
              className="mt-7 flex items-center justify-center gap-2 bg-white text-brand-navy font-black py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-md group text-sm"
            >
              Claim Your Spot
              <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-muted text-sm mt-7"
        >
          All plans include our 7-Day Weather Guarantee. No contracts — cancel anytime.
        </motion.p>
      </div>
    </section>
  )
}
