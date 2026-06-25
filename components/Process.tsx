'use client'

import { motion } from 'framer-motion'
import { ClipboardList, CalendarCheck, Sparkles } from 'lucide-react'

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

export default function Process() {
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
      </div>
    </section>
  )
}
