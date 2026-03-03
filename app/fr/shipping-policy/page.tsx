import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Politique de Livraison | Versia Garden",
  description: "Politique de livraison de Versia Garden.",
}

export default function ShippingPolicyFR() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Politique de Livraison</h1>
        <p className="text-sm text-muted-foreground mb-8">Dernière mise à jour : Mars 2026</p>

        <section className="space-y-8 text-foreground">
          <div>
            <h2 className="text-xl font-semibold mb-3">Options de livraison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="text-left p-3 font-semibold border border-border">Mode</th>
                    <th className="text-left p-3 font-semibold border border-border">Délai</th>
                    <th className="text-left p-3 font-semibold border border-border">Frais de port</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border text-muted-foreground">Standard</td>
                    <td className="p-3 border border-border text-muted-foreground">7–10 jours ouvrables</td>
                    <td className="p-3 border border-border text-muted-foreground font-semibold text-primary">GRATUIT</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-3 border border-border text-muted-foreground">Express</td>
                    <td className="p-3 border border-border text-muted-foreground">3–4 jours ouvrables</td>
                    <td className="p-3 border border-border text-muted-foreground">14,55 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Traitement de la commande</h2>
            <p className="leading-relaxed text-muted-foreground">
              Les commandes sont traitées dans un délai de 1 à 2 jours ouvrables. Vous recevrez un e-mail de
              confirmation contenant un numéro de suivi dès l&apos;expédition de votre commande.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Droits de douane et taxes d&apos;importation</h2>
            <p className="leading-relaxed text-muted-foreground">
              Pour les livraisons au sein de l&apos;Union européenne, aucun droit de douane ni taxe
              d&apos;importation supplémentaire ne s&apos;applique. Pour les livraisons hors UE (notamment au
              Royaume-Uni ou aux États-Unis), les droits de douane et taxes éventuels sont à la charge du client et
              relèvent de la réglementation du pays de destination.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Commande non reçue</h2>
            <p className="leading-relaxed text-muted-foreground">
              Si vous n&apos;avez pas reçu votre commande dans le délai indiqué, veuillez nous contacter à{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>
              . Nous ferons le nécessaire pour résoudre la situation rapidement.
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
