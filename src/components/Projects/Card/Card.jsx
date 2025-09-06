import React from 'react'
import './Card.css'

const Card = ({ project }) => {
  return (
    <>
      <div className="project-card">
        <div className="gradient-blob-2"></div>
        <div className="left">
          <h3 className="project-sub-heading">{project.category}</h3>
          <h2 className="project-heading">{project.title}</h2>
          <p className="project-description">
            {project.description}
          </p>

          <ul className="project-features">
            {project.features.map((feature, id) =>
              <li key={id}>✅ {feature}</li>
            )}
          </ul>

          <ul className="project-badges">
            {project.technologies.map((technology, id) =>
              <li key={id}>{technology}</li>
            )}
          </ul>

          <div className="project-links">
            {project.actions.map((action, id) =>
              <a href={action.link} key={id}><button>{action.name}</button></a>
            )}
          </div>
        </div>
        <div className="right">
          <img src={project.image} alt="" />
        </div>
      </div>
    </>
  )
}

export default Card
