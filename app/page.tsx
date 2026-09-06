import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Team from './components/Team'
import Press from './components/Press'
import BookingSection from './components/BookingSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import StructuredData from './components/StructuredData'

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <Team />
<Press />
        <BookingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
