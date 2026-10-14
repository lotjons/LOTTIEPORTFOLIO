const toolGroups = [
  {
    title: 'Code',
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Git & GitHub',
    ],
  },
  {
    title: 'Design',
    tools: ['Figma', 'Canva', 'UX', 'Accessibility'],
  },
  {
    title: 'Communication',
    tools: ['Copywriting', 'Strategy', 'Film'],
  },
]

function Toolbox() {
  return (
    <section
      aria-labelledby="toolbox-title"
      className="bg-ink pt-16 pb-16 text-linen lg:pt-24 lg:pb-28"
    >
      <div className="wrap">
        <p className="text-xs font-semibold uppercase tracking-wider text-rule">
          03 / Toolbox
        </p>
        <h2
          id="toolbox-title"
          className="mt-4 font-serif text-[34px] leading-[1.04] lg:text-[52px]"
        >
          What I work with<span className="text-pop">.</span>
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {toolGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-[28px]">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-rule px-3 py-1 text-sm"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Toolbox
