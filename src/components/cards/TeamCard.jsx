import Reveal from '../ui/Reveal.jsx'
import Img from '../ui/Img.jsx'

function TeamCard({ member, index = 0 }) {
  return (
    <Reveal dir="up" delay={(index % 4) * 90}>
      <article className="team-card">
        <div className="team-card__media">
          <Img src={member.image} alt={`${member.name} — ${member.role}`} />
        </div>
        <div className="team-card__body">
          <h3 className="team-card__name">{member.name}</h3>
          <p className="team-card__role">{member.role}</p>
          {member.focus && <p className="team-card__focus">{member.focus}</p>}
        </div>
      </article>
    </Reveal>
  )
}

export default TeamCard