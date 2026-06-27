'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Star, ChevronRight, Zap, Sparkles, Lock, Gift, Sun } from 'lucide-react'

const quarterlyBenefits = [
  {
    icon: Sun,
    heading: 'Quarterly Care',
    body: "The St. George climate changes fast — pollen in the spring, dust in the summer, and mineral buildup in the fall. Our quarterly plan is designed to stay ahead of those specific changes so your windows are always maintained, not just cleaned.",
  },
  {
    icon: Zap,
    heading: 'Storm Response',
    body: "Dust storms are part of living here. If a big one hits, you don't need to reach out — we automatically prioritize our quarterly clients on the schedule to get your place looking sharp again within 48 hours.",
  },
  {
    icon: Sparkles,
    heading: 'The Full-Service Standard',
    body: "We don't believe in just doing the glass. Every quarterly visit includes a deep clean of your tracks, sills, and screens. It's the only way to get a real, long-lasting clean, so we include it automatically with our maintenance plans.",
  },
  {
    icon: Lock,
    heading: 'Locked-In Pricing',
    body: "We appreciate our long-term clients. If you're on a quarterly plan, your rate is locked in for the next two years. Even as our business grows and rates for new clients increase, your price stays exactly where it is today.",
  },
  {
    icon: Gift,
    heading: 'Client Referral Credit',
    body: "Most of our best clients come from neighbors talking to neighbors. If you refer a friend and they sign up for a quarterly plan, we'll take $50 off your next visit as a thank you.",
  },
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
            Always-Clean Windows. Zero Effort.
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Our plan clients get locked-in rates, priority scheduling, and exclusive
            perks that one-time customers simply don&apos;t have access to.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* ── Bi-Annual Plan ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface border border-gray-100 rounded-3xl p-8 shadow-sm"
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-navy mb-2">2× per year</p>
            <h3 className="text-2xl font-black text-charcoal">Bi-Annual Plan</h3>
            <p className="text-muted text-sm mt-1">A clean home every season, consistently.</p>

            {/* Savings callout */}
            <div className="mt-5 bg-brand-navy/6 border border-brand-navy/12 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="shrink-0 w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-black">$25</span>
              </div>
              <div>
                <p className="text-charcoal font-bold text-sm">$25 off every clean</p>
                <p className="text-muted text-xs">$100 saved per year vs. one-time pricing</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {[
                'Spring & fall window cleaning',
                'Tracks, sills & screens deep cleaned',
                'Priority scheduling over one-time clients',
                'Exterior & interior included',
                '7-Day Weather Guarantee on every visit',
              ].map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-brand-navy shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal">{perk}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/quote"
              className="mt-8 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-3.5 rounded-xl hover:bg-brand-navy-dark transition-colors group"
            >
              Get Started
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* ── Quarterly Plan ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-brand-navy rounded-3xl p-8 shadow-2xl shadow-brand-navy/30"
          >
            {/* Most popular badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1.5 rounded-full shadow-lg tracking-wide">
                <Star size={11} className="fill-yellow-900" />
                MOST POPULAR
              </span>
            </div>

            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-2">4× per year</p>
            <h3 className="text-2xl font-black text-white">Quarterly Plan</h3>
            <p className="text-white/60 text-sm mt-1">Our most rewarding plan — built for St. George.</p>

            {/* Savings callouts */}
            <div className="mt-5 space-y-2.5">
              <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="shrink-0 w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-brand-navy text-xs font-black">$50</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">$50 off every clean</p>
                  <p className="text-white/55 text-xs">$200 saved per year vs. one-time pricing</p>
                </div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="shrink-0 w-9 h-9 bg-green-400 rounded-lg flex items-center justify-center">
                  <Sparkles size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Free hard water removal</p>
                  <p className="text-white/55 text-xs">Included once per year ($75+ value)</p>
                </div>
              </div>
            </div>

            {/* Benefit sections */}
            <div className="mt-7 space-y-5">
              {quarterlyBenefits.map((b) => (
                <div key={b.heading} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/12 flex items-center justify-center shrink-0 mt-0.5">
                    <b.icon size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{b.heading}</p>
                    <p className="text-white/60 text-xs leading-relaxed mt-0.5">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/quote"
              className="mt-8 flex items-center justify-center gap-2 bg-white text-brand-navy font-black py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-lg group"
            >
              Claim Your Spot
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-muted text-sm mt-8"
        >
          All plans include our 7-Day Weather Guarantee. Pricing confirmed on your first call — no contracts, cancel anytime.
        </motion.p>
      </div>
    </section>
  )
}
