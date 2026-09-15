import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { UPCOMING } from '../data/upcoming.js'

function UpcomingCard({ item, index }) {
  const gold = item.status.toLowerCase().includes('open')
  return (
    <Reveal dir="up" delay={(index % 3) * 80}>
      <article className="upcoming-card">
        <span className={`upcoming-card__status ${gold ? 'upcoming-card__status--gold' : ''}`}>{item.status}</span>
        <h3 className="upcoming-card__title">{item.title}</h3>
        <p className="upcoming-card__note">{item.note}</p>
      </article>
    </Reveal>
  )
}

function CategoryBlock({ eyebrow, title, items, idx }) {
  return (
    <section className={`section ${idx % 2 === 1 ? 'section--off-white' : ''}`}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={idx === 0 ? 'Confirmed details will replace these placeholders as they are announced.' : undefined} />
        <div className="grid-3">
          {items.map((item, i) => (
            <UpcomingCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Upcoming() {
  return (
    <>
      <Seo
        title="Upcoming | What's Next — ATTII VERSE"
        description="Upcoming events, productions, collaborations and opportunities from ATTII VERSE Entertainment & Productions."
        path="/upcoming"
      />
      <PageHeader
        eyebrow="Upcoming"
        crumb="Upcoming"
        title="WHAT'S NEXT"
        subtitle="The next chapter is already taking shape."
      />

      <div style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <CategoryBlock eyebrow="Announcements" title="UPCOMING EVENTS" items={UPCOMING.events} idx={0} />
        <CategoryBlock eyebrow="On Screen & On Stage" title="UPCOMING PRODUCTIONS" items={UPCOMING.productions} idx={1} />
        <CategoryBlock eyebrow="Partnerships" title="UPCOMING COLLABORATIONS" items={UPCOMING.collaborations} idx={2} />
        <CategoryBlock eyebrow="Join Us" title="OPPORTUNITIES" items={UPCOMING.opportunities} idx={3} />
      </div>

      <CTASection
        copy={
          <>
            Want to be the first to know, or be part of what's next? Join the verse.
          </>
        }
        primary={{ label: 'Join The Verse', to: '/contact' }}
      />
    </>
  )
}

export default Upcoming