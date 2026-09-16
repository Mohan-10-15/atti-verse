import { Link } from 'react-router-dom'
import Reveal from './../ui/Reveal.jsx'
import Icon from './../ui/Icon.jsx'
import { INSTITUTIONAL_POINTS } from '../../data/organization.js'

// Institutional enrolment — "Planning an institutional event?"
function InstitutionalCTA() {
  return (
    <section className="section" style={{ paddingTop: '0' }}>
      <div className="container">
        <Reveal dir="up">
          <div className="institutional">
            <div className="institutional__text">
              <span className="eyebrow">For Colleges &amp; Institutions</span>
              <h2 className="institutional__title">Planning your next event?</h2>
              <p className="institutional__desc">
                From cultural celebrations and college fests to entertainment, performances and
                complete production support — ATTII VERSE can plan, coordinate and deliver.
              </p>
              <Link to="/contact" className="btn btn--gold institutional__cta">
                <span>Start a conversation</span>
              </Link>
            </div>
            <ul className="institutional__points">
              {INSTITUTIONAL_POINTS.map((point) => (
                <li key={point} className="institutional__point">
                  <Icon name="check" size={15} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default InstitutionalCTA