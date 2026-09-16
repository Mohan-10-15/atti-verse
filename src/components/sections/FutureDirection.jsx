import { Link } from 'react-router-dom'
import Reveal from './../ui/Reveal.jsx'
import SectionHeading from './../ui/SectionHeading.jsx'
import { FUTURE_DIRECTION, FUTURE_DIRECTION_NOTE } from '../../data/organization.js'

// Future direction — "What's Next".
function FutureDirection({ eyebrow = '09 — The Next Verse' }) {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="future">
          <div className="future__intro">
            <SectionHeading
              onDark
              eyebrow={eyebrow}
              title={
                <>
                  <span className="text-gold">BUILT FOR</span> WHAT'S AHEAD.
                </>
              }
            />
            <Reveal dir="up" delay={120}>
              <p style={{ color: 'rgba(255,255,255,0.82)' }}>
                New productions, collaborations and events are currently being developed.
              </p>
            </Reveal>
            <Reveal dir="up" delay={220}>
              <p style={{ color: 'var(--text-muted)', marginTop: '1.1rem', fontSize: '0.92rem' }}>
                {FUTURE_DIRECTION_NOTE}
              </p>
            </Reveal>
            <Reveal dir="up" delay={320}>
              <Link to="/upcoming" className="btn btn--gold mt-lg">
                <span>STAY CONNECTED</span>
              </Link>
            </Reveal>
          </div>

          <div className="future__list">
            {FUTURE_DIRECTION.map((item, i) => (
              <Reveal key={item} dir="left" delay={i * 70}>
                <div className="future__row">
                  <span className="future__idx">{String(i + 1).padStart(2, '0')}</span>
                  <span className="future__item">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FutureDirection