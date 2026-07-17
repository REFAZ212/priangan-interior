import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Search } from 'lucide-react'
import logo from '../../assets/logo.jpg'
import { useDarkMode } from '../../hooks/useDarkMode'

const links = [
  { label: 'Home', to: '/#home' },
  { label: 'Produk', to: '/#products' },
  { label: 'Galeri', to: '/#gallery' },
  { label: 'Cabang', to: '/#branches' },
  { label: 'Edukasi', to: '/education' },
  { label: 'Tentang', to: '/#about' },
  { label: 'Kontak', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { isDark, toggle } = useDarkMode()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled ? 'glass shadow-lg shadow-emerald/5' : 'bg-transparent'
        }`}
      >
        <a href="/#home" className="flex items-center gap-2.5">
          <img src={logo} alt="Priangan Interior Mart" className="h-9 w-9 rounded-xl object-cover sm:h-10 sm:w-10" />
          <div className="leading-tight">
            <p className="font-heading text-sm font-bold text-emerald dark:text-turquoise-light sm:text-base">Priangan</p>
            <p className="-mt-0.5 text-[10px] font-medium tracking-wide text-ink/60 dark:text-white/60 sm:text-xs">INTERIOR MART</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-turquoise/10 hover:text-emerald dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-turquoise-light"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            aria-label="Cari produk"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-ink/70 transition hover:bg-turquoise/10 hover:text-emerald dark:text-white/70 dark:hover:bg-white/10 sm:flex"
          >
            <Search size={17} />
          </button>
          <button
            aria-label="Ganti tema"
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink/70 transition hover:bg-turquoise/10 hover:text-emerald dark:text-white/70 dark:hover:bg-white/10"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="/#contact"
            className="hidden rounded-full bg-emerald px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald/20 transition hover:bg-turquoise hover:shadow-turquoise/30 md:inline-block"
          >
            Konsultasi
          </a>
          <button
            aria-label="Buka menu"
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink/70 hover:bg-turquoise/10 dark:text-white/70 lg:hidden"
          >
            <Menu size={19} />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-emerald/95 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="ml-auto flex h-full w-4/5 max-w-sm flex-col gap-2 bg-white p-6 dark:bg-[#122320]"
            >
              <div className="mb-6 flex items-center justify-between">
                <img src={logo} alt="Priangan Interior Mart" className="h-9 w-9 rounded-xl object-cover" />
                <button onClick={() => setOpen(false)} aria-label="Tutup menu" className="rounded-full p-2 hover:bg-turquoise/10">
                  <X size={20} />
                </button>
              </div>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-turquoise/10 hover:text-emerald dark:text-white dark:hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-emerald px-4 py-3 text-center font-semibold text-white"
              >
                Konsultasi Gratis
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
