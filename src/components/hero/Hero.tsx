import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react'

const stats = [
  { label: 'Proyek Selesai', value: 850, suffix: '+' },
  { label: 'Pelanggan Puas', value: 1200, suffix: '+' },
  { label: 'Jenis Produk', value: 40, suffix: '+' },
  { label: 'Cabang', value: 6, suffix: '' },
]

// Komponen count-up ringan buatan sendiri — menggantikan react-countup
// (menghindari masalah interop CJS/ESM yang bikin error "Element type is invalid")
function CountUpNumber({
  end,
  duration = 2,
  suffix = '',
  start,
}: {
  end: number
  duration?: number
  suffix?: string
  start: boolean
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    let frameId: number

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      // easeOutExpo biar terasa mirip react-countup
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Math.floor(eased * end))

      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      } else {
        setValue(end)
      }
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [start, end, duration])

  return (
    <>
      {value}
      {suffix}
    </>
  )
}

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1600&auto=format&fit=crop"
          alt="Interior modern dengan wallpanel premium"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 dark:from-[#0F1B19] dark:via-[#0F1B19]/90 dark:to-[#0F1B19]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#0F1B19]" />
      </div>

      {/* Floating decorative blobs */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 right-10 -z-10 h-64 w-64 rounded-full bg-turquoise/25 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-1/3 -z-10 h-48 w-48 rounded-full bg-brass/20 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald dark:text-turquoise-light"
          >
            <MapPin size={13} /> Melayani Tasikmalaya &amp; Garut
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl font-bold leading-[1.1] text-ink dark:text-white sm:text-5xl lg:text-6xl"
          >
            Ubah Interior Anda Menjadi <span className="text-gradient">Sesuatu yang Luar Biasa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-ink/70 dark:text-white/70 sm:text-lg"
          >
            Solusi lengkap material interior premium — wall panel, lantai, plafon, dan dekorasi modern untuk hunian maupun ruang komersial Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/#products"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald/25 transition hover:bg-turquoise-dark"
            >
              Jelajahi Produk <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="/#branches"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-emerald transition hover:bg-white dark:text-white"
            >
              Kunjungi Showroom
            </a>
          </motion.div>

          <div className="mt-4">
            <div className="swatch-strip w-56">
              <span className="swatch-turquoise" /><span className="swatch-emerald" /><span className="swatch-brass" /><span className="swatch-wood" /><span className="swatch-marble" />
            </div>
          </div>

          <div ref={ref} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-2xl font-bold text-emerald dark:text-turquoise-light sm:text-3xl">
                  <CountUpNumber end={s.value} duration={2} suffix={s.suffix} start={inView} />
                </p>
                <p className="mt-1 text-xs text-ink/60 dark:text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.a
        href="#products"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-emerald/60 dark:text-white/50"
        aria-label="Scroll ke bawah"
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  )
}