import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

function CTASection({ title = "LET'S CREATE SOMETHING.", copy, primary, secondary }) {
  return (
    <section className="cta" aria-label="Call to action">
      <div className="container">
        <Reveal dir="up">
          <span className="eyebrow eyebrow--center" style={{ justifyContent: 'center' }}>
            COLLABORATE
          </span>
        </Reveal>
        <Reveal dir="up" delay={100}>
          <h2 className="cta__title">{title}</h2>
        </Reveal>
        {copy && (
          <Reveal dir="up" delay={180}>
            <p className="cta__copy">{copy}</p>
          </Reveal>
        )}
        <Reveal dir="up" delay={260}>
          <div className="cta__actions">
            <Link to={primary?.to || '/contact'} className="btn btn--gold">
              <span>{primary?.label || 'START A COLLABORATION'}</span>
              <Icon name="arrow-right" size={18} className="btn--icon-arrow" />
            </Link>
            {secondary !== false && (
              <Link to="/contact" className="btn btn--outline">
                <span>CONTACT US</span>
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CTASection