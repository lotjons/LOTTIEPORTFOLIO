import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-linen/90 backdrop-blur">
      <div className="wrap flex h-20 items-center justify-between">
        <a href="#home" className="font-logo text-3xl font-medium no-underline">
          lottie<span className="text-pop" aria-hidden="true">*</span>
        </a>

        {/* Desktop: vanliga länkar */}
        <nav aria-label="Main" className="hidden sm:block">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium no-underline decoration-pop decoration-2 underline-offset-4 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobil: knapp som öppnar menyn */}
        <button
          type="button"
          className="min-h-11 rounded border border-ink px-3 text-sm font-medium sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="wrap pb-8 sm:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-rule py-4 font-serif text-4xl no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header