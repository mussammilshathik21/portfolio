import { useState, useEffect } from 'react'
import './Navbar.css'

const LINKS = [
  { id: 'home',    label: 'Home'     },
  { id: 'about',   label: 'About'    },
  { id: 'skills',  label: 'Skills'   },
  { id: 'project', label: 'Projects' },
  { id: 'contact', label: 'Contact'  },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [active,   setActive]   = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const els = LINKS.map(l => document.getElementById(l.id)).filter(Boolean)
    const io  = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    els.forEach(s => io.observe(s))
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo" onClick={close}>MS<span>.</span></a>

          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? 'active' : ''}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`ham ${open ? 'ham--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        {LINKS.map(l => (
          <a key={l.id} href={`#${l.id}`}
             className={active === l.id ? 'active' : ''}
             onClick={close}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
