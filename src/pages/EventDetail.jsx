import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import Icon from '../components/ui/Icon.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import EventCard from '../components/cards/EventCard.jsx'
import VideoBox from '../components/ui/VideoBox.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { EVENTS } from '../data/events.js'
import { PLACEHOLDER } from '../config/site.js'

function EventDetail() {
  const { slug } = useParams()
  const event = EVENTS.find((e) => e.id === slug)
  if (!event) return <Navigate to="/events" replace />
  const others = EVENTS.filter((e) => e.id !== slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${event.title} | ATTII VERSE`}
        description={event.description}
        path={`/events/${slug}`}
      />
      <PageHeader
        eyebrow="Events"
        crumb={event.title}
        title={event.title}
        subtitle={event.category}
        image={event.image}
      />

      {/* Overview */}
      <section className="section">
        <div className="container grid-2">
          <Reveal dir="right">
            <Img
              src={event.image}
              alt={event.title}
              className="media-frame"
              aspect="16 / 10"
            />
          </Reveal>
          <div>
            <Reveal dir="up">
              <span className="eyebrow">Event Overview</span>
              <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
                {event.title}
              </h2>
              <p className="feature__tagline">{event.role}</p>
            </Reveal>
            <Reveal dir="up" delay={120}>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                “ATTII VERSE participated in {event.title} as part of its growing entertainment and
                cultural-performance journey.”
              </p>
            </Reveal>
            <Reveal dir="up" delay={200}>
              <div className="detail-meta">
                {event.date ? (
                  <div className="detail-meta__item">
                    <span className="detail-meta__label">Date</span>
                    <span className="detail-meta__value">{event.date}</span>
                  </div>
                ) : (
                  <div className="detail-meta__item">
                    <span className="detail-meta__label">Date</span>
                    <span className="detail-meta__value">{PLACEHOLDER.tba}</span>
                  </div>
                )}
                <div className="detail-meta__item">
                  <span className="detail-meta__label">Category</span>
                  <span className="detail-meta__value">{event.category}</span>
                </div>
                <div className="detail-meta__item">
                  <span className="detail-meta__label">Role</span>
                  <span className="detail-meta__value">{event.role}</span>
                </div>
              </div>
            </Reveal>
            <Reveal dir="up" delay={260}>
              <p className="mt-sm" style={{ fontSize: '0.8rem', color: 'var(--text-faint)' }}>
                {event.status === 'verified'
                  ? 'Date, location and additional documentation will be updated as they are confirmed.'
                  : 'Details to be added.'}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery, certificate & video */}
      <section className="section section--off-white">
        <div className="container">
          <SectionHeading
            eyebrow="Documentation"
            title="Visuals, recognition & coverage."
            subtitle="Event visuals, certificate and media will appear here as they are documented."
          />
          <div className="related-grid" style={{ marginTop: '2rem' }}>
            <Reveal dir="up">
              <VideoBox video={event.video} poster={event.image} label="Event video" />
            </Reveal>
            <Reveal dir="up" delay={80}>
              <div className="cert-slot">
                <Icon name="document" size={22} />
                <span>
                  Certificate
                  <small>To Be Added</small>
                </span>
              </div>
            </Reveal>
            <Reveal dir="up" delay={160}>
              <div className="media-frame" style={{ aspectRatio: '16 / 9' }}>
                <Img src={event.image} alt={event.title} />
              </div>
            </Reveal>
          </div>

          {event.gallery?.length > 0 && (
            <div className="related-grid" style={{ marginTop: '2rem' }}>
              {event.gallery.map((src, i) => (
                <Reveal key={src + i} dir="up" delay={(i % 3) * 80}>
                  <div className="media-frame" style={{ aspectRatio: '4 / 3' }}>
                    <Img src={src} alt={`${event.title} — visual ${i + 1}`} />
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal dir="up" delay={200}>
            <div className="event-card__cta" style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/achievements" className="btn btn--emerald">
                <span>See Milestones</span>
              </Link>
              <Link to="/gallery" className="btn btn--outline">
                <span>Open Gallery</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* More events */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading eyebrow="More Events" title="More moments in the verse." />
          </div>
          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {others.map((e, i) => (
              <EventCard key={e.id} event={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have an event in mind?"
        copy={
          <>
            Planning something worth remembering? Let's create it together — entertainment,
            production and coordination in one place.
          </>
        }
        primary={{ label: 'Plan An Event', to: '/contact' }}
      />
    </>
  )
}

export default EventDetail