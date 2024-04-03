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
   <div className="w-full h-auto bg-bodyColor ">
     <Header />
     <div className="">
     <Banner />
     <About />
     <Skills />
     <Experiences />
     <Achievements />
     <Projects />
     <Contact />
     </div>
    </div>
    </>
  )
}

export default App
