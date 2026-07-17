import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, LayoutGrid } from 'lucide-react'
import { products, productCategories } from '../../data/products'

export default function ProductCategories() {
  const [active, setActive] = useState<string>('Semua')
  const filtered = active === 'Semua' ? products : products.filter((p) => p.category === active)

  return (
    <section id="products" className="relative bg-sand py-24 dark:bg-[#10201d]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Kategori Produk"
          title="Material Interior Pilihan untuk Setiap Ruang"
          description="Dari dinding hingga lantai, temukan material premium yang sesuai karakter ruang Anda."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {['Semua', ...productCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === cat
                  ? 'bg-emerald text-white shadow-md shadow-emerald/25'
                  : 'bg-white text-ink/70 hover:bg-turquoise/10 dark:bg-white/5 dark:text-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm shadow-ink/5 dark:bg-white/5"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald/70 via-emerald/0 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-emerald shadow">
                  <LayoutGrid size={16} />
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-turquoise-dark">{p.category}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-ink dark:text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-white/60">{p.description}</p>
                <a href="/#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition group-hover:gap-2.5 dark:text-turquoise-light">
                  Selengkapnya <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, light }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${light ? 'bg-white/10 text-turquoise-light' : 'bg-turquoise/10 text-turquoise-dark'}`}>
        {eyebrow}
      </span>
      <h2 className={`font-heading text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-ink dark:text-white'}`}>{title}</h2>
      {description && <p className={`mx-auto mt-4 max-w-xl text-sm sm:text-base ${light ? 'text-white/70' : 'text-ink/60 dark:text-white/60'}`}>{description}</p>}
    </motion.div>
  )
}
