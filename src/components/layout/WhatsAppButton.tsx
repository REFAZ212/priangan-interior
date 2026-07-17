import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/6281234560000?text=Halo%20Priangan%20Interior%20Mart%2C%20saya%20ingin%20konsultasi%20interior."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle size={26} className="relative" fill="white" strokeWidth={0} />
    </motion.a>
  )
}
