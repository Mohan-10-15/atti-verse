import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './../ui/Reveal.jsx'
import Img from './../ui/Img.jsx'
import Icon from './../ui/Icon.jsx'
import { PRODUCTIONS } from '../../data/productions.js'

// Cinematic production showcase — "From concept to final frame."
function ProductionShowcase() {
  const stripRef = useRef(null)

  const step = () => {
    const el = stripRef.current
    const card = el?.querySelector('.prod-strip__item')
    return card ? card.clientWidth + 32 : 460
  }

  const scrollByStep = (dir) => {
    const el = stripRef.current
    if (!el) return
    el.scrollBy({ left: dir * step(), behavior: 'smooth' })
  }

  const onWheel = (e) => {
    const el = stripRef.current
    if (!el || el.scrollWidth <= el.clientWidth + 1) return
    const goHorizontal = Math.abs(e.deltaY) >= Math.abs(e.deltaX)
    if (!goHorizontal) return
    e.preventDefault()
    el.scrollLeft += e.deltaY
  }

  return (
    <section className="section section--dark prod-show">
      <div className="container">
        <div className="prod-show__head">
          <Reveal dir="up">
            <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>
              Production
            </span>
            <h2 className="section-title" style={{ marginTop: '1.1rem' }}>
              FROM CONCEPT TO <span className="text-gold">FINAL FRAME.</span>
            </h2>
          </Reveal>
          <Reveal dir="up" delay={150}>
            <div className="prod-show__head-actions">
              <div className="prod-strip__nav" aria-label="Scroll production showcase">
                <button
                  type="button"
                  className="prod-strip__arrow"
                  aria-label="Scroll left"
                  onClick={() => scrollByStep(-1)}
                >
                  <Icon name="arrow-left" size={18} />
                </button>
                <button
                  type="button"
                  className="prod-strip__arrow"
                  aria-label="Scroll right"
                  onClick={() => scrollByStep(1)}
                >
                  <Icon name="arrow-right" size={18} />
                </button>
              </div>
              <Link to="/productions" className="text-link text-link--dark">
                View Productions →
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal dir="up" delay={120}>
          <p className="prod-show__intro">
            Photography, videography, editing, reels, short films, direction and cinematic
            storytelling — one production ecosystem from first idea to last frame.
          </p>
        </Reveal>
      </div>

      <div className="prod-strip" ref={stripRef} onWheel={onWheel}>
        {PRODUCTIONS.map((prod, i) => (
          <article key={prod.id} className="prod-strip__item">
            <div className="prod-strip__media">
              <Img src={prod.image} alt={`${prod.title} — media & production`} />
              <span className="prod-strip__index">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="prod-strip__body">
              <h3 className="prod-strip__title">{prod.title}</h3>
              <p className="prod-strip__note">{prod.summary}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="prod-show__hint">SCROLL TO EXPLORE →</p>
    </section>
  )
}

export default ProductionShowcase