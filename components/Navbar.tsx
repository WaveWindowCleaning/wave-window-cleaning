'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How It Works' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-sm border-b border-gray-100/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Wave Window Cleaning"
            width={150}
            height={48}
            className="h-10 lg:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? 'text-charcoal hover:text-brand-navy'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+14352295674"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? 'text-brand-navy' : 'text-white/90 hover:text-white'
            }`}
          >
            <Phone size={14} />
            (435) 229-5674
          </a>
          <Link
            href="/quote"
            className="bg-brand-navy text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-navy-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={22} className={scrolled ? 'text-charcoal' : 'text-white'} />
          ) : (
            <Menu size={22} className={scrolled ? 'text-charcoal' : 'text-white'} />
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-2 text-charcoal font-medium hover:text-brand-navy border-b border-gray-50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="tel:+14352295674"
                  className="flex items-center justify-center gap-2 border border-brand-navy text-brand-navy font-semibold py-3 rounded-xl"
                >
                  <Phone size={16} />
                  (435) 229-5674
                </a>
                <Link
                  href="/quote"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center bg-brand-navy text-white font-semibold py-3 rounded-xl"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
