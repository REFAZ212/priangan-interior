import { motion } from 'framer-motion'
import { Award, Wrench, Wallet, Building2, Truck, MessageSquareText, ShieldCheck } from 'lucide-react'
import { SectionHeading } from './ProductCategories'

const reasons = [
  { icon: Award, title: 'Material Premium', desc: 'Produk pilihan dengan kualitas dan daya tahan terbaik.' },
  { icon: Wrench, title: 'Instalasi Profesional', desc: 'Dikerjakan tim berpengalaman dengan hasil rapi.' },
  { icon: Wallet, title: 'Harga Bersahabat', desc: 'Kualitas premium dengan harga yang kompetitif.' },
  { icon: Building2, title: 'Multi Cabang', desc: '6 cabang di Tasikmalaya & Garut siap melayani.' },
  { icon: Truck, title: 'Pengiriman Cepat', desc: 'Produk sampai tepat waktu ke lokasi proyek.' },
  { icon: MessageSquareText, title: 'Konsultasi Interior', desc: 'Rekomendasi desain sesuai kebutuhan Anda.' },
  { icon: ShieldCheck, title: 'Garansi Produk', desc: 'Ketenangan pikiran dengan garansi resmi.' },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 dark:bg-[#0F1B19]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Kenapa Priangan" title="Alasan Ribuan Pelanggan Mempercayai Kami" />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-ink/5 bg-sand p-6 text-center transition hover:border-turquoise/40 hover:shadow-lg hover:shadow-turquoise/10 dark:border-white/10 dark:bg-white/5"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-turquoise to-emerald text-white">
                <r.icon size={20} />
              </span>
              <h3 className="font-heading text-sm font-semibold text-ink dark:text-white">{r.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/60 dark:text-white/60">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
