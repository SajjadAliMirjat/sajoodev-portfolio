import { Sun, Moon } from 'lucide-react'
export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'
  return (
    <button onClick={onToggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="card flex h-10 w-10 items-center justify-center hover:text-accent">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
