import React from 'react'
import Card from './Card/Card.jsx'
import Heading from '../../Heading.jsx'
import { projects } from '../../data/data.jsx'
import './Projects.css'

const Projects = () => {
  return (
    <div id="projects">
      <Heading head='Recent' end='Projects' description='I enjoy building side projects and constantly challenge myself apart from my actual work :)'></Heading>
      <div className="cards">
        {projects.map((proj, id)=>
          <Card key={id} project={proj}></Card>
        )}
      </div>
    </div>
  )
}

export default Projects
