import { Link } from 'react-router-dom'

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
    to: '/services/film-creative',
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
          <span className="eyebrow">What we do</span>
          <h2 className="section-title" style={{ marginTop: '0.9rem' }}>
            Six disciplines, one ecosystem.
          </h2>
        </div>

        <div className="services-index__list">
          {SERVICES.map((service) => (
            <Link key={service.number} to={service.to} className="services-index__row">
              <div className="services-index__body">
                <h3 className="services-index__title">{service.title}</h3>
                <p className="services-index__caps">{service.capabilities}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="services-index__foot">
          <Link to="/services" className="text-link text-link--dark">View all services</Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesIndex