import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import FormField from './FormField'

interface ContactFormValues {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const emptyForm: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

type FormErrors = Partial<Record<keyof ContactFormValues, string>>

function validate(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email, like name@example.com.'
  }
  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.'
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'
  if (values.message.trim().length < 20) {
    errors.message = 'Please write at least 20 characters.'
  }
  return errors
}

function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })

    const key = name as keyof ContactFormValues
    if (errors[key]) {
      setErrors({ ...errors, [key]: undefined })
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newErrors = validate(form)
    setErrors(newErrors)

    const firstError = Object.keys(newErrors)[0]
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus()
      return
    }

    setSent(true)
    setForm(emptyForm)
  }

  //  visas i stället för formuläret när det skickats
  if (sent) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded bg-linen p-8"
      >
        <p className="font-serif text-3xl">Thank you!</p>
        <p>
          The form isn’t connected yet. Please email me at{' '}
          <a href="mailto:lottiejonsson@hotmail.com" className="underline">
            lottiejonsson@hotmail.com
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="link">
          <span className="link-label">Send another message</span>
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-5 sm:grid-cols-2"
    >
      <p className="text-sm text-stone sm:col-span-2">
        All fields are required.
      </p>

      <FormField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
        autoComplete="name"
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
        autoComplete="email"
      />
      <FormField
        label="Phone"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        error={errors.phone}
        autoComplete="tel"
      />
      <FormField
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        error={errors.subject}
      />

      <div className="sm:col-span-2">
        <FormField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          error={errors.message}
          multiline
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="min-h-11 rounded-full bg-pop px-6 font-semibold text-surface hover:bg-pop-hover"
        >
          Send message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
