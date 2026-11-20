import { Github, Linkedin, Briefcase } from 'lucide-react'
import { site } from '../data/site'
const items = [
  { label: 'GitHub', href: site.socials.github, Icon: Github },
  { label: 'LinkedIn', href: site.socials.linkedin, Icon: Linkedin },
  { label: 'Upwork', href: site.socials.upwork, Icon: Briefcase },
]
export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="card card-hover flex h-10 w-10 items-center justify-center hover:text-accent"><Icon size={18} /></a>
        </li>
      ))}
    </ul>
  )
}
