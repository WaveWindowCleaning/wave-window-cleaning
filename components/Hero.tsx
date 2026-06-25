'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, ChevronRight, Shield, Star } from 'lucide-react'

const badges = [
  'Licensed & Insured',
  '7-Day Weather Guarantee',
  'Se Habla Español',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-gradient flex items-center overflow-hidden">
      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-36 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Copy ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Stars badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/85 text-xs font-medium">5.0 · 22+ Reviews</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.08] tracking-tight">
              Premium Window Cleaning in{' '}
              <span className="text-brand-accent">St. George</span>
            </h1>

            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
              Crystal-clear windows, zero hassle. Trusted by hundreds of homeowners and
              businesses across St. George, Bloomington, Little Valley, Santa Clara,
              Washington, Ivins, and Green Springs.
            </p>

            {/* Trust micro-badges */}
            <div className="flex flex-wrap gap-2.5 mt-6">
              {badges.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <Shield size={11} className="text-brand-accent" />
                  {t}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-base px-7 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Free Quote
                <ChevronRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="tel:+14352295674"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold text-base px-7 py-4 rounded-full hover:bg-white/18 transition-all duration-200"
              >
                <Phone size={17} />
                (435) 229-5674
              </a>
            </div>
          </motion.div>

          {/* ── Right: Image ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900&q=85"
                alt="Close up of sparkling clean residential windows on a St. George home"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="absolute -top-4 -right-2 lg:-right-6 bg-brand-navy rounded-2xl p-4 shadow-2xl"
            >
              <p className="text-xs text-white/60 font-medium">Satisfaction</p>
              <p className="text-2xl font-black text-white mt-0.5">100%</p>
              <p className="text-xs text-white/60">Guaranteed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider into next section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 72L1440 72L1440 28C1200 66 900 0 720 18C540 36 240 66 0 28L0 72Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
