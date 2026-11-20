import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/site'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import Button from './Button'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setOpen(false)
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'border-b border-slate-200 bg-white/85 backdrop-blur-lg dark:border-white/10 dark:bg-[#0a0b10]/85' : ''}`}>
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Main navigation">
        <Logo />
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="text-sm font-medium muted transition hover:text-accent">{l.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button href="#contact" className="hidden !py-2.5 sm:inline-flex">Let's Talk</Button>
          <button className="card flex h-10 w-10 items-center justify-center lg:hidden" onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? 'x' : 'm'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
            <ul className="wrap flex flex-col gap-1 pb-5">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} onClick={close} className="block rounded-lg px-3 py-3 font-medium hover:bg-slate-100 hover:text-accent dark:hover:bg-white/5">{l.label}</a></li>
              ))}
              <li className="pt-2"><Button href="#contact" onClick={close} className="w-full">Let's Talk</Button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
