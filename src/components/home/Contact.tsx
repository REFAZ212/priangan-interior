import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone, Send } from 'lucide-react'
import { branches } from '../../data/branches'
import { SectionHeading } from './ProductCategories'

export default function Contact() {
  const [branch, setBranch] = useState(branches[0].id)
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative bg-white py-24 dark:bg-[#0F1B19]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Konsultasi Gratis" title="Wujudkan Interior Impian Anda" description="" />
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            className="-mt-6 space-y-4 rounded-3xl border border-ink/5 bg-sand p-7 dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Nama Lengkap" className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-turquoise dark:border-white/10 dark:bg-white/5 dark:text-white" />
              <input required type="tel" placeholder="No. WhatsApp" className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-turquoise dark:border-white/10 dark:bg-white/5 dark:text-white" />
            </div>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-turquoise dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {branches.map((b) => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
            <textarea required placeholder="Ceritakan kebutuhan interior Anda..." rows={4} className="w-full resize-none rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-turquoise dark:border-white/10 dark:bg-white/5 dark:text-white" />
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald py-3.5 text-sm font-semibold text-white transition hover:bg-turquoise-dark">
              <Send size={16} /> {sent ? 'Terkirim!' : 'Kirim Permintaan Konsultasi'}
            </button>
            {sent && <p className="text-center text-xs text-success">Terima kasih! Tim kami akan segera menghubungi Anda.</p>}
          </motion.form>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <a href="tel:+6281234560000" className="rounded-xl bg-sand py-3 text-xs font-semibold text-ink/70 dark:bg-white/5 dark:text-white/70"><Phone className="mx-auto mb-1" size={16} />Telepon</a>
            <a href="https://wa.me/6281234560000" className="rounded-xl bg-sand py-3 text-xs font-semibold text-ink/70 dark:bg-white/5 dark:text-white/70"><MessageCircle className="mx-auto mb-1" size={16} />WhatsApp</a>
            <a href="mailto:info@prianganinteriormart.com" className="rounded-xl bg-sand py-3 text-xs font-semibold text-ink/70 dark:bg-white/5 dark:text-white/70"><Mail className="mx-auto mb-1" size={16} />Email</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
        >
          <iframe
            title="Peta Lokasi Priangan Interior Mart"
            src="https://maps.google.com/maps?q=Tasikmalaya&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
