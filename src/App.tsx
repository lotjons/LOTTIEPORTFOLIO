import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
