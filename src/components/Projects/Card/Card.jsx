import React from 'react'
import proj from '../../../assets/proj.png'
import './Card.css'

const Card = () => {
  return (
    <div className="project-card">
      <div className="gradient-blob-2"></div>
      <div className="left">
        <h3 className="project-sub-heading">Web App</h3>
        <h2 className="project-heading">FormCraft</h2>
        <p className="project-description">
          FormCraft is an AI-powered no-code form builder that allows you to create responsive forms with ease. It features a drag-and-drop interface, file upload option, AI form creation, analytics dashboard and a wide range of customizations.
        </p>

        <ul className="project-features">
          <li>✅ AI Form Builder</li>
          <li>✅ Drag-and-Drop Interface</li>
          <li>✅ Wide variety of Form Templates</li>
          <li>✅ Real-Time Analytics Dashboard</li>
          <li>✅ Wide Range of Field Types including File Uploads</li>
          <li>✅ Conditional Logic & Validation</li>
          <li>✅ Multi-Page Forms</li>
        </ul>

        <ul className="project-badges">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Airtable</li>
          <li>Google APIs</li>
          <li>Webhooks</li>
          <li>ShadCN UI</li>
          <li>Gemini AI</li>
          <li>MongoDB</li>
        </ul>

        <div className="project-links">
          <button>Live</button>
          <button>Github</button>
        </div>
      </div>
      <div className="right">
        <img src={proj} alt="" />
      </div>
    </div>
  )
}

export default Card
