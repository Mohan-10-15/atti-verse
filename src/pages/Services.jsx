import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { SERVICES } from '../data/services.js'

function ServiceFeature({ service, index }) {
  const reverse = index % 2 === 1
  return (
    <section id={service.id} className={`section ${index % 2 === 1 ? 'section--off-white' : ''}`} style={{ scrollMarginTop: 'var(--header-h)' }}>
      <div className="container">
        <div className={`feature ${reverse ? 'feature--reverse' : ''}`}>
          <Reveal dir={reverse ? 'left' : 'right'} delay={120}>
            <div className="feature__media">
              <Img src={service.image} alt={`${service.title} — ATTII VERSE`} priority={index < 2} />
            </div>
          </Reveal>
          <div>
            <Reveal dir="up">
              <h2 className="feature__title">{service.title}</h2>
              <p className="feature__tagline">{service.tagline}</p>
            </Reveal>
            <Reveal dir="up" delay={120}>
              <p className="feature__desc">{service.description}</p>
            </Reveal>
            <Reveal dir="up" delay={200}>
              <ul className="feature__caps">
                {service.capabilities.map((cap) => (
                  <li key={cap}>{cap}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal dir="up" delay={280}>
              <div className="feature__cta">
                <Link to={service.cta?.to || '/contact'} className="btn btn--emerald">
                  <span>{service.cta?.label?.replace(' →', '') || 'Learn More'}</span>
                </Link>
              </div>
            </Reveal>
            {service.portfolio?.length > 0 && (
              <Reveal dir="up" delay={340}>
                <div className="feature__portfolio" style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginTop: '1.6rem' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                    Portfolio Examples
                  </span>
                  {service.portfolio.map((p) => (
                    <div key={p.title} style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      {p.title}
                      <span style={{ color: 'var(--text-faint)', marginLeft: '0.5rem', fontSize: '0.8rem' }}>{p.year}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <>
      <Seo
        title="Services | Entertainment, Events, Media & Creative — ATTII VERSE"
        description="ATTII VERSE services: entertainment, event management, media production, film & creative production, design and talent collaboration."
        path="/services"
      />
      <PageHeader
        eyebrow="Services"
        crumb="Services"
        title="What we do"
        subtitle="One creative ecosystem. Multiple possibilities — from stage to screen, from concept to execution."
      />

      <section className="section section--light-green" style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Capabilities"
            title="Full-stack creative production."
            subtitle="Six disciplines working together to plan, perform, produce and deliver."
          />
        </div>
      </section>

      <div style={{ marginTop: '-1rem' }}>
        {SERVICES.map((service, i) => (
          <ServiceFeature key={service.id} service={service} index={i} />
        ))}
      </div>

      <hr className="hr-gold" style={{ maxWidth: 'var(--container)', marginInline: 'auto' }} />

      <CTASection
        copy={
          <>
            Not sure which service fits? Tell us what you're building — we'll find the right team and
            the right approach.
          </>
        }
      />
    </>
  )
}

export default Services