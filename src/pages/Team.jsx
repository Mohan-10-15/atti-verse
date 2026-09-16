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
          title="The direction of the verse."
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
        <SectionHeading
          eyebrow="Leadership Roles"
          title="What our leaders own."
          subtitle="Clear ownership is how the collective stays serious — a named lead behind every discipline."
        />
        <ol className="leaders">
          {LEADERSHIP.map((member) => (
            <li key={member.id} className="leaders__row">
              <div>
                <h3 className="leaders__name">{member.name}</h3>
                <p className="leaders__role">{member.role}</p>
              </div>
              <div>
                <p className="leaders__focus">{member.focus}</p>
                <ul className="leaders__tags">
                  {member.responsibilities.map((r) => (
                    <li key={r} className="leaders__tag">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
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
          title="Roles across the verse."
          subtitle="The collective is organized across five disciplines — membership profiles will be documented as the team grows."
        />
        <ol className="roster-cats">
          {TEAM_CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.id} as="li" dir="up" delay={ci * 60}>
              <div className="roster-cats__row">
                <h3 className="roster-cats__cat">{cat.title}</h3>
                <p className="roster-cats__sub">{cat.subtitle}</p>
                <p className="roster-cats__roles">
                  {cat.placeholderRoles.map((role) => (
                    <span key={role}>
                      {role}
                      <span className="visually-hidden"> — {PLACEHOLDER.tba}</span>
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
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
        title="The people behind ATTII VERSE"
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