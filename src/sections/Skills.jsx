import skillGroups from '../data/skills'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHeading title="Skills" subtitle="The technologies and tools I use to build modern web applications." />
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, items }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="card card-hover h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent"><Icon size={20} /></span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">{items.map((s) => <li key={s} className="badge">{s}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
