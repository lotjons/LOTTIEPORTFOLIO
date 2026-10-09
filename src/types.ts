export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  kind: string          // t.ex. "School project"
  year: string
  tagline: string
  description: string
  tags: string[]
  links: ProjectLink[]
  image?: string        // ? = valfri
  imageAlt?: string
  sprite?: boolean      // Pixel Pup har en animation i stället för en bild
}