import { useEffect, useRef, useState } from 'react'
import logo from "../assets/Sardo's garden icon.avif"

type NavBarProps = {
  logoHref?: string
}

export default function NavBar({ logoHref = '#top' }: NavBarProps) {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollRef = useRef(0)
  const tickingRef = useRef(false)
  const hiddenRef = useRef(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#transformations', label: 'Before/After' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#quote', label: 'Contact' }
  ]

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
      className={`fixed left-0 right-0 top-0 z-50 translate-y-0 border-b border-white/10 bg-black/70 opacity-100 transition-transform transition-opacity duration-300 ${
        hidden
          ? 'md:-translate-y-full md:opacity-0 md:pointer-events-none'
          : 'md:translate-y-0 md:opacity-100 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3">
        <a className="flex items-center gap-3 text-white" href={logoHref} aria-label="Back to top">
          <div className="h-14 w-14 overflow-hidden rounded-full bg-white/90 ring-2 ring-white/10 sm:h-20 sm:w-20">
            <img src={logo} alt="Sardo's Garden logo" className="h-full w-full object-contain p-1" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg sm:text-xl">Sardo's Garden</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} className="nav-link transition hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white/90 transition hover:bg-white/20 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex flex-col gap-1">
            <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
        <a
          className="hidden rounded-full bg-emerald-300 px-5 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-emerald-200 sm:inline-flex"
          href="#quote"
        >
          Get a Free Quote
        </a>
      </div>
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/85 px-6 pb-5 pt-3 text-white/90 transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-3 text-sm" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              className="nav-link w-fit text-white/90 transition hover:text-white"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
