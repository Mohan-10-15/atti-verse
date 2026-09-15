import { Link } from 'react-router-dom'
import Reveal from './../ui/Reveal.jsx'
import SectionHeading from './../ui/SectionHeading.jsx'

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

// Talent — "Talent is where everything begins."
function TalentSection() {
  return (
    <section className="section section--light-green talent">
      <div className="container">
        <div className="talent__grid">
          <div>
            <SectionHeading
              eyebrow="Creative Network"
              title={
                <>
                  TALENT IS WHERE
                  <br />
                  <span className="text-gold">EVERYTHING BEGINS.</span>
                </>
              }
            />
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
                  <span>JOIN THE CREATIVE NETWORK</span>
                </Link>
                <Link to="/team" className="btn btn--outline">
                  <span>SEE THE TEAM</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal dir="left" delay={200}>
            <ul className="talent__roles">
              {ROLES.map((role, i) => (
                <li key={role} className="talent__role" style={{ '--i': i }}>
                  <span className="talent__role-mark">✦</span>
                  <span>{role}</span>
                  <span className="talent__role-idx">{String(i + 1).padStart(2, '0')}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default TalentSection