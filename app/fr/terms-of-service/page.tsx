import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Conditions Générales de Vente | Versia Garden",
  description: "Conditions générales de vente de Versia Garden.",
}

export default function TermsOfServiceFR() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Conditions Générales de Vente</h1>
        <p className="text-sm text-muted-foreground mb-8">Dernière mise à jour : Mars 2026</p>

        <section className="space-y-8 text-foreground">
          <div>
            <h2 className="text-xl font-semibold mb-3">1. Identification du vendeur</h2>
            <p className="leading-relaxed text-muted-foreground">
              57.203.094 MARIA CLARA RODRIGUES LEITE, nom commercial Versia Garden, CNPJ : 57.203.094/0001-13, Avenida
              Girassol, 29.156-572, Cariacica, ES, Brésil. Email :{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">2. Objet</h2>
            <p className="leading-relaxed text-muted-foreground">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Versia
              Garden et tout client souhaitant effectuer un achat sur notre site. Toute commande implique
              l&apos;acceptation pleine et entière des présentes CGV.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">3. Commandes</h2>
            <p className="leading-relaxed text-muted-foreground">
              Après validation de votre commande, un e-mail de confirmation vous sera adressé. Versia Garden se réserve
              le droit d&apos;annuler toute commande en cas de stock insuffisant, d&apos;erreur de prix manifeste ou de
              fraude suspectée.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">4. Prix et paiement</h2>
            <p className="leading-relaxed text-muted-foreground">
              Les prix sont indiqués en euros (€) toutes taxes comprises (TTC). Le paiement s&apos;effectue par carte
              bancaire via notre prestataire sécurisé Stripe. Aucune donnée de carte bancaire n&apos;est stockée par
              Versia Garden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">5. Droit de rétractation</h2>
            <p className="leading-relaxed text-muted-foreground">
              Conformément au Code de la consommation et à la Directive Européenne 2011/83/UE, vous disposez d&apos;un
              délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation,
              sans avoir à justifier de motifs ni à payer de pénalités.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">6. Règlement des litiges</h2>
            <p className="leading-relaxed text-muted-foreground mb-3">
              En cas de litige, nous vous invitons à nous contacter en priorité à{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>
              . La Commission européenne met également à disposition une plateforme de règlement en ligne des litiges
              (RLL) :{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Conformément à l&apos;article L.612-1 du Code de la consommation, le consommateur a le droit de recourir
              gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui
              l&apos;oppose au professionnel.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">7. Loi applicable</h2>
            <p className="leading-relaxed text-muted-foreground">
              Les présentes CGV sont soumises au droit brésilien, sous réserve des dispositions impératives du Code de
              la consommation français applicables aux consommateurs résidant en France.
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
