import { useEffect, useState } from 'react'
import Home from './pages/Home'
import PortfolioAll from './pages/PortfolioAll'

function App() {
  const [route, setRoute] = useState<'home' | 'portfolio'>(() => {
    if (typeof window === 'undefined') return 'home'
    return window.location.hash === '#portfolio-all' ? 'portfolio' : 'home'
  })
  const [hash, setHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''))

  useEffect(() => {
    const onHashChange = () => {
      const nextHash = window.location.hash
      setHash(nextHash)
      setRoute(nextHash === '#portfolio-all' ? 'portfolio' : 'home')
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const targetId = hash.replace('#', '')

    window.requestAnimationFrame(() => {
      if (targetId) {
        const target = document.getElementById(targetId)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }, [route, hash])

  return route === 'portfolio' ? <PortfolioAll /> : <Home />
}

export default App
