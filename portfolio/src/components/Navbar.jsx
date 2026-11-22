import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLang } from '../i18n/LanguageContext'

export const SECTIONS = ['home', 'about', 'projects', 'mini', 'experience', 'achievements', 'contact']

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Destaca no menu a seção que está visível
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
      const mid = window.innerHeight * 0.4
      let current = 'home'
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= mid) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <nav className="nav__pill" aria-label="Menu principal">
        <a href="#home" className="nav__brand" onClick={go('home')} aria-label="Início">
          BA<span>.</span>
        </a>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {SECTIONS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={go(id)} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'page' : undefined}>
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__lang" role="group" aria-label="Idioma / Language">
          <button type="button" className={lang === 'pt' ? 'is-on' : ''} onClick={() => setLang('pt')} aria-pressed={lang === 'pt'}>
            PT
          </button>
          <button type="button" className={lang === 'en' ? 'is-on' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>
            EN
          </button>
        </div>

        <button type="button" className="nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Abrir menu" aria-expanded={open}>
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>
    </header>
  )
}
