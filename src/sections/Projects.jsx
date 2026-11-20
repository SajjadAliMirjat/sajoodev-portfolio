import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import projects from '../data/projects'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import ProjectFilter from '../components/ProjectFilter'

export default function Projects() {
  const [active, setActive] = useState('All')
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [])
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHeading title="Featured Projects" subtitle="A selection of project work. The entries below are samples; replace them in src/data/projects.js." />
        <ProjectFilter categories={categories} active={active} onChange={setActive} />
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => <ProjectCard key={p.id} project={p} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
