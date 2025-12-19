import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

const info = [
  { label: 'Email', value: 'hello@happyscore.app' },
  { label: 'Téléphone', value: '+33 1 84 00 00 00' },
  { label: 'Localisation', value: 'France / Europe' },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', club: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Nom requis'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) next.email = 'Email invalide'
    if (!form.club.trim()) next.club = 'Club ou organisation requis'
    if (form.message.trim().length < 10) next.message = 'Message trop court'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
      setForm({ name: '', email: '', club: '', message: '' })
    }
  }

  return (
    <>
      <Section>
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h1>Parlons de vos compétitions</h1>
          <p className="muted">
            Réponse sous 24–48h. Partagez vos besoins : clubs, ligues, tournois, diffusion TV ou
            digital.
          </p>
        </div>
        <div className="grid two-col" style={{ gap: 'var(--spacing-8)' }}>
          <Reveal>
            <Card glass>
              <h3>Réponse sous 24–48h</h3>
              <p className="muted">
                On prépare une démo personnalisée avec vos formats de matchs, vos courts et vos
                contraintes de diffusion.
              </p>
              <div className="grid three-col" style={{ gap: 10 }}>
                {info.map((item) => (
                  <Card key={item.label} className="card-outline">
                    <p style={{ margin: 0, fontWeight: 700 }}>{item.label}</p>
                    <p className="muted" style={{ margin: 0 }}>
                      {item.value}
                    </p>
                  </Card>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card>
              <form className="grid" style={{ gap: 12 }} onSubmit={handleSubmit} noValidate>
                <label>
                  Nom complet
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    style={inputStyle(errors.name)}
                  />
                  {errors.name && <span style={errorStyle}>{errors.name}</span>}
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    style={inputStyle(errors.email)}
                  />
                  {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </label>
                <label>
                  Club / Organisation
                  <input
                    name="club"
                    type="text"
                    value={form.club}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.club)}
                    style={inputStyle(errors.club)}
                  />
                  {errors.club && <span style={errorStyle}>{errors.club}</span>}
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    style={inputStyle(errors.message)}
                  />
                  {errors.message && <span style={errorStyle}>{errors.message}</span>}
                </label>
                <Button type="submit" variant="primary">
                  Envoyer
                </Button>
                {submitted && (
                  <p style={{ color: '#0ea568', fontWeight: 800, margin: 0 }}>
                    Merci ! Nous revenons vers vous très vite.
                  </p>
                )}
              </form>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  )
}

const inputStyle = (hasError) => ({
  width: '100%',
  marginTop: 6,
  padding: '12px 14px',
  borderRadius: '14px',
  border: `1px solid ${hasError ? '#e25c5c' : 'var(--border)'}`,
  background: 'color-mix(in srgb, var(--surface) 92%, transparent)',
  color: 'var(--text)',
  outline: 'none',
  boxShadow: hasError ? '0 0 0 3px rgba(226,92,92,0.18)' : 'none',
})

const errorStyle = {
  color: '#e25c5c',
  fontSize: 'var(--text-sm)',
}

export default Contact
