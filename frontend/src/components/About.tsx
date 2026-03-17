import { about, company } from '../data/siteData'
import SectionIcon from './SectionIcon'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <SectionIcon />
            <h2 className="font-display text-3xl text-[color:var(--forest-900)] sm:text-4xl">
              About Us
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--forest-800)]">{about.body}</p>
          <ul className="mt-6 space-y-3 text-sm text-[color:var(--forest-900)]">
            {about.highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="rounded-xl border border-emerald-100/70 bg-white/90 px-5 py-3 shadow-[var(--shadow-md)]">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/70">Experience</p>
              <p className="font-display text-xl text-[color:var(--forest-900)]">{company.yearsExperience}</p>
            </div>
            <div className="rounded-xl border border-emerald-100/70 bg-white/90 px-5 py-3 shadow-[var(--shadow-md)]">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/70">Service Area</p>
              <p className="font-display text-xl text-[color:var(--forest-900)]">Bay Area</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100/70 shadow-[var(--shadow-lg)]">
          <img
            src={about.image}
            alt="Landscaping team at work"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
