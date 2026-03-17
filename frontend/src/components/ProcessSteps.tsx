import { processSteps } from '../data/siteData'
import SectionIcon from './SectionIcon'

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <SectionIcon />
              <h2 className="font-display text-3xl text-[color:var(--forest-900)] sm:text-4xl">
                Simple Steps for Our Landscape Work
              </h2>
            </div>
            <p className="mt-1 max-w-xl text-sm text-[color:var(--forest-800)]">
              From the first call to final planting, we keep the process clear and stress-free.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="rounded-2xl border border-emerald-100/70 bg-white/85 p-6 shadow-[var(--shadow-md)]"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-700/80">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-900">
                  {index + 1}
                </span>
                Step {index + 1}
              </div>
              <h3 className="font-display mt-5 text-xl text-[color:var(--forest-900)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--forest-800)]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
