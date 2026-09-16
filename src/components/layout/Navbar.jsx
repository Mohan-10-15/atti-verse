import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../config/site.js'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    let closedByResize = false
    const mq = window.matchMedia('(min-width: 1081px)')
    const handleChange = (e) => {
      if (e.matches) {
        closedByResize = true
        setOpen(false)
      }
    }
    mq.addEventListener('change', handleChange)
    return () => {
      mq.removeEventListener('change', handleChange)
      if (closedByResize) document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      document.body.style.overflow = ''
      setOpen(false)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const firstLink = document.querySelector('.mobile-menu__link')
      firstLink?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Link to="/" className="nav__brand" aria-label="ATTII VERSE home">
            <span className="nav__brand-text">
              <span className="nav__brand-name">ATTII VERSE</span>
              <span className="nav__brand-sub">Entertainment &amp; Productions</span>
            </span>
          </Link>

          <nav className="nav__menu" aria-label="Primary">
            {NAV_LINKS.filter((l) => l.to !== '/contact').map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="btn btn--gold nav__cta">
            <span>Start a Project</span>
          </Link>

          <button
            type="button"
            className={`nav__toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul style={{ listStyle: 'none' }}>
            {NAV_LINKS.map((link, i) => (
              <li key={link.to} style={{ marginBottom: '0.15rem' }}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `mobile-menu__link ${isActive ? 'is-active' : ''}`}
                  style={{ transitionDelay: open ? `${i * 45}ms` : '0ms' }}
                >
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/contact" className="btn btn--gold mobile-menu__cta">
          <span>Start a Project</span>
        </Link>
      </div>
    </>
  )
}

export default Navbar