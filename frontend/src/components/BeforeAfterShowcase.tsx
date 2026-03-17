import { useState } from 'react'
import { transformations } from '../data/siteData'
import SectionIcon from './SectionIcon'

type ViewMode = 'before' | 'compare' | 'after'

type SliderProps = {
  beforeImage: string
  afterImage: string
  value: number
  onChange: (value: number) => void
  heightClass: string
  mode: ViewMode
}

function ComparisonSlider({ beforeImage, afterImage, value, onChange, heightClass, mode }: SliderProps) {
  const isCompare = mode === 'compare'
  const showBeforeOnly = mode === 'before'

  return (
    <div className="rounded-2xl border border-emerald-100/70 bg-white/90 p-4 shadow-[var(--shadow-lg)]">
      <div className="relative overflow-hidden rounded-2xl">
        {!showBeforeOnly && (
          <img
            src={afterImage}
            alt="After transformation"
            className={`${heightClass} w-full object-cover brightness-110 saturate-110`}
            loading="lazy"
            decoding="async"
          />
        )}
        {(showBeforeOnly || isCompare) && (
          <div className={isCompare ? 'absolute inset-0 overflow-hidden' : ''} style={isCompare ? { width: `${value}%` } : undefined}>
            <img
              src={beforeImage}
              alt="Before transformation"
              className={`${heightClass} w-full object-cover`}
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        {isCompare && (
          <>
            <div
              className="pointer-events-none absolute top-0 h-full w-0.5 bg-emerald-300"
              style={{ left: `${value}%` }}
            />
            <div
              className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border border-emerald-200 bg-white/90 text-emerald-700 shadow-md"
              style={{ left: `${value}%` }}
            >
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
          </>
        )}
        {mode !== 'after' && (
          <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
            Before
          </div>
        )}
        {mode !== 'before' && (
          <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
            After
          </div>
        )}
      </div>
      {isCompare && (
        <input
          type="range"
          min={10}
          max={90}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="mt-5 w-full accent-emerald-500"
          aria-label="Before and after slider"
        />
      )}
    </div>
  )
}

export default function BeforeAfterShowcase() {
  const featuredProject = transformations[0]
  const [sliderValue, setSliderValue] = useState(55)
  const [viewMode, setViewMode] = useState<ViewMode>('compare')

  if (!featuredProject) return null

  return (
    <section id="transformations" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <SectionIcon />
              <h2 className="font-display text-3xl text-[color:var(--forest-900)] sm:text-4xl">
                Landscape Transformations
              </h2>
            </div>
            <p className="mt-1 max-w-2xl text-sm text-[color:var(--forest-800)]">
              See how we turn ordinary outdoor spaces into beautiful and functional landscapes.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {(['before', 'compare', 'after'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setViewMode(mode)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                viewMode === mode
                  ? 'border-emerald-500 bg-emerald-500 text-white shadow-md'
                  : 'border-emerald-200 text-emerald-900 hover:border-emerald-300 hover:bg-emerald-50'
              }`}
            >
              {mode === 'before' ? 'Before' : mode === 'after' ? 'After' : 'Compare'}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <ComparisonSlider
            beforeImage={featuredProject.beforeImage}
            afterImage={featuredProject.afterImage}
            value={sliderValue}
            onChange={setSliderValue}
            heightClass="h-[380px] sm:h-[460px]"
            mode={viewMode}
          />

          <div className="mt-6 rounded-3xl border border-emerald-100/70 bg-white/90 p-6 shadow-[var(--shadow-md)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-700/70">Project</p>
            <h3 className="font-display mt-3 text-2xl text-[color:var(--forest-900)]">
              {featuredProject.title}
            </h3>
            <p className="mt-2 text-sm text-emerald-800">{featuredProject.location}</p>
            <p className="mt-4 text-sm text-[color:var(--forest-800)]">
              {featuredProject.description}
            </p>
            <a
              href="#portfolio-all"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 px-5 py-2 text-sm font-semibold text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              View Full Project -&gt;
            </a>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#portfolio-all"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-emerald-200/60 transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            View More Landscape Projects
          </a>
        </div>
      </div>
    </section>
  )
}
