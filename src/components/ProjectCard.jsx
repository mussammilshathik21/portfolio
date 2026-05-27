import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Project.css'

export default function ProjectCard({ image, title, description, live, github, tags = [] }) {
  return (
    <div className="project-card">
      <div className="project-img-wrap">
        <img src={image} alt={title} className="project-img" />
        <div className="project-overlay">
          <a href={live}   target="_blank" rel="noreferrer" className="overlay-btn">
            <FaExternalLinkAlt /> Live
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="overlay-btn overlay-btn--gh">
            <FaGithub /> Code
          </a>
        </div>
      </div>

      <div className="project-body">
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-btns">
          <a href={live}   target="_blank" rel="noreferrer" className="pcard-btn-live">
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="pcard-btn-gh">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
