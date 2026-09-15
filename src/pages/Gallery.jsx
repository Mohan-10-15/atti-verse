import { useState } from 'react'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import FilterBar from '../components/ui/FilterBar.jsx'
import GalleryCard from '../components/cards/GalleryCard.jsx'
import Lightbox from '../components/ui/Lightbox.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { GALLERY, GALLERY_CERTIFICATES, GALLERY_FILTERS } from '../data/gallery.js'

const ALL_ITEMS = [...GALLERY, ...GALLERY_CERTIFICATES]

function Gallery() {
  const [filter, setFilter] = useState('ALL')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const visible = filter === 'ALL' ? ALL_ITEMS : ALL_ITEMS.filter((g) => g.category.toUpperCase() === filter)
  const lightboxItems = lightboxIndex !== null ? visible : []

  const open = (item) => {
    const idx = visible.findIndex((g) => g.id === item.id)
    setLightboxIndex(idx)
  }
  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i === 0 ? visible.length - 1 : i - 1))
  const next = () => setLightboxIndex((i) => (i === visible.length - 1 ? 0 : i + 1))

  return (
    <>
      <Seo
        title="Gallery | Our Moments — ATTII VERSE"
        description="A visual gallery of events, performances, production, behind-the-scenes and creative moments from the ATTII VERSE ecosystem."
        path="/gallery"
      />
      <PageHeader
        eyebrow="Gallery"
        crumb="Gallery"
        title="OUR MOMENTS"
        subtitle="Events, performances, productions and behind-the-scenes — captured across the verse."
      />

      <section className="section" style={{ paddingTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
        <div className="container">
          <Reveal dir="up">
            <FilterBar filters={GALLERY_FILTERS} active={filter} onChange={setFilter} />
          </Reveal>

          <div className="masonry">
            {visible.map((item) => (
              <GalleryCard key={item.id} item={item} onOpen={open} />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox items={lightboxItems} index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
      )}

      <CTASection
        copy={
          <>
            Want moments like these captured at your event? Our production team is ready.
          </>
        }
        primary={{ label: 'Book A Shoot', to: '/contact' }}
      />
    </>
  )
}

export default Gallery