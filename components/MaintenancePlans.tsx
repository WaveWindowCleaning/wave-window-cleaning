'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Star, ChevronRight } from 'lucide-react'

const plans = [
  {
    name: 'Bi-Annual Plan',
    freq: '2× per year',
    tagline: 'A clean home every season',
    highlight: false,
    perks: [
      'Spring & fall window cleaning',
      'Priority scheduling over one-time clients',
      'Discounted rate on every visit',
      'Exterior & interior included',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Quarterly Plan',
    freq: '4× per year',
    tagline: 'Our most popular — and most rewarding',
    highlight: true,
    perks: [
      'Window cleaning every 3 months',
      'One free hard water removal treatment per year ($75+ value)',
      'Best discounted rate — biggest savings',
      'Top priority scheduling, year-round',
      'Exterior & interior included',
      'First on our list when openings arise',
    ],
    cta: 'Claim Your Spot',
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
            Sign up for a recurring plan and never think about your windows again.
            Our plan clients get the best rates, priority booking, and exclusive perks
            that one-time customers don&apos;t get.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-brand-navy text-white shadow-2xl shadow-brand-navy/30 scale-[1.02]'
                  : 'bg-surface border border-gray-100 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1.5 rounded-full shadow-lg tracking-wide">
                    <Star size={11} className="fill-yellow-900" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-bold tracking-[0.15em] uppercase mb-2 ${plan.highlight ? 'text-white/55' : 'text-brand-navy'}`}>
                  {plan.freq}
                </p>
                <h3 className={`text-2xl font-black ${plan.highlight ? 'text-white' : 'text-charcoal'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1.5 text-sm ${plan.highlight ? 'text-white/65' : 'text-muted'}`}>
                  {plan.tagline}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-green-400' : 'text-brand-navy'}`}
                    />
                    <span className={`text-sm leading-snug ${plan.highlight ? 'text-white/85' : 'text-charcoal'}`}>
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/quote"
                className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl transition-all duration-200 group ${
                  plan.highlight
                    ? 'bg-white text-brand-navy hover:bg-gray-50 shadow-lg'
                    : 'bg-brand-navy text-white hover:bg-brand-navy-dark'
                }`}
              >
                {plan.cta}
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-muted text-sm mt-8"
        >
          All plans include our 7-Day Weather Guarantee. Pricing discussed on your first call — no contracts, cancel anytime.
        </motion.p>
      </div>
    </section>
  )
}
