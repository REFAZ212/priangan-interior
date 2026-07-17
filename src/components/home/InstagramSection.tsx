import { motion } from 'framer-motion'
import { InstagramIcon } from '../ui/BrandIcons'
import { SectionHeading } from './ProductCategories'

const posts = [
  { img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=500&auto=format&fit=crop', label: 'Product Highlight' },
  { img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=500&auto=format&fit=crop', label: 'Installation Process' },
  { img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=500&auto=format&fit=crop', label: 'Customer Project' },
  { img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=500&auto=format&fit=crop', label: 'Interior Tips' },
  { img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=500&auto=format&fit=crop', label: 'New Product' },
  { img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop', label: 'Before & After' },
]

export default function InstagramSection() {
  return (
    <section className="relative bg-white py-24 dark:bg-[#0F1B19]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Ikuti Kami" title="@priangan.interiormart" description="Inspirasi, tips, dan promo interior terbaru setiap harinya." />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img src={p.img} alt={p.label} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-emerald/80 opacity-0 transition group-hover:opacity-100">
                <InstagramIcon size={20} className="text-white" />
                <span className="px-2 text-center text-[11px] font-medium text-white">{p.label}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
