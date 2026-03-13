import { useEffect, useState } from 'react'
import { transformations } from '../data/siteData'
import SectionIcon from './SectionIcon'

const allFilter = 'All'

export default function BeforeAfterShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>(allFilter)
  const [activeProjectId, setActiveProjectId] = useState(transformations[0]?.id ?? '')
  const [sliderValue, setSliderValue] = useState(55)

  const filters = [
    allFilter,
    ...Array.from(new Set(transformations.map((project) => project.category))),
  ]

  const filteredProjects =
    activeFilter === allFilter
      ? transformations
      : transformations.filter((project) => project.category === activeFilter)

  const activeProject =
    filteredProjects.find((project) => project.id === activeProjectId) ?? filteredProjects[0]

  useEffect(() => {
    if (!activeProject) return
    setActiveProjectId(activeProject.id)
    setSliderValue(55)
  }, [activeFilter])

  if (!activeProject) return null

  return (
    <section id="transformations" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <SectionIcon />
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-700/80">
                Our Landscape Transformations
              </p>
            </div>
            <h2 className="font-display mt-4 text-3xl text-[color:var(--forest-900)] sm:text-4xl">
              Landscape Projects Before and After
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[color:var(--forest-800)]">
              Drag the slider to compare real transformations and see the impact of our work.
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

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-emerald-100/70 bg-white/90 p-4 shadow-[var(--shadow-lg)]">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={activeProject.afterImage}
                alt={`${activeProject.title} after`}
                className="h-[380px] w-full object-cover sm:h-[460px]"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderValue}%` }}
              >
                <img
                  src={activeProject.beforeImage}
                  alt={`${activeProject.title} before`}
                  className="h-[380px] w-full object-cover sm:h-[460px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div
                className="pointer-events-none absolute top-0 h-full w-0.5 bg-emerald-300"
                style={{ left: `${sliderValue}%` }}
              />
              <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                Before
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                After
              </div>
            </div>
            <input
              type="range"
              min={15}
              max={85}
              value={sliderValue}
              onChange={(event) => setSliderValue(Number(event.target.value))}
              className="mt-5 w-full accent-emerald-500"
              aria-label="Before and after slider"
            />
          </div>

          <div className="rounded-3xl border border-emerald-100/70 bg-white/90 p-6 shadow-[var(--shadow-md)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-700/70">Project</p>
            <h3 className="font-display mt-3 text-2xl text-[color:var(--forest-900)]">
              {activeProject.title}
            </h3>
            <p className="mt-2 text-sm text-[color:var(--forest-800)]">{activeProject.location}</p>
            <ul className="mt-5 space-y-3 text-sm text-[color:var(--forest-900)]">
              {activeProject.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 px-5 py-2 text-sm font-semibold text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              View Full Project
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProjectId(project.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                activeProjectId === project.id
                  ? 'border-emerald-500 bg-emerald-500 text-white shadow-md'
                  : 'border-emerald-200 text-emerald-900 hover:border-emerald-300 hover:bg-emerald-50'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
