import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="wrap scroll-mt-20 py-16 lg:py-28"
    >
      <p className="eyebrow">02 / Selected work</p>
      <h2
        id="projects-title"
        className="mt-4 font-serif text-[34px] leading-[1.04] lg:text-[52px]"
      >
        Projects
      </h2>

      <ul className="mt-10 flex flex-col gap-6">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
