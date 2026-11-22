import { useState } from 'react'
import { profile } from '../data/profile'

// Mostra a foto; se ela ainda não existir em /public, mostra as iniciais
export default function Avatar({ className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed || !profile.photo) {
    return (
      <div className={`avatar avatar--initials ${className}`} aria-label={profile.name}>
        {profile.initials}
      </div>
    )
  }
  return <img className={`avatar ${className}`} src={profile.photo} alt={`Foto de ${profile.name}`} onError={() => setFailed(true)} />
}
