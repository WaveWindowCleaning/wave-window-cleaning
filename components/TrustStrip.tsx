import { Star, ShieldCheck, CloudRain, BadgeCheck, MapPin } from 'lucide-react'

const items = [
  { icon: Star, title: '100% 5-Star on Google', sub: 'Every review is five stars' },
  { icon: ShieldCheck, title: 'Licensed & Insured', sub: 'Proof on request' },
  { icon: CloudRain, title: '7-Day Weather Guarantee', sub: 'Free re-clean with any service plan' },
  { icon: BadgeCheck, title: '100% Satisfaction', sub: 'Guaranteed' },
  { icon: MapPin, title: 'Locally Owned', sub: 'St. George, Utah' },
]

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-5 gap-5">
        {items.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface">
              <Icon size={18} className="text-brand-navy" />
            </span>
            <div>
              <p className="text-sm font-bold text-charcoal leading-tight">{title}</p>
              <p className="text-xs text-muted leading-snug mt-0.5">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
