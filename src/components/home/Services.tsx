import { motion } from 'framer-motion'
import { ClipboardList, Ruler, HardHat, PackageCheck, PenTool, HeadphonesIcon } from 'lucide-react'
import { SectionHeading } from './ProductCategories'

const services = [
  { icon: ClipboardList, title: 'Konsultasi', desc: 'Diskusikan kebutuhan interior Anda bersama tim ahli kami.' },
  { icon: Ruler, title: 'Survei Lokasi', desc: 'Pengukuran akurat langsung di lokasi proyek Anda.' },
  { icon: HardHat, title: 'Instalasi', desc: 'Pemasangan oleh tenaga profesional dan berpengalaman.' },
  { icon: PackageCheck, title: 'Pengiriman Produk', desc: 'Distribusi produk tepat waktu ke seluruh lokasi.' },
  { icon: PenTool, title: 'Rekomendasi Desain', desc: 'Saran material dan gaya sesuai konsep ruang Anda.' },
  { icon: HeadphonesIcon, title: 'After Sales Support', desc: 'Dukungan purna jual untuk ketenangan Anda.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 dark:bg-[#0F1B19]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Layanan Kami" title="Dari Konsultasi Hingga Purna Jual" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl border border-ink/5 p-7 transition hover:border-turquoise/50 dark:border-white/10"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-turquoise/10 transition group-hover:scale-150" />
              <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald text-white">
                <s.icon size={20} />
              </span>
              <h3 className="relative font-heading text-lg font-semibold text-ink dark:text-white">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink/60 dark:text-white/60">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
