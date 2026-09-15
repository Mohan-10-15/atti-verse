import Reveal from './../ui/Reveal.jsx'
import Icon from './../ui/Icon.jsx'
import SectionHeading from './../ui/SectionHeading.jsx'
import { LEGAL_FOUNDATION, LEGAL_FOUNDATION_NOTE } from '../../data/organization.js'

// "Built on a professional foundation." — verified registrations only.
function LegalFoundation() {
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading
          center
          onDark
          eyebrow="Professional Foundation"
          title="BUILT ON A PROFESSIONAL FOUNDATION."
          subtitle="The verified registrations and governance that back the creative work."
        />
        <div className="legal" style={{ marginTop: '2rem' }}>
          {LEGAL_FOUNDATION.map((item, i) => (
            <Reveal key={item} dir="up" delay={(i % 2) * 80}>
              <article className="legal__item">
                <Icon name="shield" size={17} />
                <span>{item}</span>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal dir="up" delay={200}>
          <p className="legal__note">{LEGAL_FOUNDATION_NOTE}</p>
        </Reveal>
      </div>
    </section>
  )
}

export default LegalFoundation