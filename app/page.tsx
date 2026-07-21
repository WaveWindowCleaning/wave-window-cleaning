import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import BeforeAfter from '@/components/BeforeAfter'
import Reviews from '@/components/Reviews'
import MeetOwner from '@/components/MeetOwner'
import Services from '@/components/Services'
import Process from '@/components/Process'
import MaintenancePlans from '@/components/MaintenancePlans'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      {/* 1. First impression — benefit-led hero with strong CTA */}
      <Hero />
      {/* 2. Immediate trust — why choose us before they scroll past */}
      <WhyChooseUs />
      {/* 3. Visual proof — before/after removes doubt about quality */}
      <BeforeAfter />
      {/* 4. Social proof — real customer voices */}
      <Reviews />
      {/* 5. Personal trust — meet the person doing the work */}
      <MeetOwner />
      {/* 6. What's included — services overview */}
      <Services />
      {/* 7. How it works — reduces uncertainty */}
      <Process />
      {/* 8. Long-term value — maintenance plans */}
      <MaintenancePlans />
      {/* 9. Objection removal — FAQ */}
      <FAQ />
      {/* 10. Final push — closing CTA */}
      <CTASection />
      <Footer />
    </main>
  )
}
