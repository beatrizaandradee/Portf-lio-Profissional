import { useEffect, useState } from 'react'
import { FiArrowRight, FiSend } from 'react-icons/fi'
import { profile } from '../data/profile'
import { useLang } from '../i18n/LanguageContext'
import Badge from '../components/Badge'
import SocialLinks from '../components/SocialLinks'

// Efeito de digitação que alterna entre as frases
function useTyping(words) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setText('')
    setI(0)
    setDeleting(false)
  }, [words])

  useEffect(() => {
    const word = words[i % words.length]
    let delay = deleting ? 40 : 85
    if (!deleting && text === word) delay = 1600
    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setI((n) => n + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, i, words])

  return text
}

export default function Hero() {
  const { t, pick, lang } = useLang()
  const typed = useTyping(profile.typing[lang])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="grad">{t.hero.welcome}</span>
            <br />
            {t.hero.portfolio}
          </h1>
          <p className="hero__typing">
            {typed}
            <span className="caret" aria-hidden="true">|</span>
          </p>
          <p className="hero__desc">{pick(profile.heroText)}</p>

          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={() => scrollTo('projects')}>
              {t.hero.seeProjects} <FiArrowRight />
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => scrollTo('contact')}>
              {t.hero.contactMe} <FiSend />
            </button>
          </div>

          <div className="hero__find">
            <span>{t.hero.findMe}</span>
            <SocialLinks size={15} />
          </div>
        </div>

        <Badge />
      </div>
    </section>
  )
}
