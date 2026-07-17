# Priangan Interior Mart — Website

Website premium untuk **Priangan Interior Mart**, dibangun dengan React 18, Vite, TypeScript, Tailwind CSS v4, Framer Motion, Lenis smooth scroll, Swiper, React Router DOM, Lucide icons, dan React CountUp.

## Menjalankan proyek

```bash
npm install
npm run dev       # mode pengembangan → http://localhost:5173
npm run build     # build produksi ke folder dist/
npm run preview   # pratinjau hasil build
```

## Struktur proyek

```
src/
├── assets/            logo & aset gambar
├── components/
│   ├── layout/        Navbar, Footer, WhatsApp button, back-to-top, scroll progress, loading screen
│   ├── ui/            ikon kustom (Instagram/Facebook)
│   ├── hero/          Hero section
│   └── home/          semua section halaman utama (produk, galeri, before/after, layanan, cabang, testimoni, FAQ, kontak)
├── pages/             Home, Education, NotFound
├── data/              data produk, cabang, galeri, testimoni, FAQ, artikel edukasi (ganti dengan data asli Anda)
├── hooks/             useLenis (smooth scroll), useDarkMode
└── index.css          token warna & tipografi brand, komponen "swatch-strip" (elemen tanda tangan)
```

## Brand tokens (di `src/index.css` via `@theme`)

| Token | Hex | Kegunaan |
|---|---|---|
| `--color-turquoise` | `#63C8C6` | Warna utama brand |
| `--color-emerald` | `#2F5E57` | Aksen gelap, tombol utama, footer |
| `--color-brass` | `#C9A468` | Aksen premium (bintang, swatch strip) |
| `--color-sand` | `#F8F9FA` | Latar pendukung |
| `--color-ink` | `#1E293B` | Teks gelap |
| `--color-success` | `#31C48D` | Notifikasi sukses |

Font heading: **Poppins** · Font body: **Inter** (dimuat via Google Fonts di `index.html`).

## Yang perlu diganti dengan data asli

- Nomor WhatsApp di `WhatsAppButton.tsx`, `Footer.tsx`, `Contact.tsx`, dan `data/branches.ts`.
- Alamat & koordinat peta tiap cabang di `data/branches.ts`, serta embed Google Maps di `Contact.tsx`.
- Foto produk, galeri, dan testimoni (saat ini memakai foto stok Unsplash sebagai placeholder).
- Akun Instagram di `InstagramSection.tsx`.
- Konten artikel edukasi di `data/content.ts`.

## Fitur yang sudah tersedia

Floating navigation dengan efek blur, dark mode, WhatsApp CTA mengambang, scroll progress bar, loading screen, back-to-top, hero dengan statistik animasi, kategori produk dengan filter, galeri masonry + lightbox + filter kategori, slider perbandingan before/after interaktif, direktori cabang dengan filter kota, testimoni carousel (Swiper, autoplay), FAQ accordion yang bisa dicari, formulir kontak dengan pemilih cabang + peta, halaman edukasi dengan pencarian & reading-progress bar, dan footer lengkap dengan newsletter.

## Catatan performa

Halaman menggunakan `React.lazy` + `Suspense` untuk code-splitting per rute. Gambar memakai `loading="lazy"`. Untuk produksi, disarankan mengganti URL gambar Unsplash dengan aset terkompresi milik sendiri dan mengaktifkan CDN.
