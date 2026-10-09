import IDot from "./IDot"
import { useState } from "react"

  function Hero() {
  const [paused, setPaused] = useState(false)

  const lineClass = `block w-fit origin-left animate-breathe motion-reduce:animate-none ${
    paused ? '[animation-play-state:paused]' : ''
  }`

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="wrap scroll-mt-20 py-12 lg:py-16"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_408px] lg:gap-14">
        <div className="flex flex-col items-start gap-6">
          <p className="eyebrow">Lottie / Frontend development student</p>

          <h1
            id="hero-title"
            className="font-serif text-[38px] leading-[1.04] md:text-[52px] lg:text-[76px]"
          >
            <span className={lineClass}>Frontend craft</span>
            <span className={lineClass} style={{ animationDelay: '2.4s' }}>
              Clear stor<IDot />es
            </span>
            <span className={lineClass} style={{ animationDelay: '4.8s' }}>
              Creat<IDot />ve soul
            </span>
          </h1>

          <p className="max-w-[490px] text-base text-stone lg:text-lg">
            Hi, I’m Lottie. I bring a background in communication and a love of
            visual thinking to thoughtful, human-friendly interfaces.
          </p>

        <button
  type="button"
  onClick={() => setPaused((prev) => !prev)}
  className="inline-flex min-h-11 items-center gap-2 text-[13px] font-medium text-stone underline decoration-1 underline-offset-4 hover:text-ink hover:decoration-pop motion-reduce:hidden"
>
  <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span>
  {paused ? 'Play motion' : 'Pause motion'}
</button>
        </div>
        <figure className="w-4/5 justify-self-end md:w-full">
          <div className="aspect-[408/472] overflow-hidden rounded-t-[180px] rounded-b bg-sand">
            <img
              src="/images/hero-portrait.jpg"
              alt="Portrait of Lottie in a white shirt, looking to the side in soft light"
              className="size-full object-cover object-[50%_20%]"
            />
          </div>
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
      </div>
    </section>
  )
}

export default Hero