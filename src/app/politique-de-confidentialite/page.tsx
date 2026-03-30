import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Anissa Hafidi · Anissheart",
  description: "Politique de confidentialité et protection des données personnelles — GalerieAni.",
};

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="border-t border-white/10 pt-10">
    <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-5">{label}</p>
    <div className="flex flex-col gap-3 text-sm text-[#f5f0e8]/65 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-16 min-h-screen">

      {/* ── HEADER ── */}
      <section className="py-24 px-6 text-center border-b border-white/5">
        <p className="text-[0.65rem] tracking-[0.5em] uppercase text-black mb-4">Données personnelles</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.1em] mb-3">Politique de Confidentialité</h1>
        <div className="divider-gold" />
        <p className="text-xs tracking-[0.3em] uppercase text-[#f5f0e8]/30">GalerieAni · Anissa Hafidi</p>
      </section>

      {/* ── CONTENU ── */}
      <section className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-10">

        <Section label="Données personnelles">
          <p>
            La Galerie attache une grande importance à la protection de la vie privée et des données personnelles.
            Conformément au règlement européen 2016/679 du 26 avril 2016, à la loi « informatique et libertés »
            du 6 janvier 1978 modifiée par l&apos;ordonnance n°2018-1125 du 12 décembre 2018 et au décret du
            1er août 2018, la Galerie prend des engagements forts à l&apos;égard des personnes concernées.
          </p>
        </Section>

        <Section label="Données collectées">
          <p>La Galerie collecte les données personnelles en toute transparence et de manière explicite :</p>
          <ul className="flex flex-col gap-1 pl-4 text-[#f5f0e8]/50 text-xs">
            <li>— Les données expressément demandées sur le Site, dont notamment les données issues des formulaires de contact / avis / moyen de paiement (nom, prénom, adresse e-mail, adresse postale et numéro de téléphone)</li>
            <li>— Les données de connexion et de navigation</li>
          </ul>
        </Section>

        <Section label="Finalité des traitements">
          <p className="text-xs text-[#f5f0e8]/50 leading-relaxed">
            Chaque collecte de données est réalisée spécifiquement pour des finalités explicites et visées clairement
            sur la page du Site où les données sont collectées. Pour ce qui concerne le formulaire de prise de contact
            et la page de moyen de paiement, la finalité poursuivie est la mise en relation. La base juridique de ce
            traitement est l&apos;exécution d&apos;un contrat ou de mesures précontractuelles (article 6.1.b du
            Règlement Européen).
          </p>
          <p className="text-xs text-[#f5f0e8]/40">
            Il n&apos;existe aucune prise de décision entièrement automatisée par la Galerie sur la base de vos données personnelles.
          </p>
        </Section>

        <Section label="Destinataires des traitements">
          <p>Les destinataires des données sont :</p>
          <ul className="flex flex-col gap-1 pl-4 text-[#f5f0e8]/50 text-xs">
            <li>— Madame Anissa HAFIDI et le personnel de la Galerie</li>
            <li>— Les sous-traitants et partenaires pour l&apos;exécution du traitement concerné</li>
          </ul>
          <p className="text-xs text-[#f5f0e8]/40 leading-relaxed">
            Les transmissions de données personnelles avec les destinataires sont réalisées de manière sécurisée
            et en application d&apos;un accord entre la Galerie et chaque destinataire.
          </p>
        </Section>

        <Section label="Conservation de vos données">
          <p className="text-xs text-[#f5f0e8]/50 leading-relaxed">
            La Galerie conserve vos données personnelles auprès d&apos;un sous-traitant dont les serveurs sont
            situés en France, garantissant ainsi une protection adéquate au droit de l&apos;Union Européenne.
            Les durées de conservation sont les suivantes :
          </p>
          <ul className="flex flex-col gap-1 pl-4 text-[#f5f0e8]/50 text-xs">
            <li>— Données relatives aux prospects : 3 ans</li>
            <li>— Données clients : pendant la durée de la relation et au maximum jusqu&apos;à 5 ans après la fin de celle-ci</li>
          </ul>
        </Section>

        <Section label="Vos droits">
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="flex flex-col gap-1 pl-4 text-[#f5f0e8]/50 text-xs">
            <li>— Droit d&apos;accès à vos données personnelles</li>
            <li>— Droit de rectification si elles sont inexactes ou incomplètes</li>
            <li>— Droit de limitation (article 18 du Règlement Européen)</li>
            <li>— Droit d&apos;effacement (données inutiles, consentement retiré, traitement illicite)</li>
            <li>— Droit d&apos;opposition pour motif légitime</li>
            <li>— Droit à la portabilité de vos données</li>
            <li>— Droit de définir des directives relatives au sort de vos données après votre mort</li>
            <li>— Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p className="text-xs text-[#f5f0e8]/40 leading-relaxed">
            Pour exercer ces droits, fournissez une pièce justificative d&apos;identité et contactez :{" "}
            <a href="mailto:galerieani.pro@gmail.com"
              className="text-black hover:text-[#f5f0e8] transition-colors duration-300">
              galerieani.pro@gmail.com
            </a>.
            En cas de réclamation, vous pouvez contacter la{" "}
            <span className="text-[#f5f0e8]/60">CNIL (www.cnil.fr)</span> ou vous inscrire sur la liste
            d&apos;opposition au démarchage téléphonique sur{" "}
            <span className="text-[#f5f0e8]/60">www.bloctel.gouv.fr</span>.
          </p>
        </Section>

        <Section label="Cookies">
          <p className="text-xs text-[#f5f0e8]/50 leading-relaxed">
            Lors de vos visites sur le Site, un cookie peut s&apos;installer automatiquement sur votre navigateur.
            Le cookie est un bloc de données qui ne permet pas d&apos;identifier les utilisateurs mais sert à
            enregistrer des informations relatives à la navigation.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {[
              {
                title: "Cookies de session utilisateur",
                text: "Enregistrent les informations saisies dans les formulaires de contact et de paiement. Nécessaires au fonctionnement du site, ils ne peuvent pas être désactivés.",
              },
              {
                title: "Cookies de mesure d'audience",
                text: "Établissent des statistiques sur le nombre de visites et l'utilisation des services afin d'améliorer l'ergonomie du site. Paramétrables dans les options du navigateur.",
              },
              {
                title: "Cookies de réseaux sociaux",
                text: "Émis par les réseaux sociaux (LinkedIn, Instagram) lors de l'utilisation des boutons de partage. La Galerie limite au maximum leur présence mais ne peut contrôler leur processus de collecte.",
              },
            ].map((c) => (
              <div key={c.title} className="pl-4 border-l border-white/10">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-black mb-1">{c.title}</p>
                <p className="text-xs text-[#f5f0e8]/40 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#f5f0e8]/40 leading-relaxed mt-2">
            Les cookies analytiques ont une durée de vie de 13 mois. Vous pouvez les désactiver à tout moment
            via les paramètres de votre navigateur. Pour plus d&apos;informations :{" "}
            <span className="text-[#f5f0e8]/60">www.cnil.fr/fr/cookies-comment-mettre-mon-site-web-en-conformite</span>
          </p>
        </Section>

        <div className="border-t border-white/10 pt-8">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#f5f0e8]/30 text-center">
            Tous droits réservés · GalerieAni
          </p>
        </div>

      </section>
    </div>
  );
}
