function Section({ tone = 'default', className = '', children, id }) {
  const toneClass =
    tone === 'muted' ? 'section-muted' : tone === 'surface' ? 'section-surface' : undefined
  const classes = [toneClass, className].filter(Boolean).join(' ')
  return (
    <section id={id} className={classes}>
      <div className="container">{children}</div>
    </section>
  )
}

export default Section
