import React from 'react'
import Card from './Card/Card.jsx'
import Heading from '../../Heading.jsx'
import { projects } from '../../data/data.js'
import './Projects.css'

const Projects = () => {
  return (
    <div>
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
