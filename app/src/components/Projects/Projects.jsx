import React from 'react'
import Card from './Card/Card.jsx'
import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/data.jsx'
import './Projects.css'

const Projects = () => {
  // Sort projects by id (ascending)
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);
  const topProjects = sortedProjects.slice(0, 3);
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate('/projects');
  };

  return (
    <div>
      <div className="cards">
        {topProjects.map((proj) => (
          <Card key={proj.id} project={proj} />
        ))}
      </div>
      <div className="projects-footer">
        <button className="show-more-button" type="button" onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default Projects;
