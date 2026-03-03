import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Mentions Légales | Versia Garden",
  description: "Mentions légales de Versia Garden conformément à la loi LCEN.",
}

export default function MentionsLegalesFR() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Mentions Légales</h1>
        <p className="text-sm text-muted-foreground mb-2">
          Conformément à la Loi pour la Confiance dans l&apos;Économie Numérique (LCEN, Loi n° 2004-575 du 21 juin
          2004).
        </p>
        <p className="text-sm text-muted-foreground mb-8">Dernière mise à jour : Mars 2026</p>

        <section className="space-y-8 text-foreground">
          <div>
            <h2 className="text-xl font-semibold mb-3">1. Éditeur du site</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Raison sociale :</span> 57.203.094 MARIA CLARA RODRIGUES
                LEITE
              </li>
              <li>
                <span className="font-medium text-foreground">Nom commercial :</span> Versia Garden
              </li>
              <li>
                <span className="font-medium text-foreground">CNPJ (équivalent SIRET brésilien) :</span>{" "}
                57.203.094/0001-13
              </li>
              <li>
                <span className="font-medium text-foreground">Siège social :</span> Avenida Girassol, 29.156-572,
                Cariacica, ES, Brésil
              </li>
              <li>
                <span className="font-medium text-foreground">Email :</span>{" "}
                <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                  info@versiagarden.com
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground">Directrice de la publication :</span> Maria Clara
                Rodrigues Leite
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">2. Hébergeur</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Raison sociale :</span> Vercel Inc.
              </li>
              <li>
                <span className="font-medium text-foreground">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789,
                États-Unis
              </li>
              <li>
                <span className="font-medium text-foreground">Site web :</span>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://vercel.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">3. Propriété intellectuelle</h2>
            <p className="leading-relaxed text-muted-foreground">
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est
              la propriété exclusive de Versia Garden ou de ses partenaires et est protégé par les lois françaises et
              internationales relatives à la propriété intellectuelle. Toute reproduction, représentation, modification,
              publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé
              utilisé, est interdite, sauf autorisation écrite préalable de Versia Garden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">4. Données personnelles</h2>
            <p className="leading-relaxed text-muted-foreground">
              Pour toute information relative à la collecte et au traitement de vos données personnelles, veuillez
              consulter notre{" "}
              <Link href="/fr/privacy-policy" className="text-primary hover:underline">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
            <p className="leading-relaxed text-muted-foreground">
              Ce site utilise des cookies afin d&apos;améliorer votre expérience de navigation. Pour plus
              d&apos;informations, consultez notre{" "}
              <Link href="/fr/privacy-policy" className="text-primary hover:underline">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">6. Médiation</h2>
            <p className="leading-relaxed text-muted-foreground">
              Conformément à l&apos;article L.612-1 du Code de la consommation, le consommateur a le droit de recourir
              gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui
              l&apos;oppose au professionnel.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">7. Droit applicable</h2>
            <p className="leading-relaxed text-muted-foreground">
              Les présentes mentions légales sont soumises au droit brésilien, sous réserve des dispositions
              impératives du droit français applicables aux consommateurs résidant en France.
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
