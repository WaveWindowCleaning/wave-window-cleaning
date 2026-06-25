'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Building2, ChevronRight, Info } from 'lucide-react'

type HomeType = 'single' | 'multi'

interface PriceRange { min: number; max: number }

// Pricing: $4/exterior pane + $3/interior pane ≈ $7/window (both sides)
// Single-story base rate · Multi-story adds ~25% for ladder/difficulty
// Minimum charge: $100
const PRICES: Record<HomeType, PriceRange[]> = {
  //        idx: 0        1        2        3        4        5
  single: [
    { min: 100, max: 100 },  // 5 windows  (~$35 → $100 min)
    { min: 100, max: 140 },  // 10 windows (~$70–$100)
    { min: 140, max: 175 },  // 15 windows (~$105–$140)
    { min: 175, max: 220 },  // 20 windows (~$140–$175)
    { min: 220, max: 275 },  // 25 windows (~$175–$220)
    { min: 275, max: 350 },  // 30+
  ],
  multi: [
    { min: 100, max: 125 },  // 5 windows
    { min: 125, max: 175 },  // 10 windows
    { min: 175, max: 220 },  // 15 windows
    { min: 220, max: 280 },  // 20 windows
    { min: 280, max: 350 },  // 25 windows
    { min: 350, max: 450 },  // 30+
  ],
}

const WINDOW_LABELS = ['5', '10', '15', '20', '25', '30+']

export default function QuoteCalculator() {
  const [homeType, setHomeType] = useState<HomeType>('single')
  const [windowIdx, setWindowIdx] = useState(2)

  const price = PRICES[homeType][windowIdx]

  return (
    <section className="py-20 lg:py-28 bg-navy-gradient relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-white/55 text-xs font-bold tracking-[0.18em] uppercase">Instant Estimate</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-white tracking-tight">
            What Will It Cost?
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Slide the bar to see your personalized estimate instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white/8 border border-white/12 rounded-3xl p-7 lg:p-10 backdrop-blur-sm"
        >
          {/* Home type selector */}
          <div className="mb-8">
            <p className="text-white/75 text-sm font-semibold mb-3">Home Type</p>
            <div className="grid grid-cols-2 gap-3">
              {([
                ['single', 'Single Story', Home],
                ['multi',  '2+ Stories',   Building2],
              ] as const).map(([val, label, Icon]) => (
                <button
                  key={val}
                  onClick={() => setHomeType(val)}
                  className={`flex items-center justify-center gap-2.5 py-3.5 rounded-xl border font-semibold text-sm transition-all duration-200 ${
                    homeType === val
                      ? 'bg-white text-brand-navy border-white shadow-lg scale-[1.02]'
                      : 'bg-transparent text-white/65 border-white/20 hover:border-white/40 hover:text-white/85'
                  }`}
                >
                  <Icon size={17} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Window count slider */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <p className="text-white/75 text-sm font-semibold">Estimated Window Count</p>
              <motion.span
                key={windowIdx}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-white font-black text-xl"
              >
                {WINDOW_LABELS[windowIdx]} windows
              </motion.span>
            </div>
            <input
              type="range"
              min={0}
              max={5}
              step={1}
              value={windowIdx}
              onChange={(e) => setWindowIdx(Number(e.target.value))}
              className="w-full cursor-pointer"
              style={{ accentColor: 'white' }}
            />
            <div className="flex justify-between mt-2">
              {WINDOW_LABELS.map((lbl) => (
                <span key={lbl} className="text-[11px] text-white/35 font-medium">{lbl}</span>
              ))}
            </div>
          </div>

          {/* Price result */}
          <div className="bg-white/10 border border-white/15 rounded-2xl py-8 px-6 text-center">
            <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-2">
              Estimated Investment Range
            </p>
            <motion.p
              key={`${homeType}-${windowIdx}`}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-4xl lg:text-5xl font-black text-white"
            >
              ${price.min}–${price.max}
            </motion.p>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-white/40 text-xs">
              <Info size={12} />
              Final price confirmed on-site · No surprise charges · Free estimate
            </div>
          </div>

          <Link
            href="/quote"
            className="group mt-6 w-full flex items-center justify-center gap-2 bg-white text-brand-navy font-black py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg text-base"
          >
            Lock In This Rate — Get Free Quote
            <ChevronRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <p className="text-center text-white/35 text-xs mt-4">
            Or call us for an immediate quote: (435) 229-5674
          </p>
        </motion.div>
      </div>
    </section>
  )
}
