import { useEffect } from 'react'
import data from './data/portfolio.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Expertise from './components/Expertise'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.title = data.site.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', data.site.description)
  }, [])

  return (
    <div className="app-shell">
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <Navbar nav={data.nav} name={data.hero.name} profile={data.profile} />
      <main>
        <Hero hero={data.hero} />
        <About about={data.about} />
        <Experience experience={data.experience} />
        <Expertise expertise={data.expertise} softSkills={data.softSkills} />
        <Achievements achievements={data.achievements} />
        <Certifications certifications={data.certifications} />
        <Contact contact={data.contact} />
      </main>
      <Footer footer={data.footer} />
    </div>
  )
}

export default App
