import About from './components/About'
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
        <section id="contact" className="wrap min-h-screen scroll-mt-20 py-16">
          <h2 className="font-serif text-4xl">Contact</h2>
        </section>
      </main>
    </>
  )
}

export default App
