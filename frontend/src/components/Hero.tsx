import { company, hero } from '../data/siteData'


export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[85vh] overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_10%,rgba(255,255,255,0.18),transparent_40%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-8 md:grid-cols-[1.15fr_0.85fr] md:pt-12">
        <div className="text-white">
          <div className="flex items-center gap-3 text-white/90 animate-fade">
           
            <p className="text-xs uppercase tracking-[0.5em] text-emerald-200">Outdoor Living</p>
          </div>
          <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl animate-rise">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85 animate-rise">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-emerald-200"
              href="#quote"
            >
              {hero.ctaPrimary}
            </a>
            <a
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              href="#portfolio"
            >
              {hero.ctaSecondary}
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-white/80 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-white">650+</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">{company.yearsExperience}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Experience</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">4.9/5</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Client Rating</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white/12 p-6 text-white backdrop-blur-md ring-1 ring-white/20">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Free Onsite Estimate</p>
          <h3 className="font-display mt-4 text-2xl">Your yard, reimagined</h3>
          <p className="mt-3 text-sm text-white/80">
            Design, build, and maintenance tailored to your property and schedule.
          </p>
          <div className="mt-5 space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Sustainable planting and irrigation
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Clear timelines and transparent pricing
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Licensed and insured team
            </div>
          </div>
          <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm">
            <p className="text-white/70">Call now</p>
            <p className="text-lg font-semibold text-white">{company.phone}</p>
            <p className="text-white/70">{company.serviceArea}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
