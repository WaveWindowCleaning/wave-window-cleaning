'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, MessageSquare } from 'lucide-react'

export default function TeamStrip() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl"
        >
          <Image
            src="/photos/team.jpg"
            alt="Two Wave Window Cleaning technicians in uniform holding squeegees"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">Who Shows Up</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            Friendly, Uniformed Local Technicians
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            You get a real St. George crew, not a call center. We treat your home with respect, clean up after
            ourselves, and stand behind every job with a 100% Satisfaction Guarantee.
          </p>
          <ul className="mt-6 space-y-3 text-charcoal">
            {[
              'Free quote by call or text, no obligation',
              'Tracks, frames and sills included in every exterior clean',
              'Service plan members: rain within 7 days, we re-clean free',
            ].map(t => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="tel:+14355009720" className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:bg-brand-navy-mid transition">
              <Phone size={17} /> Call (435) 500-9720
            </a>
            <a href="sms:+14355009720?&body=Hi%20Wave%20Window%20Cleaning%2C%20I%27d%20like%20a%20free%20quote." className="inline-flex items-center justify-center gap-2 border border-brand-navy/25 text-brand-navy font-bold px-7 py-3.5 rounded-full hover:bg-white transition">
              <MessageSquare size={17} /> Text for a Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
