import { CheckCircle2 } from 'lucide-react'
import { reasons } from '../data/services'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
export default function WhyChooseMe() {
  return (
    <section id="why" className="section">
      <div className="wrap">
        <SectionHeading title="Why Work With Me" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.07}>
              <div className="card flex h-full gap-4 p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-accent-cyan" size={22} />
                <div><h3 className="font-semibold">{r.title}</h3><p className="muted mt-1 text-sm leading-relaxed">{r.text}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
