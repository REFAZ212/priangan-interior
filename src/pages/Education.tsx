import { useMemo, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Search, Clock, ArrowUpRight } from 'lucide-react'
import { educationArticles } from '../data/content'

export default function Education() {
  const [query, setQuery] = useState('')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  const filtered = useMemo(
    () => educationArticles.filter((a) => a.title.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase())),
    [query]
  )

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 dark:bg-[#0F1B19]">
      <motion.div style={{ scaleX: progress }} className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald to-turquoise" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-turquoise/10 px-3 py-1 text-xs font-semibold text-turquoise-dark">Interior Education</span>
          <h1 className="font-heading text-3xl font-bold text-ink dark:text-white sm:text-4xl">Belajar Lebih Dalam Tentang Interior</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink/60 dark:text-white/60 sm:text-base">
            Panduan, tips, dan tren material interior dari tim ahli Priangan Interior Mart.
          </p>
        </div>

        <div className="relative mx-auto mb-12 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" size={17} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari topik edukasi..."
            className="w-full rounded-full border border-ink/10 bg-sand py-3.5 pl-11 pr-4 text-sm outline-none focus:border-turquoise dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-3xl bg-sand shadow-sm shadow-ink/5 dark:bg-white/5"
            >
              <div className="h-44 overflow-hidden">
                <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-semibold text-turquoise-dark">{a.category}</span>
                  <span className="flex items-center gap-1 text-ink/50 dark:text-white/50"><Clock size={12} />{a.readTime}</span>
                </div>
                <h3 className="font-heading text-base font-semibold text-ink dark:text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-white/60">{a.excerpt}</p>
                <a href="/#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald dark:text-turquoise-light">
                  Baca Selengkapnya <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
          {filtered.length === 0 && <p className="col-span-full py-12 text-center text-sm text-ink/50">Artikel tidak ditemukan.</p>}
        </div>
      </div>
    </main>
  )
}
