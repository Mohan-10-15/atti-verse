import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal.jsx'
import Img from '../ui/Img.jsx'
import Icon from '../ui/Icon.jsx'

function ProjectCard({ project, index = 0, visibleLabel = false }) {
  return (
    <Reveal dir="up" delay={(index % 3) * 80}>
      <Link to="/work" className={`project-card ${visibleLabel ? 'project-card--vis' : ''}`} aria-label={project.title}>
        <div className="project-card__media">
          <Img src={project.image} alt={`${project.title} — ${project.category}`} />
        </div>
        <div className="project-card__body">
          <span className="project-card__cat">{project.category}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>
          <div className="project-card__footer">
            <span>
              {project.year} · View Project
            </span>
            <Icon name="arrow-up-right" size={16} />
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export default ProjectCard