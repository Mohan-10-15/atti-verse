function SectionHeading({ eyebrow, title, subtitle, center = false, onDark = false }) {
  return (
    <div className={`section-head ${center ? 'section-head--center' : ''}`}>
      {eyebrow && <span className={`eyebrow ${center ? 'eyebrow--center' : ''}`}>{eyebrow}</span>}
      {title && <h2 className="section-title section-head__title">{title}</h2>}
      {subtitle && <p className="section-head__sub">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading