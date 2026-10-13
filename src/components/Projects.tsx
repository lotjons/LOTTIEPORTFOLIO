import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import TagFilter from './TagFilter'

const filterTags = [
  'React',
  'TypeScript',
  'JavaScript',
  'CSS',
  'UX',
  'Accessibility',
  'Figma',
  'Communication',
]
const PAGE_SIZE = 3

function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [shown, setShown] = useState(PAGE_SIZE)

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
    setShown(PAGE_SIZE)
  }

  function clearTags() {
    setSelectedTags([])
    setShown(PAGE_SIZE)
  }

  const visibleProjects = projects.filter((project) =>
    selectedTags.every((tag) => project.tags.includes(tag)),
  )
  const shownProjects = visibleProjects.slice(0, shown)
  const hasMore = shown < visibleProjects.length

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

      <TagFilter
        tags={filterTags}
        selectedTags={selectedTags}
        onToggle={toggleTag}
        onClear={clearTags}
      />
      <p aria-live="polite" className="mt-4 text-sm text-stone">
        Showing {visibleProjects.length} of {projects.length} projects
      </p>

      {visibleProjects.length > 0 ? (
        <ul className="mt-6 flex flex-col gap-6">
          {shownProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 rounded bg-sand p-8 text-center">
          No projects match all of those tags. Try removing one.
        </p>
      )}
      {visibleProjects.length > PAGE_SIZE && (
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setShown(hasMore ? shown + PAGE_SIZE : PAGE_SIZE)}
            className="min-h-11 text-sm font-semibold underline decoration-1 underline-offset-4 hover:decoration-2 hover:decoration-pop"
          >
            {hasMore ? 'Show more' : 'Show fewer'}
          </button>
          <span className="text-sm text-stone">
            {shownProjects.length} / {visibleProjects.length}
          </span>
        </div>
      )}
    </section>
  )
}

export default Projects
