import { useState } from 'react'
import { FiSend, FiArrowUpRight, FiCheckCircle, FiAlertCircle, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'
import { profile } from '../data/profile'
import { useLang } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import { socials } from '../components/SocialLinks'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'name'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'email'
  if (values.message.trim().length < 10) errors.message = 'message'
  return errors
}

export default function Contact() {
  const { t, lang } = useLang()
  const [values, setValues] = useState({ name: '', email: '', message: '', _honey: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (touched[e.target.name]) setErrors(validate(next))
  }
  const onBlur = (e) => {
    setTouched((tch) => ({ ...tch, [e.target.name]: true }))
    setErrors(validate(values))
  }

  async function onSubmit(e) {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(errs).length) return
    if (values._honey) return // anti-spam: campo invisível preenchido = robô

    setStatus('sending')
    try {
      const res = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          _subject: `Portfólio: nova mensagem de ${values.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
          idioma: lang,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error(data.message || 'Falha no envio')
      setStatus('success')
      setValues({ name: '', email: '', message: '', _honey: '' })
      setTouched({})
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const fieldErr = (name) => touched[name] && errors[name]

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal as="h2" className="section__title">
          {t.contact.title}
        </Reveal>
        <Reveal as="p" className="section__sub">
          {t.contact.subtitle}
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__channels">
            <h3 className="card__title">{t.contact.channels}</h3>
            {socials.map(({ key, label, handle, href, Icon, color }) => (
              <a key={key} className="channel card" href={href} target={key === 'email' ? undefined : '_blank'} rel="noreferrer">
                <span className="channel__icon" style={{ '--c': color }}>
                  <Icon size={20} />
                </span>
                <span className="channel__text">
                  <strong>{label}</strong>
                  <small>{handle}</small>
                </span>
                <FiArrowUpRight className="channel__arrow" />
              </a>
            ))}
          </Reveal>

          <Reveal className="card form-card" delay={120}>
            <h3 className="card__title">{t.contact.formTitle}</h3>
            <form onSubmit={onSubmit} noValidate>
              <div className={`field ${fieldErr('name') ? 'field--err' : ''}`}>
                <label htmlFor="name">{t.contact.name}</label>
                <div className="field__wrap">
                  <FiUser />
                  <input id="name" name="name" type="text" autoComplete="name" placeholder={t.contact.namePh} value={values.name} onChange={onChange} onBlur={onBlur} aria-invalid={!!fieldErr('name')} aria-describedby="name-err" />
                </div>
                {fieldErr('name') && <small id="name-err">{t.contact.errors.name}</small>}
              </div>

              <div className={`field ${fieldErr('email') ? 'field--err' : ''}`}>
                <label htmlFor="email">{t.contact.email}</label>
                <div className="field__wrap">
                  <FiMail />
                  <input id="email" name="email" type="email" autoComplete="email" placeholder={t.contact.emailPh} value={values.email} onChange={onChange} onBlur={onBlur} aria-invalid={!!fieldErr('email')} aria-describedby="email-err" />
                </div>
                {fieldErr('email') && <small id="email-err">{t.contact.errors.email}</small>}
              </div>

              <div className={`field ${fieldErr('message') ? 'field--err' : ''}`}>
                <label htmlFor="message">{t.contact.message}</label>
                <div className="field__wrap field__wrap--area">
                  <FiMessageSquare />
                  <textarea id="message" name="message" rows={5} placeholder={t.contact.messagePh} value={values.message} onChange={onChange} onBlur={onBlur} aria-invalid={!!fieldErr('message')} aria-describedby="message-err" />
                </div>
                {fieldErr('message') && <small id="message-err">{t.contact.errors.message}</small>}
              </div>

              {/* Campo invisível anti-spam (honeypot) */}
              <input type="text" name="_honey" value={values._honey} onChange={onChange} className="honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
                <FiSend /> {status === 'sending' ? t.contact.sending : t.contact.send}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className="form-msg form-msg--ok">
                    <FiCheckCircle /> {t.contact.success}
                  </p>
                )}
                {status === 'error' && (
                  <p className="form-msg form-msg--err">
                    <FiAlertCircle /> {t.contact.error}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
