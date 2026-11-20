import { ArrowUp } from 'lucide-react'
import { navLinks, site } from '../data/site'
import Logo from './Logo'
import SocialLinks from './SocialLinks'
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12 dark:border-white/10">
      <div className="wrap flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs space-y-3">
          <Logo />
          <p className="muted text-sm">{site.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((l) => <li key={l.href}><a href={l.href} className="muted hover:text-accent">{l.label}</a></li>)}
        </ul>
        <SocialLinks />
      </div>
      <div className="wrap mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-sm dark:border-white/10">
        <p className="muted">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <a href="#home" className="flex items-center gap-1 font-medium hover:text-accent">Back to top <ArrowUp size={14} /></a>
      </div>
    </footer>
  )
}
