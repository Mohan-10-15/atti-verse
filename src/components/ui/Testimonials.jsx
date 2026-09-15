import Reveal from './Reveal.jsx'
import { TESTIMONIALS } from '../../data/testimonials.js'

// Placeholder testimonial block. Renders a refined "in the making"
// state when there are no verified testimonials yet, and switches
// automatically once TESTIMONIALS contains entries.
function Testimonials({ dark = false }) {
  if (TESTIMONIALS.length === 0) {
    return (
      <section className={`section ${dark ? 'section--off-white' : 'section--off-white'}`}>
        <div className="container">
          <Reveal dir="zoom">
            <div className="testimonial-placeholder">
              <h3 className="testimonial-placeholder__title">The story is still being written.</h3>
              <p className="testimonial-placeholder__note">
                Verified voices from clients and collaborators will appear here as our journey grows.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="section section--dark">
      <div className="container">
        <div className="section-head section-head--center section-head--dark">
          <h2 className="section-title section-head__title">WHAT PEOPLE SAY</h2>
        </div>
        <div className="grid-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="milestone-card milestone-card--dark">
              <p style={{ fontStyle: 'italic' }}>{t.quote}</p>
              <footer style={{ marginTop: '1rem' }}>
                <strong style={{ color: 'var(--gold-soft)' }}>{t.name}</strong>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials