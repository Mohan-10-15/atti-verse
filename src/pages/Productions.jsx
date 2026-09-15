import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import VideoBox from '../components/ui/VideoBox.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { PRODUCTIONS } from '../data/productions.js'

function Productions() {
  return (
    <>
      <Seo
        title="Media & Productions | ATTII VERSE"
        description="Photography, videography, editing, reels, event aftermovies, promotional videos, short films, scriptwriting and direction by ATTII VERSE."
        path="/productions"
      />
      <PageHeader
        eyebrow="Productions"
        crumb="Productions"
        title="MEDIA & PRODUCTIONS"
        subtitle="From a single frame to a complete production, we create visual content designed to tell stories and capture experiences."
      />

      {PRODUCTIONS.map((prod, i) => {
        const reverse = i % 2 === 1
        return (
          <section
            key={prod.id}
            id={prod.id}
            className={`section ${reverse ? 'section--off-white' : ''}`}
            style={{ scrollMarginTop: 'var(--header-h)' }}
          >
            <div className="container">
              <div className={`feature ${reverse ? 'feature--reverse' : ''}`}>
                <Reveal dir={reverse ? 'left' : 'right'} delay={100}>
                  <div className="feature__media" style={{ aspectRatio: '16 / 9' }}>
                    <Img src={prod.image} alt={`${prod.title} — production services`} />
                  </div>
                </Reveal>
                <div>
                  <Reveal dir="up">
                    <span className="feature__num">PRODUCTION — {String(i + 1).padStart(2, '0')}</span>
                    <h2 className="feature__title">{prod.title}</h2>
                  </Reveal>
                  <Reveal dir="up" delay={100}>
                    <p className="feature__desc" style={{ marginTop: '0.9rem' }}>
                      {prod.summary}
                    </p>
                  </Reveal>
                  <Reveal dir="up" delay={180}>
                    <ul className="feature__caps">
                      {prod.capabilities.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal dir="up" delay={260}>
                    <div className="mt-md">
                      <VideoBox video={prod.video} poster={prod.image} label={`${prod.title.toUpperCase()} — PREVIEW`} />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <hr className="hr-gold" style={{ maxWidth: 'var(--container)', marginInline: 'auto' }} />

      <CTASection
        copy={
          <>
            Need a photographer, filmmaker, editor or full production team? Let's frame your story.
          </>
        }
        primary={{ label: 'Request Production', to: '/contact' }}
      />
    </>
  )
}

export default Productions