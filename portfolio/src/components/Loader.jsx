import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

// Tela de carregamento com contador de porcentagem
export default function Loader({ onDone }) {
  const { t } = useLang()
  const [pct, setPct] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let value = 0
    const id = setInterval(() => {
      value = Math.min(100, value + Math.ceil(Math.random() * 7))
      setPct(value)
      if (value >= 100) {
        clearInterval(id)
        setTimeout(() => setLeaving(true), 250)
        setTimeout(onDone, 750)
      }
    }, 45)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <div className={`loader ${leaving ? 'loader--out' : ''}`} role="status" aria-live="polite">
      <div className="loader__num">
        {pct}
        <span>%</span>
      </div>
      <div className="loader__bar">
        <div style={{ width: `${pct}%` }} />
      </div>
      <p className="loader__label">{t.loading}</p>
    </div>
  )
}
