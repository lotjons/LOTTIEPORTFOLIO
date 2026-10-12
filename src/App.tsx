import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <section id="projects" className="wrap min-h-screen scroll-mt-20 py-16">
          <h2 className="font-serif text-4xl">Projects ({projects.length})</h2>
          <ProjectCard project={projects[1]} />
        </section>
        <section id="contact" className="wrap min-h-screen scroll-mt-20 py-16">
          <h2 className="font-serif text-4xl">Contact</h2>
        </section>
      </main>
    </>
  )
}

export default App
