import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import BeforeAfterShowcase from '../components/BeforeAfterShowcase'
import PlantCollections from '../components/PlantCollections'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <PlantCollections />
      <Portfolio />
      <BeforeAfterShowcase />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}
