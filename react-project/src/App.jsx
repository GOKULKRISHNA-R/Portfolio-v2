import portfolio from './data/portfolio.json'

import Hero from './sections/Hero'
import Research from './sections/Research'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Activities from './sections/Activities'
import Closing from './sections/Closing'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Hero data={portfolio.hero} />
      <Research data={portfolio.research} />
      <Experience data={portfolio.experience} />
      <Projects data={portfolio.projects} />
      <Activities data={portfolio.activities} />
      <Closing skills={portfolio.skills} education={portfolio.education} />
      <Footer data={portfolio.footer} />
    </>
  )
}
