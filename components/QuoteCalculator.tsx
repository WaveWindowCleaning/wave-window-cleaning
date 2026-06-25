'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Building2, ChevronRight, Info } from 'lucide-react'

type HomeType = 'single' | 'multi'
interface PriceRange { min: number; max: number }

// Window count ranges displayed to user
const WINDOW_RANGES = ['5–9', '10–14', '15–19', '20–24', '25–29', '30+']

// Pricing: ~$4 exterior + $3 interior per pane, $100 minimum
// Multi-story adds ~20% for ladder/equipment difficulty
const PRICES: Record<HomeType, PriceRange[]> = {
  single: [
    { min: 100, max: 100 },  // 5–9 windows
    { min: 100, max: 125 },  // 10–14
    { min: 125, max: 160 },  // 15–19
    { min: 160, max: 200 },  // 20–24
    { min: 200, max: 245 },  // 25–29
    { min: 245, max: 320 },  // 30+
  ],
  multi: [
    { min: 100, max: 120 },  // 5–9
    { min: 120, max: 155 },  // 10–14
    { min: 155, max: 195 },  // 15–19
    { min: 195, max: 245 },  // 20–24
    { min: 245, max: 300 },  // 25–29
    { min: 300, max: 390 },  // 30+
  ],
}

export default function QuoteCalculator() {
  const [homeType, setHomeType] = useState<HomeType>('single')
  const [windowIdx, setWindowIdx] = useState(1)

  const price = PRICES[homeType][windowIdx]
  const isSamePrice = price.min === price.max

  return (
    <section className="py-20 lg:py-28 bg-navy-gradient relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
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
            Get a ballpark estimate in seconds — no commitment needed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white/8 border border-white/12 rounded-3xl p-7 lg:p-10 backdrop-blur-sm"
        >
          {/* Home type */}
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

          {/* Window range selector */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <p className="text-white/75 text-sm font-semibold">Number of Windows</p>
              <motion.span
                key={windowIdx}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-white font-black text-xl"
              >
                {WINDOW_RANGES[windowIdx]}
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
            <div className="flex justify-between mt-2.5">
              {WINDOW_RANGES.map((lbl, i) => (
                <button
                  key={lbl}
                  onClick={() => setWindowIdx(i)}
                  className={`text-[11px] font-medium transition-colors ${
                    windowIdx === i ? 'text-white' : 'text-white/35 hover:text-white/60'
                  }`}
                >
                  {lbl}
                </button>
              ))}
            </div>
          </div>

          {/* Price result */}
          <div className="bg-white/10 border border-white/15 rounded-2xl py-8 px-6 text-center">
            <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-2">
              Estimated Investment
            </p>
            <motion.p
              key={`${homeType}-${windowIdx}`}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-4xl lg:text-5xl font-black text-white"
            >
              {isSamePrice ? `$${price.min}` : `$${price.min}–$${price.max}`}
            </motion.p>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-white/40 text-xs">
              <Info size={12} />
              Final price confirmed on-site · No surprise charges
            </div>
          </div>

          <Link
            href="/quote"
            className="group mt-6 w-full flex items-center justify-center gap-2 bg-white text-brand-navy font-black py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg text-base"
          >
            Get Your Free Quote
            <ChevronRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <p className="text-center text-white/35 text-xs mt-4">
            Or call us: (435) 229-5674 · Se Habla Español
          </p>
        </motion.div>
      </div>
    </section>
  )
}
