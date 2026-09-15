import Reveal from './../ui/Reveal.jsx'
import { DIVISIONS } from '../../data/organization.js'

// Organizational structure — a layered visual of the five divisions.
function OrganizationTree() {
  return (
    <div className="org-tree">
      <Reveal dir="up">
        <div className="org-tree__lead">
          <span className="org-tree__lead-crown" aria-hidden="true">✦</span>
          <strong>ATTII VERSE</strong>
          <span className="org-tree__lead-sub">Executive Leadership &amp; Governance</span>
        </div>
      </Reveal>

      <div className="org-tree__spine" aria-hidden="true" />

      {DIVISIONS.map((div, i) => (
        <Reveal key={div.number} dir={i % 2 === 0 ? 'right' : 'left'} delay={i * 70}>
          <article className="org-tree__node">
            <span className="org-tree__node-num">{div.number}</span>
            <div className="org-tree__node-body">
              <h3 className="org-tree__node-title">{div.title}</h3>
              <p className="org-tree__node-note">{div.note}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

export default OrganizationTree