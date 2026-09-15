import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import EventCard from '../components/cards/EventCard.jsx'
import { SERVICES } from '../data/services.js'
import { PROCESS_STEPS } from '../data/organization.js'
import { PLACEHOLDER } from '../config/site.js'

function ServiceDetail() {
  const { slug } = useParams()
  const matches = SERVICES.filter((s) => s.slug === slug)
  if (matches.length === 0) return <Navigate to="/services" replace />
  const service = matches[0]
  const gallery = [service.image, ...SERVICES.filter((s) => s.slug !== slug).slice(0, 2).map((s) => s.image)]

  return (
    <>
      <Seo
        title={`${service.title} | ATTII VERSE`}
        description={service.description}
        path={`/services/${slug}`}
      />
      <PageHeader
        eyebrow={service.number + ' — Services'}
        crumb={service.title}
        title={service.title.toUpperCase()}
        subtitle={service.tagline}
      />

      {/* Overview */}
      <section className="section">
        <div className="container feature">
          <Reveal dir="right" delay={100}>
            <div className="feature__media">
              <Img src={service.image} alt={`${service.title} — ATTII VERSE`} priority />
            </div>
          </Reveal>
          <div>
            <Reveal dir="up">
              <span className="eyebrow">Overview</span>
              <h2 className="feature__title" style={{ marginTop: '0.8rem' }}>
                {service.title}
              </h2>
              <p className="feature__desc" style={{ marginTop: '1rem' }}>{service.hero}</p>
              <p className="feature__desc">{service.description}</p>
            </Reveal>
            <Reveal dir="up" delay={120}>
              <div className="detail-meta">
                <div className="detail-meta__item">
                  <span className="detail-meta__label">Category</span>
                  <span className="detail-meta__value">{service.lens}</span>
                </div>
                <div className="detail-meta__item">
                  <span className="detail-meta__label">Delivery</span>
                  <span className="detail-meta__value">Planned &amp; Coordinated</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--off-white">
        <div className="container grid-2">
          <div>
            <SectionHeading eyebrow="Capabilities" title={<>WHAT THIS DIVISION <span className="text-gold">HANDLES</span></>} />
            <Reveal dir="up" delay={120}>
              <p style={{ color: 'var(--text-muted)' }}>
                The specific skills and services within {service.title.toLowerCase()}. Project
                examples are added as they are documented.
              </p>
            </Reveal>
          </div>
          <Reveal dir="up" delay={150}>
            <ul className="check-list" style={{ marginTop: '1.5rem' }}>
              {service.capabilities.map((cap) => (
                <li key={cap}>{cap}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Relevant work */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Relevant Work"
            title="PROJECT EXAMPLES"
            subtitle="Documented work within this service. New projects are added as they are verified."
          />
          {service.portfolio?.length > 0 ? (
            <div className="related-grid" style={{ marginTop: '2rem' }}>
              {service.portfolio.map((p, i) => (
                <Reveal key={p.title} dir="up" delay={(i % 3) * 80}>
                  <article className="event-card">
                    <div className="event-card__body">
                      <span className="event-card__badge" style={{ position: 'static', alignSelf: 'flex-start', marginBottom: '0.8rem' }}>
                        {p.category}
                      </span>
                      <h3 className="event-card__title">{p.title}</h3>
                      <div className="event-card__meta">
                        <span>Year — {p.year === 'TBA' ? PLACEHOLDER.tba : p.year}</span>
                      </div>
                      <p className="event-card__desc">Project details coming soon.</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal dir="up">
              <p style={{ color: 'var(--text-muted)' }}>Project details coming soon.</p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            center
            onDark
            eyebrow="Process"
            title="HOW WE WORK"
          />
          <div className="related-grid" style={{ marginTop: '2rem' }}>
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} dir="up" delay={(i % 3) * 80}>
                <article className="milestone-card milestone-card--dark">
                  <span className="milestone-card__mark">
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>{step.number}</span>
                  </span>
                  <h3 className="milestone-card__title">{step.title}</h3>
                  <p className="milestone-card__note">{step.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section--light-green">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Gallery"
            title="VISUAL MOMENTS"
            subtitle="Seasonal visuals are added here as they are captured."
          />
          <div className="related-grid" style={{ marginTop: '2rem' }}>
            {gallery.map((src, i) => (
              <Reveal key={src + i} dir="up" delay={(i % 3) * 80}>
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '4 / 3' }}>
                  <Img src={src} alt={`${service.title} — visual ${i + 1}`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Explore"
            title="OTHER SERVICES"
          />
          <div className="related-grid" style={{ marginTop: '2rem' }}>
            {SERVICES.filter((s) => s.slug !== slug).map((s, i) => (
              <Reveal key={s.id} dir="up" delay={(i % 3) * 80}>
                <Link to={`/services/${s.slug}`} className="project-card project-card--vis" aria-label={s.title}>
                  <div className="project-card__media" style={{ aspectRatio: '16 / 10' }}>
                    <Img src={s.image} alt={s.title} />
                  </div>
                  <div className="project-card__body">
                    <span className="project-card__cat">{s.number} — SERVICE</span>
                    <h3 className="project-card__title">{s.title}</h3>
                    <div className="project-card__footer">
                      <span>Explore →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="READY TO TALK?"
        copy={
          <>
            Need {service.title.toLowerCase()} for an event, a brand, a campus or a production? Tell
            us what you're building — we'll find the right team and the right approach.
          </>
        }
      />
    </>
  )
}

export default ServiceDetail