import { stories } from '../data/siteData'
import SectionIcon from './SectionIcon'

export default function Stories() {
  return (
    <section id="stories" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <SectionIcon />
              <h2 className="font-display text-3xl text-[color:var(--forest-900)] sm:text-4xl">
                Sardo&apos;s Garden Stories (YouTube / Blog)
              </h2>
            </div>
            <p className="mt-2 max-w-xl text-sm text-[color:var(--forest-800)]">
              Follow along with project breakdowns, design tips, and behind-the-scenes stories.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="group overflow-hidden rounded-2xl border border-emerald-100/70 bg-white/85 shadow-[var(--shadow-md)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                  {story.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-[color:var(--forest-900)]">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--forest-800)]">{story.summary}</p>
                <a
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                  href={story.href}
                >
                  {story.cta}
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
