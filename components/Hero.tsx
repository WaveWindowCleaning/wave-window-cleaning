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
    <section className="relative min-h-screen flex overflow-hidden">

      {/* ── Left: Navy copy panel ─────────────────────────────────────── */}
      <div className="relative z-10 flex items-center w-full lg:w-[45%] bg-navy-gradient px-6 sm:px-10 lg:px-14 xl:px-18 pt-28 pb-24 lg:py-0">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-lg w-full mx-auto lg:mx-0"
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

          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.08] tracking-tight">
            Premium Window Cleaning in{' '}
            <span className="text-brand-accent">St. George</span>
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Crystal-clear windows, zero hassle. Serving homeowners across
            St. George, Bloomington, Little Valley, Santa Clara, Washington,
            Ivins, and Green Springs.
          </p>

          {/* Trust badges */}
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

          {/* CTAs */}
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

          {/* 100% satisfaction card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="inline-flex items-center gap-3 mt-10 bg-white/8 border border-white/12 rounded-2xl px-5 py-3.5"
          >
            <div className="text-center">
              <p className="text-white font-black text-xl leading-none">100%</p>
              <p className="text-white/55 text-xs mt-0.5">Satisfaction Guarantee</p>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <p className="text-white/70 text-xs leading-snug max-w-[160px]">
              If you&apos;re not thrilled, we make it right. Simple as that.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Right: Full-bleed photo panel ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="hidden lg:flex lg:w-[55%] relative overflow-hidden"
      >
        <Image
          src="/hero-me.jpg"
          alt="Teancum, owner of Wave Window Cleaning, serving St. George Utah homeowners"
          fill
          quality={100}
          className="object-cover"
          style={{
            objectPosition: 'center 20%',
            filter: 'contrast(1.12) saturate(1.08) brightness(1.03)',
          }}
          priority
          sizes="55vw"
        />
        {/* Left-edge fade into navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e2840]/60 via-transparent to-transparent pointer-events-none z-10" />
        {/* Bottom-edge vignette for polish */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10" />
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 60L1440 60L1440 22C1200 56 900 0 720 14C540 28 240 56 0 22L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
