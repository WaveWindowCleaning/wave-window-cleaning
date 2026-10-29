'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Pause, Play } from 'lucide-react'

const reviews = [
  { name: 'Benjamin B.', text: 'Excellent work! He got rid of all of the hard water on my basement windows which had been there for years! Also very nice man! Speechless!' },
  { name: 'Connie W.', text: 'Wave Window Cleaning is by far the best! He was professional, punctual, knowledgeable and efficient. He pays attention to detail. I have and will recommend this service.' },
  { name: 'Pamelia S.', text: 'I highly recommend this company. They recently cleaned my solar panels and I can seriously see an efficiency difference already.' },
  { name: 'Audrey P.', text: 'Wow my windows look brand new! They were so nice and professional! Thank you so much! Will definitely be having them come back regularly!' },
  { name: 'Steven D.', text: 'Friendly, efficient and with quality work! I have a large house with custom wood doors and windows. They were careful and did no damage.' },
  { name: 'Joanne A.', text: "Teancom was on time, hard working and polite. He went the extra mile to be helpful. He's a definite recommend." },
  { name: 'Cameron S.', text: 'My windows have never been this clean. My wife was shocked at how much of an improvement this made. Great service. I would highly recommend to anyone.' },
  { name: 'Brad H.', text: 'These guys did an excellent job! They went the extra mile to clean the whole window, frame and screen! Thank you!' },
  { name: 'Sara F.', text: 'Teancum is very thorough with the window cleaning. Our windows and sills are spotless and squeaky clean. He is well mannered and professional with the service. We are very satisfied!' },
  { name: 'Scott A.', text: 'Wave Window Cleaning did an excellent job of cleaning my solar panels. They were quick, efficient and reasonable priced.' },
  { name: 'Jan', text: 'Teancum was very easy to work with. He was meticulous and even got one of our windows clean that we have not been able to do ourselves. We will continue to use him from now on!' },
  { name: 'Joy W.', text: 'Wave Window cleaned all my windows today. Fabulous job…even cleaned the screens! I would recommend their service for clean windows!!' },
  { name: 'Chantel M.', text: 'Very nice guy! Extremely kind, clean cut and professional. Pays attention to details! Highly recommend.' },
  { name: 'Steve C.', text: 'Teancum was very polite, diligent, and I thought very professional, which is very hard to find these days.' },
]

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} aria-hidden="true" className="text-yellow-400 fill-yellow-400" />
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
    <article aria-label={`Google review from ${review.name}`} className="w-[300px] sm:w-[340px] shrink-0 bg-surface border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm">
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
        <p className="text-xs text-muted">Google review</p>
      </div>
    </article>
  )
}

export default function Reviews() {
  // WCAG 2.2.2: moving content must be pausable
  const [paused, setPaused] = useState(false)
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
              <Star key={i} size={22} aria-hidden="true" className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">
            Google Reviews
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-muted text-sm">
            <span className="font-bold text-charcoal">5.0</span> on Google · 30 reviews from Southern Utah homeowners
          </p>
          <a
            href="https://share.google/XBO6pCy18W05LUGLt"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-bold text-brand-navy underline underline-offset-4 hover:text-brand-navy-mid"
          >
            Read all reviews on Google
          </a>
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal border border-gray-300 rounded-full px-3 py-1.5 hover:bg-gray-50"
            >
              {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
              {paused ? 'Play review scroll' : 'Pause review scroll'}
            </button>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="review-marquee-mask">
          <div
            className="review-marquee-track"
            style={{ animationPlayState: paused ? 'paused' : undefined }}
          >
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
