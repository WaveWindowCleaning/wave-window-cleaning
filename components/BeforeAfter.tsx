'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, MapPin, BadgeCheck } from 'lucide-react'
import { useState } from 'react'

const HASHTAGS = [
  '#CleanwaveWindows',
  '#StGeorgeUtah',
  '#HardWaterRemoval',
  '#UtahHomeServices',
  '#StGeorgeHomes',
]

export default function BeforeAfter() {
  const [tab, setTab] = useState<'before' | 'after'>('after')
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [likes, setLikes] = useState(247)

  function handleLike() {
    setLiked((prev) => {
      setLikes((l) => (prev ? l - 1 : l + 1))
      return !prev
    })
  }

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand-accent text-xs font-bold tracking-[0.18em] uppercase">
            Hard Water Removal · St. George, UT
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            See the Difference
          </h2>
          <p className="mt-4 text-muted text-lg">
            Utah&apos;s desert water is among the hardest in the nation. Our specialized protocol
            fully restores glass clarity that routine cleaning can&apos;t touch.
          </p>
        </motion.div>

        {/* Instagram card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-sm mx-auto bg-white rounded-3xl overflow-hidden ring-1 ring-gray-100 shadow-2xl shadow-gray-200/60"
        >

          {/* ── Card Header ── */}
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-brand-accent/30 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Cleanwave Windows logo"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-charcoal leading-tight flex items-center gap-1">
                  cleanwavewindows
                  <BadgeCheck className="w-3.5 h-3.5 text-brand-accent fill-brand-accent/10" />
                </p>
                <p className="text-[11px] text-muted flex items-center gap-0.5 leading-tight mt-0.5">
                  <MapPin className="w-2.5 h-2.5" />
                  St. George, Utah
                </p>
              </div>
            </div>
            <MoreHorizontal className="w-5 h-5 text-gray-400" strokeWidth={1.75} />
          </div>

          {/* ── Image Area ── */}
          <div className="relative aspect-[4/4.5] bg-gray-100 overflow-hidden">

            {/* Before image */}
            <AnimatePresence initial={false}>
              {tab === 'before' && (
                <motion.div
                  key="before"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/hardwater-before.png"
                    alt="Before: Severe hard water mineral staining on window glass in St. George home"
                    fill
                    className="object-cover"
                    sizes="384px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">
                      BEFORE
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* After image */}
            <AnimatePresence initial={false}>
              {tab === 'after' && (
                <motion.div
                  key="after"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/hardwater-after.png"
                    alt="After: Crystal-clear glass after Cleanwave Windows hard water mineral removal"
                    fill
                    className="object-cover"
                    sizes="384px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">
                      AFTER
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Before / After toggle pill */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center bg-black/30 backdrop-blur-md rounded-full p-1 gap-0.5">
              {(['before', 'after'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative text-[11px] font-bold px-4 py-1.5 rounded-full transition-colors duration-200 capitalize tracking-wide ${
                    tab === t ? 'text-charcoal' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab === t && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{t}</span>
                </button>
              ))}
            </div>

          </div>

          {/* ── Action Row ── */}
          <div className="px-4 pt-3.5 pb-1 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={handleLike}
                aria-label="Like"
              >
                <Heart
                  className={`w-[22px] h-[22px] transition-colors duration-200 ${
                    liked ? 'fill-red-500 text-red-500' : 'text-charcoal'
                  }`}
                  strokeWidth={liked ? 0 : 1.75}
                />
              </motion.button>
              <motion.button whileTap={{ scale: 0.85 }} aria-label="Comment">
                <MessageCircle className="w-[22px] h-[22px] text-charcoal" strokeWidth={1.75} />
              </motion.button>
              <motion.button whileTap={{ scale: 0.85 }} aria-label="Share">
                <Send className="w-[22px] h-[22px] text-charcoal" strokeWidth={1.75} />
              </motion.button>
            </div>
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => setSaved((s) => !s)}
              aria-label="Save"
            >
              <Bookmark
                className={`w-[22px] h-[22px] transition-colors duration-200 ${
                  saved ? 'fill-charcoal text-charcoal' : 'text-charcoal'
                }`}
                strokeWidth={saved ? 0 : 1.75}
              />
            </motion.button>
          </div>

          {/* ── Like Count ── */}
          <div className="px-4 pt-1 pb-0.5">
            <p className="text-[13px] font-semibold text-charcoal">{likes.toLocaleString()} likes</p>
          </div>

          {/* ── Caption ── */}
          <div className="px-4 pt-2 pb-3">
            <p className="text-[13px] text-charcoal leading-relaxed">
              <span className="font-semibold">cleanwavewindows&nbsp;</span>
              St. George was built for the sun — 300+ days of clear skies, sweeping red rock views,
              and homes with windows designed to frame every last bit of it.
            </p>
            <p className="mt-3 text-[13px] text-charcoal leading-relaxed">
              But that same desert environment comes with a trade-off. Our local water carries some
              of the highest mineral concentrations in the region. Every time hard water hits your
              glass and evaporates, it leaves calcium and silica deposits behind. Season after
              season, that invisible buildup turns your clearest panes into a frosted blur.
            </p>
            <p className="mt-3 text-[13px] text-charcoal leading-relaxed">
              This is exactly what our team reversed here. Our{' '}
              <span className="font-semibold">specialized maintenance protocol</span> uses
              professional-grade mineral neutralizers and precision polishing techniques to
              completely restore glass clarity — no scratches, no streaks, no guesswork.
            </p>
            <p className="mt-3 text-[13px] text-charcoal leading-relaxed">
              One treatment makes a dramatic difference. Our{' '}
              <span className="font-semibold">quarterly care plans</span> protect your investment
              year-round — catching mineral deposits before they bond permanently so you never
              face a full restoration job again.
            </p>
            <p className="mt-3 text-[13px] text-charcoal leading-relaxed">
              Your views are worth protecting. Tap the link in our bio or ask us about our
              quarterly care plan today.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed space-x-1">
              {HASHTAGS.map((tag) => (
                <span key={tag} className="text-brand-accent font-medium">
                  {tag}{' '}
                </span>
              ))}
            </p>
          </div>

          {/* ── Comments link ── */}
          <div className="px-4 pb-1">
            <p className="text-[12px] text-muted cursor-pointer hover:text-charcoal transition-colors">
              View all 34 comments
            </p>
          </div>

          {/* ── Timestamp ── */}
          <div className="px-4 pb-5">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
              2 days ago
            </p>
          </div>
        </motion.div>

        {/* ── Below-card CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 text-center"
        >
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-brand-navy text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-brand-navy-dark transition-colors duration-200"
          >
            Get a Free Hard Water Assessment
          </Link>
          <p className="mt-3 text-xs text-muted">
            Serving St. George, Washington, Hurricane, Ivins &amp; surrounding communities.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
