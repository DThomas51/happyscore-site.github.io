function PricingToggle({ annual, onToggle }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '8px 10px',
        borderRadius: '999px',
        border: '1px solid var(--border)',
        background: 'color-mix(in srgb, var(--surface) 80%, transparent)',
      }}
    >
      <span style={{ fontWeight: annual ? 600 : 800 }}>Mensuel</span>
      <button
        type="button"
        aria-label="Basculer mensualité"
        onClick={onToggle}
        style={{
          width: 52,
          height: 30,
          borderRadius: 999,
          border: '1px solid var(--border-strong)',
          background: annual ? 'var(--primary)' : 'var(--bg-strong)',
          position: 'relative',
          cursor: 'pointer',
          transition: 'background 200ms ease',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 4,
            left: annual ? 26 : 4,
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#fff',
            boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
            transition: 'left 200ms ease',
          }}
        />
      </button>
      <span style={{ fontWeight: annual ? 800 : 600 }}>Annuel</span>
      <span className="badge" style={{ background: 'rgba(255,216,77,0.25)' }}>
        -15%
      </span>
    </div>
  )
}

export default PricingToggle
