import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    kind,
    year,
    tagline,
    description,
    tags,
    links,
    image,
    imageAlt,
  } = project

  return (
    <article className="grid gap-4 rounded bg-sand p-4 sm:p-5 md:grid-cols-[5fr_7fr] md:gap-10">
      <div className="aspect-[4/3] overflow-hidden rounded bg-linen md:aspect-auto md:h-[280px]">
        {image ? (
          <img
            src={image}
            alt={imageAlt ?? ''}
            className="size-full object-cover"
          />
        ) : (
          <div className="grid size-full place-items-center text-sm text-stone">
            Preview coming soon
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center gap-2.5 md:pr-6">
        <p className="flex gap-4 text-xs text-stone">
          <span>{kind}</span>
          <span>{year}</span>
        </p>
        <h3 className="font-serif text-[26px] leading-tight lg:text-[32px]">
          {title}
        </h3>
        <p className="font-serif text-xl leading-snug">{tagline}</p>
        <p className="text-[15px] text-stone">{description}</p>

        <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-petal px-2.5 py-0.5 text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-x-5">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="inline-flex min-h-11 items-center gap-1 text-sm font-medium underline decoration-1 underline-offset-4 hover:decoration-2 hover:decoration-pop"
            >
              {link.label}
              <span className="sr-only"> – {title}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
