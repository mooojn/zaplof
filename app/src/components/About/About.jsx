import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'
import './About.css'

const About = () => {
  return (
    <div className="about-section">
      <div className="shader-wrapper">
        <ShaderGradientCanvas>
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.5&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false"
          />
        </ShaderGradientCanvas>
      </div>

      <div className="about-content">
        <h3>Our ‎ ‎  Story</h3>
        <h1>Zaplof is a forward-thinking brand focused on delivering digital excellence. We blend creativity, technology, and strategy to craft solutions that empower businesses and leave a lasting impact.</h1>
      </div>

      <div className='about-content-cards'>
          <AboutCard value='20+' desc='Projects Completed' cls='left'/>
          <AboutCard value='5+' desc='International Clients' cls='left'/>
          <AboutCard value='3+' desc='Years of Experience' cls='right'/>
          <AboutCard value='95%' desc='Client Satisfaction' cls='right'/>
      </div>
    </div>
  )
}

const AboutCard = ({ value, desc, cls }) => {
  return (
    <>
      <div className={`about-card card-${cls}`}>
        <h1 className='about-card-value'>{value}</h1>
        <h2 className='about-card-desc'>{desc}</h2>
      </div>
    </>
  )
}


export default About

