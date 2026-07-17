export interface GalleryItem {
  id: string
  category: string
  title: string
  image: string
  height: 'sm' | 'md' | 'lg'
}

export const galleryCategories = [
  'Semua', 'Living Room', 'Bedroom', 'Kitchen', 'Cafe', 'Restaurant', 'Office', 'Hotel', 'Commercial',
]

export const galleryItems: GalleryItem[] = [
  { id: 'g1', category: 'Living Room', title: 'Ruang Tamu Wallpanel Turquoise', image: 'https://images.unsplash.com/photo-1618219878830-89b0deacf278?q=80&w=800&auto=format&fit=crop', height: 'lg' },
  { id: 'g2', category: 'Bedroom', title: 'Kamar Tidur UV Marble', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop', height: 'md' },
  { id: 'g3', category: 'Kitchen', title: 'Dapur SPC Flooring', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop', height: 'sm' },
  { id: 'g4', category: 'Cafe', title: 'Cafe Bamboo Board', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop', height: 'lg' },
  { id: 'g5', category: 'Restaurant', title: 'Restoran Plafon PVC', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop', height: 'md' },
  { id: 'g6', category: 'Office', title: 'Kantor Kisi-kisi Modern', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', height: 'sm' },
  { id: 'g7', category: 'Hotel', title: 'Lobi Hotel Sandblast', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop', height: 'md' },
  { id: 'g8', category: 'Commercial', title: 'Showroom Vinyl Flooring', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop', height: 'lg' },
  { id: 'g9', category: 'Living Room', title: 'Ruang Keluarga Aksen Kayu', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop', height: 'md' },
  { id: 'g10', category: 'Bedroom', title: 'Kamar Anak Wallboard', image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=800&auto=format&fit=crop', height: 'sm' },
  { id: 'g11', category: 'Kitchen', title: 'Dapur Minimalis Modern', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop', height: 'md' },
  { id: 'g12', category: 'Commercial', title: 'Area Retail Interior Accessories', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop', height: 'lg' },
]

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  rating: number
  image: string
}

export const testimonials: Testimonial[] = [
  { id: 't1', name: 'Andi Firmansyah', role: 'Pemilik Cafe, Tasikmalaya', quote: 'Hasil pemasangan wallpanel-nya rapi sekali, tim survei dan instalasinya sangat profesional.', rating: 5, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop' },
  { id: 't2', name: 'Rina Amalia', role: 'Pemilik Rumah, Garut', quote: 'Konsultasi desainnya membantu banget menentukan material yang cocok untuk rumah minimalis kami.', rating: 5, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
  { id: 't3', name: 'Budi Santoso', role: 'Kontraktor Interior', quote: 'Stok produknya lengkap dan pengiriman selalu tepat waktu ke lokasi proyek.', rating: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  { id: 't4', name: 'Sri Wahyuni', role: 'Manajer Hotel, Tasikmalaya', quote: 'Plafon PVC dan kisi-kisi yang dipasang membuat lobi hotel kami terasa jauh lebih modern.', rating: 5, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' },
]

export interface FaqItem { id: string; question: string; answer: string; category: string }

export const faqItems: FaqItem[] = [
  { id: 'f1', category: 'Produk', question: 'Apa perbedaan SPC Flooring dan Vinyl Flooring?', answer: 'SPC Flooring memiliki inti solid polymer core yang 100% tahan air dan lebih kokoh, cocok untuk area lalu lintas tinggi. Vinyl Flooring lebih fleksibel dan lembut di kaki, cocok untuk ruang keluarga dan kamar tidur.' },
  { id: 'f2', category: 'Produk', question: 'Apakah Wallpanel tahan terhadap kelembapan?', answer: 'Ya, wallpanel dari Priangan Interior Mart menggunakan material yang diformulasikan tahan lembap sehingga aman digunakan di daerah beriklim tropis.' },
  { id: 'f3', category: 'Layanan', question: 'Apakah tersedia layanan survei ke lokasi?', answer: 'Tersedia. Tim kami akan melakukan survei lokasi sebelum instalasi untuk memastikan pengukuran dan rekomendasi material yang tepat.' },
  { id: 'f4', category: 'Layanan', question: 'Berapa lama proses instalasi berlangsung?', answer: 'Durasi instalasi tergantung luas area dan jenis material, umumnya 1–5 hari kerja untuk ruangan berukuran standar.' },
  { id: 'f5', category: 'Pembelian', question: 'Apakah bisa konsultasi sebelum membeli produk?', answer: 'Tentu, kami menyediakan layanan konsultasi interior gratis di seluruh cabang untuk membantu Anda memilih material yang sesuai kebutuhan dan anggaran.' },
  { id: 'f6', category: 'Pembelian', question: 'Apakah produk memiliki garansi?', answer: 'Sebagian besar produk kami dilengkapi garansi material sesuai ketentuan pabrikan, tim kami akan menjelaskan detail garansi saat konsultasi.' },
]

export interface EducationArticle {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  image: string
}

export const educationArticles: EducationArticle[] = [
  { id: 'e1', title: 'Cara Memilih Wall Panel yang Tepat untuk Rumah Anda', excerpt: 'Panduan memilih motif, warna, dan jenis material wall panel sesuai gaya interior rumah.', category: 'Wallpanel', readTime: '5 menit', image: 'https://images.unsplash.com/photo-1618219878830-89b0deacf278?q=80&w=700&auto=format&fit=crop' },
  { id: 'e2', title: 'Manfaat UV Marble untuk Interior Premium', excerpt: 'Mengapa UV Marble menjadi pilihan populer untuk tampilan mewah dengan perawatan minim.', category: 'UV Marble', readTime: '4 menit', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=700&auto=format&fit=crop' },
  { id: 'e3', title: 'SPC vs Vinyl: Mana yang Cocok untuk Area Anda?', excerpt: 'Perbandingan ketahanan, harga, dan estetika antara lantai SPC dan Vinyl.', category: 'Flooring', readTime: '6 menit', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=700&auto=format&fit=crop' },
  { id: 'e4', title: 'Material Plafon Terbaik untuk Iklim Tropis', excerpt: 'Rekomendasi material plafon yang tahan lembap dan sejuk untuk hunian di Indonesia.', category: 'Plafon', readTime: '5 menit', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=700&auto=format&fit=crop' },
  { id: 'e5', title: 'Tips Perawatan Interior Agar Awet Bertahun-tahun', excerpt: 'Langkah sederhana merawat wallpanel, lantai, dan plafon agar tetap indah.', category: 'Perawatan', readTime: '4 menit', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=700&auto=format&fit=crop' },
  { id: 'e6', title: 'Tren Interior 2026: Warna Alami dan Tekstur Organik', excerpt: 'Menjelajahi tren desain interior terbaru yang mengedepankan material alami.', category: 'Tren', readTime: '7 menit', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=700&auto=format&fit=crop' },
  { id: 'e7', title: 'Panduan Lengkap Proses Instalasi Interior', excerpt: 'Tahapan instalasi dari survei hingga finishing yang perlu Anda ketahui.', category: 'Instalasi', readTime: '6 menit', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=700&auto=format&fit=crop' },
]
