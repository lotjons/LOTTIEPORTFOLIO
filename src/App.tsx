import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import OffScreen from './components/OffScreen'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <OffScreen />
        <Contact />
      </main>
    </>
  )
}

export default App
