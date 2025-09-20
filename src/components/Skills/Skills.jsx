import React from 'react'
import Heading from '../../Heading'
import { skills } from '../../data/data.jsx'
import './Skills.css'

const Skills = () => {
    return (
        <div>
            <Heading head='' end='Skills' description='Some of the tools I play with, Flexible to learn anything though :)'></Heading>
            <div className="skills-grid">
                {skills.map((skill, i) => (
                    <div className="skill-card" key={i}>
                        <div
                            className="skill-logo"
                            style={{ "--skill-color": skill.color }}
                        >
                            {skill.icon}
                        </div>
                        <div className="skill-info">
                            <p className="percent">{skill.percent}</p>
                            <p className="name">{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Skills
