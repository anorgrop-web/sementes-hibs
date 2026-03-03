import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Politique de Confidentialité | Versia Garden",
  description: "Politique de confidentialité de Versia Garden.",
}

export default function PrivacyPolicyFR() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="bg-primary py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/fr" className="text-white/80 hover:text-white flex items-center gap-2 text-sm transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Link>
          <span className="text-white font-bold text-lg tracking-wide">Versia Garden</span>
          <div className="w-16" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-2">Politique de Confidentialité</h1>
        <p className="text-sm text-muted-foreground mb-8">Dernière mise à jour : Mars 2026</p>

        <section className="space-y-8 text-foreground">
          <div>
            <h2 className="text-xl font-semibold mb-3">Responsable du traitement</h2>
            <p className="leading-relaxed text-muted-foreground">
              Le responsable du traitement de vos données personnelles est : 57.203.094 MARIA CLARA RODRIGUES LEITE,
              nom commercial Versia Garden, dont le siège social est situé Avenida Girassol, 29.156-572, Cariacica, ES,
              Brésil. Contact :{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Base légale</h2>
            <p className="leading-relaxed text-muted-foreground">
              Le traitement de vos données est effectué conformément au Règlement Général sur la Protection des Données
              (RGPD — Règlement UE 2016/679) ainsi qu&apos;à la Loi Informatique et Libertés (Loi n° 78-17 du 6 janvier
              1978 modifiée).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Données collectées</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Données d&apos;identité : nom, prénom</li>
              <li>Coordonnées : adresse postale, adresse e-mail, numéro de téléphone</li>
              <li>Données de transaction : détails de commande, historique d&apos;achats</li>
              <li>Données de paiement : traitées de manière sécurisée par Stripe (non stockées par Versia Garden)</li>
              <li>Données de navigation : adresse IP, type de navigateur, pages consultées</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Finalités du traitement</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Traitement et livraison de vos commandes</li>
              <li>Communication relative à votre commande</li>
              <li>Amélioration de nos services et de notre site</li>
              <li>Respect de nos obligations légales et fiscales</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Vos droits</h2>
            <p className="leading-relaxed text-muted-foreground mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground mt-3">
              Pour exercer ces droits, veuillez nous contacter à{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Réclamation auprès de la CNIL</h2>
            <p className="leading-relaxed text-muted-foreground">
              Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de
              l&apos;Informatique et des Libertés) :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Conservation des données</h2>
            <p className="leading-relaxed text-muted-foreground">
              Vos données personnelles sont conservées pendant la durée nécessaire à l&apos;exécution du contrat, puis
              conformément aux obligations légales applicables (généralement 3 à 5 ans).
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white mt-16 py-8 px-4 text-center text-sm space-y-1">
        <p className="text-white/80">© 2026 Versia Garden. Tous droits réservés.</p>
        <p className="text-white/60 text-xs">
          Exploité par : 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ : 57.203.094/0001-13
        </p>
        <p className="text-white/60 text-xs">
          Avenida Girassol, 29.156-572, Cariacica, ES, Brésil |{" "}
          <a href="mailto:info@versiagarden.com" className="hover:text-white/80 transition-colors">
            info@versiagarden.com
          </a>
        </p>
      </footer>
    </div>
  )
}
