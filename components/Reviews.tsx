'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Little Valley, St. George',
    text: "Best window cleaning I've ever had. They removed hard water stains I thought were permanent. Every window looks brand new. I will absolutely book them again!",
    date: '2 weeks ago',
  },
  {
    name: 'James R.',
    location: 'Bloomington Hills',
    text: "Professional, fast, and incredibly thorough. Zero streaks anywhere. The 7-day rain guarantee sealed the deal for me — such a smart policy. Highly recommend.",
    date: '1 month ago',
  },
  {
    name: 'María G.',
    location: 'Santa Clara',
    text: "Hablé con ellos en español y fue muy fácil comunicarme. El servicio fue impresionante — muy detallados y completamente profesionales. Los recomiendo al 100%.",
    date: '3 weeks ago',
  },
]

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">Customer Reviews</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-muted text-sm">
            5.0 average rating · 22+ happy customers across greater St. George
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <StarRow />
              <p className="mt-3 text-charcoal text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-end justify-between">
                <div>
                  <p className="font-semibold text-charcoal text-sm">{r.name}</p>
                  <p className="text-xs text-muted">{r.location}</p>
                </div>
                <p className="text-xs text-muted">{r.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
