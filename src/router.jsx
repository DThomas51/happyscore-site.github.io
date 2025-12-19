import { AnimatePresence, useReducedMotion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produits from './pages/Produits'
import Tarifs from './pages/Tarifs'
import Contact from './pages/Contact'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: 'easeInOut' } },
}

function PageTransition({ children }) {
  const shouldReduce = useReducedMotion()
  if (shouldReduce) return <div>{children}</div>
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

function AppRouter({ theme, onToggleTheme }) {
  const location = useLocation()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/produits"
            element={
              <PageTransition>
                <Produits />
              </PageTransition>
            }
          />
          <Route
            path="/tarifs"
            element={
              <PageTransition>
                <Tarifs />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default AppRouter
