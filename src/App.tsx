import { MotionConfig } from 'motion/react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import OffScreen from './components/OffScreen'
import Projects from './components/Projects'
import Toolbox from './components/Toolbox'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-3 focus:text-linen"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <OffScreen />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
