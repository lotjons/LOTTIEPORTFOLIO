function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="wrap scroll-mt-20 py-16 lg:py-28">
      <p className="eyebrow">01 / A little about me</p>

      <div className="mt-8 grid items-center gap-8 md:grid-cols-[5fr_7fr] lg:gap-16">
        <figure>
          <img
            src="/images/about-portrait.jpg"
            alt="Close-up portrait of Lottie, half in shadow, against a soft green wall"
            className="aspect-[4/5] w-full rounded bg-sage object-cover object-[50%_30%]"
          />
          <figcaption className="mt-2.5 text-xs text-stone">
            Photo:{' '}
            <a
              href="https://www.instagram.com/eveers/"
              className="underline underline-offset-2 hover:decoration-pop"
            >
              Per Evers<span className="sr-only"> on Instagram</span>
            </a>
          </figcaption>
        </figure>

        <div className="flex flex-col items-start gap-5">
          <h2 id="about-title" className="font-serif text-[34px] leading-[1.04] lg:text-[52px]">
            People first.
            <br />
            Pixels second.
          </h2>
          <p className="text-base lg:text-lg">
            I’m a frontend development student with roots in communication, UX and visual
            creativity. I’m learning to turn good ideas into websites that feel clear, useful
            and a little unexpected.
          </p>
          <p className="text-base text-stone lg:text-lg">
            My starting point is always the person on the other side of the screen. What do
            they need? What makes sense? Then comes the fun part: shaping the details in
            design and code.
          </p>
          <p className="flex items-center gap-3 text-sm text-stone">
            <span aria-hidden="true" className="font-logo text-2xl text-pop">*</span>
            Always learning. Always noticing.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About