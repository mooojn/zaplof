import React from 'react'
import { components } from '../data/layout.jsx'

const Home = () => {
  return (
    <>
      {components.map((comp, idx) =>
        comp.id === null ? (
          <React.Fragment key={idx}>{comp.component}</React.Fragment>
        ) : (
          <div key={idx} id={comp.id}>
            {comp.heading}
            {comp.component}
          </div>
        )
      )}
    </>
  )
}

export default Home

