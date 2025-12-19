import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import ThemeToggle from './ThemeToggle'
import logo from '../assets/logo.svg'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/produits', label: 'Produits' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/contact', label: 'Contact' },
]

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className="nav-blur"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        borderBottom: `1px solid ${scrolled ? 'var(--border-strong)' : 'var(--border)'}`,
        background: 'color-mix(in srgb, var(--bg) 82%, transparent)',
        boxShadow: scrolled ? '0 12px 40px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
          gap: 16,
        }}
      >
        <NavLink
          to="/"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
          aria-label="Aller à l’accueil"
        >
          <img src={logo} alt="HappyScore" className="logo-mark" />
        </NavLink>
        <button
          className="btn btn-ghost"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((o) => !o)}
          style={{ display: 'inline-flex', padding: '10px 12px', minWidth: 'auto' }}
        >
          ☰
        </button>
        <nav className="nav-desktop">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => ['pill', 'nav-link', isActive ? 'active' : '']
                .filter(Boolean)
                .join(' ')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button as="a" href="/contact" variant="primary">
            Demander une démo
          </Button>
        </div>
      </div>
      {open && (
        <div
          className="container"
          style={{
            display: 'grid',
            gap: 10,
            paddingBottom: 16,
          }}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => ['pill', 'nav-link', isActive ? 'active' : '']
                .filter(Boolean)
                .join(' ')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
