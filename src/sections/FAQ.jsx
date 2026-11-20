import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import faqs from '../data/faq'
import SectionHeading from '../components/SectionHeading'
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="wrap max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i
            return (
              <div key={f.q} className="card">
                <h3>
                  <button id={`faq-btn-${i}`} aria-expanded={open} aria-controls={`faq-panel-${i}`} onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
                    {f.q}
                    <ChevronDown size={18} className={`shrink-0 text-accent transition ${open ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="muted px-5 pb-5 text-sm leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
