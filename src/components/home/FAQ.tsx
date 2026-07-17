import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import { faqItems } from '../../data/content'
import { SectionHeading } from './ProductCategories'

export default function FAQ() {
  const [query, setQuery] = useState('')
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)

  const filtered = useMemo(
    () => faqItems.filter((f) => f.question.toLowerCase().includes(query.toLowerCase()) || f.answer.toLowerCase().includes(query.toLowerCase())),
    [query]
  )

  return (
    <section className="relative bg-sand py-24 dark:bg-[#10201d]">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" />

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" size={17} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari pertanyaan..."
            className="w-full rounded-full border border-ink/10 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-turquoise dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
        </div>

        <div className="space-y-3">
          {filtered.map((f) => {
            const isOpen = openId === f.id
            return (
              <div key={f.id} className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-ink/5 dark:bg-white/5">
                <button
                  onClick={() => setOpenId(isOpen ? null : f.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-heading text-sm font-semibold text-ink dark:text-white">{f.question}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-emerald dark:text-turquoise-light">
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink/60 dark:text-white/60">{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
          {filtered.length === 0 && <p className="py-8 text-center text-sm text-ink/50">Tidak ada pertanyaan yang cocok.</p>}
        </div>
      </div>
    </section>
  )
}
