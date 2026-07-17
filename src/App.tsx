import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import BackToTop from './components/layout/BackToTop'
import ScrollProgress from './components/layout/ScrollProgress'
import LoadingScreen from './components/layout/LoadingScreen'
import { useLenis } from './hooks/useLenis'

const Home = lazy(() => import('./pages/Home'))
const Education = lazy(() => import('./pages/Education'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

export default function App() {
  useLenis()

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-sm text-ink/40">Memuat...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
