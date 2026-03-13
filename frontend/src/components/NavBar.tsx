import { useEffect, useRef, useState } from 'react'
import logo from "../assets/Sardo's garden icon.avif"

export default function NavBar() {
  const [hidden, setHidden] = useState(false)
  const lastScrollRef = useRef(0)
  const tickingRef = useRef(false)
  const hiddenRef = useRef(false)

  useEffect(() => {
    const update = () => {
      const current = window.scrollY
      const previous = lastScrollRef.current
      const scrollingDown = current > previous && current > 80

      if (scrollingDown !== hiddenRef.current) {
        hiddenRef.current = scrollingDown
        setHidden(scrollingDown)
      }

      lastScrollRef.current = current
      tickingRef.current = false
    }

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true
        window.requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-lg transition-transform transition-opacity duration-300 ${
        hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a className="flex items-center gap-3 text-white" href="#top" aria-label="Back to top">
          <div className="h-20 w-20 overflow-hidden rounded-full bg-white/90 ring-2 ring-white/10">
            <img src={logo} alt="Sardo's Garden logo" className="h-full w-full object-contain p 0" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-xl">Sardo's Garden</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex" aria-label="Primary">
          <a className="nav-link transition hover:text-white" href="#services">
            Services
          </a>
          <a className="nav-link transition hover:text-white" href="#portfolio">
            Portfolio
          </a>
          <a className="nav-link transition hover:text-white" href="#transformations">
            Before/After
          </a>
          <a className="nav-link transition hover:text-white" href="#about">
            About
          </a>
          <a className="nav-link transition hover:text-white" href="#testimonials">
            Reviews
          </a>
          <a className="nav-link transition hover:text-white" href="#quote">
            Contact
          </a>
        </nav>
        <a
          className="hidden rounded-full bg-emerald-300 px-5 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-emerald-200 sm:inline-flex"
          href="#quote"
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  )
}
