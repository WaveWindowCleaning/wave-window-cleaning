'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, MessageSquare, Star } from 'lucide-react'
import HeroQuoteForm from '@/components/HeroQuoteForm'

const SMS = 'sms:+14355009720?&body=Hi%20Wave%20Window%20Cleaning%2C%20I%27d%20like%20a%20free%20quote.'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <Image
        src="/photos/patio-windows.jpg"
        alt="Clean windows overlooking a St. George patio"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2535]/95 via-[#0F2535]/80 to-[#0F2535]/55" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 lg:pt-36 lg:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
              ))}
            </span>
            <span className="text-white/90 text-xs font-semibold tracking-wide">5.0 on Google · 30 Reviews</span>
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Crystal-Clear Windows.{' '}
            <span className="text-brand-accent">Streak-Free.</span>{' '}
            Guaranteed.
          </h1>

          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
            Locally owned window and solar panel cleaning for St. George homes. Free quotes by call or text, and a
            100% Satisfaction Guarantee on every job.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+14355009720"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-black text-base px-8 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 transition"
            >
              <Phone size={18} />
              Call (435) 500-9720
            </a>
            <a
              href={SMS}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white/15 transition"
            >
              <MessageSquare size={18} />
              Text Us for a Quote
            </a>
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/80 max-w-xl">
            {[
              'Licensed & insured',
              '7-Day Weather Guarantee',
              'Tracks, frames & sills included',
              'Pure-water, streak-free finish',
            ].map(t => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroQuoteForm />
        </motion.div>
      </div>
    </section>
  )
}
