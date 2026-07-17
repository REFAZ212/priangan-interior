import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { galleryCategories, galleryItems } from '../../data/content'
import { SectionHeading } from './ProductCategories'

const heightClass = { sm: 'h-56', md: 'h-72', lg: 'h-96' } as const

export default function Gallery() {
  const [active, setActive] = useState('Semua')
  const [lightbox, setLightbox] = useState<string | null>(null)
  const filtered = active === 'Semua' ? galleryItems : galleryItems.filter((g) => g.category === active)
  const current = galleryItems.find((g) => g.id === lightbox)

  return (
    <section id="gallery" className="relative bg-white py-24 dark:bg-[#0F1B19]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Inspirasi Interior"
          title="Featured Interior Inspiration"
          description="Jelajahi ragam gaya interior yang telah kami wujudkan bersama pelanggan."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition sm:text-sm ${
                active === cat ? 'bg-emerald text-white' : 'bg-sand text-ink/70 hover:bg-turquoise/10 dark:bg-white/5 dark:text-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((g, i) => (
            <motion.button
              key={g.id}
              onClick={() => setLightbox(g.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`group relative block w-full overflow-hidden rounded-3xl ${heightClass[g.height]}`}
            >
              <img src={g.image} alt={g.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-emerald/85 via-emerald/10 to-transparent p-5 opacity-0 transition group-hover:opacity-100">
                <span className="mb-1 text-xs font-semibold text-turquoise-light">{g.category}</span>
                <span className="text-left font-heading text-sm font-semibold text-white">{g.title}</span>
              </div>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-emerald opacity-0 transition group-hover:opacity-100">
                <ZoomIn size={14} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-6"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={current.image}
              alt={current.title}
              className="max-h-[85vh] max-w-3xl rounded-2xl object-contain"
            />
            <button aria-label="Tutup" className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
