import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal.jsx'
import Img from '../ui/Img.jsx'
import Icon from '../ui/Icon.jsx'
import { PLACEHOLDER } from '../../config/site.js'

function EventCard({ event, index = 0 }) {
  return (
    <Reveal dir="up" delay={(index % 3) * 100}>
      <article className="event-card">
        <Link to={`/events/${event.id}`} className="event-card__link" aria-label={event.title}>
          <div className="event-card__media">
            <Img src={event.image} alt={event.title} />
            <span className="event-card__badge">{event.category}</span>
            {event.status !== 'verified' && <span className="event-card__status">{PLACEHOLDER.comingSoon}</span>}
          </div>
          <div className="event-card__body">
            <h3 className="event-card__title">{event.title}</h3>
            <div className="event-card__meta">
              {event.date ? (
                <span>
                  <Icon name="calendar" size={13} /> {event.date}
                </span>
              ) : (
                <span>Date — To Be Added</span>
              )}
              {event.location && (
                <span>
                  <Icon name="location" size={13} /> {event.location}
                </span>
              )}
            </div>
            <p className="event-card__desc">{event.description}</p>
            <div className="event-card__cta">
              <span className="text-link">
                {event.status === 'verified' ? 'View Event Details' : 'Stay Tuned'} →
              </span>
            </div>
          </div>
        </Link>
      </article>
    </Reveal>
  )
}

export default EventCard