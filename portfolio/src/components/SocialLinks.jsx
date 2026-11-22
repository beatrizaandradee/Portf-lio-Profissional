import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { profile } from '../data/profile'

const c = profile.contact

// Lista única de canais, usada no topo, no contato e no rodapé
// Se deixar algum campo vazio em profile.js, o ícone some automaticamente.
const strip = (url = '') => url.replace(/^https?:\/\/(www\.)?/, '')
export const socials = [
  c.email && { key: 'email', label: 'E-mail', handle: c.email, href: `mailto:${c.email}`, Icon: FiMail, color: '#ea4335' },
  c.whatsapp && { key: 'whatsapp', label: 'WhatsApp', handle: `+${c.whatsapp}`, href: `https://wa.me/${c.whatsapp}`, Icon: FaWhatsapp, color: '#25d366' },
  c.linkedin && { key: 'linkedin', label: 'LinkedIn', handle: strip(c.linkedin), href: c.linkedin, Icon: FaLinkedinIn, color: '#0a66c2' },
  c.github && { key: 'github', label: 'GitHub', handle: strip(c.github), href: c.github, Icon: FaGithub, color: '#e6edf3' },
  c.instagram && { key: 'instagram', label: 'Instagram', handle: strip(c.instagram), href: c.instagram, Icon: FaInstagram, color: '#e1306c' },
].filter(Boolean)

export default function SocialLinks({ size = 16 }) {
  return (
    <div className="socials">
      {socials.map(({ key, label, href, Icon }) => (
        <a key={key} href={href} target={key === 'email' ? undefined : '_blank'} rel="noreferrer" aria-label={label} title={label} className="socials__btn">
          <Icon size={size} />
        </a>
      ))}
    </div>
  )
}
