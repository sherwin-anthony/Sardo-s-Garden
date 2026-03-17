import { company, social } from '../data/siteData'
import SectionIcon from './SectionIcon'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100/70 bg-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <SectionIcon className="h-10 w-16" />
            <p className="font-display text-2xl text-[color:var(--forest-900)]">{company.name}</p>
          </div>
          <p className="mt-2 text-sm text-[color:var(--forest-800)]">
            Sustainable landscaping, thoughtful design, and dependable maintenance.
          </p>
          <div className="mt-4 space-y-2 text-sm text-[color:var(--forest-800)]">
            <p>{company.address}</p>
            <p>{company.phone}</p>
            <p>{company.email}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-700/70">Connect</p>
          <div className="flex flex-wrap gap-4 font-semibold text-emerald-800">
            <a className="transition hover:text-emerald-900" href={social.facebook}>
              Facebook
            </a>
            <a className="transition hover:text-emerald-900" href={social.instagram}>
              Instagram
            </a>
            <a className="transition hover:text-emerald-900" href={social.linkedin}>
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-[color:var(--forest-800)]">
            Copyright {currentYear} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
