import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

function Reveal({ children, delay = 0, as = 'div', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const shouldReduce = useReducedMotion()
  const Comp = as

  useEffect(() => {
    if (shouldReduce) {
      setVisible(true)
      return
    }
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldReduce])

  return (
    <Comp
      ref={ref}
      className={[
        'reveal',
        visible ? 'is-visible' : '',
        shouldReduce ? 'no-anim' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Comp>
  )
}

export default Reveal
