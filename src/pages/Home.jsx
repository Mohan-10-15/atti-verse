import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import Icon from '../components/ui/Icon.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import Testimonials from '../components/ui/Testimonials.jsx'
import EventCard from '../components/cards/EventCard.jsx'
import WhyAttii from '../components/sections/WhyAttii.jsx'
import ServicesIndex from '../components/sections/ServicesIndex.jsx'
import ProductionShowcase from '../components/sections/ProductionShowcase.jsx'
import TalentSection from '../components/sections/TalentSection.jsx'
import OrganizationTree from '../components/sections/OrganizationTree.jsx'
import FutureDirection from '../components/sections/FutureDirection.jsx'
import InstitutionalCTA from '../components/sections/InstitutionalCTA.jsx'
import { IMAGES } from '../config/images.js'
import { SITE } from '../config/site.js'
import { FEATURED_EVENTS, EVENT_PLACEHOLDERS } from '../data/events.js'
import { WORK } from '../data/work.js'
import { LEADERSHIP } from '../data/team.js'
import { HOME_MILESTONES } from '../data/achievements.js'

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
          Entertainment. Production. Experiences.
        </p>

        <div className="hero__actions hero-line" style={{ animationDelay: '0.7s' }}>
          <Link to="/work" className="btn btn--gold">
            <span>Explore Our Work</span>
            <Icon name="arrow-right" size={16} className="btn--icon-arrow" />
          </Link>
          <Link to="/contact" className="btn btn--outline">
            <span>Work With Us</span>
          </Link>
        </div>

        <div className="hero__meta hero-line" style={{ animationDelay: '0.85s' }}>
          <span>Entertainment</span>
          <span className="hero__meta-sep">/</span>
          <span>Events</span>
          <span className="hero__meta-sep">/</span>
          <span>Production</span>
          <span className="hero__meta-sep">/</span>
          <span>Creative</span>
        </div>
      </div>
    </section>
  )
}

function Introduction() {
  return (
    <section className="section intro-statement">
      <div className="container">
        <Reveal dir="up">
          <p className="intro-statement__line">WE CREATE</p>
        </Reveal>
        <Reveal dir="up" delay={100}>
          <p className="intro-statement__line intro-statement__line--gold">EXPERIENCES.</p>
        </Reveal>
        <Reveal dir="up" delay={200}>
          <p className="intro-statement__line">WE BUILD</p>
        </Reveal>
        <Reveal dir="up" delay={300}>
          <p className="intro-statement__line intro-statement__line--gold">TALENT.</p>
        </Reveal>
        <Reveal dir="up" delay={400}>
          <p className="intro-statement__line">WE PRODUCE</p>
        </Reveal>
        <Reveal dir="up" delay={500}>
          <p className="intro-statement__line intro-statement__line--gold">STORIES.</p>
        </Reveal>
      </div>
    </section>
  )
}

function BrandIntro() {
  return (
    <section className="section">
      <div className="container grid-2">
        <Reveal dir="right" delay={100}>
          <div style={{ position: 'relative' }}>
            <Img
              src={IMAGES.aboutHome}
              alt="The ATTII VERSE creative ecosystem"
              aspect="4 / 3"
              style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }}
            />
            <div className="eyebrow img-anchor">
              CREATIVE ECOSYSTEM
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal dir="up">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title" style={{ marginTop: '1.1rem', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              A growing universe of talent, creativity and production.
            </h2>
          </Reveal>
          <Reveal dir="up" delay={120}>
            <p style={{ color: 'var(--text-muted)', marginTop: '1.3rem' }}>
              {SITE.fullName} brings together entertainment, event management, media production,
              creative services and talented creators under one growing platform.
            </p>
          </Reveal>
          <Reveal dir="up" delay={220}>
            <p style={{ color: 'var(--text-muted)', marginTop: '1.1rem' }}>
              What began as a college-based creative initiative has evolved into a structured
              organization with leadership, divisions and operational systems — built for serious,
              scalable growth.
            </p>
          </Reveal>
          <Reveal dir="up" delay={320}>
            <Link to="/about" className="text-link mt-lg">
              Discover ATTII VERSE →
            </Link>
          </Reveal>
        </div>
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
              <span className="eyebrow">Our Work</span>
              <h2 className="section-title" style={{ marginTop: '1.1rem', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                SELECTED <span className="text-gold">WORK.</span>
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
              Events
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

function StructureSection() {
  return (
    <section className="section section--light-green">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Organizational Structure"
          title={<>BUILT WITH STRUCTURE.<br /><span className="text-gold">DRIVEN BY CREATIVITY.</span></>}
          subtitle="Five divisions, one direction — a professional foundation underneath every creative output."
        />
        <OrganizationTree />
      </div>
    </section>
  )
}

function Milestones() {
  return (
    <section className="section">
      <div className="container">
        <div className="milestones-editorial">
          <div className="milestones-editorial__head">
            <Reveal dir="up">
              <span className="eyebrow">Milestones</span>
              <h2 className="section-title" style={{ marginTop: '1.1rem', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                BUILT ON <span className="text-gold">EARNED MILESTONES.</span>
              </h2>
            </Reveal>
            <Reveal dir="up" delay={100}>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem', maxWidth: '50ch' }}>
                Every milestone below is verified. Nothing here is invented.
              </p>
            </Reveal>
          </div>

          <div className="milestones-editorial__list">
            {HOME_MILESTONES.map((m, i) => (
              <Reveal key={m.title} dir="up" delay={i * 50}>
                <div className="milestones-editorial__row">
                  <span className="milestones-editorial__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="milestones-editorial__body">
                    <h3 className="milestones-editorial__title">{m.title}</h3>
                    {m.note && <p className="milestones-editorial__note">{m.note}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
                <span className="eyebrow">Leadership</span>
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
      <Introduction />
      <BrandIntro />
      <WhyAttii />
      <ServicesIndex />
      <FeaturedWork />
      <FeaturedEvents />
      <ProductionShowcase />
      <TalentSection />
      <StructureSection />
      <TeamPreview />
      <Milestones />
      <FutureDirection />
      <Testimonials />
      <InstitutionalCTA />
      <CTASection
        title="LET'S CREATE SOMETHING WORTH REMEMBERING."
        copy={
          <>
            Whether you are planning an event, looking for creative production, exploring a
            collaboration or building something new — let's start the conversation.
          </>
        }
      />
    </>
  )
}

export default Home