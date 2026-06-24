'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ClipboardList, CalendarCheck, Sparkles, ChevronDown } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: ClipboardList,
    title: 'Get Your Free Quote',
    desc: "Fill out our 60-second form or call us directly at (435) 229-5674. We'll confirm your estimate the same day — no pressure, no surprises, no commitment.",
  },
  {
    n: '02',
    icon: CalendarCheck,
    title: 'Schedule at Your Convenience',
    desc: 'Pick a date and time that fits your schedule. We arrive punctually with all equipment and handle everything from start to finish.',
  },
  {
    n: '03',
    icon: Sparkles,
    title: 'Enjoy Crystal-Clear Windows',
    desc: "Sit back and admire the difference. Our 7-Day Weather Guarantee means you're fully protected — rain within a week and we return free.",
  },
]

const prepItems = [
  'Clear small decorative items from windowsills and window ledges before we arrive.',
  'Unlock side gates so our technician can access all exterior windows without delay.',
  'Secure pets indoors before we arrive — for their safety and ours.',
]

export default function Process() {
  const [prepOpen, setPrepOpen] = useState(false)

  return (
    <section id="process" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">Effortlessly Simple</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-muted text-lg">
            Three steps to the cleanest windows in the neighborhood.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Large step number watermark */}
              <span className="text-6xl font-black text-brand-navy/6 absolute top-4 right-5 select-none leading-none">
                {step.n}
              </span>

              <div className="w-12 h-12 bg-brand-navy rounded-2xl flex items-center justify-center mb-5">
                <step.icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-charcoal text-lg leading-snug">{step.title}</h3>
              <p className="mt-2.5 text-muted text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Prep Guide accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-8 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
        >
          <button
            onClick={() => setPrepOpen(!prepOpen)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50/50 transition-colors"
          >
            <div>
              <p className="font-semibold text-charcoal text-sm">How to Prepare for Your Service</p>
              <p className="text-xs text-muted mt-0.5">3 quick tips to make your appointment seamless</p>
            </div>
            <motion.div
              animate={{ rotate: prepOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <ChevronDown size={20} className="text-muted" />
            </motion.div>
          </button>

          <AnimatePresence>
            {prepOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="px-6 pb-6 space-y-3 border-t border-gray-100 pt-4">
                  {prepItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-charcoal">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
