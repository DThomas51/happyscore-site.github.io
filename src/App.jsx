import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'

const getPreferredTheme = () => {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem('hs-theme')
  if (stored) return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getPreferredTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('hs-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <BrowserRouter basename="/happyscore-site.github.io">
      <AppRouter theme={theme} onToggleTheme={toggleTheme} />
    </BrowserRouter>
  )
}

export default App
