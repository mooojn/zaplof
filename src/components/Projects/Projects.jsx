import React from 'react'
import Card from './Card/Card.jsx'
import Heading from '../../Heading.jsx'
import { projects } from '../../data/data.jsx'
import './Projects.css'

const Projects = () => {
  return (
    <div>
      <Heading
        head=''
        end='Projects'
        description='A showcase of impactful projects, highlighting creativity, innovation, and expertise beyond client work.'
      ></Heading>
      <div className="cards">
        {projects.map((proj, id) =>
          <Card key={id} project={proj}></Card>
        )}
      </div>
    </div>
  )
}

export default Projects
