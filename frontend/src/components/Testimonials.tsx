import { testimonials } from '../data/siteData'
import SectionIcon from './SectionIcon'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <SectionIcon />
              <h2 className="font-display text-3xl text-[color:var(--forest-900)] sm:text-4xl">
                Client Testimonials
              </h2>
            </div>
            <p className="mt-1 max-w-xl text-sm text-[color:var(--forest-800)]">
              We build long-term relationships through craftsmanship, communication, and care.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex h-full flex-col gap-6 rounded-2xl border border-emerald-100/70 bg-white/80 p-6 shadow-[var(--shadow-md)]"
            >
              <p className="text-base leading-relaxed text-[color:var(--forest-900)]">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto flex items-center gap-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="text-sm font-semibold text-[color:var(--forest-900)]">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/80">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
