import { Layers, Puzzle, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
const points = [
  { icon: Layers, title: 'My approach', text: 'I start from the user and the layout, build reusable React components, and keep state simple and predictable.' },
  { icon: Puzzle, title: 'Real-world problems', text: 'I enjoy turning real needs into interfaces that are clear, fast and easy to use.' },
  { icon: Sparkles, title: 'Clean, maintainable code', text: 'I write readable code with a clear structure, so projects stay easy to extend.' },
]
export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHeading title="About Me" />
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="space-y-4 lg:col-span-2">
            <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-200">I'm Sajjad, a React.js frontend developer focused on building responsive interfaces and interactive applications.</p>
            <p className="muted leading-relaxed">I care about reusable components, user-friendly experiences and code that other developers can read and maintain. I'm available for freelance work and happy to discuss your project.</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-3">
            {points.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="card h-full p-5">
                  <Icon className="text-accent" size={22} />
                  <h3 className="mt-3 font-semibold">{title}</h3>
                  <p className="muted mt-2 text-sm leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
