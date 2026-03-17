import { company, services } from '../data/siteData'
import SectionIcon from './SectionIcon'

export default function ContactForm() {
  return (
    <section id="quote" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl bg-[color:var(--forest-900)] p-6 text-white shadow-[var(--shadow-lg)] sm:p-8">
          <div className="flex items-center gap-3">
            <SectionIcon className="h-12 w-16 bg-white/95 ring-white/30" />
            <h2 className="font-display text-3xl text-white sm:text-4xl">Contact:</h2>
          </div>
          <p className="mt-3 text-sm text-white/80">
            Share your goals and we will follow up within one business day to schedule your on-site
            consultation.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div>
              <p className="text-white/70">Phone</p>
              <p className="text-lg font-semibold">{company.phone}</p>
            </div>
            <div>
              <p className="text-white/70">Email</p>
              <p className="text-lg font-semibold">{company.email}</p>
            </div>
            <div>
              <p className="text-white/70">Address</p>
              <p className="text-white/90">{company.address}</p>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-emerald-100/70 bg-white/90 p-6 shadow-[var(--shadow-md)] sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-[color:var(--forest-900)]">
              Name
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="mt-2 w-full rounded-xl border border-emerald-100 px-4 py-3 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                required
              />
            </label>
            <label className="text-sm font-semibold text-[color:var(--forest-900)]">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                className="mt-2 w-full rounded-xl border border-emerald-100 px-4 py-3 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                required
              />
            </label>
            <label className="text-sm font-semibold text-[color:var(--forest-900)]">
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="(555) 000-0000"
                className="mt-2 w-full rounded-xl border border-emerald-100 px-4 py-3 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
              />
            </label>
            <label className="text-sm font-semibold text-[color:var(--forest-900)]">
              Service Interested In
              <select
                name="service"
                className="mt-2 w-full rounded-xl border border-emerald-100 px-4 py-3 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-[color:var(--forest-900)]">
            Message
            <textarea
              name="message"
              placeholder="Tell us about your space and goals..."
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-emerald-100 px-4 py-3 text-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-300/40 transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            Request a Free Estimate
          </button>
          <p className="mt-4 text-xs text-[color:var(--forest-800)]">
            Prefer to talk now? Call us at {company.phone}.
          </p>
        </form>
      </div>
    </section>
  )
}
