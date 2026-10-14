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

function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(emptyForm)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <FormField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        autoComplete="name"
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        autoComplete="email"
      />
      <FormField
        label="Phone"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        autoComplete="tel"
      />
      <FormField
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
      />

      <div className="sm:col-span-2">
        <FormField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
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
