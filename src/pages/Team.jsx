import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import TeamCard from '../components/cards/TeamCard.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { LEADERSHIP, TEAM_CATEGORIES } from '../data/team.js'
import { PLACEHOLDER } from '../config/site.js'

function Leadership() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Leadership"
          title="THE DIRECTION OF THE VERSE"
          subtitle="Every performance, production and event is powered by people who bring their own talent, creativity and commitment."
        />
        <div className="grid-4">
          {LEADERSHIP.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Responsibilities() {
  return (
    <section className="section section--off-white">
      <div className="container">
        <SectionHeading center eyebrow="Leadership Roles" title="WHAT OUR LEADERS OWN" />
        <div className="grid-4">
          {LEADERSHIP.map((member, i) => (
            <Reveal key={member.id} dir="up" delay={(i % 4) * 90}>
              <article className="milestone-card" style={{ minHeight: '100%' }}>
                <h3 className="milestone-card__title">{member.name}</h3>
                <p className="milestone-card__note" style={{ color: 'var(--gold)', fontWeight: 700 }}>
                  {member.role}
                </p>
                <ul className="check-list" style={{ marginTop: '0.9rem', gridTemplateColumns: '1fr' }}>
                  {member.responsibilities.map((r) => (
                    <li key={r} style={{ fontSize: '0.85rem' }}>
                      {r}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Categories() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="The Collective"
          title="ROLES ACROSS THE VERSE"
          subtitle="Member cards below are placeholders — photos and profiles will be added as the team is documented."
        />
        <div className="grid-3" style={{ rowGap: '2.5rem' }}>
          {TEAM_CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.id} dir="up" delay={ci * 80}>
              <div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <h3 className="card-title">{cat.title}</h3>
                  <p className="feature__tagline" style={{ fontSize: '0.86rem' }}>
                    {cat.subtitle}
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {cat.placeholderRoles.map((role) => (
                    <div key={role} className="cat-card">
                      <span className="cat-card__role">{role}</span>
                      <span className="cat-card__note">{PLACEHOLDER.tba} — profile coming soon.</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <>
      <Seo
        title="Team | The People Behind ATTII VERSE"
        description="The leadership and creative collective behind ATTII VERSE Entertainment & Productions — founders, performers, creators, designers, production and events teams."
        path="/team"
      />
      <PageHeader
        eyebrow="Team"
        crumb="Team"
        title="THE PEOPLE BEHIND ATTII VERSE"
        subtitle="Every performance, production and event is powered by people who bring their own talent, creativity and commitment."
      />
      <Leadership />
      <Responsibilities />
      <Categories />
      <CTASection
        copy={
          <>
            Want to join the collective? Performers, creators and organizers — we're always building.
          </>
        }
        primary={{ label: 'Collaborate With Us', to: '/contact' }}
      />
    </>
  )
}

export default Team