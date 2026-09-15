import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import EventCard from '../components/cards/EventCard.jsx'
import VideoBox from '../components/ui/VideoBox.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { Link } from 'react-router-dom'
import { FEATURED_EVENTS, EVENT_PLACEHOLDERS } from '../data/events.js'

function VerifiedEventDetail({ event }) {
  return (
    <section className="section section--off-white">
      <div className="container grid-2">
        <Reveal dir="right">
          <Img
            src={event.image}
            alt={event.title}
            aspect="16 / 10"
            style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }}
          />
        </Reveal>
        <div>
          <Reveal dir="up">
            <span className="eyebrow">Featured Event</span>
            <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
              {event.title}
            </h2>
            <p className="feature__tagline">{event.role}</p>
          </Reveal>
          <Reveal dir="up" delay={120}>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>{event.description}</p>
          </Reveal>
          <Reveal dir="up" delay={200}>
            <p className="mt-sm" style={{ fontSize: '0.8rem', color: 'var(--text-faint)' }}>
              Date, location and additional documentation — To Be Added.
            </p>
          </Reveal>
          <Reveal dir="up" delay={280}>
            <div className="grid-2" style={{ marginTop: '1.8rem', gap: '1rem', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>
              <VideoBox video={event.video} poster={event.image} label="EVENT VIDEO — PLACEHOLDER" />
              <div
                style={{
                  border: '1px dashed var(--gold-line)',
                  borderRadius: 'var(--radius-md)',
                  display: 'grid',
                  placeItems: 'center',
                  aspectRatio: '16 / 9',
                  color: 'var(--gold-soft)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  padding: '1rem',
                }}
              >
                Certificate
                <br />
                To Be Added
              </div>
            </div>
          </Reveal>
          <Reveal dir="up" delay={340}>
            <Link to={`/events/${event.id}`} className="btn btn--emerald" style={{ marginTop: '1.8rem' }}>
              <span>View Full Event Page</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Events() {
  return (
    <>
      <Seo
        title="Events & Experiences | ATTII VERSE"
        description="From cultural celebrations and performances to event coordination and execution, ATTII VERSE creates and contributes to experiences that bring people together."
        path="/events"
      />
      <PageHeader
        eyebrow="Events"
        crumb="Events"
        title="EVENTS & EXPERIENCES"
        subtitle="From cultural celebrations and performances to event coordination and execution, ATTII VERSE creates and contributes to experiences that bring people together."
      />

      {FEATURED_EVENTS.map((event) => (
        <VerifiedEventDetail key={event.id} event={event} />
      ))}

      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="More Moments"
            title="EVENTS IN THE MAKING"
            subtitle="Placeholder cards for events being documented. Verified details will replace them as they arrive."
          />
          <div className="grid-3">
            {EVENT_PLACEHOLDERS.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        copy={
          <>
            Planning an event or need entertainment for your celebration? Let's create it together.
          </>
        }
        primary={{ label: 'Plan An Event', to: '/contact' }}
      />
    </>
  )
}

export default Events