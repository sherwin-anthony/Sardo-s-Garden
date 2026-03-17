import { useRef } from 'react'
import { whyChoose } from '../data/siteData'
import SectionIcon from './SectionIcon'
import awardee1 from '../assets/awardee1.avif'
import awardee2 from '../assets/awardee2.jpeg'
import certificate1 from '../assets/certificate 1.jpg'
import certificate2 from '../assets/certificate2.jpg'
import awardeeVideo from '../assets/856479-uhd_4096_2160_25fps.mp4'

export default function WhyChoose() {
  const trustedRef = useRef<HTMLDivElement | null>(null)
  const trustedCards = [
    { id: 'awardee-1', src: awardee1, alt: 'Award recognition' },
    { id: 'awardee-2', src: awardee2, alt: 'Landscape award' },
    { id: 'certificate-1', src: certificate1, alt: 'Certificate of excellence' },
    { id: 'certificate-2', src: certificate2, alt: 'Professional certificate' },
  ]

  const scrollTrusted = (direction: number) => {
    const container = trustedRef.current
    if (!container) return
    const firstCard = container.querySelector<HTMLElement>('[data-trusted-card]')
    const cardWidth = firstCard ? firstCard.offsetWidth : 240
    const gap = 16
    const amount = direction * (cardWidth + gap)
    const maxScrollLeft = container.scrollWidth - container.clientWidth
    const next = container.scrollLeft + amount

    if (direction > 0 && next >= maxScrollLeft - 4) {
      container.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    if (direction < 0 && container.scrollLeft <= 4) {
      container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' })
      return
    }

    container.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="why" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <SectionIcon />
              <h2 className="font-display text-3xl text-[color:var(--forest-900)] sm:text-4xl">
                Why Choose Sardo&apos;s Garden
              </h2>
            </div>
            <p className="mt-1 max-w-xl text-sm text-[color:var(--forest-800)]">
             Delivering award-winning landscape design and exceptional service for over 20 years.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-emerald-100/70 bg-white/85 p-6 shadow-[var(--shadow-md)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
              <h3 className="font-display mt-5 text-xl text-[color:var(--forest-900)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--forest-800)] sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-emerald-100/70 bg-white/85 p-6 shadow-[var(--shadow-md)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl text-[color:var(--forest-900)]">
                Trusted &amp; Recognized By
              </h3>
              <p className="mt-2 text-sm text-[color:var(--forest-800)]">
                Awards and certifications that highlight our commitment to quality.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTrusted(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
                aria-label="Scroll left"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() => scrollTrusted(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
                aria-label="Scroll right"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div
            ref={trustedRef}
            className="mt-2 flex gap-2 overflow-x-auto scroll-smooth pb-2"
          >
            {trustedCards.map((card) => (
              <div
                key={card.id}
                data-trusted-card
                className="min-w-[200px] flex-1 rounded-2xl border border-emerald-100/100 bg-white p-4 shadow-sm sm:min-w-[220px]"
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="h-32 w-full object-contain sm:h-40"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-emerald-100/70 bg-black shadow-[var(--shadow-md)]">
          <video
            className="h-full w-full object-cover"
            src={awardeeVideo}
            autoPlay
            loop
            muted
            playsInline
            controls 
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
