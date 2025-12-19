import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import ScoreboardMock from '../components/ScoreboardMock'

const comparison = [
  { feature: 'Audience live', live: 'Web, TV, widgets', scoreur: 'Lien partageable' },
  { feature: 'Saisie point', live: '—', scoreur: 'Mobile/tablette optimisée' },
  { feature: 'Stats avancées', live: 'Affichage + exports', scoreur: 'Saisie pro (aces, fautes)' },
  { feature: 'Mode offline', live: '—', scoreur: 'Oui, sync au retour' },
  { feature: 'Branding club', live: 'Logos, couleurs', scoreur: 'Logos, overlays' },
]

function Produits() {
  return (
    <>
      <Section>
        <div className="section-head">
          <span className="eyebrow">Produits</span>
          <h1>HappyScore Live & HappyScoreur</h1>
          <p className="muted">
            Deux expériences parfaitement synchronisées : diffusion pour vos fans et outils précis
            pour vos scoreurs.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button as="a" href="/contact" variant="primary">
              Demander une démo
            </Button>
            <Button as="a" href="/tarifs" variant="secondary">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid two-col" style={{ alignItems: 'center', gap: 'var(--spacing-8)' }}>
          <Reveal>
            <div>
              <span className="eyebrow">HappyScore Live</span>
              <h2>Expérience spectateur premium</h2>
              <p className="muted">
                Scoreboards modernes, affichage TV, widgets embed, pages matchs partageables. Vos
                supporters suivent chaque échange avec un look digne des grands tournois.
              </p>
              <ul className="list">
                <li>Timeline live, stats, fiches joueurs</li>
                <li>Modes TV, mobile, tablette, fan-zone</li>
                <li>Branding club & partenaires</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ScoreboardMock />
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid two-col" style={{ alignItems: 'start', gap: 'var(--spacing-8)' }}>
          <Reveal>
            <Card glass>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>HappyScoreur</h3>
                <span className="badge">Scoreurs / Arbitres</span>
              </div>
              <p className="muted">
                Deux modes adaptés à vos usages : pro pour le détail, amateur pour aller vite. Pensé
                pour fonctionner même sans réseau, avec synchronisation dès le retour.
              </p>
              <div className="grid two-col" style={{ gap: 12 }}>
                <Card className="card-outline">
                  <h4>Mode Pro</h4>
                  <ul className="list">
                    <li>Aces, doubles, fautes directes</li>
                    <li>Zones de service</li>
                    <li>Historique détaillé</li>
                  </ul>
                </Card>
                <Card className="card-outline">
                  <h4>Mode Amateur</h4>
                  <ul className="list">
                    <li>Saisie rapide points/jeux/sets</li>
                    <li>Guides pour débutants</li>
                    <li>Auto-format des matchs</li>
                  </ul>
                </Card>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid three-col" style={{ gap: 12 }}>
              {['Offline ready', 'Multi-courts', 'Rôles & permissions', 'Notifications live'].map(
                (tag) => (
                  <Card key={tag} className="card-outline">
                    <span className="pill">{tag}</span>
                  </Card>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <div className="section-head">
          <span className="eyebrow">Comparaison rapide</span>
          <h2>Live vs Scoreur</h2>
        </div>
        <div className="card card-glass">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr 1fr',
              gap: 12,
              fontWeight: 800,
              paddingBottom: 10,
              borderBottom: '1px solid var(--border)',
            }}
          >
            <span>Feature</span>
            <span>HappyScore Live</span>
            <span>HappyScoreur</span>
          </div>
          <div style={{ display: 'grid', gap: 12, marginTop: 10 }}>
            {comparison.map((row) => (
              <div
                key={row.feature}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 1fr 1fr',
                  gap: 12,
                  padding: '6px 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span>{row.feature}</span>
                <span className="muted">{row.live}</span>
                <span className="muted">{row.scoreur}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

export default Produits
