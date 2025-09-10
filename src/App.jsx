import React from 'react'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Projects from './components/Projects/Projects.jsx'
import Blob from './components/Blob/Blob.jsx'

const App = () => {
  return (
    <>
      <Blob />
      <Header></Header>
      <Hero></Hero>
      <Projects></Projects>
    </>
  )
}

export default App
