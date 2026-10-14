import { MotionConfig } from 'motion/react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import OffScreen from './components/OffScreen'
import Projects from './components/Projects'
import Toolbox from './components/Toolbox'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <OffScreen />
        <Toolbox />
        <Contact />
      </main>
    </MotionConfig>
  )
}

export default App
