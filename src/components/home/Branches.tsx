import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, MessageCircle, Navigation } from 'lucide-react'
import { branches } from '../../data/branches'
import { SectionHeading } from './ProductCategories'

export default function Branches() {
  const [city, setCity] = useState<'Semua' | 'Tasikmalaya' | 'Garut'>('Semua')
  const filtered = city === 'Semua' ? branches : branches.filter((b) => b.city === city)

  return (
    <section id="branches" className="relative bg-sand py-24 dark:bg-[#10201d]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Cabang Kami" title="Kunjungi Showroom Terdekat" description="6 cabang siap melayani Anda di Tasikmalaya dan Garut." />

        <div className="mb-10 flex justify-center gap-2">
          {(['Semua', 'Tasikmalaya', 'Garut'] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                city === c ? 'bg-emerald text-white' : 'bg-white text-ink/70 hover:bg-turquoise/10 dark:bg-white/5 dark:text-white/70'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="overflow-hidden rounded-3xl bg-white shadow-sm shadow-ink/5 dark:bg-white/5"
            >
              <div className="h-40 overflow-hidden">
                <img src={b.image} alt={b.name} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-turquoise/10 px-2.5 py-0.5 text-[11px] font-semibold text-turquoise-dark">{b.city}</span>
                <h3 className="font-heading text-base font-semibold text-ink dark:text-white">{b.name}</h3>
                <p className="mt-3 flex items-start gap-2 text-xs text-ink/60 dark:text-white/60"><MapPin size={14} className="mt-0.5 shrink-0" />{b.address}</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-ink/60 dark:text-white/60"><Clock size={14} className="shrink-0" />{b.hours}</p>
                <div className="mt-5 flex gap-2">
                  <a href={b.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-sand py-2 text-xs font-semibold text-emerald dark:bg-white/10 dark:text-turquoise-light">
                    <Navigation size={13} /> Peta
                  </a>
                  <a href={`https://wa.me/${b.phone}`} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366]/10 py-2 text-xs font-semibold text-[#1a9c4d]">
                    <MessageCircle size={13} /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
