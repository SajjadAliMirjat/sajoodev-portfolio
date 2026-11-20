import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
export default function ScrollToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-soft text-white shadow-lg shadow-accent/30 transition hover:scale-105">
      <ArrowUp size={20} />
    </button>
  )
}
