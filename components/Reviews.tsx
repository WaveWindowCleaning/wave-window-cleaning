'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Benjamin Barrus',
    location: 'St. George, UT',
    text: 'Excellent work! He got rid of all of the hard water on my basement windows which had been there for years! Also very nice man! Speechless!',
  },
  {
    name: 'Connie Wagner',
    location: 'St. George, UT',
    text: 'Wave Window Cleaning is by far the best! He was professional, punctual, knowledgeable and efficient. He pays attention to detail. I have and will recommend this service.',
  },
  {
    name: 'Joanne Austin',
    location: 'St. George, UT',
    text: "Teancum was on time, hard working and polite. He went the extra mile to be helpful. He's a definite recommend.",
  },
  {
    name: 'Chantel M.',
    location: 'St. George, UT',
    text: 'Very nice guy! Extremely kind, clean cut and professional. Pays attention to details! Highly recommend.',
  },
  {
    name: 'Audrey P.',
    location: 'St. George, UT',
    text: 'Wow my windows look brand new! They were so nice and professional! Thank you so much! Will definitely be having them come back regularly!',
  },
  {
    name: 'Sara F.',
    location: 'St. George, UT',
    text: 'Teancum is very thorough with the window cleaning. Our windows and sills are spotless and squeaky clean. He is well mannered and professional with the service. We are very satisfied!',
  },
  {
    name: 'Steve C.',
    location: 'St. George, UT',
    text: 'Very polite, diligent, and very professional — which is hard to find these days.',
  },
  {
    name: 'Jan',
    location: 'St. George, UT',
    text: "Meticulous. He even got a window clean we never could ourselves. We'll use him from now on!",
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

function GoogleMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.6 16.3 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.5 5.8-6.6 7.5l6.3 5.3C37.9 38.3 44 33 44 24c0-1.2-.1-2.3-.4-3.5z" />
    </svg>
  )
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="w-[300px] sm:w-[340px] shrink-0 bg-surface border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <StarRow />
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted">
          <GoogleMark />
          Google
        </span>
      </div>
      <p className="mt-3 text-charcoal text-sm leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="font-semibold text-charcoal text-sm">{review.name}</p>
        <p className="text-xs text-muted">{review.location}</p>
      </div>
    </article>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white overflow-hidden">
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
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">
            Google Reviews
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-muted text-sm">
            5-star rated on Google · Real reviews from St. George homeowners
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="review-marquee-mask">
          <div className="review-marquee-track">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
            <div className="review-marquee-clone contents" aria-hidden="true">
              {reviews.map((review) => (
                <ReviewCard key={`${review.name}-clone`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
