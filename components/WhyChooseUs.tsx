'use client'

import { motion } from 'framer-motion'
import { Star, ShieldCheck, BadgeCheck, UserCircle } from 'lucide-react'

const items = [
  {
    icon: Star,
    title: '5-Star Rated on Google',
    body: 'Every review earned through meticulous attention to detail and genuine care for our clients\u2019 homes.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    body: 'Fully covered on every job. Your home and our team are protected from the moment we arrive.',
  },
  {
    icon: BadgeCheck,
    title: 'Satisfaction Guaranteed',
    body: 'If the results don\u2019t exceed your expectations, we return and make it right \u2014 no questions asked.',
  },
  {
    icon: UserCircle,
    title: 'Local Owner, Every Visit',
    body: 'You work with Teancum directly \u2014 not a franchise, not a subcontractor. The owner is on every job.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">
            Why Homeowners Choose Us
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            A Standard You Can Count On
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            We built Wave Window Cleaning on the belief that a home service company should be
            professional in every sense — not just in the work, but in how we treat your home and your time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#f8f9fb] rounded-2xl p-7 flex flex-col gap-4 border border-gray-100 hover:border-brand-navy/15 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
                <Icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-black text-charcoal">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
