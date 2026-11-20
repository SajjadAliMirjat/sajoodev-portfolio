import { processSteps } from '../data/services'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
export default function Process() {
  return (
    <section id="process" className="section">
      <div className="wrap">
        <SectionHeading title="My Work Process" subtitle="A simple, transparent five-step workflow." />
        <ol className="relative grid gap-6 md:grid-cols-5">
          <div aria-hidden="true" className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-accent via-accent-soft to-accent-cyan opacity-40 md:block" />
          {processSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <li className="relative flex gap-4 md:block">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-soft font-display font-bold text-white">{i + 1}</span>
                <div className="md:mt-5">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="muted mt-1 text-sm leading-relaxed">{s.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
