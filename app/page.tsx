import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import BeforeAfter from '@/components/BeforeAfter'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <BeforeAfter />
      <Reviews />
      <Services />
      <Process />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
