import { FiAward, FiFileText, FiExternalLink, FiClock } from 'react-icons/fi'
import { awards, certificates } from '../data/achievements'
import { useLang } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

export default function Achievements() {
  const { t, pick } = useLang()

  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal as="h2" className="section__title">
          {t.achievements.title}
        </Reveal>
        <Reveal as="p" className="section__sub">
          {t.achievements.subtitle}
        </Reveal>

        {awards.map((a) => (
          <Reveal key={pick(a.title)} className="award card">
            <div className="award__photo">
              <img src={a.image} alt={pick(a.title)} loading="lazy" />
            </div>
            <div className="award__body">
              <span className="award__kicker">
                <FiAward /> {t.achievements.award} · {pick(a.date)}
              </span>
              <h3>{pick(a.title)}</h3>
              <p className="award__org">{a.org}</p>
              <p>{pick(a.description)}</p>
              <div className="award__trophy" aria-hidden="true">🏆</div>
            </div>
          </Reveal>
        ))}

        <Reveal as="h3" className="card__title certs__title">
          <FiFileText /> {t.achievements.certs}
        </Reveal>

        <div className="certs">
          {certificates.map((c, i) => (
            <Reveal key={c.file} delay={(i % 3) * 80}>
              <a className="cert card" href={c.file} target="_blank" rel="noreferrer" aria-label={`${t.achievements.view}: ${pick(c.title)}`}>
                <div className="cert__thumb">
                  <img src={c.thumb} alt="" loading="lazy" />
                  <span className="cert__open">
                    <FiExternalLink /> {t.achievements.view}
                  </span>
                </div>
                <div className="cert__body">
                  <span className="cert__tag">{pick(c.tag)}</span>
                  <h4>{pick(c.title)}</h4>
                  <p>{c.org}</p>
                  <small>
                    <FiClock /> {c.date} · {pick(c.hours)}
                  </small>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
