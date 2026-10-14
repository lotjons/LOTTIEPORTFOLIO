import ContactForm from './ContactForm'

const contactLinks = [
  {
    label: 'Email',
    value: 'lottiejonsson@hotmail.com',
    href: 'mailto:lottiejonsson@hotmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/lotjons',
    href: 'https://github.com/lotjons',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/lottiejonsson',
    href: 'https://www.linkedin.com/in/lottiejonsson',
  },
]

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-sage py-16 lg:py-28"
    >
      <div className="wrap grid gap-12 md:grid-cols-[5fr_7fr]">
        <div className="flex flex-col items-start gap-5">
          <p className="eyebrow">04 / Contact</p>
          <h2
            id="contact-title"
            className="font-serif text-[34px] leading-[1.04] lg:text-[52px]"
          >
            Say hello
          </h2>
          <p className="text-base lg:text-lg">
            Looking for an intern, a collaborator or just want to talk design
            and code? I’d love to hear from you.
          </p>

          <dl className="mt-4 flex flex-col gap-5">
            {contactLinks.map((link) => (
              <div key={link.label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-stone">
                  {link.label}
                </dt>
                <dd>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-lg underline decoration-1 underline-offset-4 hover:decoration-2 hover:decoration-pop"
                  >
                    {link.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
