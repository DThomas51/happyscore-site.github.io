import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'color-mix(in srgb, var(--surface) 85%, transparent)',
        padding: 'var(--spacing-10) 0',
        marginTop: 'var(--spacing-12)',
      }}
    >
      <div className="container" style={{ display: 'grid', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <img src={logo} alt="HappyScore" className="logo-mark" />
          <span className="pill">Scoring premium</span>
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <NavLink to="/produits" className="nav-link">
            Produits
          </NavLink>
          <NavLink to="/tarifs" className="nav-link">
            Tarifs
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
        <p className="muted" style={{ fontSize: 'var(--text-sm)' }}>
          © {new Date().getFullYear()} HappyScore — plateforme de scoring moderne pour clubs et
          tournois.
        </p>
      </div>
    </footer>
  )
}

export default Footer
