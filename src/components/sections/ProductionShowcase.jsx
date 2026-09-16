import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './../ui/Reveal.jsx'
import Img from './../ui/Img.jsx'
import Eyebrow from './../ui/Eyebrow.jsx'
import Icon from './../ui/Icon.jsx'
import { PRODUCTIONS } from '../../data/productions.js'

// Cinematic production showcase — "From concept to stage."
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

  useEffect(() => {
    const el = stripRef.current
    if (!el) return
    const onWheel = (e) => {
      if (el.scrollWidth <= el.clientWidth + 1) return
      const goHorizontal = Math.abs(e.deltaY) >= Math.abs(e.deltaX)
      if (!goHorizontal) return
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        el.scrollBy({ left: -step(), behavior: 'smooth' })
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        el.scrollBy({ left: step(), behavior: 'smooth' })
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('keydown', onKey)
    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <section className="section section--dark prod-show">
      <div className="container">
        <div className="prod-show__head">
          <Reveal dir="up">
            <Eyebrow index="06">Production</Eyebrow>
            <h2 className="section-title" style={{ marginTop: '1rem' }}>
              From concept to stage.
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
                View productions
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal dir="up" delay={120}>
          <p className="prod-show__intro">
            Creative planning, programming, event storytelling, stage design, artist coordination
            and execution — every production we take on moves from a first idea to a finished
            experience, in one disciplined flow.
          </p>
        </Reveal>
      </div>

      <div
        className="prod-strip"
        ref={stripRef}
        tabIndex="0"
        role="region"
        aria-label="Production showcase — use arrow keys to scroll"
      >
        {PRODUCTIONS.map((prod, i) => (
          <article key={prod.id} className="prod-strip__item">
            <div className="prod-strip__media">
              <Img src={prod.image} alt={`${prod.title} — media & production`} />
            </div>
            <div className="prod-strip__body">
              <h3 className="prod-strip__title">{prod.title}</h3>
              <p className="prod-strip__note">{prod.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductionShowcase