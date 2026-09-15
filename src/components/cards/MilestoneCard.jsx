import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'

const ICON_MAP = {
  partnership: 'handshake',
  msme: 'shield',
  participation: 'star',
  performance: 'play',
  network: 'people',
  recognition: 'document',
  default: 'spark',
}

function MilestoneCard({ milestone, index = 0, dark = false }) {
  const icon = ICON_MAP[milestone.icon] || ICON_MAP.default
  return (
    <Reveal dir="up" delay={(index % 3) * 90}>
      <article className={`milestone-card ${dark ? 'milestone-card--dark' : ''}`}>
        {milestone.icon !== false && (
          <span className="milestone-card__mark">
            <Icon name={icon} size={20} />
          </span>
        )}
        <h3 className="milestone-card__title">{milestone.title}</h3>
        {milestone.note && <p className="milestone-card__note">{milestone.note}</p>}
      </article>
    </Reveal>
  )
}

export default MilestoneCard