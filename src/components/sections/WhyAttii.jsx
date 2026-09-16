import { Link } from 'react-router-dom'
import Eyebrow from './../ui/Eyebrow.jsx'
import { WHY_BLOCKS } from '../../data/organization.js'

// "Why ATTII VERSE" — editorial statement + numbered index.
function WhyAttii() {
  return (
    <section className="section">
      <div className="container">
        <div className="why-editorial">
          <div className="why-editorial__lead">
            <Eyebrow index="02">Why ATTII VERSE</Eyebrow>
            <h2 className="section-title" style={{ marginTop: '1rem' }}>
              More than entertainment — a structured creative organization.
            </h2>
            <p className="why-editorial__copy">
              ATTII VERSE operates through dedicated divisions and coordinated teams — leadership,
              production, events, media and talent working together toward one standard. We are
              growing, but we are serious — and that shows in how we organize, coordinate and
              deliver.
            </p>
            <p className="intro-editorial__link">
              <Link to="/about" className="text-link">How we are built</Link>
            </p>
          </div>

          <ol className="why-editorial__list">
            {WHY_BLOCKS.map((block) => (
              <li key={block.number} className="why-editorial__row">
                <span className="why-editorial__num">{block.number}</span>
                <div>
                  <h3 className="why-editorial__title">{block.title}</h3>
                  <p className="why-editorial__note">{block.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default WhyAttii