import type { ChangeEvent } from 'react'

interface FormFieldProps {
  label: string
  name: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  type?: string
  autoComplete?: string
  multiline?: boolean
}

function FormField({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  autoComplete,
  multiline = false,
}: FormFieldProps) {
  const id = `contact-${name}`
  const errorId = `${id}-error`
  const fieldClass = error
    ? 'w-full rounded border-2 border-pop-deep bg-surface px-3 text-base'
    : 'w-full rounded border border-field bg-surface px-3 text-base'

  const sharedProps = {
    id,
    name,
    value,
    onChange,
    required: true,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {multiline ? (
        <textarea {...sharedProps} rows={5} className={`${fieldClass} py-2`} />
      ) : (
        <input
          {...sharedProps}
          type={type}
          autoComplete={autoComplete}
          className={`${fieldClass} min-h-11`}
        />
      )}
      {error && (
        <p
          id={errorId}
          className="flex items-center gap-1.5 text-sm text-pop-deep"
        >
          <span aria-hidden="true">⚠</span>
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
