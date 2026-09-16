import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import Eyebrow from '../components/ui/Eyebrow.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import FilterBar from '../components/ui/FilterBar.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { WORK, WORK_FILTERS } from '../data/work.js'

function FeaturedCase() {
  const project = WORK.find((w) => w.status === 'documented')
  if (!project) return null
  return (
    <Reveal dir="up">
      <Link to={project.to} className="featured-case">
        <div className="featured-case__media">
          <Img src={project.image} alt={`${project.title} — ${project.category}`} />
        </div>
        <div className="featured-case__body">
          <div className="featured-case__head">
            <Eyebrow index="01">Featured Case Study</Eyebrow>
            <span className="project-card__status project-card__status--documented">Documented</span>
          </div>
          <h2 className="featured-case__title">{project.title}</h2>
          <p className="featured-case__meta">{project.role} · {project.year}</p>
          <p className="featured-case__desc">{project.focus}</p>
          <span className="text-link text-link--dark featured-case__link">Read the case study &rarr;</span>
        </div>
      </Link>
    </Reveal>
  )
}

function Process() {
  const steps = [
    { num: '01', title: 'Brief', note: 'We listen first — audience, context and goals.' },
    { num: '02', title: 'Plan', note: 'Concept, structure, roles and a clear timeline.' },
    { num: '03', title: 'Produce', note: 'Crew, content and coordination on the ground.' },
    { num: '04', title: 'Deliver', note: 'The experience, the film, or the frame — finished.' },
  ]
  return (
    <div className="process-row">
      {steps.map((s) => (
        <div key={s.num} className="process-row__item">
          <span className="process-row__num">{s.num}</span>
          <span className="process-row__body">
            <strong className="process-row__title">{s.title}</strong>
            <span className="process-row__note">{s.note}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

function Work() {
  const [filter, setFilter] = useState('ALL')
  const isAll = filter === 'ALL'
  const documented = WORK.find((w) => w.status === 'documented')
  const visible = WORK.filter(
    (w) =>
      (isAll ? true : w.category.toUpperCase() === filter) &&
      !(isAll && w.id === documented?.id),
  )

  return (
    <>
      <Seo
        title="Our Work | Portfolio — ATTII VERSE"
        description="A portfolio of entertainment, events, production, creative and media work by ATTII VERSE Entertainment & Productions — documented projects and live service offerings."
        path="/work"
      />
      <PageHeader
        eyebrow="Our Work"
        crumb="Work"
        title="The work we create."
        subtitle="Entertainment, events, production, design and media — a living record of what happens inside the verse."
      />

      <section className="section" style={{ paddingTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
        <div className="container">
          <Reveal dir="up">
            <FilterBar filters={WORK_FILTERS} active={filter} onChange={setFilter} />
          </Reveal>

          {isAll && <FeaturedCase />}

          {visible.length === 0 ? (
            <Reveal dir="up">
              <p className="center" style={{ color: 'var(--text-muted)' }}>
                Nothing in this category yet — new work is added as it is documented.
              </p>
            </Reveal>
          ) : (
            <div className="masonry" style={{ marginTop: isAll ? '3rem' : '1rem' }}>
              {visible.map((project, i) => (
                <Reveal key={project.id} dir="up" delay={(i % 3) * 70}>
                  <Link
                    to={project.to}
                    className="project-card project-card--vis"
                    style={{ marginBottom: '1.4rem' }}
                  >
                    <div className="project-card__media" style={{ aspectRatio: i % 3 === 1 ? '4 / 5' : '4 / 3' }}>
                      <Img src={project.image} alt={`${project.title} — ${project.category}`} />
                    </div>
                    <div className="project-card__body">
                      <div className="project-card__row">
                        <span className="project-card__cat">{project.category}</span>
                        <span
                          className={`project-card__status project-card__status--${project.status}`}
                        >
                          {project.status === 'documented' ? 'Documented' : 'Offering'}
                        </span>
                      </div>
                      <h3 className="project-card__title">{project.title}</h3>
                      <p className="project-card__desc">{project.description}</p>
                      <div className="project-card__footer">
                        <span>
                          {project.year} · {project.role}
                        </span>
                        <span className="project-card__arrow" aria-hidden="true">
                          &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal dir="up">
            <p className="portfolio-note">
              Every project on this page is real. “Documented” work links to its case study and
              on-record milestones — “Offering” entries describe services the verse actively
              delivers. Nothing here is invented.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal dir="up">
            <Eyebrow index="02">How Work Comes To Life</Eyebrow>
            <h2 className="section-title" style={{ marginTop: '1rem' }}>
              One disciplined flow, start to finish.
            </h2>
          </Reveal>
          <Reveal dir="up" delay={120}>
            <Process />
          </Reveal>
        </div>
      </section>

      <CTASection
        copy={
          <>
            Have a project in mind? Let's add your event, film or creative brief to the verse.
          </>
        }
        primary={{ label: 'Start a project', to: '/contact' }}
      />
    </>
  )
}

export default Work