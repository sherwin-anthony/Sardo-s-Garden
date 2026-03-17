import { services } from '../data/siteData'
import SectionIcon from './SectionIcon'

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <SectionIcon />
              <h2 className="font-display text-3xl text-[color:var(--forest-900)] sm:text-4xl">
                Services
              </h2>
            </div>
            <p className="mt-1 max-w-xl text-sm text-[color:var(--forest-800)]">
              From design to maintenance, we deliver dependable craftsmanship and thoughtful details.
            </p>
          </div>
          <a
            className="hidden items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200/60 transition hover:-translate-y-0.5 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 md:inline-flex"
            href="#quote"
          >
            Schedule a Consultation
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl border border-emerald-100/60 bg-white/80 p-6 shadow-[var(--shadow-md)] transition hover:-translate-y-1 hover:border-emerald-200"
            >
              <div className="overflow-hidden rounded-2xl border border-emerald-100/80 bg-emerald-50/80">
                <img
                  src={service.icon}
                  alt={`${service.title} service`}
                  className="h-56 w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-display mt-5 text-xl text-[color:var(--forest-900)]">{service.title}</h3>
              <p className="mt-4 text-l text-[color:var(--forest-800)]">{service.description}</p>
             
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
