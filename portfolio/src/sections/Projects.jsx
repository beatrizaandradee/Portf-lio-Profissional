import { useEffect, useMemo, useState } from 'react'
import { FiArrowRight, FiGithub, FiExternalLink, FiX, FiCalendar } from 'react-icons/fi'
import { projects } from '../data/projects'
import { useLang } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import { TechChip } from '../components/TechIcon'

function formatDate(date, lang) {
  const [y, m] = date.split('-').map(Number)
  return new Date(y, (m || 1) - 1).toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { month: 'short', year: 'numeric' })
}

function ProjectModal({ project, onClose }) {
  const { t, pick, lang } = useLang()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose} aria-label={t.projects.close} autoFocus>
          <FiX size={20} />
        </button>
        <img className="modal__img" src={project.image} alt={pick(project.name)} />
        <div className="modal__body">
          <span className="tl__date">
            <FiCalendar /> {formatDate(project.date, lang)}
          </span>
          <h3 id="modal-title">{pick(project.name)}</h3>
          <p>{pick(project.details || project.description)}</p>
          <h4>{t.projects.techUsed}</h4>
          <div className="chips">
            {project.tech.map((tech) => (
              <TechChip key={tech} name={tech} />
            ))}
          </div>
          <div className="modal__actions">
            <a className="btn btn--primary btn--sm" href={project.repo} target="_blank" rel="noreferrer">
              <FiGithub /> {t.projects.repo}
            </a>
            {project.demo && (
              <a className="btn btn--ghost btn--sm" href={project.demo} target="_blank" rel="noreferrer">
                <FiExternalLink /> {t.projects.demo}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t, pick, lang } = useLang()
  const [selected, setSelected] = useState(null)

  // Linha do tempo: do mais antigo para o mais recente
  const ordered = useMemo(() => [...projects].sort((a, b) => a.date.localeCompare(b.date)), [])

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal as="h2" className="section__title">
          {t.projects.title}
        </Reveal>
        <Reveal as="p" className="section__sub">
          {t.projects.subtitle}
        </Reveal>

        <ol className="timeline">
          {ordered.map((p, i) => (
            <Reveal as="li" key={p.id} className={`tl__item ${i % 2 ? 'tl__item--right' : 'tl__item--left'}`}>
              <span className="tl__dot" aria-hidden="true" />
              <article className="tl__card card">
                <button type="button" className="tl__media" onClick={() => setSelected(p)} aria-label={`${t.projects.details}: ${pick(p.name)}`}>
                  <img src={p.image} alt={pick(p.name)} loading="lazy" />
                </button>
                <div className="tl__body">
                  <span className="tl__date">
                    <FiCalendar /> {formatDate(p.date, lang)}
                  </span>
                  <h3>{pick(p.name)}</h3>
                  <p>{pick(p.description)}</p>
                  <div className="chips">
                    {p.tech.map((tech) => (
                      <TechChip key={tech} name={tech} />
                    ))}
                  </div>
                  <div className="tl__actions">
                    <button type="button" className="btn btn--ghost btn--sm" onClick={() => setSelected(p)}>
                      {t.projects.details} <FiArrowRight />
                    </button>
                    <a className="icon-link" href={p.repo} target="_blank" rel="noreferrer" aria-label={`${t.projects.repo} GitHub`}>
                      <FiGithub size={18} /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
