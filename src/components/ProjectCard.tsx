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
    sprite,
  } = project

  return (
    <article className="group grid gap-4 rounded bg-sand p-4 sm:p-5 md:grid-cols-[5fr_7fr] md:gap-10">
      <div className="aspect-[4/3] overflow-hidden rounded bg-linen md:aspect-auto md:h-[280px]">
        {image ? (
          <img
            src={image}
            alt={imageAlt ?? ''}
            className="size-full object-cover"
          />
        ) : sprite ? (
          <div
            role="img"
            aria-label="Pixel-art Sylvester, my chocolate labrador, walking"
            className="flex size-full items-center justify-center"
          >
            <span className="sprite-dog group-hover:animate-walk group-focus-within:animate-walk" />
          </div>
        ) : (
          <div className="grid size-full place-items-center text-sm text-stone">
            Preview coming soon
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center gap-3 md:pr-6">
        <p className="flex gap-4 text-xs text-stone">
          <span>{kind}</span>
          <span>{year}</span>
        </p>
        <div className="mb-5 flex flex-col gap-2">
          <h3 className="font-serif text-[26px] leading-none lg:text-[32px]">
            {title}
          </h3>
          <p className="text-[15px] font-medium leading-snug text-stone">
            {tagline}
          </p>
        </div>
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
            <a key={link.url} href={link.url} className="link">
              <span className="link-label">{link.label}</span>
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
