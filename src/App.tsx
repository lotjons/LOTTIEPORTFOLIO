import Header from './components/Header'
import Hero from './components/Hero'
import { projects } from './data/projects'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="about" className="wrap min-h-screen scroll-mt-20 py-16">
          <h2 className="font-serif text-4xl">About</h2>
        </section>
        <section id="projects" className="wrap min-h-screen scroll-mt-20 py-16">
          <h2 className="font-serif text-4xl">Projects ({projects.length})</h2>
        </section>
        <section id="contact" className="wrap min-h-screen scroll-mt-20 py-16">
          <h2 className="font-serif text-4xl">Contact</h2>
        </section>
      </main>
    </>
  )
}

export default App