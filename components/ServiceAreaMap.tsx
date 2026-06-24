'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'

const areas = [
  { name: 'St. George',      cx: 200, cy: 185, r: 10, primary: true  },
  { name: 'Santa Clara',     cx: 145, cy: 158, r: 6,  primary: false },
  { name: 'Ivins',           cx: 128, cy: 180, r: 6,  primary: false },
  { name: 'Washington',      cx: 258, cy: 198, r: 6,  primary: false },
  { name: 'Little Valley',   cx: 222, cy: 225, r: 6,  primary: false },
  { name: 'Bloomington',     cx: 218, cy: 250, r: 6,  primary: false },
  { name: 'Green Springs',   cx: 278, cy: 172, r: 6,  primary: false },
  { name: 'Snow Canyon',     cx: 145, cy: 130, r: 5,  primary: false },
]

const areaList = [
  'St. George (HQ)',
  'Santa Clara',
  'Washington',
  'Ivins',
  'Bloomington Hills',
  'Little Valley',
  'Green Springs',
  'Snow Canyon',
  'Hurricane',
  'La Verkin',
]

export default function ServiceAreaMap() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">Service Coverage</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            We Come to You
          </h2>
          <p className="mt-4 text-muted text-lg">
            Proudly serving every corner of Washington County, Utah.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* SVG map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface rounded-3xl p-6 border border-gray-100 shadow-sm"
          >
            <svg viewBox="0 0 400 370" className="w-full max-w-sm mx-auto">
              {/* Washington County outline */}
              <path
                d="M75 75 L345 68 L358 205 L332 315 L195 335 L75 302 Z"
                fill="#EEF4F8"
                stroke="#1A3D54"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Service radius dashed circle */}
              <circle
                cx="200"
                cy="198"
                r="115"
                fill="rgba(26,61,84,0.06)"
                stroke="#1A3D54"
                strokeWidth="1.5"
                strokeDasharray="7 5"
              />

              {/* Area dots */}
              {areas.map((area) => (
                <g key={area.name}>
                  <circle
                    cx={area.cx}
                    cy={area.cy}
                    r={area.r + 6}
                    fill="rgba(26,61,84,0.08)"
                  />
                  <circle
                    cx={area.cx}
                    cy={area.cy}
                    r={area.r}
                    fill={area.primary ? '#1A3D54' : '#2A6A8F'}
                  />
                  <text
                    x={area.cx}
                    y={area.cy + area.r + 13}
                    textAnchor="middle"
                    fontSize={area.primary ? 10.5 : 9}
                    fontWeight={area.primary ? '700' : '500'}
                    fill="#1A3D54"
                    fontFamily="Inter, system-ui, sans-serif"
                  >
                    {area.name}
                  </text>
                </g>
              ))}
            </svg>
          </motion.div>

          {/* Area list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-charcoal mb-6">Communities We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {areaList.map((area) => (
                <div key={area} className="flex items-center gap-2.5">
                  <MapPin
                    size={14}
                    className={`shrink-0 ${area.includes('HQ') ? 'text-brand-navy' : 'text-brand-navy-light'}`}
                  />
                  <span className={`text-sm ${area.includes('HQ') ? 'font-semibold text-charcoal' : 'text-muted'}`}>
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-surface border border-gray-100 rounded-2xl p-5">
              <p className="text-sm font-semibold text-charcoal mb-1">Not sure if we cover your area?</p>
              <p className="text-sm text-muted mb-4">
                We likely do — and we&apos;re always expanding. Give us a quick call and we&apos;ll confirm instantly.
              </p>
              <a
                href="tel:+14352295674"
                className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-brand-navy-dark transition-colors"
              >
                <Phone size={14} />
                (435) 229-5674
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
