import { Link } from 'react-router-dom'
import Reveal from './../ui/Reveal.jsx'
import SectionHeading from './../ui/SectionHeading.jsx'
import { WHY_BLOCKS } from '../../data/organization.js'

// "Why ATTII VERSE" — More than entertainment. A structured creative organization.
function WhyAttii() {
  return (
    <section className="section">
      <div className="container">
        <div className="why-attii">
          <div className="why-attii__intro">
            <SectionHeading
              eyebrow="Why ATTII VERSE"
              title={
                <>
                  MORE THAN ENTERTAINMENT.
                  <br />
                  <span className="text-gold">A STRUCTURED CREATIVE ORGANIZATION.</span>
                </>
              }
            />
            <Reveal dir="up" delay={120}>
              <p style={{ color: 'var(--text-muted)' }}>
                ATTII VERSE operates through dedicated divisions and coordinated teams — leadership,
                production, events, media and talent working together toward one standard.
              </p>
            </Reveal>
            <Reveal dir="up" delay={220}>
              <p style={{ color: 'var(--text-muted)', marginTop: '1.1rem' }}>
                We are growing, but we are serious. That seriousness shows up in how we organize,
                how we coordinate and how we deliver.
              </p>
            </Reveal>
            <Reveal dir="up" delay={320}>
              <Link to="/about" className="text-link mt-lg">
                See How We Are Built →
              </Link>
            </Reveal>
          </div>

          <div className="why-attii__list">
            {WHY_BLOCKS.map((block, i) => (
              <Reveal key={block.number} dir="up" delay={i * 90}>
                <article className="why-attii__row">
                  <span className="why-attii__num">{block.number}</span>
                  <div className="why-attii__body">
                    <h3 className="why-attii__title">{block.title}</h3>
                    <p className="why-attii__note">{block.note}</p>
                  </div>
                  <span className="why-attii__arrow" aria-hidden="true">
                    →
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAttii