import React from 'react'
import Heading from '../../Heading'
import { experiences } from '../../data/data.jsx'
import './Experience.css'

const Experience = () => {
    return (
        <div>
            <Heading head='My' end='Experience' description='Delivering Results: A Tech Professional`s Journey'></Heading>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3 className="company">
                                {exp.company} <span className="period">{exp.period}</span>
                            </h3>
                            <h4 className="role">{exp.role}</h4>
                            <ul className="points">
                                {exp.points.map((point, i) => (
                                    <li key={i}>✨ {point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
