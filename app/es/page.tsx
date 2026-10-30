import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageSquare, ShieldCheck, CloudRain, Languages, Sparkles, MapPin } from 'lucide-react'
import EsQuoteForm from '@/components/es/EsQuoteForm'
import { SITE, BUSINESS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Limpieza de ventanas en St. George, Utah',
  description:
    'Limpieza de ventanas residencial y comercial, paneles solares, mosquiteros y manchas de agua dura en St. George, Utah. Cotización gratis. Hablamos español.',
  alternates: {
    canonical: '/es',
    languages: { 'es-US': '/es', 'en-US': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'es_US',
    url: `${SITE.url}/es`,
    siteName: 'Wave Window Cleaning',
    title: 'Limpieza de ventanas en St. George, UT | Wave Window Cleaning',
    description: 'Ventanas sin rayas, paneles solares y más. Cotización gratis. Hablamos español.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Wave Window Cleaning' }],
  },
}

const SMS =
  'sms:+14355009720?&body=Hola%2C%20quisiera%20una%20cotizaci%C3%B3n%20gratis%20de%20Wave%20Window%20Cleaning.'

const services = [
  {
    title: 'Limpieza de ventanas residencial',
    img: '/photos/picture-window-view.jpg',
    alt: 'Ventana panorámica impecable con vista al desierto',
    desc: 'Por dentro y por fuera, desde casas de un piso hasta grandes residencias. Los rieles, marcos y repisas están incluidos en cada limpieza exterior.',
  },
  {
    title: 'Limpieza de paneles solares',
    img: '/photos/solar-panels-red-rocks.jpg',
    alt: 'Paneles solares limpios con rocas rojas al fondo',
    desc: 'El polvo y la película de minerales reducen la producción de sus paneles. Los limpiamos y enjuagamos con cuidado para que rindan como deben.',
  },
  {
    title: 'Mosquiteros y manchas de agua dura',
    img: '/hardwater-after.png',
    alt: 'Ventana después de quitar las manchas de agua dura',
    desc: 'El agua de Utah tiene muchos minerales y deja una capa difícil de quitar. Limpiamos a fondo los mosquiteros y quitamos las manchas que la limpieza normal no logra.',
  },
  {
    title: 'Ventanas comerciales',
    img: '/photos/commercial-studio.jpg',
    alt: 'Ventanas grandes y limpias en un local comercial',
    desc: 'Tiendas, oficinas y edificios comerciales pequeños, con un horario que se adapte a su negocio.',
  },
]

const steps = [
  { n: '1', title: 'Pida su cotización gratis', desc: 'Llene el formulario corto, llámenos o envíenos un mensaje. Sin presión y sin compromiso.' },
  { n: '2', title: 'Confirmamos precio y fecha', desc: 'Le confirmamos el precio antes de empezar, para que no haya sorpresas.' },
  { n: '3', title: 'Disfrute sus ventanas', desc: 'Las dejamos sin rayas. Con un plan de servicio, si llueve dentro de 7 días, volvemos a limpiar las ventanas exteriores sin costo.' },
]

const faqs = [
  {
    q: '¿Cuánto cuesta limpiar las ventanas?',
    a: 'Cada casa es diferente. Las casas de un piso con 10 a 15 ventanas suelen estar entre $120 y $180, pero las casas de dos pisos y las propiedades grandes se cotizan individualmente. Le confirmamos el precio antes de empezar.',
  },
  {
    q: '¿Qué es la garantía de 7 días por lluvia?',
    a: 'Es un beneficio para los clientes con un plan de servicio. Si llueve dentro de los 7 días siguientes a la limpieza exterior de una visita del plan y las ventanas quedan manchadas, volvemos y las limpiamos de nuevo sin costo. Las limpiezas de una sola vez están cubiertas por nuestra garantía de satisfacción.',
  },
  {
    q: '¿Tengo que estar en casa?',
    a: 'Para limpieza solo exterior no es necesario, solo asegúrese de que podamos entrar por los portones. Para limpieza interior, debe haber un adulto de 18 años o más en casa.',
  },
  {
    q: '¿Cuánto tiempo toma?',
    a: 'La mayoría de las casas de un piso toman de 60 a 90 minutos. Las casas de dos pisos o más grandes toman en promedio de 2 a 3 horas.',
  },
  {
    q: '¿Tienen licencia y seguro?',
    a: 'Sí. Tenemos licencia y seguro de responsabilidad civil. Puede pedirnos una prueba del seguro antes de su cita.',
  },
  {
    q: '¿Qué áreas atienden?',
    a: 'St. George, Santa Clara, Washington, Ivins, Bloomington Hills, Little Valley, Green Springs y Snow Canyon. ¿No está seguro? Llámenos al (435) 500-9720.',
  },
]

export default function SpanishPage() {
  return (
    <div lang="es">
      <header className="bg-brand-navy px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/es" aria-label="Wave Window Cleaning, inicio">
            <Image src="/logo.png" alt="Wave Window Cleaning" width={120} height={38} className="h-9 w-auto brightness-200" />
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/" lang="en" hrefLang="en" className="text-white text-sm font-medium underline hover:no-underline">
              English
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 text-white text-sm font-semibold hover:underline">
              <Phone size={15} aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-navy">
          <Image
            src="/photos/patio-windows.jpg"
            alt="Ventanas limpias con vista a un patio en St. George"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2535]/95 via-[#0F2535]/80 to-[#0F2535]/55" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-white text-sm font-semibold">
                <Languages size={15} aria-hidden="true" />
                Hablamos español
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
                Limpieza de ventanas en St. George.{' '}
                <span className="text-brand-accent">Sin rayas. Garantizado.</span>
              </h1>
              <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">
                Limpieza de ventanas y paneles solares para casas y negocios de St. George y el condado de Washington.
                Cotización gratis por llamada o mensaje de texto, y garantía de satisfacción en cada trabajo.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-black text-base px-8 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 transition"
                >
                  <Phone size={18} aria-hidden="true" />
                  Llame al {SITE.phoneDisplay}
                </a>
                <a
                  href={SMS}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/40 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white/15 transition"
                >
                  <MessageSquare size={18} aria-hidden="true" />
                  Envíenos un mensaje
                </a>
              </div>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/85 max-w-xl">
                {[
                  'Con licencia y seguro',
                  'Garantía de 7 días por lluvia con planes de servicio',
                  'Rieles, marcos y repisas incluidos',
                  'Acabado sin rayas con agua pura',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <EsQuoteForm />
          </div>
        </section>

        {/* Trust */}
        <section className="bg-white py-10 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-6 text-center">
            {[
              { Icon: Sparkles, title: '5 estrellas en Google', sub: 'Todas nuestras reseñas son de 5 estrellas' },
              { Icon: ShieldCheck, title: 'Con licencia y seguro', sub: 'Prueba del seguro a su solicitud' },
              { Icon: CloudRain, title: 'Garantía de 7 días', sub: 'Sin costo con cualquier plan de servicio' },
            ].map(({ Icon, title, sub }) => (
              <div key={title}>
                <Icon className="mx-auto text-brand-navy" size={28} aria-hidden="true" />
                <p className="mt-2 font-bold text-charcoal">{title}</p>
                <p className="text-sm text-muted">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="servicios" className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">Lo que hacemos</span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">Nuestros servicios</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <article key={s.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
                  <div className="relative aspect-[4/3]">
                    <Image src={s.img} alt={s.alt} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg text-charcoal leading-snug">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{s.desc}</p>
                    <a href="#cotizar" className="mt-4 text-sm font-bold text-brand-navy underline underline-offset-4">
                      Pedir cotización gratis
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-center text-3xl lg:text-4xl font-black text-charcoal tracking-tight">Así de fácil</h2>
            <ol className="mt-10 grid md:grid-cols-3 gap-6">
              {steps.map((st) => (
                <li key={st.n} className="bg-surface rounded-2xl p-6 border border-gray-100">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white font-black">
                    {st.n}
                  </span>
                  <h3 className="mt-4 font-bold text-lg text-charcoal">{st.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{st.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-14 bg-brand-navy text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight">Nuestros clientes nos recomiendan</h2>
            <p className="mt-3 text-white/85">
              Todas nuestras reseñas en Google son de 5 estrellas. Las reseñas están escritas en inglés.
            </p>
            <a
              href="https://share.google/XBO6pCy18W05LUGLt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block bg-white text-brand-navy font-bold px-6 py-3 rounded-full hover:-translate-y-0.5 transition"
            >
              Ver reseñas en Google
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-center text-3xl lg:text-4xl font-black text-charcoal tracking-tight">Preguntas frecuentes</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <summary className="cursor-pointer list-none px-6 py-5 font-medium text-charcoal flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-brand-navy text-xl leading-none group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-sm text-muted leading-relaxed border-t border-gray-100 pt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cotizar" className="py-16 bg-white scroll-mt-4">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-charcoal tracking-tight">¿Listo para ventanas impecables?</h2>
            <p className="mt-3 text-muted">Su cotización es gratis. Llame, envíe un mensaje o use el formulario de arriba.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-black px-8 py-4 rounded-full hover:bg-brand-navy-dark transition"
              >
                <Phone size={18} aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={SMS}
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy font-bold px-8 py-4 rounded-full hover:bg-brand-navy hover:text-white transition"
              >
                <MessageSquare size={18} aria-hidden="true" />
                Enviar mensaje
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-navy-dark text-white/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 text-sm text-center space-y-3">
          <p className="flex items-center justify-center gap-1.5">
            <MapPin size={14} aria-hidden="true" /> {BUSINESS.location} · Lunes a sábado, 8 a.m. a 6 p.m.
          </p>
          <p>
            <a href={`mailto:${SITE.email}`} className="underline hover:text-white">
              {SITE.email}
            </a>{' '}
            · {SITE.phoneDisplay}
          </p>
          <p className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <Link href="/privacy" lang="en" className="underline hover:text-white">
              Política de Privacidad (en inglés)
            </Link>
            <Link href="/terms" lang="en" className="underline hover:text-white">
              Términos y garantía (en inglés)
            </Link>
            <Link href="/" lang="en" className="underline hover:text-white">
              English
            </Link>
          </p>
          <p className="text-white/70">
            © {new Date().getFullYear()} Wave Window Cleaning, nombre comercial de {BUSINESS.legalName}.
          </p>
        </div>
      </footer>
    </div>
  )
}
