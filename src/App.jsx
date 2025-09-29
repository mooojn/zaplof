import React from 'react'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Projects from './components/Projects/Projects.jsx'
import Blob from './components/Blob/Blob.jsx'
// import Experience from './components/Experience/Experience.jsx'
import Services from './components/Services/Services.jsx'

const App = () => {
  return (
    <>
      <Blob />
      <Header></Header>
      <Hero></Hero>
    <div className="components">
      <Projects></Projects>
      {/* <Experience></Experience> */}
      <Services></Services>
    </div>
    </>
  )
}

export default App
