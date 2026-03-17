import { useState } from 'react'
import { plantCollections } from '../data/siteData'
import SectionIcon from './SectionIcon'

type TipKey = 'bestFor' | 'sunlight' | 'maintenance'

export default function PlantCollections() {
  const [activeTip, setActiveTip] = useState<string | null>(null)

  const rowOne = plantCollections.concat(plantCollections)
  const rowTwo = plantCollections.slice().reverse().concat(plantCollections.slice().reverse())

  const toggleTips = (id: string) => {
    setActiveTip((prev) => (prev === id ? null : id))
  }

  const renderTips = (tips: Record<TipKey, string>) => (
    <div className="mt-4 rounded-xl border border-emerald-100/70 bg-emerald-50/60 px-4 py-3 text-xs text-emerald-900">
      <p className="font-semibold uppercase tracking-[0.2em] text-emerald-700/80">Plant Tips</p>
      <ul className="mt-3 space-y-2">
        <li className="flex items-center justify-between">
          <span className="text-emerald-700/70">Best for</span>
          <span className="font-semibold">{tips.bestFor}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-emerald-700/70">Sunlight</span>
          <span className="font-semibold">{tips.sunlight}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-emerald-700/70">Maintenance</span>
          <span className="font-semibold">{tips.maintenance}</span>
        </li>
      </ul>
    </div>
  )

  return (
    <section id="plants" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <SectionIcon />
              <h2 className="font-display text-3xl text-[color:var(--forest-900)] sm:text-4xl">
                Our Plant Collections
              </h2>
            </div>
            <p className="mt-1 max-w-xl text-sm text-[color:var(--forest-800)]">
              Learn about our favorite plant selections and the growing conditions they thrive in.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        <div className="marquee-row">
          <div className="marquee-track">
            {rowOne.map((plant, index) => (
              <article
                key={`${plant.id}-row1-${index}`}
                className={`plant-card ${activeTip === plant.id ? 'is-flipped' : ''}`}
                onMouseLeave={() => activeTip === plant.id && setActiveTip(null)}
              >
                <div className="plant-card-inner">
                  <div className="plant-card-face plant-card-front">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="h-40 w-full rounded-xl object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/70">
                        {plant.category}
                      </p>
                      <h3 className="font-display mt-2 text-xl text-[color:var(--forest-900)]">
                        {plant.name}
                      </h3>
                      <p className="mt-2 text-sm text-[color:var(--forest-800)]">
                        {plant.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleTips(plant.id)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                    >
                      Learn More
                      <span aria-hidden="true">-&gt;</span>
                    </button>
                  </div>
                  <div className="plant-card-face plant-card-back">
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/70">
                      {plant.category}
                    </p>
                    <h3 className="font-display mt-2 text-xl text-[color:var(--forest-900)]">
                      {plant.name}
                    </h3>
                    {renderTips(plant.tips)}
                    <button
                      type="button"
                      onClick={() => toggleTips(plant.id)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                    >
                      Back
                      <span aria-hidden="true">-&gt;</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="marquee-row marquee-row-reverse">
          <div className="marquee-track">
            {rowTwo.map((plant, index) => (
              <article
                key={`${plant.id}-row2-${index}`}
                className={`plant-card ${activeTip === plant.id ? 'is-flipped' : ''}`}
                onMouseLeave={() => activeTip === plant.id && setActiveTip(null)}
              >
                <div className="plant-card-inner">
                  <div className="plant-card-face plant-card-front">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="h-40 w-full rounded-xl object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/70">
                        {plant.category}
                      </p>
                      <h3 className="font-display mt-2 text-xl text-[color:var(--forest-900)]">
                        {plant.name}
                      </h3>
                      <p className="mt-2 text-sm text-[color:var(--forest-800)]">
                        {plant.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleTips(plant.id)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                    >
                      Learn More
                      <span aria-hidden="true">-&gt;</span>
                    </button>
                  </div>
                  <div className="plant-card-face plant-card-back">
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/70">
                      {plant.category}
                    </p>
                    <h3 className="font-display mt-2 text-xl text-[color:var(--forest-900)]">
                      {plant.name}
                    </h3>
                    {renderTips(plant.tips)}
                    <button
                      type="button"
                      onClick={() => toggleTips(plant.id)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                    >
                      Back
                      <span aria-hidden="true">-&gt;</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
