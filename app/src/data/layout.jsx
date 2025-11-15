// components
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Hero from '../components/Hero/Hero.jsx'
import About from '../components/About/About.jsx'
import AboutSection from '../components/About-Section/AboutSection.jsx'
import Projects from '../components/Projects/Projects.jsx'
import Blob from '../components/Blob/Blob.jsx'
import Services from '../components/Services/Services.jsx'

import Heading from '../Heading.jsx'

export const navItems = [
  "Home",
  "About",
  "Projects",
  "Services",
]

export const components = [
  {
    id: null,
    component: <Blob />,
  },
  {
    id: "home",
    component: <Header />,
  },
  {
    id: null,
    component: <Hero />,
  },
  {
    id: "about",
    // component: <About />,
    component: <AboutSection />,
    heading: <Heading
      head=""
      end="About"
      // description="Zaplof is a forward-thinking brand focused on delivering digital excellence. We blend creativity, technology, and strategy to craft solutions that empower businesses and leave a lasting impact."
    />
  },
  {
    id: "projects",
    component: <Projects />,
    heading: <Heading
      head=""
      end="Projects"
      // description="A showcase of impactful projects, highlighting creativity, innovation, and expertise beyond client work."
    />
  },
  {
    id: "services",
    component: <Services />,
    heading: <Heading
      head=""
      end="Services"
      // description="Offering a versatile range of digital services, tailored to help your brand grow"
    />
  },
  {
    id: null,
    component: <Footer />,
  },
];
