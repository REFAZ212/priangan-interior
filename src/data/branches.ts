export interface Branch {
  id: string
  name: string
  city: 'Tasikmalaya' | 'Garut'
  address: string
  hours: string
  phone: string
  mapsUrl: string
  image: string
}

export const branches: Branch[] = [
  {
    id: 'hz-mustofa',
    name: 'Priangan Interior Mart — HZ Mustofa',
    city: 'Tasikmalaya',
    address: 'Jl. HZ Mustofa, Tasikmalaya, Jawa Barat',
    hours: 'Senin – Minggu, 08.00 – 17.00',
    phone: '6281234560001',
    mapsUrl: 'https://maps.google.com/?q=Jl.+HZ+Mustofa+Tasikmalaya',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'mitrabatik',
    name: 'Priangan Interior Mart — Mitrabatik',
    city: 'Tasikmalaya',
    address: 'Jl. Mitrabatik, Tasikmalaya, Jawa Barat',
    hours: 'Senin – Minggu, 08.00 – 17.00',
    phone: '6281234560002',
    mapsUrl: 'https://maps.google.com/?q=Jl.+Mitrabatik+Tasikmalaya',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 're-martadinata',
    name: 'Priangan Interior Mart — RE Martadinata',
    city: 'Tasikmalaya',
    address: 'Jl. RE Martadinata, Tasikmalaya, Jawa Barat',
    hours: 'Senin – Minggu, 08.00 – 17.00',
    phone: '6281234560003',
    mapsUrl: 'https://maps.google.com/?q=Jl.+RE+Martadinata+Tasikmalaya',
    image: 'https://images.unsplash.com/photo-1600566752229-450c6be2ce9a?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'nagarawangi',
    name: 'Priangan Interior Mart — Nagarawangi',
    city: 'Tasikmalaya',
    address: 'Jl. Nagarawangi, Tasikmalaya, Jawa Barat',
    hours: 'Senin – Minggu, 08.00 – 17.00',
    phone: '6281234560004',
    mapsUrl: 'https://maps.google.com/?q=Nagarawangi+Tasikmalaya',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'cikuray',
    name: 'Priangan Interior Mart — Cikuray',
    city: 'Garut',
    address: 'Jl. Cikuray, Garut, Jawa Barat',
    hours: 'Senin – Minggu, 08.00 – 17.00',
    phone: '6281234560005',
    mapsUrl: 'https://maps.google.com/?q=Jl.+Cikuray+Garut',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'garut-kota',
    name: 'Priangan Interior Mart — Garut Kota',
    city: 'Garut',
    address: 'Pusat Kota Garut, Jawa Barat',
    hours: 'Senin – Minggu, 08.00 – 17.00',
    phone: '6281234560006',
    mapsUrl: 'https://maps.google.com/?q=Garut+Kota',
    image: 'https://images.unsplash.com/photo-1600566752734-2a0cd53d92d1?q=80&w=900&auto=format&fit=crop',
  },
]
