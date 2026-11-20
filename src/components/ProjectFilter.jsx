export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {categories.map((c) => (
        <button key={c} onClick={() => onChange(c)} aria-pressed={active === c}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${active === c
            ? 'bg-gradient-to-r from-accent to-accent-soft text-white'
            : 'border border-slate-300 hover:border-accent hover:text-accent dark:border-white/15'}`}>
          {c}
        </button>
      ))}
    </div>
  )
}
