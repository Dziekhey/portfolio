import './App.css'
import About from './sections/about/About'
import Achievements from './sections/achievements/Achievements'
import Banner from './sections/banner/Banner'
import Contact from './sections/contact/Contact'
import Experiences from './sections/experiences/Experiences'
import Header from './sections/header/Header'
import Projects from './sections/projects/Projects'
import Skills from './sections/skills/Skills'

function App() {

  return (
    <>
     <Header />
     <Banner />
     <About />
     <Skills />
     <Experiences />
     <Achievements />
     <Projects />
     <Contact />
    </>
  )
}

export default App
