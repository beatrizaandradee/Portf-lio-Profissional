import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs, FaPython, FaFigma, FaDatabase, FaJava } from 'react-icons/fa'
import { SiVite, SiVercel, SiMysql, SiTypescript } from 'react-icons/si'
import { FiCode } from 'react-icons/fi'

// Mapa nome → ícone + cor. Para adicionar uma tecnologia nova, inclua uma linha aqui.
const MAP = {
  React: { Icon: FaReact, color: '#61dafb' },
  JavaScript: { Icon: FaJs, color: '#f7df1e' },
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  HTML5: { Icon: FaHtml5, color: '#e34f26' },
  CSS3: { Icon: FaCss3Alt, color: '#1572b6' },
  Vite: { Icon: SiVite, color: '#a78bfa' },
  Git: { Icon: FaGitAlt, color: '#f05032' },
  GitHub: { Icon: FaGithub, color: '#e6edf3' },
  'Node.js': { Icon: FaNodeJs, color: '#5fa04e' },
  Python: { Icon: FaPython, color: '#ffd43b' },
  Java: { Icon: FaJava, color: '#f89820' },
  Figma: { Icon: FaFigma, color: '#f24e1e' },
  Vercel: { Icon: SiVercel, color: '#ffffff' },
  MySQL: { Icon: SiMysql, color: '#4479a1' },
  SQL: { Icon: FaDatabase, color: '#7aa2ff' },
}

export function TechIcon({ name, size = 18 }) {
  const { Icon, color } = MAP[name] || { Icon: FiCode, color: '#7aa2ff' }
  return <Icon size={size} color={color} aria-hidden="true" />
}

export function TechChip({ name }) {
  return (
    <span className="chip">
      <TechIcon name={name} size={14} />
      {name}
    </span>
  )
}
