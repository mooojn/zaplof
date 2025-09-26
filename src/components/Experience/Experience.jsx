import React from 'react'
import Heading from '../../Heading'
import { experiences } from '../../data/data.jsx'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Heading
        head="My"
        end="Experience"
        description="Delivering Results: A Tech Professional's Journey"
      />

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3 className="company">{exp.company}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <h4 className="role">{exp.role}</h4>
            <ul className="points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
