import { useEffect, useRef } from 'react'

// Scroll-triggered reveal using IntersectionObserver.
function Reveal({
  as: Tag = 'div',
  dir = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    node.style.setProperty('--reveal-delay', `${delay}ms`)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible')
            observer.unobserve(node)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`is-reveal ${className}`} data-dir={dir} {...rest}>
      {children}
    </Tag>
  )
}

export default Reveal