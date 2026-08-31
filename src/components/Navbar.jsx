import { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

function Navbar({ nav, name, profile }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 960px)').matches) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand" onClick={() => setOpen(false)}>
          <img
            className="navbar__avatar"
            src={profile.image}
            alt={profile.alt}
          />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">{name}</span>
            <span className="navbar__brand-sub">INFRA · NETOPS</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`navbar__drawer ${open ? 'is-open' : ''}`}
        aria-label="Mobile"
        hidden={!open}
      >
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
