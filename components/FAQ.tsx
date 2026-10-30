'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How much does window cleaning cost in St. George?',
    a: "Typical single-story homes with 10–15 windows have often fallen in the $120–$180 range, but every property is different. Two-story homes and larger properties are quoted individually. Request a free quote and we'll confirm your price before we start.",
  },
  {
    q: 'What is your 7-Day Weather Guarantee?',
    a: "It's a benefit for our service plan members. If it rains within 7 days of a plan visit's exterior window cleaning and spots the glass, we'll return and re-clean the exterior windows at no charge (see our Terms for details). One-time cleanings are covered by our 100% Satisfaction Guarantee.",
  },
  {
    q: 'Do you offer recurring service plans?',
    a: "Yes. Plans run from an annual cleaning up to monthly visits, billed after each visit, and you can cancel any time. Plan members also get our 7-Day Weather Guarantee. Ask for a plan when you request your quote.",
  },
  {
    q: 'Do I need to be home during the service?',
    a: 'For exterior-only services you do not need to be home. Just ensure gates are unlocked and let us know any access instructions. For interior cleaning, someone 18 or older must be present.',
  },
  {
    q: 'How long does a typical cleaning take?',
    a: 'Most single-story homes take 60–90 minutes. Two-story or larger homes average 2–3 hours. We always confirm an estimated time window when scheduling so you can plan your day.',
  },
  {
    q: '¿Hablan español? / Do you offer service in Spanish?',
    a: 'Sí, hablamos español. We\u2019re happy to handle your estimate and booking in Spanish. Just let us know when you reach out.',
  },
  {
    q: 'What areas do you serve?',
    a: "We serve the greater St. George area including Bloomington Hills, Little Valley, Green Springs, Santa Clara, Washington, Ivins, and Snow Canyon. Not sure? Call us at (435) 500-9720 — we cover more ground than most.",
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Wave Window Cleaning is a licensed local business and carries liability insurance. You can request proof of insurance before your appointment.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">Got Questions?</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-medium text-charcoal text-sm sm:text-base leading-snug">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.28 }}
                  className="shrink-0"
                >
                  <ChevronDown size={18} className="text-muted" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                    id={`faq-panel-${i}`}
                  >
                    <p className="px-6 pb-5 text-sm text-muted leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
