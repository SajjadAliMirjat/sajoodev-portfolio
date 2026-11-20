import { services } from '../data/services'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <SectionHeading title="Services" subtitle="How I can help you ship a better frontend." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.07}>
              <div className="card card-hover group h-full p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white"><Icon size={22} /></span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
