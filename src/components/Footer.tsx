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

        <a href="#home" className="link">
          <span className="link-label">Back to top</span>
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
