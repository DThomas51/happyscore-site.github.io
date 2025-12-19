import { useMemo, useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import FAQAccordion from '../components/FAQAccordion'
import PricingToggle from '../components/PricingToggle'
import Reveal from '../components/Reveal'
import Section from '../components/Section'

const plansBase = [
  {
    name: 'Starter',
    price: 29,
    description: 'Pour lancer votre scoring digital en club.',
    features: ['Matchs illimités', 'Templates scoreboard', 'Support email 48h'],
  },
  {
    name: 'Club',
    price: 69,
    description: 'La formule préférée des clubs et ligues régionales.',
    features: ['Stats avancées', 'Branding club', 'Support prioritaire', 'Multi-courts'],
    popular: true,
  },
  {
    name: 'Pro',
    price: 129,
    description: 'Pour tournois premium et diffusion TV.',
    features: ['Exports & API', 'Assistance événementielle', 'Overlays streaming'],
  },
]

const faq = [
  {
    question: 'Les tarifs sont-ils bloqués ?',
    answer: 'Les prix sont indicatifs, nous ajustons selon la taille de vos événements et besoins.',
  },
  {
    question: 'Y a-t-il un engagement ?',
    answer: 'Offre mensuelle sans engagement, annuel avec remise -15% et accompagnement offert.',
  },
  {
    question: 'Support inclus ?',
    answer: 'Oui : email pour Starter, support prioritaire pour Club, assistance événement pour Pro.',
  },
  {
    question: 'Peut-on ajouter des scoreurs ?',
    answer: 'Oui, scoreurs illimités. Les rôles et droits se gèrent dans l’admin.',
  },
  {
    question: 'Intégrations possibles ?',
    answer: 'Exports CSV/JSON, API pour Pro, widgets embed pour sites et apps.',
  },
]

function Tarifs() {
  const [annual, setAnnual] = useState(false)

  const plans = useMemo(() => {
    if (!annual) return plansBase
    return plansBase.map((plan) => ({
      ...plan,
      price: Math.round(plan.price * 12 * 0.85),
      annual: true,
    }))
  }, [annual])

  return (
    <>
      <Section>
        <div className="section-head">
          <span className="eyebrow">Tarifs</span>
          <h1>Des offres adaptées à vos événements</h1>
          <p className="muted">
            Tarifs indicatifs, modulables selon vos courts, flux et besoins. Remise annuelle -15%.
          </p>
          <PricingToggle annual={annual} onToggle={() => setAnnual((v) => !v)} />
        </div>
        <div className="grid three-col" style={{ gap: 'var(--spacing-6)' }}>
          {plans.map((plan) => (
            <Reveal key={plan.name}>
              <Card className={plan.popular ? 'shadow-strong' : ''} glass={plan.popular}>
                {plan.popular && <div className="pricing-halo" aria-hidden="true" />}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3>{plan.name}</h3>
                  {plan.popular && <span className="badge">Most Popular</span>}
                </div>
                <p className="muted">{plan.description}</p>
                <p style={{ fontWeight: 800, fontSize: 'var(--text-2xl)', margin: '12px 0' }}>
                  {plan.price}€ {annual ? '/an' : '/mois'}
                </p>
                <ul className="list">
                  {plan.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
                <Button as="a" href="/contact" variant={plan.popular ? 'primary' : 'secondary'} full>
                  Choisir
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="section-head">
          <span className="eyebrow">Questions tarifs</span>
          <h2>FAQ</h2>
        </div>
        <FAQAccordion items={faq} />
      </Section>
    </>
  )
}

export default Tarifs
