import { useState } from 'react'
import { portfolio } from '../data/siteData'
import SectionIcon from './SectionIcon'

const allFilter = 'All'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>(allFilter)

  const filters = [allFilter, ...Array.from(new Set(portfolio.map((item) => item.category)))]
  const filteredItems =
    activeFilter === allFilter ? portfolio : portfolio.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <SectionIcon />
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-700/80">Portfolio</p>
            </div>
            <h2 className="font-display mt-4 text-3xl text-[color:var(--forest-900)] sm:text-4xl">
              Outdoor spaces designed with intention
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[color:var(--forest-800)]">
              Explore recent transformations across residential and commercial properties.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  activeFilter === filter
                    ? 'border-emerald-500 bg-emerald-500 text-white shadow-md'
                    : 'border-emerald-200 text-emerald-900 hover:border-emerald-300 hover:bg-emerald-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-emerald-100/70 bg-white/80 shadow-[var(--shadow-md)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-30 transition group-hover:opacity-0" />
              </div>
              <figcaption className="p-5">
                <p className="text-sm font-semibold text-[color:var(--forest-900)]">{item.title}</p>
                <p className="mt-2 text-sm text-[color:var(--forest-800)]">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
