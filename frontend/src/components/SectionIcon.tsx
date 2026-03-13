import logo from "../assets/Sardo's garden icon.avif"

type SectionIconProps = {
  className?: string
  imgClassName?: string
}

export default function SectionIcon({ className, imgClassName }: SectionIconProps) {
  const baseClass =
    'h-9 w-14 overflow-hidden rounded-md bg-white/90 ring-1 ring-emerald-200/70 shadow-sm'
  const imageClass = 'h-full w-full object-contain p-1'

  return (
    <span className={className ? `${baseClass} ${className}` : baseClass}>
      <img
        src={logo}
        alt="Sardo's Garden icon"
        className={imgClassName ? `${imageClass} ${imgClassName}` : imageClass}
        loading="lazy"
        decoding="async"
      />
    </span>
  )
}
