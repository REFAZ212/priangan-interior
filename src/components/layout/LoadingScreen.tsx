import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/logo.jpg'

export default function LoadingScreen() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-white dark:bg-[#0F1B19]"
        >
          <motion.img
            src={logo}
            alt="Priangan Interior Mart"
            className="h-16 w-16 rounded-2xl object-cover shadow-lg"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <div className="swatch-strip w-40">
            <span className="swatch-turquoise" />
            <span className="swatch-emerald" />
            <span className="swatch-brass" />
            <span className="swatch-wood" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
