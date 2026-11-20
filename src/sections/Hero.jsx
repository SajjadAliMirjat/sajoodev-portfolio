import { useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="wrap grid items-center gap-14 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
          <p className="badge inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative h-2 w-2 rounded-full bg-emerald-500" /></span>
            Available for Freelance Projects
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Hi, I'm {site.firstName}.</h1>
          <p className="mt-3 bg-gradient-to-r from-accent via-accent-soft to-accent-cyan bg-clip-text font-display text-xl font-semibold text-transparent sm:text-2xl">{site.title}</p>
          <p className="muted mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
            I build modern, responsive and user-friendly web applications using React.js and modern frontend technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="secondary">Contact Me</Button>
          </div>
          <div className="mt-8"><SocialLinks /></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="order-1 mx-auto w-full max-w-xs sm:max-w-sm lg:order-2">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent via-accent-soft to-accent-cyan opacity-40 blur-2xl" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-accent via-accent-soft to-accent-cyan p-[2px]">
              <div className="aspect-[4/5] overflow-hidden rounded-[calc(2rem-2px)] bg-slate-100 dark:bg-[#12131a]">
                {photoFailed ? (
                  <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                    <span className="font-display text-7xl font-bold text-accent">S</span>
                    <span className="muted px-6 text-xs">Add your photo at public{site.profileImage}</span>
                  </div>
                ) : (
                  <img src={site.profileImage} alt={`Portrait of ${site.firstName}`} onError={() => setPhotoFailed(true)} className="h-full w-full object-cover" fetchpriority="high" />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
