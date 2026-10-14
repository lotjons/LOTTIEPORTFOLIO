import type { ChangeEvent } from 'react'

interface FormFieldProps {
  label: string
  name: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  autoComplete?: string
  multiline?: boolean
}

function FormField({
  label,
  name,
  value,
  onChange,
  type = 'text',
  autoComplete,
  multiline = false,
}: FormFieldProps) {
  const id = `contact-${name}`
  const fieldClass =
    'w-full rounded border border-field bg-surface px-3 text-base'

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          className={`${fieldClass} py-2`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className={`${fieldClass} min-h-11`}
        />
      )}
    </div>
  )
}

export default FormField
