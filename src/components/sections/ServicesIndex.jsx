import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal.jsx'

const SERVICES = [
  {
    number: '01',
    title: 'Entertainment',
    capabilities: 'Performances / Cultural Experiences / Audience Engagement',
    to: '/services/entertainment',
  },
  {
    number: '02',
    title: 'Event Management',
    capabilities: 'Planning / Coordination / Execution',
    to: '/services/events',
  },
  {
    number: '03',
    title: 'Media & Production',
    capabilities: 'Photography / Videography / Editing / Digital Content',
    to: '/services/production',
  },
  {
    number: '04',
    title: 'Film & Creative Production',
    capabilities: 'Short Films / Scriptwriting / Direction / Storytelling',
    to: '/services/production',
  },
  {
    number: '05',
    title: 'Creative & Design',
    capabilities: 'Branding / Posters / Digital Campaigns / Visual Identity',
    to: '/services/creative',
  },
  {
    number: '06',
    title: 'Talent & Collaboration',
    capabilities: 'Talent Development / Creators / Partnerships',
    to: '/services/talent',
  },
]

function ServicesIndex() {
  return (
    <section className="section section--dark services-index">
      <div className="container">
        <div className="services-index__head">
          <Reveal dir="up">
            <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Services</span>
            <h2 className="section-title" style={{ marginTop: '1.1rem', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              SIX DISCIPLINES.<br />
              <span className="text-gold">ONE ECOSYSTEM.</span>
            </h2>
          </Reveal>
        </div>

        <div className="services-index__list">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} dir="up" delay={i * 60}>
              <Link to={service.to} className="services-index__row">
                <span className="services-index__num">{service.number}</span>
                <div className="services-index__body">
                  <h3 className="services-index__title">{service.title}</h3>
                  <p className="services-index__caps">{service.capabilities}</p>
                </div>
                <span className="services-index__arrow" aria-hidden="true">→</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal dir="up" delay={400}>
          <div className="services-index__foot">
            <Link to="/services" className="text-link text-link--dark">
              View All Services →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ServicesIndex
