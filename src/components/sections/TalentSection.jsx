import { Link } from 'react-router-dom'
import Eyebrow from './../ui/Eyebrow.jsx'
import Reveal from './../ui/Reveal.jsx'

const ROLES = [
  'Performers',
  'Creators',
  'Dancers',
  'Designers',
  'Editors',
  'Photographers',
  'Videographers',
  'Writers',
  'Hosts',
  'Organizers',
]

// Talent — roster-style index "Talent is where everything begins."
function TalentSection() {
  return (
    <section className="section section--light-green talent">
      <div className="container">
        <div className="talent__grid">
          <div>
            <Eyebrow index="07">The Talent</Eyebrow>
            <h2 className="section-title" style={{ marginTop: '1rem' }}>
              Talent is where everything begins.
            </h2>
            <Reveal dir="up" delay={120}>
              <p style={{ color: 'var(--text-muted)' }}>
                ATTII VERSE is also a talent ecosystem — a place where performers, creators and
                production people find opportunity, community and a platform to grow.
              </p>
            </Reveal>
            <Reveal dir="up" delay={220}>
              <p style={{ color: 'var(--text-muted)', marginTop: '1.1rem' }}>
                From dancers and hosts to editors, designers, photographers and writers — the verse
                is built by the people inside it.
              </p>
            </Reveal>
            <Reveal dir="up" delay={320}>
              <div className="talent__actions">
                <Link to="/contact" className="btn btn--gold">
                  <span>Join the creative network</span>
                </Link>
                <Link to="/team" className="btn btn--outline">
                  <span>See the team</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal dir="left" delay={150}>
            <ol className="roster">
              {ROLES.map((role, i) => (
                <li key={role} className="roster__row">
                  <span className="roster__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="roster__name">{role}</span>
                  <span className="roster__cap">Creator / Performer</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default TalentSection