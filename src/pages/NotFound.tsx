import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center dark:bg-[#0F1B19]">
      <p className="font-heading text-6xl font-bold text-turquoise">404</p>
      <h1 className="font-heading text-xl font-semibold text-ink dark:text-white">Halaman Tidak Ditemukan</h1>
      <p className="max-w-sm text-sm text-ink/60 dark:text-white/60">Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.</p>
      <Link to="/" className="mt-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-white">Kembali ke Beranda</Link>
    </main>
  )
}
