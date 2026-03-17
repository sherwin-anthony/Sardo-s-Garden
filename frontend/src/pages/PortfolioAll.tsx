import NavBar from '../components/NavBar'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function PortfolioAll() {
  return (
    <>
      <NavBar logoHref="#portfolio-all" />
      <main id="portfolio-all" className="pt-24">
        <Portfolio showBack backHref="#transformations" sectionId="portfolio-all-grid" />
        <Footer />
      </main>
    </>
  )
}
