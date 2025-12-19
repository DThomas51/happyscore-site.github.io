function ScoreboardMock({ variant = 'default' }) {
  const compact = variant === 'compact'
  return (
    <div
      className="card card-glass shadow-strong"
      style={{
        padding: compact ? '18px' : '22px',
        minWidth: compact ? 'auto' : '320px',
        background:
          'linear-gradient(140deg, rgba(0,63,95,0.08), rgba(255,216,77,0.08)), var(--surface-glass)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
          gap: 12,
        }}
      >
        <span className="badge" style={{ background: 'rgba(255,216,77,0.2)' }}>
          Court central
        </span>
        <span className="badge" style={{ color: '#10b981', borderColor: 'rgba(16,185,129,0.35)' }}>
          Live
        </span>
      </div>
      {['C. Martin', 'L. Dupont'].map((player, idx) => (
        <div
          key={player}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto auto',
            gap: 12,
            alignItems: 'center',
            padding: '12px 0',
            borderBottom: idx === 0 ? '1px solid var(--border)' : 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: idx === 0 ? 'var(--accent)' : 'var(--muted)',
                boxShadow:
                  idx === 0
                    ? '0 0 0 8px rgba(255,216,77,0.28)'
                    : '0 0 0 8px rgba(92,106,122,0.18)',
              }}
            />
            <div>
              <p style={{ margin: 0, fontWeight: 800 }}>{player}</p>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: 'var(--text-sm)' }}>
                {idx === 0 ? 'Club Azur' : 'Riviera TC'}
              </p>
            </div>
          </div>
          <div style={{ display: 'inline-flex', gap: 8 }}>
            {[6, 6, 3].map((set, sIdx) => (
              <span
                key={`${player}-${sIdx}`}
                style={{
                  minWidth: 36,
                  textAlign: 'center',
                  padding: '8px 10px',
                  borderRadius: 12,
                  border: '1px solid var(--border)',
                  background: idx === 0 && sIdx < 2 ? 'var(--accent)' : 'var(--surface)',
                  color: idx === 0 && sIdx < 2 ? '#0f1b2c' : 'var(--text)',
                  fontWeight: 800,
                  fontSize: 'var(--text-sm)',
                }}
              >
                {set}
              </span>
            ))}
          </div>
          <div style={{ fontWeight: 900, color: idx === 0 ? 'var(--primary)' : 'var(--muted)' }}>
            {idx === 0 ? '40' : '30'}
          </div>
        </div>
      ))}
      <div
        style={{
          marginTop: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ width: 160, height: 8, background: 'var(--bg-strong)', borderRadius: 999 }}>
          <div
            style={{
              width: '72%',
              height: '100%',
              borderRadius: 999,
              background: `linear-gradient(90deg, var(--primary), #0a6a93)`,
            }}
          />
        </div>
        <span className="pill">Pro / Amateur</span>
      </div>
    </div>
  )
}

export default ScoreboardMock
