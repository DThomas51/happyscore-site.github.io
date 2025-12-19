function Button({ as = 'button', href, variant = 'primary', full, className, children, ...props }) {
  const Comp = as === 'a' ? 'a' : 'button'
  const classes = ['btn', `btn-${variant}`, full ? 'full' : '', className].filter(Boolean).join(' ')
  return (
    <Comp href={href} className={classes} {...props}>
      {children}
    </Comp>
  )
}

export default Button
