import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import Icon from '../components/ui/Icon.jsx'
import EventCard from '../components/cards/EventCard.jsx'
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
    <section className={`hero ${IMAGES.heroVideo ? '' : 'hero--no-media'}`}>
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
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__frame" aria-hidden="true">
        <span className="hero__frame-corner hero__frame-corner--tl" />
        <span className="hero__frame-corner hero__frame-corner--tr" />
        <span className="hero__frame-corner hero__frame-corner--bl" />
        <span className="hero__frame-corner hero__frame-corner--br" />
      </div>

      <div className="hero__inner">
        <div className="hero__top">
          <p className="hero__eyebrow hero-line" style={{ animationDelay: '0.1s' }}>
            Entertainment &amp; Productions
          </p>
        </div>

        <div className="hero__title-block hero-line" style={{ animationDelay: '0.25s' }}>
          <span className="hero__title-line hero__title-line--attii" aria-hidden="true">ATTII</span>
          <h1 className="visually-hidden">ATTII VERSE</h1>
          <span className="hero__title-line hero__title-line--verse">VERSE</span>
        </div>

        <div className="hero__gold-rule hero-line" style={{ animationDelay: '0.4s' }} />

        <p className="hero__tagline hero-line" style={{ animationDelay: '0.55s' }}>
          Our Talent. Our Verse.
        </p>
        <p className="hero__statement hero-line" style={{ animationDelay: '0.6s' }}>
          Entertainment, events and production — built with creative discipline.
        </p>

        <div className="hero__actions hero-line" style={{ animationDelay: '0.7s' }}>
          <Link to="/work" className="btn btn--gold">
            <span>Explore Our Work</span>
            <Icon name="arrow-right" size={16} className="btn--icon-arrow" />
          </Link>
          <Link to="/contact" className="btn btn--outline">
            <span>Plan Your Event</span>
          </Link>
        </div>

        <div className="hero__meta hero-line" style={{ animationDelay: '0.9s' }}>
          <span>Entertainment</span>
          <span className="hero__meta-sep" aria-hidden="true">·</span>
          <span>Production</span>
          <span className="hero__meta-sep" aria-hidden="true">·</span>
          <span>Events</span>
          <span className="hero__meta-sep" aria-hidden="true">—</span>
          <span>MMXXVI</span>
        </div>
      </div>
    </section>
  )
}

function VerseIntro() {
  return (
    <section className="section intro-statement">
      <div className="container">
        <Reveal dir="up">
          <span className="eyebrow">01 — The Verse</span>
        </Reveal>
        <Reveal dir="up" delay={100}>
          <p className="intro-statement__line" style={{ marginTop: '1.4rem' }}>A UNIVERSE OF</p>
        </Reveal>
        <Reveal dir="up" delay={200}>
          <p className="intro-statement__line intro-statement__line--gold">TALENT &amp; CRAFT.</p>
        </Reveal>
        <Reveal dir="up" delay={300}>
          <p className="intro-statement__note">
            {SITE.fullName} brings together entertainment, event management, media production,
            creative services and talented creators under one growing platform — built with
            structure, run with discipline.
          </p>
        </Reveal>
        <Reveal dir="up" delay={400}>
          <Link to="/about" className="text-link mt-md" style={{ alignItems: 'center' }}>
            Discover ATTII VERSE →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function FeaturedWork() {
  const featured = WORK.filter((w) => w.featured)
  return (
    <section className="section">
      <div className="container">
        <div className="work-editorial">
          <div className="work-editorial__head">
            <Reveal dir="up">
              <span className="eyebrow">04 — Selected Work</span>
              <h2 className="section-title" style={{ marginTop: '1.1rem', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                THE WORK WE'RE <span className="text-gold">KNOWN FOR.</span>
              </h2>
            </Reveal>
            <Reveal dir="up" delay={100}>
              <Link to="/work" className="text-link" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                View All Work →
              </Link>
            </Reveal>
          </div>

          <div className="work-editorial__grid">
            {featured.slice(0, 3).map((project, i) => (
              <Reveal key={project.id} dir="up" delay={i * 80}>
                <Link
                  to="/work"
                  className={`work-editorial__item ${i === 0 ? 'work-editorial__item--large' : ''}`}
                >
                  <div className="work-editorial__media">
                    <Img src={project.image} alt={`${project.title} — ${project.category}`} />
                  </div>
                  <div className="work-editorial__overlay">
                    <span className="work-editorial__cat">{project.category}</span>
                    <h3 className="work-editorial__title">{project.title}</h3>
                    <span className="work-editorial__arrow" aria-hidden="true">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedEvents() {
  const events = [...FEATURED_EVENTS, ...EVENT_PLACEHOLDERS].slice(0, 3)
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="section-head-row">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>
              05 — Events
            </span>
            <h2 className="section-title section-head__title">MOMENTS WE'VE CREATED</h2>
          </div>
          <Reveal dir="up" delay={150}>
            <Link to="/events" className="text-link text-link--dark">
              View All Events →
            </Link>
          </Reveal>
        </div>
        <div className="grid-3" style={{ marginTop: '2.5rem' }}>
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
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
              <Reveal dir="up">
                <span className="eyebrow">08 — Leadership</span>
                <h2 className="section-title" style={{ marginTop: '1.1rem', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                  THE PEOPLE<br />
                  <span className="text-gold">BEHIND THE VERSE.</span>
                </h2>
              </Reveal>
              <Reveal dir="up" delay={100}>
                <Link to="/team" className="text-link" style={{ alignItems: 'center' }}>
                  Meet Our Team →
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="team-equal__grid" style={{ marginTop: '2.5rem' }}>
            {LEADERSHIP.map((member, i) => (
              <Reveal key={member.id} dir="up" delay={i * 90}>
                <article className="team-equal__card">
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
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
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
    </>
  )
}

export default Home