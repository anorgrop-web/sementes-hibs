import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Politique de Remboursement | Versia Garden",
  description: "Politique de remboursement de Versia Garden.",
}

export default function RefundPolicyFR() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Politique de Remboursement</h1>
        <p className="text-sm text-muted-foreground mb-8">Dernière mise à jour : Mars 2026</p>

        <section className="space-y-8 text-foreground">
          <div>
            <h2 className="text-xl font-semibold mb-3">Notre garantie</h2>
            <p className="leading-relaxed text-muted-foreground">
              Chez Versia Garden, nous souhaitons que vous soyez entièrement satisfait de votre achat. Si, pour une
              quelconque raison, vous n&apos;êtes pas satisfait, nous nous engageons à trouver une solution rapide et
              équitable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Délai de remboursement de 14 jours</h2>
            <p className="leading-relaxed text-muted-foreground">
              Vous disposez de 14 jours à compter de la date de livraison pour demander un remboursement ou un
              remplacement, conformément au Code de la consommation et à la Directive Européenne 2011/83/UE relative aux
              droits des consommateurs. Ce droit de rétractation s&apos;applique sans avoir à justifier de motifs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Comment demander un remboursement</h2>
            <p className="leading-relaxed text-muted-foreground mb-3">
              Veuillez nous contacter à{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>{" "}
              en indiquant :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Votre numéro de commande</li>
              <li>Une description détaillée du problème</li>
              <li>Des photos illustrant le problème (si applicable)</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground mt-3">
              Notre équipe vous répondra dans un délai de 24 à 48 heures ouvrables.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Articles non remboursables</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Plantes mortes par manque de soins après livraison</li>
              <li>Produits numériques déjà consultés ou téléchargés</li>
              <li>Commandes pour lesquelles le délai de 14 jours est dépassé</li>
              <li>Articles endommagés par une utilisation incorrecte</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Délai de traitement</h2>
            <p className="leading-relaxed text-muted-foreground">
              Une fois le remboursement approuvé, le montant sera crédité sur votre carte bancaire ou moyen de paiement
              d&apos;origine sous 5 à 10 jours ouvrables, selon votre établissement bancaire.
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
