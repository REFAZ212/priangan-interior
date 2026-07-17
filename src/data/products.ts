export interface Product {
  id: string
  name: string
  category: string
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: 'wallpanel',
    name: 'Wallpanel',
    category: 'Dinding',
    description: 'Panel dinding premium dengan tekstur alami untuk ruang tamu, kantor, dan cafe.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'wallboard',
    name: 'Wallboard',
    category: 'Dinding',
    description: 'Papan dinding ringan, tahan lembap, dan mudah dipasang untuk berbagai ruangan.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'uv-marble',
    name: 'UV Marble',
    category: 'Dinding',
    description: 'Lapisan motif marmer finishing UV, elegan dengan kilau tahan gores.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bamboo-board',
    name: 'Bamboo Board',
    category: 'Dinding',
    description: 'Papan bambu ramah lingkungan dengan tampilan hangat dan alami.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'plafon-pvc',
    name: 'Plafon PVC',
    category: 'Plafon',
    description: 'Plafon PVC anti rayap, tahan air, dan perawatan mudah untuk hunian modern.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'kisi-kisi',
    name: 'Kisi-kisi',
    category: 'Plafon',
    description: 'Aksen kisi-kisi dekoratif untuk sekat ruangan dan langit-langit bergaya modern.',
    image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'sandblast',
    name: 'Sandblast',
    category: 'Kaca',
    description: 'Kaca sandblast untuk partisi dan pintu dengan tampilan privat dan elegan.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'vinyl-flooring',
    name: 'Vinyl Flooring',
    category: 'Lantai',
    description: 'Lantai vinyl motif kayu dan marmer, nyaman dipijak dan tahan lama.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'spc-flooring',
    name: 'SPC Flooring',
    category: 'Lantai',
    description: 'Lantai SPC anti air 100%, kokoh, dan cocok untuk area komersial.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'indoor-decoration',
    name: 'Indoor Decoration',
    category: 'Dekorasi',
    description: 'Elemen dekorasi interior untuk melengkapi karakter ruang Anda.',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'outdoor-decoration',
    name: 'Outdoor Decoration',
    category: 'Dekorasi',
    description: 'Material dekorasi outdoor tahan cuaca untuk taman dan teras.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'interior-accessories',
    name: 'Interior Accessories',
    category: 'Aksesoris',
    description: 'Aksesoris pelengkap instalasi interior untuk hasil akhir yang rapi.',
    image: 'https://images.unsplash.com/photo-1615529151169-7b1ff50dc773?q=80&w=800&auto=format&fit=crop',
  },
]

export const productCategories = Array.from(new Set(products.map((p) => p.category)))
