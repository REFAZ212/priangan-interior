import { Mail, MapPin, Phone } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '../ui/BrandIcons'
import logo from '../../assets/logo.jpg'

export default function Footer() {
  return (
    <footer id="contact-footer" className="relative bg-emerald text-white">
      <div className="swatch-strip">
        <span className="swatch-turquoise" /><span className="swatch-brass" /><span className="swatch-wood" /><span className="swatch-marble" /><span className="swatch-emerald" /><span className="swatch-panel" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <img src={logo} alt="Priangan Interior Mart" className="h-11 w-11 rounded-xl object-cover" />
            <div>
              <p className="font-heading text-lg font-bold">Priangan</p>
              <p className="-mt-1 text-xs tracking-wide text-white/60">INTERIOR MART</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            One-stop solution material interior premium — wall panel, flooring, plafon, dan dekorasi untuk ruang yang luar biasa.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-turquoise hover:text-emerald"><InstagramIcon size={16} /></a>
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-turquoise hover:text-emerald"><FacebookIcon size={16} /></a>
            <a href="mailto:info@prianganinteriormart.com" aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-turquoise hover:text-emerald"><Mail size={16} /></a>
          </div>
        </div>

        <div>
          <p className="mb-4 font-heading text-sm font-semibold tracking-wide text-turquoise-light">PRODUK</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="/#products" className="hover:text-white">Wallpanel</a></li>
            <li><a href="/#products" className="hover:text-white">UV Marble</a></li>
            <li><a href="/#products" className="hover:text-white">Vinyl & SPC Flooring</a></li>
            <li><a href="/#products" className="hover:text-white">Plafon PVC</a></li>
            <li><a href="/#products" className="hover:text-white">Dekorasi Interior</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-heading text-sm font-semibold tracking-wide text-turquoise-light">LAYANAN</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="/#services" className="hover:text-white">Konsultasi Interior</a></li>
            <li><a href="/#services" className="hover:text-white">Survei Lokasi</a></li>
            <li><a href="/#services" className="hover:text-white">Instalasi</a></li>
            <li><a href="/#services" className="hover:text-white">Pengiriman Produk</a></li>
            <li><a href="/education" className="hover:text-white">Edukasi Interior</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-heading text-sm font-semibold tracking-wide text-turquoise-light">HUBUNGI KAMI</p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-turquoise-light" /> Tasikmalaya & Garut, Jawa Barat</li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-turquoise-light" /> +62 812-3456-0000</li>
          </ul>
          <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
            <p className="mb-2 text-xs text-white/60">Dapatkan tips &amp; promo interior</p>
            <div className="flex overflow-hidden rounded-full bg-white/10">
              <input type="email" required placeholder="Email Anda" className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none" />
              <button type="submit" className="shrink-0 bg-turquoise px-4 text-sm font-semibold text-emerald transition hover:bg-white">Kirim</button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Priangan Interior Mart. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  )
}
