function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-rule py-10">
      <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-logo text-2xl font-medium">
          lottie
          <span className="text-pop" aria-hidden="true">
            *
          </span>
        </p>

        <p className="text-sm text-stone">
          © {year} Lottie Jonsson · Built with React, TypeScript &amp; Tailwind
        </p>

        <a
          href="#home"
          className="inline-flex min-h-11 items-center gap-1 text-sm font-medium underline decoration-1 underline-offset-4 hover:decoration-2 hover:decoration-pop"
        >
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
