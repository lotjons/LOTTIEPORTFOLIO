interface TagFilterProps {
  tags: string[]
  selectedTags: string[]
  onToggle: (tag: string) => void
  onClear: () => void
}

function TagFilter({ tags, selectedTags, onToggle, onClear }: TagFilterProps) {
  return (
    <fieldset className="mt-8 flex flex-wrap items-center gap-2">
      <legend className="sr-only">Filter projects by technology</legend>

      {tags.map((tag) => {
        const isActive = selectedTags.includes(tag)
        return (
          <button
            key={tag}
            type="button"
            aria-pressed={isActive}
            onClick={() => onToggle(tag)}
            className={
              isActive
                ? 'inline-flex min-h-11 items-center gap-1.5 rounded-full border border-pop bg-pop px-4 text-sm font-medium text-surface'
                : 'inline-flex min-h-11 items-center gap-1.5 rounded-full border border-rule px-4 text-sm font-medium hover:bg-petal'
            }
          >
            {isActive && <span aria-hidden="true">✓</span>}
            {tag}
          </button>
        )
      })}

      {selectedTags.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="min-h-11 px-2 text-sm font-medium underline decoration-1 underline-offset-4 hover:decoration-2 hover:decoration-pop"
        >
          Clear filters
        </button>
      )}
    </fieldset>
  )
}

export default TagFilter
