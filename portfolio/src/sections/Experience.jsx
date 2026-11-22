import { FiBriefcase, FiCalendar, FiCode, FiAward, FiUsers, FiBookOpen, FiGithub, FiMic, FiMonitor } from 'react-icons/fi'
import { experiences } from '../data/experiences'
import { useLang } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

const ICONS = { trabalho: FiBriefcase, estagio: FiUsers, freela: FiCode, opensource: FiGithub, evento: FiMic, curso: FiMonitor, premio: FiAward, academico: FiBookOpen }

export default function Experience() {
  const { t, pick } = useLang()

  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal as="h2" className="section__title">
          {t.experience.title}
        </Reveal>
        <Reveal as="p" className="section__sub">
          {t.experience.subtitle}
        </Reveal>

        <div className="exp__grid">
          {experiences.map((e, i) => {
            const Icon = ICONS[e.type] || FiBriefcase
            return (
              <Reveal as="article" key={e.company + i} className={`exp card ${e.type === 'premio' ? 'exp--award' : ''}`} delay={(i % 2) * 90}>
                <div className="exp__head">
                  <div className="exp__icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3>{pick(e.role)}</h3>
                    <p className="exp__company">{e.company}</p>
                  </div>
                  <span className="exp__tag">{t.experience.types[e.type] || e.type}</span>
                </div>
                <p className="exp__period">
                  <FiCalendar /> {pick(e.period)}
                </p>
                <p className="exp__desc">{pick(e.description)}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
