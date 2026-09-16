import { Link } from 'react-router-dom'
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
                  More than entertainment —
                  <br />
                  a structured creative organization.
                </>
              }
            />
            <p style={{ color: 'var(--text-muted)' }}>
              ATTII VERSE operates through dedicated divisions and coordinated teams — leadership,
              production, events, media and talent working together toward one standard.
            </p>
            <p style={{ color: 'var(--text-muted)', marginTop: '1.1rem' }}>
              We are growing, but we are serious. That seriousness shows up in how we organize,
              how we coordinate and how we deliver.
            </p>
            <p className="mt-lg">
              <Link to="/about" className="text-link">How we are built</Link>
            </p>
          </div>

          <div className="why-attii__list">
            {WHY_BLOCKS.map((block) => (
              <article key={block.number} className="why-attii__row">
                <div className="why-attii__body">
                  <h3 className="why-attii__title">{block.title}</h3>
                  <p className="why-attii__note">{block.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAttii