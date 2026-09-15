import Reveal from './../ui/Reveal.jsx'
import Icon from './../ui/Icon.jsx'
import SectionHeading from './../ui/SectionHeading.jsx'
import { WHY_WORK_PILLARS } from '../../data/organization.js'

// "Why Work With Us" — institutional-trust pillars.
function WhyWorkWithUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Why Work With Us"
          title="BUILT TO WORK WITH."
          subtitle="The qualities institutions, brands and partners can rely on."
        />
        <div className="pillars">
          {WHY_WORK_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} dir="up" delay={(i % 3) * 90}>
              <article className="pillar">
                <span className="pillar__icon">
                  <Icon name={pillar.icon} size={20} />
                </span>
                <h3 className="pillar__title">{pillar.title}</h3>
                <p className="pillar__note">{pillar.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithUs