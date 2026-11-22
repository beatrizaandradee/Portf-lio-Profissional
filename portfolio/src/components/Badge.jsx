import { useRef } from 'react'
import { profile } from '../data/profile'
import { useLang } from '../i18n/LanguageContext'
import Avatar from './Avatar'

// Crachá pendurado que balança e inclina seguindo o mouse
export default function Badge() {
  const { pick } = useLang()
  const cardRef = useRef(null)

  function onMove(e) {
    const el = cardRef.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--ry', `${x * 22}deg`)
    el.style.setProperty('--rx', `${-y * 16}deg`)
  }
  function onLeave() {
    cardRef.current.style.setProperty('--ry', '0deg')
    cardRef.current.style.setProperty('--rx', '0deg')
  }

  return (
    <div className="badge" aria-hidden="true">
      <div className="badge__swing">
        <div className="badge__strap">
          <span>{profile.name.toUpperCase()} · PORTFOLIO · </span>
        </div>
        <div className="badge__clip" />
        <div className="badge__card" ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave}>
          <div className="badge__inner">
            <div className="badge__top">
              <span className="badge__hole" />
            </div>
            <p className="badge__title">DEVELOPER</p>
            <Avatar className="badge__photo" />
            <p className="badge__name">{profile.name}</p>
            <p className="badge__role">{pick(profile.role)}</p>
            <div className="badge__foot">
              <span>PORTFOLIO</span>
              <span className="badge__barcode" />
            </div>
            <div className="badge__shine" />
          </div>
        </div>
      </div>
    </div>
  )
}
