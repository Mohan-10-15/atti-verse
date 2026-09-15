import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal.jsx'

function ServiceCard({ service, index = 0 }) {
  return (
    <Reveal dir="up" delay={(index % 3) * 90}>
      <Link to={service.cta?.to || '/services'} className="service-card">
        <span className="service-card__num">{service.number}</span>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__tag">{service.tagline}</p>
        <p className="service-card__desc">{service.description}</p>
        <span className="text-link service-card__cta">{service.cta?.label || 'Learn more'} →</span>
      </Link>
    </Reveal>
  )
}

export default ServiceCard