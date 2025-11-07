import React, { useMemo, useState } from 'react'
import Card from '../components/Projects/Card/Card.jsx'
import { projects } from '../data/data.jsx'
import './ProjectsPage.css'

const ProjectsPage = () => {
  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => a.id - b.id),
    [],
  )

  const categories = useMemo(() => {
    const unique = new Set(sortedProjects.map((project) => project.category))
    return ['All', ...unique]
  }, [sortedProjects])

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return sortedProjects
    }

    return sortedProjects.filter((project) => project.category === activeCategory)
  }, [activeCategory, sortedProjects])

  return (
    <main className="projects-page">
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
  )
}

export default ProjectsPage

