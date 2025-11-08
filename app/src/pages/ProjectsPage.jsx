import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Card from '../components/Projects/Card/Card.jsx'
import { projects } from '../data/data.jsx'
import './ProjectsPage.css'

const ProjectsPage = () => {
  const navigate = useNavigate()
  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => a.id - b.id),
    [],
  )

  const categories = useMemo(() => {
    const unique = new Set(sortedProjects.map((project) => project.category))
    return ['All', ...unique]
  }, [sortedProjects])

  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return sortedProjects
    }

    return sortedProjects.filter((project) => project.category === activeCategory)
  }, [activeCategory, sortedProjects])

  return (
    <>
      {/* <Header></Header> */}
      <main className="projects-page">
        <div className="projects-page-header">
          <button
            type="button"
            className="go-back-button"
            onClick={() => navigate('/')}
          >
            ← Go Back
          </button>
        </div>
        <section className="projects-page-hero">
          <h1>Projects</h1>
          <p>
            Explore our complete portfolio. Use the filters below to discover projects by the
            industries and services we work with most.
          </p>
        </section>

        <section className="projects-page-filters" aria-label="Project filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={category === activeCategory ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </section>

        <section className="projects-page-grid">
          {filteredProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </section>
      </main>
    </>
  )
}

export default ProjectsPage

