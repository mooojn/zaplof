import React from 'react'
import Card from './Card/Card.jsx'
import { projects } from '../../data/data.jsx'
import './Projects.css'

const Projects = () => {
  // Sort projects by id (ascending)
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

  return (
    <div>
      <div className="cards">
        {sortedProjects.map((proj) => (
          <Card key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
