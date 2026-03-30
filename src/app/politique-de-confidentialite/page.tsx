import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Anissa Hafidi · Anissheart",
  description: "Politique de confidentialité et protection des données personnelles du site Anissa Hafidi — Anissheart.",
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
        <p className="text-xs tracking-[0.3em] uppercase text-[#f5f0e8]/30">Anissa Hafidi · Anissheart</p>
      </section>

      {/* ── CONTENU ── */}
      <section className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-10">

        <Section label="Responsable du traitement">
          <p>
            Le responsable du traitement des données personnelles collectées sur ce site est :{" "}
            <span className="text-[#f5f0e8]/90">Anissa Hafidi</span>.
          </p>
          <p>
            Contact :{" "}
            <a href="mailto:galeriani.pro@gmail.com"
              className="text-black hover:text-[#f5f0e8] transition-colors duration-300">
              galeriani.pro@gmail.com
            </a>
          </p>
        </Section>

        <Section label="Données collectées">
          <p>
            Ce site ne collecte <span className="text-[#f5f0e8]/90">aucune donnée personnelle</span> de manière
            automatique. Aucun formulaire, aucun compte utilisateur, aucun outil de suivi analytique
            ne sont utilisés.
          </p>
          <p>
            Les seules données susceptibles d&apos;être traitées sont celles que vous transmettez
            volontairement par email (nom, adresse email, message), dans le cadre d&apos;une prise de contact.
          </p>
        </Section>

        <Section label="Finalité du traitement">
          <p>Les données transmises par email sont utilisées exclusivement pour :</p>
          <ul className="flex flex-col gap-1 pl-4 text-[#f5f0e8]/50 text-xs">
            <li>— Répondre à vos demandes de renseignements sur les œuvres</li>
            <li>— Traiter les demandes relatives au service d&apos;Art Leasing</li>
            <li>— Assurer le suivi des échanges commerciaux</li>
          </ul>
          <p className="text-xs text-[#f5f0e8]/40">
            Ces données ne sont jamais transmises à des tiers, revendues, ni utilisées à des fins commerciales.
          </p>
        </Section>

        <Section label="Cookies">
          <p>
            Ce site n&apos;utilise <span className="text-[#f5f0e8]/90">aucun cookie</span> de traçage,
            publicitaire ou analytique. Aucune donnée de navigation n&apos;est collectée ni conservée.
          </p>
        </Section>

        <Section label="Durée de conservation">
          <p className="text-xs text-[#f5f0e8]/50">
            Les échanges par email sont conservés le temps nécessaire au traitement de votre demande,
            et au maximum conformément aux obligations légales en vigueur (3 ans pour les données
            relatives à la relation commerciale).
          </p>
        </Section>

        <Section label="Vos droits (RGPD)">
          <p className="text-xs text-[#f5f0e8]/50">
            Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679),
            vous disposez des droits suivants sur vos données :
          </p>
          <ul className="flex flex-col gap-1 pl-4 text-[#f5f0e8]/50 text-xs">
            <li>— Droit d&apos;accès</li>
            <li>— Droit de rectification</li>
            <li>— Droit à l&apos;effacement (droit à l&apos;oubli)</li>
            <li>— Droit à la limitation du traitement</li>
            <li>— Droit d&apos;opposition</li>
          </ul>
          <p className="text-xs text-[#f5f0e8]/40">
            Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:galeriani.pro@gmail.com"
              className="text-black hover:text-[#f5f0e8] transition-colors duration-300">
              galeriani.pro@gmail.com
            </a>.
            En cas de litige, vous pouvez saisir la{" "}
            <span className="text-[#f5f0e8]/60">CNIL</span> (Commission Nationale de l&apos;Informatique
            et des Libertés) à l&apos;adresse{" "}
            <span className="text-[#f5f0e8]/60">www.cnil.fr</span>.
          </p>
        </Section>

        <Section label="Mise à jour">
          <p className="text-xs text-[#f5f0e8]/40">
            Cette politique de confidentialité peut être mise à jour à tout moment.
            La date de dernière modification est le{" "}
            <span className="text-[#f5f0e8]/60">30 mars 2026</span>.
          </p>
        </Section>

      </section>
    </div>
  );
}
