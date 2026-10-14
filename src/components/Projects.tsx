import { AnimatePresence, motion } from 'motion/react'
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
        <ul className="relative mt-6 flex flex-col gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {shownProjects.map((project) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
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
            className="link"
          >
            <span className="link-label">
              {hasMore ? 'Show more' : 'Show fewer'}
            </span>
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
