'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, MapPin, Award, Umbrella, Languages } from 'lucide-react'

const trustItems = [
  { icon: ShieldCheck, label: 'Licensed & Insured',        sub: 'Fully covered, always'         },
  { icon: MapPin,      label: 'Local St. George Business', sub: 'Proudly serving Southern Utah'   },
  { icon: Award,       label: '100% Satisfaction',         sub: 'Or we make it right'            },
  { icon: Umbrella,    label: '7-Day Weather Guarantee',   sub: 'Rain? We come back free'        },
  { icon: Languages,   label: 'Se Habla Español',          sub: 'Bilingual team available'       },
]

export default function TrustBar() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Five pillars */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-navy/8 flex items-center justify-center shrink-0">
                <item.icon size={22} className="text-brand-navy" />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal leading-tight">{item.label}</p>
                <p className="text-xs text-muted mt-0.5">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Weather guarantee banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-brand-navy/5 to-brand-navy/8 border border-brand-navy/12 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
            <Umbrella size={20} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-charcoal text-sm">Our 7-Day Weather Guarantee</p>
            <p className="text-muted text-sm mt-0.5 leading-relaxed">
              If it rains within 7 days of your service, we&apos;ll happily return and reclean your
              exterior windows for free — no questions asked. Book with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
