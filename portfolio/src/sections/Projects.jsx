import { useEffect, useMemo, useState } from 'react'
import { FiArrowRight, FiGithub, FiExternalLink, FiX, FiCalendar, FiPlay } from 'react-icons/fi'
import { projects } from '../data/projects'
import { miniProjects } from '../data/miniProjects'
import { useLang } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import { TechChip } from '../components/TechIcon'

function formatDate(date, lang) {
  const [y, m] = date.split('-').map(Number)
  return new Date(y, (m || 1) - 1).toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { month: 'short', year: 'numeric' })
}

const isInternal = (url) => url && url.startsWith('/')

// Converte um projeto da linha do tempo para o formato da janela de teste
const asApp = (p) => ({ name: p.name, icon: p.frame === 'phone' ? '📱' : '🖥️', live: p.demo, repo: p.repo, frame: p.frame })

function ProjectModal({ project, onClose, onTry }) {
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
            {project.demo &&
              (isInternal(project.demo) ? (
                <button type="button" className="btn btn--ghost btn--sm" onClick={() => onTry(project)}>
                  <FiPlay /> {t.projects.play}
                </button>
              ) : (
                <a className="btn btn--ghost btn--sm" href={project.demo} target="_blank" rel="noreferrer">
                  <FiExternalLink /> {t.projects.demo}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Abre um mini projeto dentro do portfólio, num iframe
function MiniModal({ mini, onClose }) {
  const { t, pick } = useLang()

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
    <div className="modal" role="dialog" aria-modal="true" aria-label={pick(mini.name)} onClick={onClose}>
      <div className={`modal__box mini-modal mini-modal--${mini.frame || 'default'}`} onClick={(e) => e.stopPropagation()}>
        <div className="mini-modal__bar">
          <strong>
            <span aria-hidden="true">{mini.icon}</span> {pick(mini.name)}
          </strong>
          <div className="mini-modal__actions">
            <a href={mini.live} target="_blank" rel="noreferrer" title={t.projects.newTab} aria-label={t.projects.newTab}>
              <FiExternalLink />
            </a>
            <a href={mini.repo} target="_blank" rel="noreferrer" title={t.projects.code} aria-label={t.projects.code}>
              <FiGithub />
            </a>
            <button type="button" onClick={onClose} aria-label={t.projects.close} autoFocus>
              <FiX />
            </button>
          </div>
        </div>
        <iframe src={mini.live} title={pick(mini.name)} allow="fullscreen; geolocation; clipboard-write" />
      </div>
    </div>
  )
}

export default function Projects() {
  const { t, pick, lang } = useLang()
  const [selected, setSelected] = useState(null)
  const [miniOpen, setMiniOpen] = useState(null)

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
                    <div className="tl__btns">
                      <button type="button" className="btn btn--ghost btn--sm" onClick={() => setSelected(p)}>
                        {t.projects.details} <FiArrowRight />
                      </button>
                      {isInternal(p.demo) && (
                        <button type="button" className="btn btn--primary btn--sm" onClick={() => setMiniOpen(asApp(p))}>
                          <FiPlay /> {t.projects.play}
                        </button>
                      )}
                    </div>
                    <a className="icon-link" href={p.repo} target="_blank" rel="noreferrer" aria-label={`${t.projects.repo} GitHub`}>
                      <FiGithub size={18} /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <div id="mini" className="mini__anchor" />
        <Reveal as="h3" className="mini__title">
          🧩 {t.projects.mini}
        </Reveal>
        <Reveal as="p" className="mini__sub">
          {t.projects.miniSub}
        </Reveal>
        <div className="mini">
          {miniProjects.map((m, i) => (
            <Reveal key={m.repo} as="article" className="mini__card card" delay={(i % 5) * 70}>
              <button
                type="button"
                className="mini__thumb"
                onClick={() => (isInternal(m.live) ? setMiniOpen(m) : window.open(m.live || m.repo, '_blank', 'noopener'))}
                aria-label={`${t.projects.play}: ${pick(m.name)}`}
              >
                <img src={m.image} alt="" loading="lazy" />
                <span className="mini__play">
                  <FiPlay /> {t.projects.play}
                </span>
              </button>
              <div className="mini__body">
                <h4>
                  <span aria-hidden="true">{m.icon}</span> {pick(m.name)}
                </h4>
                <p>{pick(m.description)}</p>
                <div className="mini__tags">
                  {m.tech.map((tech) => (
                    <small key={tech}>{tech}</small>
                  ))}
                </div>
                <div className="mini__links">
                  {m.live &&
                    (isInternal(m.live) ? (
                      <button type="button" onClick={() => setMiniOpen(m)}>
                        <FiPlay /> {t.projects.play}
                      </button>
                    ) : (
                      <a href={m.live} target="_blank" rel="noreferrer">
                        <FiExternalLink /> {t.projects.live}
                      </a>
                    ))}
                  <a href={m.repo} target="_blank" rel="noreferrer">
                    <FiGithub /> {t.projects.code}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
          onTry={(p) => {
            setSelected(null)
            setMiniOpen(asApp(p))
          }}
        />
      )}
      {miniOpen && <MiniModal mini={miniOpen} onClose={() => setMiniOpen(null)} />}
    </section>
  )
}
