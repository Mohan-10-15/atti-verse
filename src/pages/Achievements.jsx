import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import Icon from '../components/ui/Icon.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import LegalFoundation from '../components/sections/LegalFoundation.jsx'
import { ORGANIZATIONAL_MILESTONES, CREATIVE_MILESTONES, CERTIFICATES } from '../data/achievements.js'
import { PLACEHOLDER } from '../config/site.js'

const MILESTONE_GROUPS = [
  {
    eyebrow: 'Foundation',
    title: 'ORGANIZATIONAL MILESTONES',
    items: ORGANIZATIONAL_MILESTONES,
  },
  {
    eyebrow: 'Creativity & Events',
    title: 'CREATIVE & EVENT MILESTONES',
    items: CREATIVE_MILESTONES,
  },
]

function Timeline() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Milestones"
          title="EARNED MILESTONES, TIMELINE BY TIMELINE"
          subtitle="Every milestone below is verified. Nothing here is invented — new records are added as they are earned."
        />
        <div className="timeline" style={{ marginTop: '3rem' }}>
          {MILESTONE_GROUPS.map((group, gi) => (
            <div key={group.title}>
              <Reveal dir="up">
                <div className="timeline__group">
                  <span className="timeline__eyebrow">{group.eyebrow}</span>
                  <h3 className="timeline__group-title">{group.title}</h3>
                </div>
              </Reveal>
              {group.items.map((item, i) => (
                <Reveal key={item} dir="up" delay={(i % 2) * 60}>
                  <article className="timeline__item timeline__item--milestone">
                    <h4 className="timeline__title">{item}</h4>
                    <p className="timeline__desc">Documented as part of the organizational record.</p>
                  </article>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certificates() {
  return (
    <section className="section section--off-white">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Documents"
          title="CERTIFICATES & RECOGNITION"
          subtitle="Participation recognition and certifications are preserved here as they are earned."
        />
        <div className="related-grid" style={{ marginTop: '2rem' }}>
          {CERTIFICATES.map((cert, i) => (
            <Reveal key={cert.id} dir="up" delay={(i % 3) * 100}>
              <article className="event-card">
                <div className="event-card__media" style={{ height: 280 }}>
                  <Img src={cert.src} alt={cert.label} />
                </div>
                <div className="event-card__body">
                  <h3 className="event-card__title">{cert.label}</h3>
                  <div className="event-card__meta">
                    <span>
                      <Icon name="document" size={13} /> {PLACEHOLDER.tba}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <>
      <Seo
        title="Achievements | Milestones & Recognition — ATTII VERSE"
        description="Verified milestones and recognition of ATTII VERSE Entertainment & Productions — registrations, participations, performances and certifications."
        path="/achievements"
      />
      <PageHeader
        eyebrow="Achievements"
        crumb="Achievements"
        title="MILESTONES & RECOGNITION"
        subtitle="Every milestone shown here is earned and verified. New records are added as we continue to build."
      />

      <Timeline />
      <Certificates />
      <LegalFoundation />

      <CTASection
        copy={
          <>
            We're just getting started. New milestones, events and certifications are already in
            motion.
          </>
        }
        primary={{ label: "What's Next", to: '/upcoming' }}
      />
    </>
  )
}

export default Achievements