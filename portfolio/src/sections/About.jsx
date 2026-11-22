import { FiCode, FiBriefcase, FiLayers, FiBookOpen, FiMapPin, FiSend } from 'react-icons/fi'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { experiences } from '../data/experiences'
import { useLang } from '../i18n/LanguageContext'
import Avatar from '../components/Avatar'
import Reveal from '../components/Reveal'
import { TechIcon } from '../components/TechIcon'

export default function About() {
  const { t, pick } = useLang()

  const stats = [
    { Icon: FiCode, value: projects.length, label: t.about.stats.projects, sub: t.about.stats.projectsSub },
    { Icon: FiBriefcase, value: experiences.length, label: t.about.stats.exp, sub: t.about.stats.expSub },
    { Icon: FiLayers, value: profile.stack.length, label: t.about.stats.tech, sub: t.about.stats.techSub },
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="h2" className="section__title">
          {t.about.title}
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__intro">
            <h3 className="about__hi">
              <span className="grad">{t.about.hi}</span>
              <br />
              {profile.name}
            </h3>
            <p className="about__meta">
              <FiMapPin /> {pick(profile.location)} · {pick(profile.role)}
            </p>
            <a href="#contact" className="btn btn--primary btn--sm">
              <FiSend /> {t.hero.contactMe}
            </a>
          </Reveal>

          <Reveal className="about__photo" delay={100}>
            <Avatar className="about__img" />
            <div className="about__glow" />
          </Reveal>

          <Reveal className="about__text" delay={200}>
            {pick(profile.about).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="about__row">
          <Reveal className="card edu">
            <h4 className="card__title">
              <FiBookOpen /> {t.about.education}
            </h4>
            <ul className="edu__list">
              {profile.education.map((e) => (
                <li key={e.institution + e.period}>
                  <div className="edu__dot" />
                  <div>
                    <strong>{e.institution}</strong>
                    <span>{pick(e.course)}</span>
                    <small>{e.period}</small>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="stats">
            {stats.map(({ Icon, value, label, sub }, i) => (
              <Reveal key={label} className="stat card" delay={i * 90}>
                <Icon className="stat__icon" />
                <span className="stat__value">{value}</span>
                <span className="stat__label">{label}</span>
                <span className="stat__sub">{sub}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="stack">
          <h4 className="card__title">
            <FiLayers /> {t.about.stack}
          </h4>
          <div className="stack__grid">
            {profile.stack.map((name) => (
              <div key={name} className="stack__item">
                <TechIcon name={name} size={30} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
