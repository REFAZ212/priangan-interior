import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'
import { SectionHeading } from './ProductCategories'

const BEFORE = 'public/before.png'
const AFTER = 'public/after.jpeg'

export default function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }

  return (
    <section className="relative bg-sand py-24 dark:bg-[#10201d]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Hasil Nyata" title="Before &amp; After Installation" description="Geser untuk melihat transformasi ruangan sebelum dan sesudah pemasangan material Priangan." />

        <div
          ref={containerRef}
          onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
          onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX) }}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
          className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl shadow-2xl shadow-ink/10"
        >
          <img src={AFTER} alt="Sesudah pemasangan interior" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img src={BEFORE} alt="Sebelum pemasangan interior" className="h-full w-full object-cover" style={{ width: containerRef.current?.offsetWidth, maxWidth: 'none' }} draggable={false} />
          </div>

          <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white">Sebelum</span>
          <span className="absolute right-4 top-4 rounded-full bg-emerald/90 px-3 py-1 text-xs font-semibold text-white">Sesudah</span>

          <motion.div
            className="absolute top-0 z-10 h-full w-1 cursor-ew-resize bg-white"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-emerald shadow-lg">
              <MoveHorizontal size={18} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
