import { profile } from '../data/profile'
import { useLang } from '../i18n/LanguageContext'
import SocialLinks from './SocialLinks'
import { SECTIONS } from './Navbar'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">
            <span className="grad">&gt;_</span> {profile.name}
          </p>
          <p className="footer__tag">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="footer__head">{t.footer.nav}</p>
          <ul className="footer__links">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{t.nav[id]}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer__head">{t.footer.connect}</p>
          <SocialLinks size={15} />
        </div>
      </div>
      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
        </span>
        <span>{t.footer.made}</span>
      </div>
    </footer>
  )
}
