import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import { SectionHeading } from './ProductCategories'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="relative bg-emerald py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Testimoni" title="Apa Kata Pelanggan Kami" light />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="glass h-full rounded-3xl p-7">
                <Quote className="mb-3 text-turquoise-light" size={28} />
                <p className="min-h-[80px] text-sm leading-relaxed text-white/90">{t.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={13} className="fill-brass text-brass" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
