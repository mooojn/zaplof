import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Projects from './components/Projects/Projects.jsx'
import Blob from './components/Blob/Blob.jsx'
import Experience from './components/Experience/Experience.jsx'
import Skills from './components/Skills/Skills.jsx'

const App = () => {
  // const shaderGradient = "https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.4&uStrength=0.3&uTime=0&wireframe=false"
  // const shaderGradient = "https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&toggleAxis=false&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false"
  const shaderGradient = "https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.4&uStrength=1.5&uTime=8&wireframe=false"
  
  
  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            pointerEvents: 'none',  
            zIndex: -1,
          }}
        >
          <ShaderGradient
            control="query"
            urlString={shaderGradient}
          />
        </ShaderGradientCanvas>

        <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '2rem' }}>
      <Header></Header>
       <Hero></Hero>
        </div>
      </div>
      <div className="components">
        <Projects></Projects>
        <Experience></Experience>
        <Skills></Skills>
      </div> 
    </>
  )
}

export default App
