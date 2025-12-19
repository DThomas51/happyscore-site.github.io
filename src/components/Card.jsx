function Card({ children, className = '', glass, ...props }) {
  const classes = ['card', glass ? 'card-glass' : '', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
