import Reveal from './../ui/Reveal.jsx'
import SectionHeading from './../ui/SectionHeading.jsx'
import { NAME_MEANING } from '../../data/organization.js'

// "What ATTII VERSE Means" — elegant storytelling about the name.
function WhatMeans() {
  return (
    <section className="section section--light-green">
      <div className="container">
        <SectionHeading
          center
          eyebrow="The Name"
          title="WHAT ATTII VERSE MEANS"
          subtitle="A name built from the values the organization lives by."
        />

        <div className="meaning">
          <Reveal dir="up">
            <div className="meaning__panel">
              <div className="meaning__panel-head">
                <span className="meaning__word">ATTII</span>
                <span className="meaning__note">The character we create with.</span>
              </div>
              <ul className="meaning__list">
                {NAME_MEANING.attii.map((m) => (
                  <li key={m.letter} className="meaning__item">
                    <span className="meaning__letter">{m.letter}</span>
                    <div>
                      <strong>{m.word}</strong>
                      <p>{m.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal dir="up" delay={140}>
            <div className="meaning__panel meaning__panel--verse">
              <div className="meaning__panel-head">
                <span className="meaning__word">VERSE</span>
                <span className="meaning__note">The universe we are building.</span>
              </div>
              <ul className="meaning__list">
                {NAME_MEANING.verse.map((v, i) => (
                  <li key={v} className="meaning__item">
                    <span className="meaning__letter">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{v}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal dir="zoom" delay={200}>
          <p className="meaning__result">“{NAME_MEANING.meaning}”</p>
        </Reveal>
      </div>
    </section>
  )
}

export default WhatMeans