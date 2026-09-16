import { useEffect, useRef, useState } from 'react'

// Reveal — subtle editorial entrance. Content is visible even if
// JavaScript fails or the user prefers reduced motion.
function Reveal({ as: Tag = 'div', dir = 'up', delay = 0, threshold = 0.12, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  const transform =
    dir === 'left'
      ? 'translateX(-18px)'
      : dir === 'right'
        ? 'translateX(18px)'
        : dir === 'zoom'
          ? 'scale(0.982)'
          : 'translateY(18px)'

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'reveal--in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, transform: shown ? 'none' : transform }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal