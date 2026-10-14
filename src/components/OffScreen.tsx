const photos = [
  {
    src: '/images/offscreen/training.jpg',
    alt: 'Lottie smiling at the gym with a wallball on her shoulder',
    caption: 'Training',
    credit: true,
  },
  {
    src: '/images/offscreen/mountains.jpg',
    alt: 'Lottie with a hiking backpack on a rock, looking out over a wide mountain valley',
    caption: 'In the mountains',
    credit: false,
  },
  {
    src: '/images/offscreen/sylvester.jpg',
    alt: 'Lottie hugging Sylvester, her chocolate labrador, on a bench',
    caption: 'With Sylvester',
    credit: false,
  },
]

function OffScreen() {
  return (
    <section
      aria-labelledby="offscreen-title"
      className="bg-ink pt-16 text-linen lg:pt-28"
    >
      <div className="wrap">
        <p className="text-xs font-semibold uppercase tracking-wider text-rule">
          Off screen
        </p>
        <h2
          id="offscreen-title"
          className="mt-4 max-w-2xl font-serif text-[30px] leading-tight lg:text-[40px]"
        >
          Fresh air, workouts &amp; a brown labrador
          <span className="text-pop">.</span>
        </h2>

        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {photos.map((photo) => (
            <li key={photo.src}>
              <figure>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded object-cover"
                />
                <figcaption className="mt-3 text-sm text-rule">
                  {photo.caption}
                  {photo.credit && (
                    <>
                      {' · '}
                      <a
                        href="https://www.instagram.com/eveers/"
                        className="underline decoration-1 underline-offset-4 hover:decoration-2 hover:decoration-pop"
                      >
                        Photo: Per Evers
                      </a>
                    </>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OffScreen
