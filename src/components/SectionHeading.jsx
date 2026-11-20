export default function SectionHeading({ title, subtitle, id }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 id={id} className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-soft" />
      {subtitle && <p className="muted mt-4">{subtitle}</p>}
    </div>
  )
}
