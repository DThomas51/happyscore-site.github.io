import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import ScoreboardMock from '../components/ScoreboardMock'
import Reveal from '../components/Reveal'

const trusted = ['Pro League', 'Azur Club', 'Riviera Cup', 'Hexa Tennis', 'Grand Slam Series']

const why = [
  {
    title: 'Rapidité',
    desc: 'Saisie en moins de 2 secondes par point, synchronisée sur tous les écrans.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M11 21q-3.75-.35-6.375-3.025T1.5 11.5q0-2.925 1.55-5.3T6.5 2.35l1.4 1.4Q6 4.95 4.75 6.95T3.5 11.5q0 2.975 1.625 5.275T10 19.9v-2.4l4 4l-4 4V23q-3.775-.35-6.375-3.025T1.5 14.5h2q0 3.05 2.15 5.175T11 21Zm2-3.5v-13l4 4h5v5h-5l-4 4Z"
        />
      </svg>
    ),
  },
  {
    title: 'Fiabilité',
    desc: 'Scores sécurisés, historique, exports, et alertes en cas de conflit.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2L3 5v6q0 3.95 2.55 7.125T12 22q4.95-1.85 7.5-5.025T22 11V5Zm0 2.15L19 6.6v4.85q0 3.1-1.925 5.75T12 20q-3.15-1.5-5.075-4.15T5 11.45V6.6ZM7.4 12L12 16.6l4.6-4.6l-1.425-1.4L12 13.775L8.825 10.6Z"
        />
      </svg>
    ),
  },
  {
    title: 'Expérience spectateur',
    desc: 'Scoreboards premium, animations fluides et pages matchs partageables.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 4h16v12H5.15L4 17.15Zm0 14h16v2H4Z"
        />
      </svg>
    ),
  },
]

const features = [
  'Live scoring temps réel',
  'Tableaux de score TV / mobile',
  'Statistiques avancées (pro)',
  'Mode simple (amateur)',
  'Admin clubs/tournois',
  'Historique & exports',
  'Multi-courts simultanés',
  'Personnalisation club',
]

const steps = [
  { title: 'Créer match/tournoi', desc: 'Formats, courts, joueurs, horaires en quelques clics.' },
  { title: 'Scorer sur mobile', desc: 'Scoreurs ou arbitres mettent à jour en instantané.' },
  { title: 'Diffuser en direct', desc: 'Spectateurs suivent sur web, TV, réseaux ou widgets.' },
]

const testimonials = [
  {
    name: 'Camille R., directrice tournoi',
    role: 'Open Riviera',
    quote: '“HappyScore a fluidifié nos finales TV et le public suit chaque échange en live.”',
  },
  {
    name: 'Julien M., responsable club',
    role: 'Club Azur',
    quote: '“Onboard en 48h, scoreurs prêts, branding club partout : c’est parfait.”',
  },
  {
    name: 'Sarah L., arbitre',
    role: 'Ligue Sud',
    quote: '“Mode pro pour les statistiques, mode simple pour les jeunes : tout est prévu.”',
  },
]

function Home() {
  return (
    <>
      <Section id="hero">
        <div className="grid two-col" style={{ alignItems: 'center', gap: 'var(--spacing-10)' }}>
          <Reveal>
            <div style={{ display: 'grid', gap: 18 }}>
              <span className="eyebrow">Plateforme HappyScore</span>
              <h1>Le scoring moderne pour vos matchs et tournois</h1>
              <p className="muted">
                Live, gestion clubs/tournois, app scoreur arbitre. Une expérience premium inspirée
                des meilleures interfaces pro.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Button as="a" href="/contact" variant="primary">
                  Demander une démo
                </Button>
                <Button as="a" href="/produits" variant="secondary">
                  Découvrir HappyScore
                </Button>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span className="pill">Live</span>
                <span className="pill">Stats</span>
                <span className="pill">Pro / Amateur</span>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="muted" style={{ fontWeight: 700 }}>
                  Trusted by
                </span>
                {trusted.map((item) => (
                  <span key={item} className="pill" style={{ background: 'var(--surface)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ position: 'relative', display: 'grid', gap: 12 }}>
              <ScoreboardMock />
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <span className="badge">TV ready</span>
                <span className="badge">Multi-courts</span>
                <span className="badge">Clubs & tournois</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted" id="pourquoi">
        <div className="section-head">
          <span className="eyebrow">Pourquoi HappyScore</span>
          <h2>Une plateforme rapide, fiable, pensée pour le public</h2>
          <p className="muted">
            Un scoring premium avec une expérience visuelle inspirée des meilleurs produits SaaS.
          </p>
        </div>
        <div className="grid three-col">
          {why.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <Card>
                <div className="pill" style={{ width: 'fit-content' }}>
                  {item.icon}
                  {item.title}
                </div>
                <p style={{ marginTop: 12 }} className="muted">
                  {item.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="produits-teaser">
        <div className="section-head">
          <span className="eyebrow">Produits</span>
          <h2>HappyScore Live & HappyScoreur</h2>
          <p className="muted">Deux expériences complémentaires : spectateurs et scoreurs.</p>
        </div>
        <div className="grid two-col" style={{ gap: 'var(--spacing-8)' }}>
          <Reveal>
            <Card glass>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>HappyScore Live</h3>
                <span className="badge">Spectateurs</span>
              </div>
              <p className="muted">
                Scoreboards web/TV, pages matchs partageables, stats en temps réel pour engager vos
                fans.
              </p>
              <ul className="list">
                <li>Widgets embed & affichage TV</li>
                <li>Timeline des points & stats</li>
                <li>Partage live sur réseaux</li>
              </ul>
              <div style={{ marginTop: 18 }}>
                <ScoreboardMock variant="compact" />
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>HappyScoreur</h3>
                <span className="badge">Arbitres / scoreurs</span>
              </div>
              <p className="muted">
                Mode pro pour le détail, mode amateur express. Off-line ready, synchronisation dès
                retour réseau.
              </p>
              <ul className="list">
                <li>Mode pro : aces, fautes, stats</li>
                <li>Mode simple : saisie rapide</li>
                <li>Contrôles optimisés mobile</li>
              </ul>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: 10,
                  marginTop: 12,
                }}
              >
                <span className="pill">Pro</span>
                <span className="pill">Amateur</span>
                <span className="pill">Offline</span>
                <span className="pill">Sync instant</span>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted" id="features">
        <div className="section-head">
          <span className="eyebrow">Fonctionnalités</span>
          <h2>Tout pour des matchs suivis et gérés sans effort</h2>
          <p className="muted">Une grille complète pour clubs, ligues et organisateurs.</p>
        </div>
        <div className="grid four-col">
          {features.map((feat, idx) => (
            <Reveal key={feat} delay={idx * 0.03}>
              <Card className="card-outline">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span
                    className="pill"
                    style={{ background: 'rgba(0,63,95,0.08)', borderColor: 'transparent' }}
                  />
                  <strong>{feat}</strong>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="steps">
        <div className="section-head">
          <span className="eyebrow">Comment ça marche</span>
          <h2>Un flux simple en 3 étapes</h2>
        </div>
        <div className="grid three-col">
          {steps.map((step, idx) => (
            <Reveal key={step.title}>
              <Card>
                <div className="pill" style={{ background: 'rgba(255,216,77,0.2)' }}>
                  {idx + 1}
                </div>
                <h4>{step.title}</h4>
                <p className="muted">{step.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted" id="testimonials">
        <div className="section-head">
          <span className="eyebrow">Ils en parlent</span>
          <h2>Des clubs et ligues convaincus</h2>
        </div>
        <div className="grid three-col">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <Card glass>
                <p style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>{item.quote}</p>
                <p className="muted" style={{ margin: 0 }}>
                  {item.name} — {item.role}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface" id="cta-final">
        <Card glass className="shadow-strong">
          <div
            className="grid two-col"
            style={{ alignItems: 'center', gap: 'var(--spacing-6)' }}
          >
            <div>
              <span className="eyebrow">Prêt à lancer ?</span>
              <h3>Planifiez votre démo HappyScore</h3>
              <p className="muted">
                On vous montre le mode pro, la personnalisation club et la diffusion TV en moins de
                20 minutes.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button as="a" href="/contact" variant="primary">
                Demander une démo
              </Button>
              <Button as="a" href="/tarifs" variant="secondary">
                Voir les tarifs
              </Button>
            </div>
          </div>
        </Card>
      </Section>
    </>
  )
}

export default Home
