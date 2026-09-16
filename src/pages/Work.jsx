import { useState } from 'react'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import FilterBar from '../components/ui/FilterBar.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { WORK, WORK_FILTERS } from '../data/work.js'

const CAT_ALIASES = { ALL: (w) => true }

function Work() {
  const [filter, setFilter] = useState('ALL')
  const visible = WORK.filter(CAT_ALIASES[filter] || ((w) => w.category.toUpperCase() === filter))

  return (
    <>
      <Seo
        title="Our Work | Portfolio — ATTII VERSE"
        description="A portfolio of entertainment, events, production, creative and media work by ATTII VERSE Entertainment & Productions."
        path="/work"
      />
      <PageHeader
        eyebrow="Our Work"
        crumb="Work"
        title="The work we create."
        subtitle="Entertainment, events, production, design and media — a visual record of what happens inside the verse."
      />

      <section className="section" style={{ paddingTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
        <div className="container">
          <Reveal dir="up">
            <FilterBar filters={WORK_FILTERS} active={filter} onChange={setFilter} />
          </Reveal>

          {visible.length === 0 ? (
            <Reveal dir="up">
              <p className="center" style={{ color: 'var(--text-muted)' }}>
                Work in this category is being documented — To Be Added.
              </p>
            </Reveal>
          ) : (
            <div className="masonry">
              {visible.map((project, i) => (
                <Reveal key={project.id} dir="up" delay={(i % 3) * 70}>
                  <article className="project-card" style={{ width: '100%', marginBottom: '1.4rem' }}>
                    <div className="project-card__media" style={{ aspectRatio: i % 3 === 1 ? '4 / 5' : '4 / 3' }}>
                      <Img src={project.image} alt={`${project.title} — ${project.category}`} />
                    </div>
                    <div className="project-card__body">
                      <span className="project-card__cat">{project.category}</span>
                      <h3 className="project-card__title">{project.title}</h3>
                      <p className="project-card__desc">{project.description}</p>
                      <div className="project-card__footer">
                        <span>{project.year} · View Project</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        copy={
          <>
            Have a project in mind? Let's add your event, film or creative brief to the verse.
          </>
        }
      />
    </>
  )
}

export default Work