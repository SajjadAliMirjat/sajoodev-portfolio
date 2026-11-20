import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Image as ImageIcon, Star } from 'lucide-react'
import Button from './Button'

export default function ProjectCard({ project }) {
  const { title, description, image, technologies, category, liveUrl, githubUrl, featured, sample } = project
  const [imgFailed, setImgFailed] = useState(false)
  return (
    <motion.article layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}
      className={`card card-hover group flex flex-col overflow-hidden ${featured ? 'ring-1 ring-accent/40' : ''}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent/20 to-accent-soft/20">
        {image && !imgFailed ? (
          <img src={image} alt={`${title} screenshot`} loading="lazy" onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
            <ImageIcon size={28} /><span className="text-xs">Add a screenshot at {image || '/images/projects/…'}</span>
          </div>
        )}
        <div className="absolute left-3 top-3 flex gap-2">
          {featured && <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-white"><Star size={12} /> Featured</span>}
          {sample && <span className="rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">Sample entry</span>}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold text-accent">{category}</span>
        <h3 className="mt-1 text-xl font-semibold">{title}</h3>
        <p className="muted mt-2 flex-1 text-sm leading-relaxed">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">{technologies.map((t) => <li key={t} className="badge">{t}</li>)}</ul>
        <div className="mt-5 flex gap-3">
          <Button href={liveUrl || undefined} disabled={!liveUrl} className="!px-4 !py-2.5"><ExternalLink size={15} /> Live Demo</Button>
          <Button href={githubUrl || undefined} disabled={!githubUrl} variant="secondary" className="!px-4 !py-2.5"><Github size={15} /> GitHub</Button>
        </div>
      </div>
    </motion.article>
  )
}
