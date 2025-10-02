// components
import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Projects from '../components/Projects/Projects.jsx'
import Blob from '../components/Blob/Blob.jsx'
import Services from '../components/Services/Services.jsx'

export const navItems = [
    "Home",
    "Projects",
    "Services",
]

export const components = [
  { component: <Blob />, id: null },
  { component: <Header />, id: "home" },
  { component: <Hero />, id: null },
  { component: <Projects />, id: "projects" },
  { component: <Services />, id: "services" }
];
