import { services } from '../data/siteData'
import SectionIcon from './SectionIcon'

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <SectionIcon />
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-700/80">Services</p>
            </div>
            <h2 className="font-display mt-4 text-3xl text-[color:var(--forest-900)] sm:text-4xl">
              Complete care for every corner of your landscape
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[color:var(--forest-800)]">
              From design to maintenance, we deliver dependable craftsmanship and thoughtful details.
            </p>
          </div>
          <a
            className="hidden rounded-full border border-emerald-200 px-5 py-2 text-sm font-semibold text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-50 md:inline-flex"
            href="#quote"
          >
            Schedule a Consultation
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl border border-emerald-100/60 bg-white/80 p-6 shadow-[var(--shadow-md)] transition hover:-translate-y-1 hover:border-emerald-200"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-emerald-50 p-3">
                  <img
                    src={service.icon}
                    alt=""
                    className="h-10 w-10 rounded-lg object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="font-display text-xl text-[color:var(--forest-900)]">{service.title}</h3>
              </div>
              <p className="mt-4 text-sm text-[color:var(--forest-800)]">{service.description}</p>
              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-800"
                href="#quote"
              >
                Learn more
                <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
