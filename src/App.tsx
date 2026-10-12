import Header from './components/Header'
import Hero from './components/Hero'
import { projects } from './data/projects'
import About from './components/About'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
          <h2 className="font-serif text-4xl">About</h2>
          <h2 className="font-serif text-4xl">Projects ({projects.length})</h2>
          <h2 className="font-serif text-4xl">Contact</h2>
      </main>
    </>
  )
}

export default App