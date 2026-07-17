import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('pim-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('pim-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return { isDark, toggle: () => setIsDark((d) => !d) }
}
