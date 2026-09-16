import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Img from '../components/ui/Img.jsx'
import Eyebrow from '../components/ui/Eyebrow.jsx'
import WhyAttii from '../components/sections/WhyAttii.jsx'
import ServicesIndex from '../components/sections/ServicesIndex.jsx'
import ProductionShowcase from '../components/sections/ProductionShowcase.jsx'
import TalentSection from '../components/sections/TalentSection.jsx'
import FutureDirection from '../components/sections/FutureDirection.jsx'
import InstitutionalCTA from '../components/sections/InstitutionalCTA.jsx'
import { IMAGES } from '../config/images.js'
import { SITE } from '../config/site.js'
import { FEATURED_EVENTS, EVENT_PLACEHOLDERS } from '../data/events.js'
import { WORK } from '../data/work.js'
import { LEADERSHIP } from '../data/team.js'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        {IMAGES.heroVideo ? (
          <video
            className="hero__video"
            src={IMAGES.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            poster={IMAGES.hero}
            preload="metadata"
          />
        ) : (
          <Img src={IMAGES.hero} alt="ATTII VERSE — Entertainment & Productions" priority />
        )}
      </div>
      <div className="hero__overlay" />
      <div className="hero__inner">
        <p className="eyebrow hero__eyebrow">Entertainment &amp; Productions</p>
        <div className="hero__title-block">
          <h1 className="hero__title-line hero__title-line--attii">ATTII</h1>
          <span className="hero__title-line hero__title-line--verse">VERSE</span>
        </div>
        <p className="hero__tagline">Our talent. Our verse.</p>
        <p className="hero__statement">
          Entertainment, events and production — built with creative discipline.
        </p>
        <div className="hero__actions">
          <Link to="/work" className="btn btn--gold">
            <span>Explore Our Work</span>
          </Link>
          <Link to="/contact" className="btn btn--outline-gold">
            <span>Plan Your Event</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function VerseIntro() {
  return (
    <section className="section intro-editorial">
      <div className="container">
        <Eyebrow index="01">The Verse</Eyebrow>
        <div className="intro-editorial__grid">
          <h2 className="intro-editorial__line">
            An entertainment and production collective — built around talent, live energy and{' '}
            <em>moments that stay with people.</em>
          </h2>
          <div>
            <div className="intro-editorial__copy">
              <p>
                {SITE.fullName} brings together entertainment, event management, media production
                and creative services under one growing platform — structured, and run with
                discipline.
              </p>
            </div>
            <p className="intro-editorial__link">
              <Link to="/about" className="text-link">About the verse</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedWork() {
  const featured = WORK.filter((w) => w.featured)
  return (
    <section className="section section--off-white">
      <div className="container">
        <div className="work-editorial">
          <div className="work-editorial__head">
            <div>
              <Eyebrow index="04">Selected Work</Eyebrow>
              <h2 className="section-title" style={{ marginTop: '0.9rem' }}>
                The work we're known for.
              </h2>
            </div>
            <Link to="/work" className="text-link">View all work</Link>
          </div>

          <div className="work-editorial__grid">
            {featured.slice(0, 3).map((project, i) => (
              <Link
                key={project.id}
                to="/work"
                className={`work-editorial__item ${i === 0 ? 'work-editorial__item--large' : ''}`}
              >
                <div className="work-editorial__media">
                  <Img src={project.image} alt={`${project.title} — ${project.category}`} />
                </div>
                <div className="work-editorial__overlay">
                  <span className="work-editorial__cat">{project.category}</span>
                  <h3 className="work-editorial__title">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedEvents() {
  const featured = FEATURED_EVENTS[0]
  const upcoming = EVENT_PLACEHOLDERS
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="section-head-row">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <Eyebrow index="05">Events</Eyebrow>
            <h2 className="section-title section-head__title">Moments we've created.</h2>
          </div>
          <Link to="/events" className="text-link text-link--dark">View all events</Link>
        </div>

        <div className="events-featured">
          <div>
            <Link to={`/events/${featured.id}`} className="media-frame events-featured__media">
              <Img src={featured.image} alt={`${featured.title} — ${featured.category}`} />
            </Link>
            <div className="events-featured__meta">
              {featured.category ? (
                <span className="events-featured__chip">{featured.category}</span>
              ) : null}
              <span className="events-featured__chip">On ground record</span>
            </div>
          </div>

          <aside>
            <span className="events-featured__role">{featured.role}</span>
            <h3 className="events-featured__title">{featured.title}</h3>
            <p className="events-featured__desc">{featured.description}</p>
            <div className="events-featured__details">
              <span>Date — To be announced</span>
              <span>Location — City, Tamil Nadu</span>
            </div>
            <p className="events-featured__link">
              <Link to={`/events/${featured.id}`} className="text-link text-link--dark">
                View event details
              </Link>
            </p>

            <ol className="events-index">
              {upcoming.map((event, i) => (
                <li key={event.id} className="events-index__row">
                  <span className="events-index__num">0{i + 1}</span>
                  <span className="events-index__title">{event.title}</span>
                  <span className="events-index__status">To Be Added</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  )
}

function TeamPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="team-equal">
          <div className="team-equal__head">
            <div className="section-head-row">
              <div>
                <Eyebrow index="08">Leadership</Eyebrow>
                <h2 className="section-title" style={{ marginTop: '0.9rem' }}>
                  The people behind the verse.
                </h2>
              </div>
              <Link to="/team" className="text-link">Meet our team</Link>
            </div>
          </div>

          <div className="team-equal__grid" style={{ marginTop: '2.5rem' }}>
            {LEADERSHIP.map((member) => (
              <article key={member.id} className="team-equal__card">
                <div className="team-equal__media">
                  <Img src={member.image} alt={member.name} />
                </div>
                <div className="team-equal__info">
                  <h3 className="team-equal__name">{member.name}</h3>
                  <p className="team-equal__role">{member.role}</p>
                  {member.designation && (
                    <p className="team-equal__designation">{member.designation}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <div className="home">
      <Seo
        title="ATTII VERSE Entertainment & Productions | Entertainment, Events & Media Production"
        description="ATTII VERSE Entertainment & Productions brings together entertainment, event management, media production, creative services and talented creators to build memorable experiences."
        path="/"
      />
      <Hero />
      <VerseIntro />
      <WhyAttii />
      <ServicesIndex />
      <FeaturedWork />
      <FeaturedEvents />
      <ProductionShowcase />
      <TalentSection />
      <TeamPreview />
      <FutureDirection />
      <InstitutionalCTA />
    </div>
  )
}

export default Home