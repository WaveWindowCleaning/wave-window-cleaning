import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Languages } from 'lucide-react'

const services = [
  'Residential Window Cleaning',
  'Solar Panel Cleaning',
  'Screen Cleaning & Restoration',
  'Hard Water Stain Removal',
  'Commercial Window Cleaning',
]

const areas = [
  'St. George', 'Santa Clara', 'Washington', 'Ivins',
  'Bloomington Hills', 'Little Valley', 'Green Springs', 'Snow Canyon',
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white/65">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Wave Window Cleaning"
              width={140}
              height={44}
              className="h-10 w-auto brightness-200 mb-4"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Premium window cleaning for St. George, Utah and Washington County. Licensed,
              insured, and locally owned since day one.
            </p>
            {/* Se Habla Español badge */}
            <div className="mt-5 inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-3.5 py-1.5">
              <Languages size={14} className="text-white" />
              <span className="text-white text-xs font-semibold">Se Habla Español</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/quote" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {areas.map((a) => (
                <li key={a} className="flex items-center gap-1.5">
                  <MapPin size={11} className="shrink-0 text-white/35" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+14352295674"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone size={14} className="shrink-0" />
                  (435) 229-5674
                </a>
              </li>
              <li>
                <a
                  href="mailto:teancum@cleanwavewindows.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail size={14} className="shrink-0" />
                  teancum@cleanwavewindows.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                St. George, Utah 84770
              </li>
            </ul>

            <Link
              href="/quote"
              className="mt-6 inline-flex items-center justify-center w-full bg-white text-brand-navy font-bold text-sm py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Wave Window Cleaning. All rights reserved.</p>
          <p className="text-center">
            Serving St. George · Santa Clara · Washington · Ivins · Bloomington · Little Valley · Green Springs
          </p>
        </div>
      </div>
    </footer>
  )
}
