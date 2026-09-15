import Reveal from './Reveal.jsx'

function SectionHeading({ eyebrow, title, subtitle, center = false, dark = false, onDark = false }) {
  return (
    <Reveal dir="up">
      <div className={`section-head ${center ? 'section-head--center' : ''} ${dark ? 'section-head--dark' : ''}`}>
        {eyebrow && (
          <span className={`eyebrow ${center ? 'eyebrow--center' : ''}`} style={{ color: onDark ? 'var(--gold-soft)' : undefined }}>
            {eyebrow}
          </span>
        )}
        {title && <h2 className="section-title section-head__title">{title}</h2>}
        {center && <span className="gold-rule" aria-hidden="true" />}
        {subtitle && <p className="section-head__sub">{subtitle}</p>}
      </div>
    </Reveal>
  )
}

export default SectionHeading